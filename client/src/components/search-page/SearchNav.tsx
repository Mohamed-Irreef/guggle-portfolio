import React, { useEffect, useState, useRef } from 'react';
// react-router-dom Link not required in this component (external anchors used)
import grid from '../../assets/grid.png';
import myprofile from '../../assets/myprofile.jpg';
import HirePopup from './HirePopup';

import g from '../../assets/g-logo.webp';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import gmail from '../../assets/gmail.png';
import youtube from '../../assets/youtube.png';
import map from '../../assets/map.png';

const SearchNav = ({
  gridOpen,
  setGridOpen,
  close,
  customSearchEnable,
  setCustomSearchEnable,
}) => {
  const [enableCustomSearch, setEnableCustomSearch] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('customSearch'));
      return typeof stored === 'boolean' ? stored : customSearchEnable;
    } catch {
      return customSearchEnable;
    }
  });

  useEffect(() => {
    // keep parent in sync when component mounts
    if (typeof enableCustomSearch === 'boolean') {
      setCustomSearchEnable(enableCustomSearch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function enableCustomSearchMode() {
    const next = !enableCustomSearch;
    // If enabling, check if the user is currently blocked due to exceeding daily limit
    const meta = getCustomSearchMeta();
    if (next && meta.blockedUntil && Date.now() < meta.blockedUntil) {
      const mins = Math.ceil((meta.blockedUntil - Date.now()) / 60000);
      showToast(
        `Custom Search disabled: daily limit reached. Try again in ${mins} minutes.`
      );
      return;
    }
    // If enabling, confirm first
    if (next) {
      const enable = confirm('Would you like to enable Custom Search mode?');
      if (!enable) {
        return; // user cancelled, do nothing
      }
    }
    try {
      localStorage.setItem('customSearch', JSON.stringify(next));
    } catch {
      void 0;
    }
    setEnableCustomSearch(next);
    setCustomSearchEnable(next);
    // show toast for feedback
    showToast(next ? 'Custom Search enabled' : 'Custom Search disabled');
  }

  // Custom search usage tracking helpers stored in localStorage under `customSearchMeta`
  function getCustomSearchMeta() {
    try {
      const raw = localStorage.getItem('customSearchMeta');
      if (!raw) return { count: 0, blockedUntil: 0 };
      const meta = JSON.parse(raw);
      if (meta.blockedUntil && Date.now() >= meta.blockedUntil) {
        // reset after block period expired
        const cleared = { count: 0, blockedUntil: 0 };
        localStorage.setItem('customSearchMeta', JSON.stringify(cleared));
        try {
          localStorage.setItem('request', '0');
        } catch {
          void 0;
        }
        return cleared;
      }
      return { count: meta.count || 0, blockedUntil: meta.blockedUntil || 0 };
    } catch {
      return { count: 0, blockedUntil: 0 };
    }
  }

  // toast state
  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef(null);
  const toastExitTimer = useRef(null);
  const [toastExiting, setToastExiting] = useState(false);

  function beginExit() {
    // start exit animation, then unmount after animation finishes
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
      toastTimer.current = null;
    }
    if (toastExitTimer.current) {
      clearTimeout(toastExitTimer.current);
      toastExitTimer.current = null;
    }
    setToastExiting(true);
    // match this duration with CSS exit animation (260ms)
    toastExitTimer.current = setTimeout(() => {
      setToastVisible(false);
      setToastExiting(false);
      toastExitTimer.current = null;
    }, 260);
  }

  function showToast(msg, timeout = 2500) {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
      toastTimer.current = null;
    }
    if (toastExitTimer.current) {
      clearTimeout(toastExitTimer.current);
      toastExitTimer.current = null;
    }
    setToastMsg(msg);
    setToastExiting(false);
    setToastVisible(true);
    toastTimer.current = setTimeout(() => beginExit(), timeout);
  }

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
      if (toastExitTimer.current) {
        clearTimeout(toastExitTimer.current);
      }
    };
  }, []);

  // close profile dropdown on outside click or Escape
  useEffect(() => {
    function onDocClick(e) {
      if (!profileRef.current) return;
      if (!profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }

    function onEsc(e) {
      if (e.key === 'Escape') setProfileOpen(false);
    }

    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);
  // profile dropdown / hire popup state
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const [showHirePopup, setShowHirePopup] = useState(false);
  return (
    <div
      className="search-nav"
      onClick={() => {
        close.closeAll();
      }}
    >
      {toastVisible && (
        <div
          className={`toast ${toastExiting ? 'toast-exit' : ''}`}
          role="status"
          aria-live="polite"
        >
          <div className="toast-inner">
            <div className="toast-icon">
              <span
                className={`toast-icon-symbol ${enableCustomSearch ? 'on' : 'off'}`}
              >
                {enableCustomSearch ? '✓' : '✕'}
              </span>
            </div>
            <div className="toast-body">
              <div className="toast-message">{toastMsg}</div>
            </div>
            <button
              className="toast-dismiss"
              onClick={() => {
                beginExit();
              }}
            >
              Dismiss
            </button>
          </div>
          <div className="toast-progress" aria-hidden="true" />
        </div>
      )}

      <div className="search-nav-top">
        <i className="ri-gallery-view-2"></i>
      </div>
      <div className="search-nav-bottom">
        {/* Custom Search Enable Option - accessible toggle */}
        <label
          className="custom-search-toggle"
          aria-label="Enable custom search"
        >
          <input
            type="checkbox"
            role="switch"
            aria-checked={enableCustomSearch}
            checked={enableCustomSearch}
            onChange={enableCustomSearchMode}
          />
          <span className="custom-search-slider" />
          <span className="custom-search-label">Custom Search</span>
        </label>
        <a href="mailto:mdirreef@gmail.com" className="email-link">
          Email
        </a>
        <a
          href="https://github.com/Mohamed-Irreef"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub
        </a>
        <img
          src={grid}
          alt="grid"
          className="grid"
          onClick={(e) => {
            e.stopPropagation();
            setGridOpen((prev) => !prev);
          }}
        />

        <div
          className="profile-wrapper"
          ref={profileRef}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="profile-btn"
            onClick={() => setProfileOpen((p) => !p)}
            aria-haspopup="true"
            aria-expanded={profileOpen}
          >
            <img src={myprofile} alt="profile" className="myprofile" />
          </button>

          {profileOpen && (
            <div className="profile-dropdown" role="menu">
              <div className="resume-actions">
                <button
                  className="resume-btn"
                  onClick={() => {
                    // open PDF in a new tab (browser PDF viewer)
                    // use exact filename provided
                    const path = encodeURI('/Mohamed_Irreef_Resume .pdf');
                    window.open(path, '_blank');
                    setProfileOpen(false);
                  }}
                  aria-label="View resume in PDF"
                >
                  View Resume
                </button>
                <a
                  className="resume-download"
                  href={encodeURI('/Mohamed_Irreef_Resume .pdf')}
                  download={'Mohamed_Irreef_Resume .pdf'}
                  onClick={() => setProfileOpen(false)}
                  aria-label="Download resume as PDF"
                >
                  Download
                </a>
              </div>

              <div className="profile-separator" aria-hidden="true" />

              <button
                className="profile-item hire-dropdown-cta"
                onClick={() => {
                  setShowHirePopup(true);
                  setProfileOpen(false);
                }}
                role="menuitem"
              >
                Hire Me
              </button>
            </div>
          )}
        </div>

        {gridOpen && (
          <>
            <div className="grid-open">
              <div className="grid-menus">
                <div className="grid-row1-menus">
                  <a
                    href="https://www.linkedin.com/in/mohamed-irreef"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid-icon-box grid-linkedin"
                    aria-label="LinkedIn"
                  >
                    <img src={linkedin} alt="LinkedIn" className="grid-icon" />
                    <span className="grid-icon-name">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Mohamed-Irreef"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid-icon-box grid-github"
                    aria-label="GitHub"
                  >
                    <img src={github} alt="GitHub" className="grid-icon" />
                    <span className="grid-icon-name">GitHub</span>
                  </a>
                  <a
                    href="/"
                    target="_self"
                    className="grid-icon-box grid-g"
                    aria-label="Home"
                  >
                    <img src={g} alt="Home" className="grid-icon" />
                    <span className="grid-icon-name">Home</span>
                  </a>
                </div>
                <div className="grid-row2-menus">
                  <a
                    href="https://www.youtube.com/@EduNexEducation-q6v9g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid-icon-box grid-youtube"
                    aria-label="YouTube"
                  >
                    <img src={youtube} alt="Youtube" className="ytube-icon" />
                    <span className="grid-icon-name">Youtube</span>
                  </a>
                  <a
                    href="mailto:mdirreef@gmail.com"
                    className="grid-icon-box grid-gmail"
                    aria-label="Email"
                  >
                    <img src={gmail} alt="Gmail" className="gmail-icon" />
                    <span className="grid-icon-name">Gmail</span>
                  </a>
                  <a
                    href="https://www.Guggle.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid-icon-box grid-map"
                    aria-label="Map"
                  >
                    <img src={map} alt="Map" className="map-icon" />
                    <span className="grid-icon-name">Map</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {showHirePopup && (
        <HirePopup
          recipientEmail={'mdirreef@gmail.com'}
          onClose={() => setShowHirePopup(false)}
        />
      )}
    </div>
  );
};

// close the profile dropdown when clicking outside or pressing Escape
// (this is implemented within the component using a ref and effect)

export default SearchNav;
