// AIOverview.jsx
import React, { useState } from 'react';

export default function AIOverview({ query, answer, steps, loading }) {
  const [expanded, setExpanded] = useState(false);
  const [lang, setLang] = useState('En');
  const [copied, setCopied] = useState(false);

  // Protect against undefined steps
  const safeSteps = Array.isArray(steps) ? steps : [];
  const displaySteps = expanded ? safeSteps : safeSteps.slice(0, 3);

  // Copy-to-clipboard handler
  const handleCopy = () => {
    if (answer) {
      navigator.clipboard.writeText(answer);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  // Loading spinner (uses CSS class `.ai-spinner` defined in App.css)
  const Spinner = () => (
    <div className="ai-loading">
      <div className="ai-spinner" aria-hidden="true" />
      <span className="ai-loading-text">Loading AI summary…</span>
    </div>
  );

  return (
    <div className="ai-card">
      {/* Header */}
      <div className="ai-header">
        <div className="ai-icon">
          <img src="/guggle-ai-icon.svg" alt="AI" />
        </div>

        <div>
          <div className="ai-title">AI Overview</div>
          <div className="ai-query">{query}</div>
        </div>

        <div className="ai-actions">
          <button
            className={`ai-lang${lang === 'En' ? ' active' : ''}`}
            onClick={() => setLang('En')}
          >
            En
          </button>
          <button
            className={`ai-lang${lang === 'Ta' ? ' active' : ''}`}
            onClick={() => setLang('Ta')}
          >
            Ta
          </button>

          <button className="ai-btn">
            <img src="/icons/speaker.svg" alt="listen" />
          </button>
        </div>
      </div>

      {/* Loading spinner */}
      {loading && <Spinner />}

      {/* Summary */}
      <p className="ai-summary">{answer || 'No summary available.'}</p>

      {/* Steps */}
      {safeSteps.length > 0 && (
        <>
          <div className="ai-section-title">Steps</div>

          <div
            className={`ai-steps-container ${expanded ? 'expanded' : 'collapsed'}`}
          >
            <ol className="ai-steps">
              {displaySteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          {safeSteps.length > 3 && (
            <button
              className="ai-expand"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </>
      )}

      {/* Footer */}
      <div className="ai-footer">
        <span>AI generated • Experimental</span>

        <div className="ai-footer-actions">
          <button
            className="ai-btn"
            onClick={handleCopy}
            title="Copy summary"
            aria-label="Copy AI summary"
          >
            <img src="/icons/copy.svg" alt="copy" />
            <span style={{ marginLeft: 6 }} aria-hidden>
              {copied ? 'Copied!' : ''}
            </span>
            <span role="status" aria-live="polite" className="sr-only">
              {copied ? 'Copied' : ''}
            </span>
          </button>
          <button className="ai-btn">
            <img src="/icons/thumb-up.svg" alt="up" />
          </button>
          <button className="ai-btn">
            <img src="/icons/thumb-down.svg" alt="down" />
          </button>
        </div>
      </div>
    </div>
  );
}
