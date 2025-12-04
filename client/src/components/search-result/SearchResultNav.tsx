import React, { useEffect, useState, useRef } from 'react';
import guggleLogo from '../../assets/guggle.png';
import { Link, useNavigate } from 'react-router-dom';
import grid from '../../assets/grid.png';
import myprofile from '../../assets/myprofile.jpg';
import HirePopup from '../search-page/HirePopup';

import g from '/g.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import gmail from '../../assets/gmail.png';
import youtube from '../../assets/youtube.png';
import map from '../../assets/map.png';

const SearchResultNav = ({
  gridOpen,
  setGridOpen,
  page,
  searched,
  setSearched,
  tabChosen,
  setTabChosen,
  // optional props from App to keep global state in sync if available
  customSearchEnable: parentCustomSearchEnable,
  setCustomSearchEnable: parentSetCustomSearchEnable,
}) => {
  const tabs = React.useMemo(
    () => ['all', 'projects', 'images', 'videos', 'news'],
    []
  );

  const [typed, setTyped] = useState(() => {
    try {
      const stored = localStorage.getItem('searched');
      const storedValue = stored ? JSON.parse(stored) : '';
      return page || searched || storedValue || '';
    } catch {
      return page || searched || '';
    }
  });
  const [historyOpen, setHistoryOpen] = useState(false);
  const history = [
    { id: 1, hist: 'About Mohamed Irreef', path: 'about' },
    { id: 2, hist: 'Education', path: 'education' },
    { id: 3, hist: 'Skills', path: 'skills' },
    { id: 4, hist: 'Projects', path: 'projects' },
    { id: 5, hist: 'Experiences', path: 'experiences' },
    { id: 6, hist: 'Awards', path: 'awards' },
    { id: 7, hist: 'Contact', path: 'contact' },
    { id: 8, hist: 'Hire Mohamed Irreef', path: 'hire' },
  ];
  const [historyList, setHistoryList] = useState(history);
  const [showHirePopup, setShowHirePopup] = useState(false);
  const hireRecipient = 'mdirreef@gmail.com';
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  // local toggle state for customSearch (keeps in sync with localStorage)
  const [enableCustomSearch, setEnableCustomSearch] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('customSearch'));
      return typeof stored === 'boolean' ? stored : !!parentCustomSearchEnable;
    } catch {
      return !!parentCustomSearchEnable;
    }
  });

  useEffect(() => {
    // keep parent in sync when component mounts if parent setter provided
    if (
      typeof enableCustomSearch === 'boolean' &&
      typeof parentSetCustomSearchEnable === 'function'
    ) {
      parentSetCustomSearchEnable(enableCustomSearch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleCustomSearchMode() {
    const next = !enableCustomSearch;
    // If enabling, check block
    const meta = getCustomSearchMeta();
    if (next && meta.blockedUntil && Date.now() < meta.blockedUntil) {
      const mins = Math.ceil((meta.blockedUntil - Date.now()) / 60000);
      showToast(
        `Custom Search disabled: daily limit reached. Try again in ${mins} minutes.`
      );
      return;
    }
    if (next) {
      const ok = confirm('Would you like to enable Custom Search mode?');
      if (!ok) return;
    }
    try {
      localStorage.setItem('customSearch', JSON.stringify(next));
    } catch {
      void 0;
    }
    setEnableCustomSearch(next);
    if (typeof parentSetCustomSearchEnable === 'function') {
      parentSetCustomSearchEnable(next);
    }
    // show toast feedback
    showToast(next ? 'Custom Search enabled' : 'Custom Search disabled');
  }

  // Custom search usage tracking helpers
  function getCustomSearchMeta() {
    try {
      const raw = localStorage.getItem('customSearchMeta');
      if (!raw) return { count: 0, blockedUntil: 0 };
      const meta = JSON.parse(raw);
      if (meta.blockedUntil && Date.now() >= meta.blockedUntil) {
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

  function incrementCustomSearchCount() {
    const meta = getCustomSearchMeta();
    meta.count = (meta.count || 0) + 1;
    if (meta.count > 30) {
      meta.blockedUntil = Date.now() + 24 * 60 * 60 * 1000;
      meta.count = 30;
      localStorage.setItem('customSearchMeta', JSON.stringify(meta));
      try {
        localStorage.setItem('request', String(meta.count));
      } catch {
        void 0;
      }
      return { blocked: true, meta };
    }
    localStorage.setItem('customSearchMeta', JSON.stringify(meta));
    try {
      localStorage.setItem('request', String(meta.count));
    } catch {
      void 0;
    }
    return { blocked: false, meta };
  }

  // toast state + helpers (mirror SearchNav behavior)
  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastExiting, setToastExiting] = useState(false);
  const toastTimer = React.useRef(null);
  const toastExitTimer = React.useRef(null);

  function beginExit() {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
      toastTimer.current = null;
    }
    if (toastExitTimer.current) {
      clearTimeout(toastExitTimer.current);
      toastExitTimer.current = null;
    }
    setToastExiting(true);
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

  React.useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
      if (toastExitTimer.current) clearTimeout(toastExitTimer.current);
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

  // initialize typed from localStorage on mount (do not overwrite parent)
  useEffect(() => {
    const stored = localStorage.getItem('searched');
    const storedValue = stored ? JSON.parse(stored) : '';
    if (!searched && storedValue) {
      setTyped(storedValue);
    }
    // ensure tabChosen is in sync on mount
    if (!tabs.includes(page)) {
      setTabChosen('all');
    } else {
      setTabChosen(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // when parent `searched` prop changes (e.g., navigation), update local typed
  useEffect(() => {
    // Sync local input when parent `searched` changes (e.g., navigation).
    // We intentionally only depend on `searched` to avoid overwriting
    // the user's in-progress typing when `typed` changes.
    if (searched && searched !== typed) {
      setTyped(searched);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searched]);

  function searchHandler(e) {
    e.preventDefault();
    setSearched(typed);

    const customSearchStored = JSON.parse(localStorage.getItem('customSearch'));
    if (customSearchStored) {
      // enforce quota
      const check = incrementCustomSearchCount();
      if (check.blocked) {
        // disable custom search and inform user
        try {
          localStorage.setItem('customSearch', JSON.stringify(false));
        } catch {
          void 0;
        }
        setEnableCustomSearch(false);
        if (typeof parentSetCustomSearchEnable === 'function')
          parentSetCustomSearchEnable(false);
        showToast(
          "This application reached maximum today's custom search requests. Custom Search disabled for next 24 hours."
        );
        return;
      }
      navigate(`/custom-search-result/${typed}`);
    } else {
      navigate(`/search-result/${typed}`);
    }
  }

  // Clear persisted search and local input when the logo is clicked
  function handleLogoClick() {
    try {
      localStorage.removeItem('searched');
    } catch {
      // ignore
    }
    setTyped('');
    setSearched('');
  }

  // debounce typed -> setSearched to avoid excessive API calls when typing
  useEffect(() => {
    const id = setTimeout(() => {
      if (typed !== undefined) setSearched(typed);
    }, 600);
    return () => clearTimeout(id);
  }, [typed, setSearched]);

  function deleteHistory(delIndex) {
    const updated = historyList.filter((h) => h.id !== delIndex);
    setHistoryList(updated);
  }

  return (
    <nav className="search-result-nav">
      <div className="search-result-nav-top">
        <div className="search-result-nav-left">
          <Link to="/" className="search-res-logo" onClick={handleLogoClick}>
            <img src={guggleLogo} alt="Guggle" />
          </Link>
          <div className={`search-res-searchbar ${historyOpen ? 'open' : ''}`}>
            <form
              action=""
              onSubmit={(e) => {
                searchHandler(e);
              }}
            >
              <input
                type="text"
                value={typed}
                onChange={(e) => {
                  setTyped(e.target.value);
                }}
                onFocus={() => setHistoryOpen(true)}
                onBlur={() => setTimeout(() => setHistoryOpen(false), 150)}
              />
              <div className="search-result-icons">
                <i
                  className="ri-close-line search-result-icon-erase"
                  title="clear"
                  onClick={() => {
                    setTyped('');
                    setSearched('');
                    // also remove persisted search so cached value won't be restored
                    try {
                      localStorage.removeItem('searched');
                    } catch {
                      void 0;
                    }
                  }}
                ></i>
                <div className="clear-border"></div>
                <button type="submit" className="search-btn">
                  <i
                    className="ri-search-line search-result-icon-search"
                    title="search"
                  ></i>
                </button>
              </div>
            </form>

            {historyOpen && historyList.length > 0 && (
              <ul className="history-list search-result-history">
                {historyList.map((h) => {
                  const isHire =
                    (h.path && h.path.toLowerCase() === 'hire') ||
                    (h.hist && h.hist.toLowerCase().includes('hire'));
                  return (
                    <li key={h.id}>
                      {isHire ? (
                        <button
                          type="button"
                          onMouseDown={(e) => {
                            e.preventDefault();
                            setHistoryOpen(false);
                            setShowHirePopup(true);
                          }}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            padding: 0,
                            margin: 0,
                            textAlign: 'left',
                            cursor: 'pointer',
                            color: '#202124',
                          }}
                        >
                          <span>
                            <i
                              className="ri-briefcase-line"
                              style={{ marginRight: 8 }}
                            ></i>
                            {h.hist}
                          </span>
                        </button>
                      ) : (
                        <a
                          href={`#/search-result/${h.path}`}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            // close history before navigating to avoid UI staying open
                            setHistoryOpen(false);
                            setSearched(h.path);
                            navigate(`/search-result/${h.path}`);
                          }}
                          style={{ textDecoration: 'none', color: '#202124' }}
                        >
                          <span>
                            <i
                              className="ri-history-line"
                              style={{ marginRight: 8 }}
                            ></i>
                            {h.hist}
                          </span>
                        </a>
                      )}
                      <div
                        className="remove-history"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          deleteHistory(h.id);
                        }}
                      >
                        <i className="ri-close-line"></i>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="search-result-nav-right">
          <div className="search-nav-bottom">
            {toastVisible && (
              <div
                className={`toast ${toastExiting ? 'toast-exit' : ''}`}
                role="status"
                aria-live="polite"
              >
                <div className="toast-inner">
                  <div className="toast-icon">
                    <span
                      className={`toast-icon-symbol ${
                        enableCustomSearch ? 'on' : 'off'
                      }`}
                    >
                      {enableCustomSearch ? '✓' : '✕'}
                    </span>
                  </div>
                  <div className="toast-body">
                    <div className="toast-message">{toastMsg}</div>
                  </div>
                  <button className="toast-dismiss" onClick={() => beginExit()}>
                    Dismiss
                  </button>
                </div>
                <div className="toast-progress" aria-hidden="true" />
              </div>
            )}
            <label
              className="custom-search-toggle"
              aria-label="Enable custom search"
            >
              <input
                type="checkbox"
                role="switch"
                aria-checked={enableCustomSearch}
                checked={enableCustomSearch}
                onChange={toggleCustomSearchMode}
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
              onClick={() => {
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
                        // use full URL to avoid routing issues
                        const path = `${window.location.origin}/Mohamed_Irreef_%20Resume%20.pdf`;
                        window.open(path, '_blank');
                        setProfileOpen(false);
                      }}
                      aria-label="View resume in PDF"
                    >
                      View Resume
                    </button>
                    <a
                      className="resume-download"
                      href="/Mohamed_Irreef_%20Resume%20.pdf"
                      download="Mohamed_Irreef_ Resume .pdf"
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
                        href="/"
                        className="grid-icon-box grid-g"
                        aria-label="Home (Guggle)"
                      >
                        <img src={g} alt="Guggle" />
                        <span className="grid-icon-name">Guggle</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/-mohamed-ireef-s-23-/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid-icon-box grid-linkedin"
                        aria-label="LinkedIn"
                      >
                        <img src={linkedin} alt="LinkedIn" />
                        <span className="grid-icon-name">LinkedIn</span>
                      </a>
                      <a
                        href="https://github.com/Mohamed-Irreef"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid-icon-box grid-github"
                        aria-label="GitHub"
                      >
                        <img src={github} alt="GitHub" />
                        <span className="grid-icon-name">GitHub</span>
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
                        <img
                          src={youtube}
                          alt="YouTube"
                          className="ytube-icon"
                        />
                        <span className="grid-icon-name">Youtube</span>
                      </a>
                      <a
                        href="mailto:mdirreef@gmail.com"
                        className="grid-icon-box grid-gmail"
                        aria-label="Email"
                      >
                        <img src={gmail} alt="Email" className="gmail-icon" />
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
        </div>
      </div>

      {showHirePopup && (
        <HirePopup
          recipientEmail={hireRecipient}
          onClose={() => setShowHirePopup(false)}
        />
      )}

      <div className="search-result-nav-bottom">
        <Link
          to="/search-result/all"
          className={tabChosen == 'all' ? 'link tab-chosen' : 'link'}
          onClick={() => {
            setTabChosen('all');
          }}
        >
          <div className="search-result-nav-bottom-sub-tab">
            <i className="ri-search-line" style={{ color: '#5f6368' }}></i>
            <span>All</span>
          </div>
        </Link>
        <Link
          to="/search-result/projects"
          className={tabChosen == 'projects' ? 'link tab-chosen' : 'link'}
        >
          <div
            className="search-result-nav-bottom-sub-tab"
            onClick={() => {
              setTabChosen('projects');
            }}
          >
            <i className="ri-briefcase-4-fill" style={{ color: '#5f6368' }}></i>
            <span>Projects</span>
          </div>
        </Link>
        <Link
          to="/search-result/images"
          className={tabChosen == 'images' ? 'link tab-chosen' : 'link'}
        >
          <div
            className="search-result-nav-bottom-sub-tab"
            onClick={() => {
              setTabChosen('images');
            }}
          >
            <i className="ri-image-fill" style={{ color: '#5f6368' }}></i>
            <span>Images</span>
          </div>
        </Link>
        <Link
          to="/search-result/videos"
          className={tabChosen == 'videos' ? 'link tab-chosen' : 'link'}
        >
          <div
            className="search-result-nav-bottom-sub-tab"
            onClick={() => {
              setTabChosen('videos');
            }}
          >
            <i className="ri-video-line" style={{ color: '#5f6368' }}></i>
            <span>Videos</span>
          </div>
        </Link>
        <Link
          to="/search-result/news"
          className={tabChosen == 'news' ? 'link tab-chosen' : 'link'}
        >
          <div
            className="search-result-nav-bottom-sub-tab"
            onClick={() => {
              setTabChosen('news');
            }}
          >
            <i className="ri-news-line" style={{ color: '#5f6368' }}></i>
            <span>News</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default SearchResultNav;
