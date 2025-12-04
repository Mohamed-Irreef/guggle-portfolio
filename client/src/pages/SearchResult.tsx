import { useEffect, useState, useMemo } from 'react';
import SearchResultNav from '../components/search-result/SearchResultNav';
import { useParams } from 'react-router';
import PageNotFound from '../components/search-result/SearchResultPages/PageNotFound';
import AllPage from '../components/search-result/SearchResultPages/AllPage';
import AboutPage from '../components/search-result/SearchResultPages/AboutPage';
import EducationPage from '../components/search-result/SearchResultPages/EducationPage';
import SkillsPage from '../components/search-result/SearchResultPages/SkillsPage';
import ProjectsPage from '../components/search-result/SearchResultPages/ProjectsPage';
import ExperiencesPage from '../components/search-result/SearchResultPages/ExperiencesPage';
import AwardsPage from '../components/search-result/SearchResultPages/AwardsPage';
import ContactPage from '../components/search-result/SearchResultPages/ContactPage';
import HirePage from '../components/search-result/SearchResultPages/HirePage';
import ImagesPage from '../components/search-result/SearchResultPages/ImagesPage';
import VideosPage from '../components/search-result/SearchResultPages/VideosPage';
import NewsPage from '../components/search-result/SearchResultPages/NewsPage';
import SearchResultFooter from '../components/search-result/SearchResultFooter';

interface SearchResultProps {
  searched: string;
  setSearched: (value: string) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ searched, setSearched }) => {
  const [gridOpen, setGridOpen] = useState(false);
  const [tabChosen, setTabChosen] = useState('all');
  const [chosenPage, setChosenPage] = useState('');
  const pages = useMemo(
    () => [
      'all',
      'who is mohamed irreef',
      'about',
      'education',
      'skills',
      'projects',
      'experiences',
      'awards',
      'contact',
      'hire',
      'images',
      'videos',
      'news',
    ],
    []
  );

  const { page } = useParams();
  useEffect(() => {
    if (typeof page !== 'undefined' && page) {
      const p = String(page).toLowerCase().trim();
      if (pages.includes(p)) {
        setChosenPage(p);
        return;
      }

      setChosenPage('notfound');
      return;
    }

    if (searched) {
      const s = String(searched).toLowerCase().trim();
      if (pages.includes(s)) {
        setChosenPage(s);
        return;
      }

      setChosenPage('notfound');
      return;
    }

    setChosenPage('all');
  }, [page, searched, pages]);

  return (
    <div className="search-result-page">
      <SearchResultNav
        gridOpen={gridOpen}
        tabChosen={tabChosen}
        setTabChosen={setTabChosen}
        setGridOpen={setGridOpen}
        page={page}
        searched={searched}
        setSearched={setSearched}
      />
      {/* {
          !pages.con(page)?
          <>Page Not Found</>:<>Page Found</>
        } */}
      {/* const pages=["all","about","education","skills","projects","experiences","awards","contact","hire","images","videos","news"]
       */}
      {chosenPage === 'notfound' ? (
        <PageNotFound page={page || searched} />
      ) : pages.includes(chosenPage) ? (
        chosenPage === 'all' || chosenPage == 'who is mohamed irreef' ? (
          <AllPage />
        ) : chosenPage === 'about' ? (
          <AboutPage />
        ) : chosenPage === 'education' ? (
          <EducationPage />
        ) : chosenPage === 'skills' ? (
          <SkillsPage />
        ) : chosenPage === 'projects' ? (
          <ProjectsPage />
        ) : chosenPage === 'experiences' ? (
          <ExperiencesPage />
        ) : chosenPage === 'awards' ? (
          <AwardsPage />
        ) : chosenPage === 'contact' ? (
          <ContactPage />
        ) : chosenPage === 'hire' ? (
          <HirePage />
        ) : chosenPage === 'images' ? (
          <ImagesPage />
        ) : chosenPage === 'videos' ? (
          <VideosPage />
        ) : chosenPage === 'news' ? (
          <NewsPage />
        ) : (
          <PageNotFound page={page || searched} />
        )
      ) : (
        <PageNotFound page={page || searched} />
      )}
      <SearchResultFooter />
    </div>
  );
};

export default SearchResult;
