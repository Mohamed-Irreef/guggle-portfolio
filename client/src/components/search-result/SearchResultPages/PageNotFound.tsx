import { useState } from 'react';

interface PageNotFoundProps {
  page: string;
}

const PageNotFound: React.FC<PageNotFoundProps> = ({ page }) => {
  const pagesAllowed = ['All', 'About', 'Education', 'Skills', 'Projects'];
  return (
    <div className="page-not-found">
      <div className="notfound">
        <p className="notfound-title">Did you mean:</p>
        <div className="search-allowed">
          {pagesAllowed.map((pageAllowed) => {
            return (
              <span
                className="onlyfound-page"
                style={{
                  color:
                    pageAllowed.toLowerCase() == 'all' ? 'black' : '#0000ee',
                }}
              >
                {pageAllowed}
              </span>
            );
          })}
        </div>
        <p className="notfoundpara">
          No results containing all your search terms were found.
        </p>
        <p className="notfoundpara">
          Your search - <b>{page}</b> - did not match any documents.
        </p>
        <p
          className="notfoundpara"
          style={{ fontWeight: 500, marginTop: '15px' }}
        >
          Suggestions:
        </p>
        <ul className="notfounf-list">
          <li>Try a different keyword from the search dropdown</li>
          <li>Make sure that all words are spelled correctly.</li>
          <li>Click one of the links from the suggestions or menu above</li>
        </ul>
      </div>
    </div>
  );
};

export default PageNotFound;
