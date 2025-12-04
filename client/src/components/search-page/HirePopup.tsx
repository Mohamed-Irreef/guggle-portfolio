import React, { useState } from 'react';

const HirePopup = ({ recipientEmail = 'mdirreef@gmail.com', onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null); // 'success' | 'error' | 'info'

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setSending(true);
    setStatusMessage(null);

    const payload = {
      name,
      email,
      company,
      position,
      package: budget,
      message,
      sentAt: new Date().toISOString(),
    };

    // Attempt to notify backend first (if API exists). Only fall back to mailto for network failures.
    try {
      const resp = await fetch('/api/hire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, to: recipientEmail }),
      });

      // try to parse json response for helpful error messages
      let data = null;
      try {
        data = await resp.json();
      } catch {
        // ignore parse errors
        void 0;
      }

      if (resp.ok) {
        // store locally for record
        const prev = JSON.parse(localStorage.getItem('hireRequests') || '[]');
        prev.unshift({ ...payload, to: recipientEmail });
        localStorage.setItem('hireRequests', JSON.stringify(prev));
        setStatusMessage('Request sent. Thank you — we will be in touch.');
        setStatusType('success');
        // show a transient global toast so feedback remains after modal closes
        showDomToast('Request sent — thank you. I will be in touch shortly.');
        // close modal after a short delay so toast is visible
        setTimeout(() => {
          setSending(false);
          if (onClose) onClose();
        }, 1800);
        return;
      }

      // If server responded with an error, show it and do NOT open mail client
      const serverMsg =
        data && (data.error || data.message)
          ? typeof data.error === 'string'
            ? data.error
            : JSON.stringify(data.error || data.message)
          : `Server returned ${resp.status}`;
      setStatusMessage(`Server error: ${serverMsg}`);
      setStatusType('error');
      setSending(false);
      return;
    } catch {
      // Network error / fetch threw: use mailto fallback so user can still contact
      const subject = encodeURIComponent(
        `Hiring request: ${position || 'General'}`
      );
      const body = encodeURIComponent(
        `Company: ${company}\nName: ${name}\nEmail: ${email}\nPosition: ${position}\nPackage: ${budget}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

      // save to local storage as backup
      const prev = JSON.parse(localStorage.getItem('hireRequests') || '[]');
      prev.unshift({ ...payload, to: recipientEmail, fallback: true });
      localStorage.setItem('hireRequests', JSON.stringify(prev));
      setStatusMessage(
        "Opened mail client as fallback. If that didn't work, please contact directly."
      );
      setStatusType('info');
      setSending(false);
      setTimeout(() => { if (onClose) onClose(); }, 1200);
    }
  };

  // small DOM-based toast so we can show it outside the modal even after unmount
  const showDomToast = (text) => {
    try {
      const wrap = document.createElement('div');
      wrap.className = 'toast toast-success';
      wrap.setAttribute('role', 'status');
      wrap.innerHTML = `
        <div class="toast-inner">
          <div class="toast-icon"><div class="toast-icon-symbol on">✓</div></div>
          <div class="toast-body"><div class="toast-message">${text}</div></div>
          <button class="toast-dismiss" aria-label="Dismiss">×</button>
          <div class="toast-progress"></div>
        </div>`;
      document.body.appendChild(wrap);
      const remove = () => {
        if (wrap && wrap.parentNode) wrap.parentNode.removeChild(wrap);
      };
      // dismiss on click
      wrap
        .querySelector('.toast-dismiss')
        ?.addEventListener('click', () => remove());
      // auto remove after 3200ms with exit animation
      setTimeout(() => {
        wrap.classList.add('toast-exit');
        setTimeout(remove, 260);
      }, 3200);
    } catch {
      // noop
      void 0;
    }
  };

  return (
    <div
      className="hire-modal-overlay"
      onClick={(e) => {
        if (e.target.classList.contains('hire-modal-overlay'))
          if (onClose) onClose();
      }}
    >
      <div className="hire-modal-card" role="dialog" aria-modal="true">
        <header className="hire-modal-header">
          <div className="hire-avatar">MI</div>
          <div>
            <h3>Hire Mohamed Irreef</h3>
            <p className="hire-sub">
              Send a hiring request — notifications go to{' '}
              <strong>{recipientEmail}</strong>
            </p>
          </div>
          <button
            className="hire-close"
            onClick={() => { if (onClose) onClose(); }}
            aria-label="Close"
          >
            ×
          </button>
        </header>

        <form className="hire-form" onSubmit={handleSubmit}>
          <div className="hire-row">
            <div className="field">
              <input
                id="hire-name"
                className="hire-form-field"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="hire-name">Your name</label>
            </div>

            <div className="field">
              <input
                id="hire-email"
                className="hire-form-field"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="hire-email">Your email</label>
              <div className="hire-help">
                We'll only use this to reply to you.
              </div>
            </div>
          </div>

          <div className="field">
            <input
              id="hire-company"
              className="hire-form-field"
              placeholder=" "
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label htmlFor="hire-company">Company (optional)</label>
          </div>

          <div className="hire-row">
            <div className="field">
              <input
                id="hire-position"
                className="hire-form-field"
                placeholder=" "
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
              <label htmlFor="hire-position">Position / Role</label>
            </div>

            <div className="field">
              <input
                id="hire-package"
                className="hire-form-field"
                placeholder=" "
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
              <label htmlFor="hire-package">Package (optional)</label>
            </div>
          </div>

          <div className="field">
            <textarea
              id="hire-message"
              className="hire-message"
              placeholder=" "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="hire-message">Message</label>
            <div className="hire-help">
              Tip: include timeline and preferred start date.
            </div>
          </div>

          <div className="hire-actions">
            <button
              type="button"
              className="hire-cancel"
              onClick={() => { if (onClose) onClose(); }}
              disabled={sending}
            >
              Cancel
            </button>
            <button type="submit" className="hire-btn" disabled={sending}>
              {sending ? 'Sending...' : 'Send Request'}
            </button>
          </div>
        </form>

        {statusMessage &&
          (statusType === 'error' ? (
            <div className="hire-error">{statusMessage}</div>
          ) : statusType === 'success' ? (
            <div className="hire-success">{statusMessage}</div>
          ) : (
            <div className="hire-status">{statusMessage}</div>
          ))}
      </div>
    </div>
  );
};

export default HirePopup;
