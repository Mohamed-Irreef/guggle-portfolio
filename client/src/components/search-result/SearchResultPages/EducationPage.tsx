import React from 'react';
import underconstruction from '../../../assets/construction.gif';
const EducationPage = () => {
  return (
    <div className="search-page-loading">
      <div className="dummy">
        <div>
          <img src={underconstruction} alt="" />
        </div>
        <div
          className=""
          style={{ color: 'red', fontSize: '18px', fontWeight: '500' }}
        >
          Education Page
        </div>
        <h2 style={{ textAlign: 'center' }}>Coming Soon</h2>
      </div>
    </div>
  );
};

export default EducationPage;
