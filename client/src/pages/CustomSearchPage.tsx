import { useEffect, useState, useMemo, useCallback } from 'react';
import SearchResultNav from '../components/search-result/SearchResultNav';
import axios from 'axios';
import { useParams } from 'react-router';
import SearchResultFooter from '../components/search-result/SearchResultFooter';
import g from '../assets/g-logo.webp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SearchResultItem {
  link: string;
  title: string;
  snippet: string;
  displayLink: string;
}

interface CustomSearchPageProps {
  searched: string;
  setSearched: (value: string) => void;
}

const CustomSearchPage: React.FC<CustomSearchPageProps> = ({ searched, setSearched }) => {
  const [gridOpen, setGridOpen] = useState(false);
  const [tabChosen, setTabChosen] = useState('all');
  const [searchText, setSearchText] = useState(searched);

  const [storageSavedResponse, setStorageSavedResponse] = useState<SearchResultItem[]>([]);
  const [isCached, setIsCached] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [requestCount, setRequestCount] = useState(0);
  // const [saveResponse,setSaveResponse]=useState([]);

  const { page } = useParams();

  //  Custom Search Api
  // `storageSavedResponse` holds the results to render; no separate `results` state needed

  /**
   * Store only the last search query and results in localStorage.
   */
  const getLastSearch = useCallback(() => {
    try {
      const query = localStorage.getItem('lastSearchQuery');
      const results = JSON.parse(
        localStorage.getItem('lastSearchResults') || '[]'
      );
      return { query, results };
    } catch {
      return { query: null, results: [] };
    }
  }, []);

  const setLastSearch = useCallback((q: string, items: any[]) => {
    try {
      localStorage.setItem('lastSearchQuery', q);
      localStorage.setItem('lastSearchResults', JSON.stringify(items || []));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const s = localStorage.getItem('searched');
    const count = localStorage.getItem('requestCount');
    setSearchText(s ? JSON.parse(s) : '');
    setRequestCount(count ? parseInt(count, 10) : 0);

    // reset request count for testing
    localStorage.setItem('requestCount', '0');
    setRequestCount(0);

    // load last search results
    const { results: lastResults } = getLastSearch();
    if (Array.isArray(lastResults) && lastResults.length > 0) {
      setStorageSavedResponse(lastResults);
      setIsCached(true);
    }
  }, [getLastSearch]);

  const GuggleApiCall = useCallback(
    async (query: string) => {
      // normalize query
      const q = String(query || '').trim();
      if (!q) return [];

      // check if this is the last searched query
      const { query: lastQuery, results: lastResults } = getLastSearch();
      if (
        lastQuery === q &&
        Array.isArray(lastResults) &&
        lastResults.length > 0
      ) {
        // use last results
        setStorageSavedResponse(lastResults);
        setIsCached(true);
        return lastResults;
      }

      // check request limit
      if (requestCount >= 30) {
        toast.error('The system has exceeded the maximum number of daily requests. The admin has limited free requests for users.');
        setStorageSavedResponse([]);
        setIsCached(false);
        setIsLoading(false);
        return [];
      }

      // not the last query — call API once and store result
      try {
        // increment request count
        setRequestCount(prev => prev + 1);

        // New College mail id
        const response = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=AIzaSyCZHyQ5oWfjvAMSWa5OATzov2sQNVOYTVE&cx=e62b506490f1c4caf&q=${encodeURIComponent(q)}`
        );

        const items = response.data.items || [];
        setStorageSavedResponse(items);
        setIsCached(false);
        setIsLoading(false);
        // persist as last search
        setLastSearch(q, items);
        return items;
      } catch (error) {
        // If quota exceeded set a friendly message
        try {
          const axiosError = error as any;
          if (axiosError && axiosError.response && (axiosError.response.status === 429 || axiosError.response.status === 403)) {
            toast.error('The system has exceeded the maximum number of daily requests. The admin has limited free requests for users.');
          }
        } catch {
          void 0;
        }
        // if quota or network error, fallback to last results if available
        const fallback = lastResults || [];
        setStorageSavedResponse(fallback);
        setIsCached(true);
        setIsLoading(false);
        return fallback;
      }
    },
    [setStorageSavedResponse, setLastSearch, getLastSearch, requestCount]
  );

  // Run once on mount: determine current query and load from last search (or fetch if missing)
  useEffect(() => {
    const callResponse = localStorage.getItem('saveResponse');
    const s = localStorage.getItem('searched');
    const initialQuery = s ? JSON.parse(s) : '';
    setSearchText(initialQuery || '');

    // if we have an initial query, check if it matches last search
    if (initialQuery && String(initialQuery).trim() !== '') {
      const { query: lastQuery, results: lastResults } = getLastSearch();
      if (
        lastQuery === initialQuery &&
        Array.isArray(lastResults) &&
        lastResults.length > 0
      ) {
        setStorageSavedResponse(lastResults);
        setIsCached(true);
        setIsLoading(false);
      } else {
        // not the last — fetch
        setIsLoading(true);
        GuggleApiCall(initialQuery);
      }
    } else if (callResponse) {
      // fallback to previous single-key saveResponse
      try {
        const parsed = JSON.parse(callResponse);
        setStorageSavedResponse(parsed);
        setIsLoading(false);
      } catch {
        void 0;
      }
    } else {
      setIsLoading(false);
    }
  }, [getLastSearch, GuggleApiCall]);

  // When `searched` prop changes to a new query, only call API if it's not the last searched.
  useEffect(() => {
    const q =
      searched ||
      (localStorage.getItem('searched')
        ? JSON.parse(localStorage.getItem('searched') || '')
        : '');
    if (!q || String(q).trim() === '') return;
    const { query: lastQuery, results: lastResults } = getLastSearch();
    if (
      lastQuery === q &&
      Array.isArray(lastResults) &&
      lastResults.length > 0
    ) {
      // already the last — use last results and do not call API
      setStorageSavedResponse(lastResults);
      setIsCached(true);
      setIsLoading(false);
      return;
    }
    // new query — clear previous results and start loading
    setStorageSavedResponse([]);
    setIsLoading(true);
    // clear any previous quota message when making a new live request
    setErrorMessage('');
    GuggleApiCall(q);
  }, [searched, getLastSearch, GuggleApiCall]);

  // Link Splitter

  function linkSplitter(linkPath: string) {
    try {
      const url = new URL(linkPath);
      let host = url.hostname;

      // Remove www.
      if (host.startsWith('www.')) {
        host = host.slice(4);
      }

      const parts = host.split('.');

      // Known non-brand subdomains that should be ignored
      const ignoreList = [
        'm',
        'en',
        'fr',
        'de',
        'es',
        'it',
        'jp',
        'uk',
        'us',
        'in',
      ];

      let mainPart = '';

      // Case 1: like en.wikipedia.org → wikipedia
      if (parts.length === 3) {
        mainPart = ignoreList.includes(parts[0]) ? parts[1] : parts[0];
      }

      // Case 2: like wikipedia.org → wikipedia
      else if (parts.length === 2) {
        mainPart = parts[0];
      }

      // Case 3: deep domains like news.company.co.uk → company
      else if (parts.length > 3) {
        // Remove region/language parts if present
        const filtered = parts.filter((p) => !ignoreList.includes(p));

        // Brand name is the one before the main TLD
        mainPart = filtered[filtered.length - 2];
      }

      // Capitalize
      return mainPart.charAt(0).toUpperCase() + mainPart.slice(1);
    } catch {
      return 'Unknown';
    }
  }

  return (
    <div className="search-result-page">
      <ToastContainer />
      {errorMessage && (
        <div className="error-banner">
          <div className="error-banner-inner">
            <span>{errorMessage}</span>
            <button
              className="error-banner-dismiss"
              onClick={() => setErrorMessage('')}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
      <SearchResultNav
        gridOpen={gridOpen}
        tabChosen={tabChosen}
        setTabChosen={setTabChosen}
        setGridOpen={setGridOpen}
        page={page}
        searched={searchText}
        setSearched={setSearched}
      />
      {/* {
          !pages.con(page)?
          <>Page Not Found</>:<>Page Found</>
        } */}
      {/* const pages=["all","about","education","skills","projects","experiences","awards","contact","hire","images","videos","news"]
       */}
      <div className="container">
        {/* <h1>Guggle Search API Results</h1> */}

        {isLoading ? (
          <p className="time-taken">Loading search results...</p>
        ) : (
          <>
            <p className="time-taken">
              About {storageSavedResponse.length} results (0.45 seconds){' '}
              {isCached && (
                <span
                  style={{ marginLeft: 8, color: '#5f6368', fontSize: '12px' }}
                >
                  (cached)
                </span>
              )}
            </p>
            <br />
            <br />
            {/* AIOverview response */}
            {/* <GeminiAI/> */}

            {storageSavedResponse.map((item, index) => (
              <div key={index} className="card">
                <div className="custom-search-result-card-nav">
                  <div className="custom-search-result-card-nav-logo">
                    <img src={g} alt="" />
                  </div>

                  <a href={item.link} className="anchor1">
                    <div className="">
                      <p className="cus-weblist-title1">
                        {linkSplitter(item.link)}
                      </p>
                      {/* Domain — keep as non-nested element to avoid <a> inside <a> */}
                      <span className="cus-weblist-title2">
                        {item.displayLink}
                      </span>
                    </div>
                  </a>
                </div>
                {/* Title */}
                <a href={item.link} className="weblist-main-heading anchor">
                  {item.title}
                </a>
                {/* Snippet */}
                <p className="snippet">{item.snippet}</p>

                {/* Thumbnail (if available) */}
                {/* {item.pagemap?.cse_image?.[0]?.src && (
              <img
                src={item.pagemap.cse_image[0].src}
                alt="Thumbnail"
                className="thumb"
              />
            )} */}
              </div>
            ))}
          </>
        )}
      </div>

      <SearchResultFooter />
    </div>
  );
};

export default CustomSearchPage;
