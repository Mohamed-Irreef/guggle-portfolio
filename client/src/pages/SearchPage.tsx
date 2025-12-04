import { useState } from 'react';
import SearchNav from '../components/search-page/SearchNav';
import SearchContainer from '../components/search-page/SearchContainer';

interface SearchPageProps {
  searched: string;
  setSearched: (value: string) => void;
  customSearchEnable: boolean;
  setCustomSearchEnable: (value: boolean) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({
  searched,
  setSearched,
  customSearchEnable,
  setCustomSearchEnable,
}) => {
  const [gridOpen, setGridOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  const searchContainerProps = {
    historyOpen,
    setHistoryOpen,
    searched,
    setSearched,
  };
  function closeAll() {
    if (gridOpen) setGridOpen(false);
    if (historyOpen) setHistoryOpen(false);
  }
  const close = {
    closeAll,
    gridClose: () => {
      return setGridOpen(false);
    },
    historyClose: () => {
      return setHistoryOpen(false);
    },
  };

  return (
    <div className="search-page">
      <SearchNav
        gridOpen={gridOpen}
        setGridOpen={setGridOpen}
        close={close}
        customSearchEnable={customSearchEnable}
        setCustomSearchEnable={setCustomSearchEnable}
      />

      <div className="search-main">
        <SearchContainer
          customSearchEnable={customSearchEnable}
          searchContainerProps={searchContainerProps}
          close={close}
        />
      </div>
    </div>
  );
};

export default SearchPage;
