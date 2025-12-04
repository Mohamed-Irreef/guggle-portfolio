import React from 'react';

const SearchResultFooter = () => {
  return (
    <div className="SearchResultFooter">
      <footer className="footer">
        <p>© 2025 Mohamed Irreef S. All rights reserved.</p>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/-mohamed-ireef-s-23-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{' '}
          •
          <a
            href="https://github.com/Mohamed-Irreef"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          •<a href="mailto:mdirreef@gmail.com">Email</a> •
          <a
            href="https://www.instagram.com/scratch_2_deploy?igsh=c2J2N3JybjFpdmFz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{' '}
          •
          <a
            href="https://www.youtube.com/@EduNexEducation-q6v9g"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
        <p className="disclaimer">Guggle is not affiliated with Google.</p>
      </footer>
    </div>
  );
};

export default SearchResultFooter;
