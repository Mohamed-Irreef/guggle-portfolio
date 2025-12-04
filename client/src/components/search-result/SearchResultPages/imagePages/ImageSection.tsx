import React from 'react';
import ImageComponent from './ImageComponent';

const ImageSection = ({ images }) => {
  return (
    <div className="image-grid">
      {/* Single Image Component */}
      <ImageComponent images={images} />
    </div>
  );
};

export default ImageSection;
