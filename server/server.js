require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 4000;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

app.use(limiter);

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https://generativelanguage.googleapis.com"],
    },
  },
}));

// Allow the frontend dev server
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Health route for quick checks
app.get('/', (req, res) => {
  res.json({ ok: true, service: 'gemini-proxy', timestamp: Date.now() });
});

const GEMINI_KEY = process.env.GEMINI_KEY;
if (!GEMINI_KEY) {
  console.warn('Warning: GEMINI_KEY not set in environment. Set GEMINI_KEY in .env');
}

function extractTextFromResponse(json) {
  if (!json) return null;
  // common shapes
  try {
    const cand = json.candidates && json.candidates[0];
    if (cand) {
      if (cand.content && Array.isArray(cand.content) && cand.content[0] && typeof cand.content[0].text === 'string') return cand.content[0].text;
      if (cand.content && cand.content[0] && cand.content[0].parts && cand.content[0].parts[0] && cand.content[0].parts[0].text) return cand.content[0].parts[0].text;
      if (cand.output_text) return cand.output_text;
    }
    if (json.outputs && json.outputs[0] && json.outputs[0].content && json.outputs[0].content[0] && json.outputs[0].content[0].text) return json.outputs[0].content[0].text;
    if (json.result && json.result.output_text) return json.result.output_text;
  } catch (e) {
    // ignore
  }
  // fallback: try stringified text
  if (typeof json === 'string') return json;
  return null;
}

function extractStepsFromText(text) {
  if (!text || typeof text !== 'string') return [];
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const steps = lines.filter(l => /^(\d+[).\s]|[-*]\s)/.test(l)).map(l => l.replace(/^(\d+[).\s]|[-*]\s)*/, '').trim());
  // if none detected, return empty
  return steps;
}

function buildGenerateUrl(model) {
  // model may come as 'models/NAME' or 'projects/.../models/NAME' or just 'NAME'
  if (!model) model = 'gemini-2.5-pro';
  const base = 'https://generativelanguage.googleapis.com/v1beta/';
  if (model.startsWith('models/') || model.startsWith('projects/') || model.includes('/')) {
    return `${base}${model}:generateContent?key=${GEMINI_KEY}`;
  }
  return `${base}models/${model}:generateContent?key=${GEMINI_KEY}`;
}

