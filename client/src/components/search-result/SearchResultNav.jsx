import React, { useEffect, useState } from "react";
import googleLogo from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import grid from "../../assets/grid.png";
import myprofile from "../../assets/myprofile.jpg";

import g from "../../assets/g-logo.webp";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";
import youtube from "../../assets/youtube.png";
import map from "../../assets/map.png";
import lens from "../../assets/lens.png";
import mic from "../../assets/mic.png";

const SearchResultNav = ({
  gridOpen,
  setGridOpen,
  page,
  searched,
  setSearched,
  tabChosen,
  setTabChosen,
}) => {
  const tabs = React.useMemo(
    () => ["all", "projects", "images", "videos", "news"],
    []
  );

  const [typed, setTyped] = useState("");
  const [historyOpen, setHistoryOpen] = useState(false);
  const history = [
    { id: 1, hist: "About Mohamed Irreef", path: "about" },
    { id: 2, hist: "Education", path: "education" },
    { id: 3, hist: "Skills", path: "skills" },
    { id: 4, hist: "Projects", path: "projects" },
    { id: 5, hist: "Experiences", path: "experiences" },
    { id: 6, hist: "Awards", path: "awards" },
    { id: 7, hist: "Contact", path: "contact" },
    { id: 8, hist: "Hire Mohamed Irreef", path: "hire" },
  ];
  const [historyList, setHistoryList] = useState(history);
  const navigate = useNavigate();

  useEffect(() => {
    if (!tabs.includes(page)) {
      setTabChosen("all");
    } else {
      setTabChosen(page);
    }
    setTyped(searched);
  }, [page, searched, setTabChosen, tabs]);

  function searchHandler(e) {
    e.preventDefault();
    setSearched(typed);
    console.log("Searched Result Nav: ", searched);
    navigate(`/search-result/${typed}`);
  }

  function deleteHistory(delIndex) {
    const updated = historyList.filter((h) => h.id !== delIndex);
    setHistoryList(updated);
  }

  return (
    <nav className="search-result-nav">
      <div className="search-result-nav-top">
        <div className="search-result-nav-left">
          <div className="search-res-logo">
            <img src={googleLogo} alt="" />
          </div>
          <div className={`search-res-searchbar ${historyOpen ? "open" : ""}`}>
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
                    setTyped("");
                  }}
                ></i>
                <div className="clear-border"></div>
                <img
                  src={mic}
                  alt=""
                  className="search-result-icon-mic"
                  title="search by voice"
                />
                <img
                  src={lens}
                  alt=""
                  className="search-result-icon-lens"
                  title="search by lens"
                />
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
                {historyList.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#/search-result/${h.path}`}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        // close history before navigating to avoid UI staying open
                        setHistoryOpen(false);
                        setSearched(h.path);
                        navigate(`/search-result/${h.path}`);
                      }}
                      style={{ textDecoration: "none", color: "#202124" }}
                    >
                      <span>
                        <i
                          className="ri-history-line"
                          style={{ marginRight: 8 }}
                        ></i>
                        {h.hist}
                      </span>
                    </a>
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
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="search-result-nav-right">
          <div className="search-nav-bottom">
            <Link to="/email" className="email-link">
              Email
            </Link>
            <Link to="/github" className="github-link">
              GitHub
            </Link>
            <img
              src={grid}
              alt="grid"
              className="grid"
              onClick={() => {
                setGridOpen((prev) => !prev);
              }}
            />

            <img src={myprofile} alt="profile" className="myprofile" />

            {gridOpen && (
              <>
                <div className="grid-open">
                  <div className="grid-menus">
                    <div className="grid-row1-menus">
                      <div className="grid-icon-box">
                        {" "}
                        <img src={g} alt="" />
                        <span className="grid-icon-name">Google</span>
                      </div>
                      <div className="grid-icon-box">
                        {" "}
                        <img src={linkedin} alt="" />
                        <span className="grid-icon-name">LinkedIn</span>
                      </div>
                      <div className="grid-icon-box">
                        {" "}
                        <img src={github} alt="" />
                        <span className="grid-icon-name">GitHub</span>
                      </div>
                    </div>
                    <div className="grid-row2-menus">
                      <div className="grid-icon-box">
                        {" "}
                        <img src={youtube} alt="" className="ytube-icon" />
                        <span className="grid-icon-name">Youtube</span>
                      </div>
                      <div className="grid-icon-box">
                        {" "}
                        <img src={gmail} alt="" className="gmail-icon" />
                        <span className="grid-icon-name">Gmail</span>
                      </div>
                      <div className="grid-icon-box">
                        {" "}
                        <img src={map} alt="" className="map-icon" />
                        <span className="grid-icon-name">Map</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="search-result-nav-bottom">
        <Link
          to="/search-result/all"
          className={tabChosen == "all" ? "link tab-chosen" : "link"}
          onClick={() => {
            setTabChosen("all");
          }}
        >
          <div className="search-result-nav-bottom-sub-tab">
            <i className="ri-search-line" style={{ color: "#5f6368" }}></i>
            <span>All</span>
          </div>
        </Link>
        <Link
          to="/search-result/projects"
          className={tabChosen == "projects" ? "link tab-chosen" : "link"}
        >
          <div
            className="search-result-nav-bottom-sub-tab"
            onClick={() => {
              setTabChosen("projects");
            }}
          >
            <i className="ri-briefcase-4-fill" style={{ color: "#5f6368" }}></i>
            <span>Projects</span>
          </div>
        </Link>
        <Link
          to="/search-result/images"
          className={tabChosen == "images" ? "link tab-chosen" : "link"}
        >
          <div
            className="search-result-nav-bottom-sub-tab"
            onClick={() => {
              setTabChosen("images");
            }}
          >
            <i className="ri-image-fill" style={{ color: "#5f6368" }}></i>
            <span>Images</span>
          </div>
        </Link>
        <Link
          to="/search-result/videos"
          className={tabChosen == "videos" ? "link tab-chosen" : "link"}
        >
          <div
            className="search-result-nav-bottom-sub-tab"
            onClick={() => {
              setTabChosen("videos");
            }}
          >
            <i className="ri-video-line" style={{ color: "#5f6368" }}></i>
            <span>Videos</span>
          </div>
        </Link>
        <Link
          to="/search-result/news"
          className={tabChosen == "news" ? "link tab-chosen" : "link"}
        >
          <div
            className="search-result-nav-bottom-sub-tab"
            onClick={() => {
              setTabChosen("news");
            }}
          >
            <i className="ri-news-line" style={{ color: "#5f6368" }}></i>
            <span>News</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default SearchResultNav;
