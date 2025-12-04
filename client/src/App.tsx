import './App.css';
import Dummy from './components/Dummy';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const SearchResult = lazy(() => import('./pages/SearchResult'));
const CustomSearchPage = lazy(() => import('./pages/CustomSearchPage'));

import { useEffect, useState } from 'react';

function App() {
  const [searched, setSearched] = useState('');
  const [customSearchEnable, setCustomSearchEnable] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('customSearch'));
      return typeof stored === 'boolean' ? stored : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('customSearch', JSON.stringify(customSearchEnable));
    } catch {
      void 0;
    }
  }, [customSearchEnable]);

  useEffect(() => {
    if (searched) {
      localStorage.setItem('searched', JSON.stringify(searched));
    } else {
      // remove persisted search when cleared
      localStorage.removeItem('searched');
    }
  }, [searched]);
  return (
    <>
      <Router>
        <Suspense fallback={null}>
          <Routes>
            <Route
              path="/"
              element={
                <SearchPage
                  searched={searched}
                  setSearched={setSearched}
                  customSearchEnable={customSearchEnable}
                  setCustomSearchEnable={setCustomSearchEnable}
                />
              }
            />
            <Route path="/profile" element={<Dummy />} />
            <Route
              path="/search-result/:page"
              element={
                <SearchResult searched={searched} setSearched={setSearched} />
              }
            />
            <Route
              path="/custom-search-result/:page"
              element={
                <CustomSearchPage
                  searched={searched}
                  setSearched={setSearched}
                />
              }
            />
            {/* <Route path='/images' element={<ImagesPage />}/>
          <Route path='/videos' element={<VideosPage/>}/>
          <Route path='/projects' element={<ProjectsPage/>}/>
          <Route path='/news' element={<NewsPage/>}/> */}
            {/* <Route path='' element={}/>
          <Route path='' element={}/> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