// escape text to safe HTML
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
app.post('/api/gemini', async (req, res) => {
  const { prompt, temperature } = req.body || {};
  if (!prompt || typeof prompt !== 'string') return res.status(400).json({ error: 'prompt is required' });

  const modelName = 'models/gemini-2.5-pro';
  const url = buildGenerateUrl(modelName);

  // prepare body
  // Use the minimal payload expected by most Gemini models: only `contents`.
  // Some models accept additional fields (parameters, temperature, maxOutputTokens),
  // but they are model-specific and can cause 400 errors if not supported.
  const body = {
    contents: [ { role: 'user', parts: [{ text: prompt }] } ]
  };
  // Note: do NOT send maxOutputTokens by default to avoid unknown-field errors; frontend may include if desired

  try {
    const r = await axios.post(url, body, { headers: { 'Content-Type': 'application/json' } });
    const json = r.data;

    const answer = extractTextFromResponse(json) || '';
    const steps = extractStepsFromText(answer);

    return res.json({ answer, steps, raw: json });
  } catch (err) {
    // If the model endpoint returned 404 (model not found), try listing available models
    console.error('Gemini API error (first attempt):', err && err.response ? { status: err.response.status, data: err.response.data } : err.message);
    const status = err && err.response && err.response.status ? err.response.status : 500;

    if (status === 404) {
      try {
        const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_KEY}`;
        const lm = await axios.get(listUrl, { headers: { 'Content-Type': 'application/json' } });
        const models = (lm.data && lm.data.models) || [];

        // prefer gemini-2.5-* models, then any gemini
        let candidate = models.find(m => /gemini-2\.5/i.test(m.name));
        if (!candidate) candidate = models.find(m => /gemini/i.test(m.name));

        if (candidate && candidate.name) {
          const altName = candidate.name;
            const altUrl = buildGenerateUrl(altName);
            const r2 = await axios.post(altUrl, body, { headers: { 'Content-Type': 'application/json' } });
          const json2 = r2.data;
          const answer2 = extractTextFromResponse(json2) || '';
          const steps2 = extractStepsFromText(answer2);
          return res.json({ answer: answer2, steps: steps2, raw: json2, model: altName });
        }
      } catch (err2) {
          // Retry failed
      }
    }

    const bodyErr = err && err.response && err.response.data ? err.response.data : { message: err.message };
    return res.status(status).json({ error: bodyErr });
  }
});

// Endpoint to accept hiring requests and send an email to the owner
app.post('/api/hire', async (req, res) => {
  const { name, email, position, package: pkg, message, company, sentAt } = req.body || {};

  // basic validation
  if (!name && !email && !message) return res.status(400).json({ error: 'At least one of name, email or message is required' });

  // Read SMTP configuration from environment
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
  const HIRE_TO_EMAIL = process.env.HIRE_TO_EMAIL || 'mdirreef@gmail.com';

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return res.status(503).json({ error: 'Email service not configured on server' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT || 587,
      secure: !!SMTP_SECURE,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    // Compose message
    const subject = `Hiring request from ${name || 'Unknown'}${position ? ' — ' + position : ''}`;
    const textParts = [];
    if (company) textParts.push(`Company: ${company}`);
    if (name) textParts.push(`Name: ${name}`);
    if (email) textParts.push(`Email: ${email}`);
    if (position) textParts.push(`Position: ${position}`);
    if (pkg) textParts.push(`Package: ${pkg}`);
    if (sentAt) textParts.push(`Sent: ${sentAt}`);
    textParts.push('\nMessage:\n' + (message || ''));
    const textBody = textParts.join('\n');

    // nicer HTML email for Gmail / modern clients (inline styles)
    const htmlBody = `
      <div style="font-family: Arial, Helvetica, sans-serif; color:#202124;">
        <div style="background:linear-gradient(90deg,#f5f7ff,#ffffff); padding:16px; border-radius:8px;">
          <h2 style="margin:0;color:#1a73e8;">New Hiring Request</h2>
          <p style="margin:6px 0 0;color:#5f6368;">Received via your portfolio contact form</p>
        </div>
        <div style="padding:16px;background:#fff;border-radius:8px;margin-top:12px;border:1px solid #eef2f6;">
          <table style="width:100%;font-size:14px;border-collapse:collapse;">
            ${company ? `<tr><td style="padding:8px;vertical-align:top;font-weight:700;width:120px">Company</td><td style="padding:8px">${escapeHtml(company)}</td></tr>` : ''}
            <tr><td style="padding:8px;vertical-align:top;font-weight:700;width:120px">Name</td><td style="padding:8px">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px;vertical-align:top;font-weight:700">Email</td><td style="padding:8px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px;vertical-align:top;font-weight:700">Position</td><td style="padding:8px">${escapeHtml(position)}</td></tr>
            <tr><td style="padding:8px;vertical-align:top;font-weight:700">Package</td><td style="padding:8px">${escapeHtml(pkg)}</td></tr>
            <tr><td style="padding:8px;vertical-align:top;font-weight:700">Sent</td><td style="padding:8px">${escapeHtml(sentAt)}</td></tr>
          </table>
          <div style="margin-top:12px;padding:12px;background:#f8f9fb;border-radius:6px;border-left:4px solid #e0e7ff;">
            <strong style="display:block;margin-bottom:6px;color:#333">Message</strong>
            <div style="white-space:pre-wrap;color:#333;">${escapeHtml(message)}</div>
          </div>
          <div style="margin-top:16px;text-align:right;">
            <a href="mailto:${escapeHtml(HIRE_TO_EMAIL)}" style="display:inline-block;background:#1a73e8;color:#fff;padding:10px 14px;border-radius:6px;text-decoration:none;font-weight:600">Reply</a>
          </div>
        </div>
        <div style="margin-top:12px;color:#6b7280;font-size:12px">This message was generated by your portfolio site.</div>
      </div>
    `;

    const mailOptions = {
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: HIRE_TO_EMAIL,
      subject,
      text: textBody,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);
    return res.json({ ok: true, message: 'Email sent' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send email', detail: err && err.message });
  }
});

app.listen(PORT, () => {
  // Server started
});
