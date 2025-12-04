import React from 'react';
import underconstruction from '../assets/construction.gif';

const Dummy = () => {
  return (
    <div className="dummy">
      <div>
        <img src={underconstruction} alt="" />
      </div>
      <h2 style={{ textAlign: 'center' }}>Coming Soon</h2>
    </div>
  );
};

export default Dummy;
