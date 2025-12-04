import React, { useState, useEffect, useRef } from 'react';
// Backend URL: set `VITE_BACKEND_URL` in client/.env to override default
const BACKEND_URL =
  (import.meta.env && import.meta.env.VITE_BACKEND_URL) ||
  'http://localhost:4000';
import AIOverview from './AIOverview';

export default function GeminiAI() {
  const [prompt, setPrompt] = useState(() => {
    try {
      return localStorage.getItem('searched') || 'About Mohamed Irreef';
    } catch {
      return 'About Mohamed Irreef';
    }
  });

  const [data, setData] = useState({
    answer: '',
    steps: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const lastFetched = useRef(null);
  const lastSeenPrompt = useRef(prompt);

  // -------------------------
  // FIXED GEMINI FETCH
  // -------------------------
  async function fetchAI(forPrompt) {
    setError(null);
    setLoading(true);

    try {
      // POST to backend proxy which holds the API key server-side.
      const url = `${BACKEND_URL.replace(/\/$/, '')}/api/gemini`;
      const bodyPrompt = forPrompt || prompt;
      const body = {
        prompt: bodyPrompt,
        temperature: 0.7,
        // maxOutputTokens: 500 // optional; server may drop if unsupported
      };

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Backend error ${res.status}: ${txt}`);
      }

      const json = await res.json();

      // Expect backend to return { answer: string, steps?: string[] }
      if (!json || !json.answer)
        throw new Error('Malformed response from /api/gemini');

      const answer = json.answer;
      const steps = Array.isArray(json.steps) ? json.steps : [];

      setData({
        answer,
        steps: steps.length ? steps : ['Step generation unavailable.'],
      });
      setError(null);
    } catch (err) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  }

  // ----------------------------------
  // Watch localStorage for "searched"
  // ----------------------------------
  useEffect(() => {
    let mounted = true;

    const readAndMaybeFetch = (s) => {
      if (!s) return;

      setPrompt(s);

      try {
        const enabled = JSON.parse(localStorage.getItem('customSearch'));
        if (enabled && lastFetched.current !== s) {
          lastFetched.current = s;

          setTimeout(() => {
            if (mounted) fetchAI(s);
          }, 10);
        }
      } catch {
        /* ignore */
      }
    };

    try {
      readAndMaybeFetch(localStorage.getItem('searched'));
    } catch {
      /* ignore */
    }

    const onFocus = () => {
      try {
        readAndMaybeFetch(localStorage.getItem('searched'));
      } catch {
        /* ignore */
      }
    };

    window.addEventListener('focus', onFocus);

    const poll = setInterval(() => {
      try {
        const s = localStorage.getItem('searched');
        if (s && s !== lastSeenPrompt.current) {
          lastSeenPrompt.current = s;
          readAndMaybeFetch(s);
        }
      } catch {
        /* ignore */
      }
    }, 700);

    return () => {
      mounted = false;
      window.removeEventListener('focus', onFocus);
      clearInterval(poll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -------------------------
  // Manual run trigger
  // -------------------------
  const handleRun = () => {
    const cur = localStorage.getItem('searched') || prompt;
    lastFetched.current = null;
    fetchAI(cur);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <button
          onClick={handleRun}
          style={{
            padding: '6px 10px',
            background: '#111827',
            color: 'white',
            border: 'none',
            borderRadius: 6,
          }}
        >
          Run AI
        </button>

        <div style={{ color: '#374151', fontSize: 13 }}>
          Prompt: <strong style={{ color: '#111827' }}>{prompt}</strong>
        </div>
      </div>

      {loading && (
        <div style={{ color: '#2563eb', marginBottom: 8 }}>
          Loading AI summary…
        </div>
      )}

      {error && (
        <div style={{ color: 'crimson', marginBottom: 8 }}>Error: {error}</div>
      )}

      <AIOverview
        query={prompt}
        answer={data.answer}
        steps={data.steps}
        loading={loading}
      />
    </div>
  );
}
