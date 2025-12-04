import React, { useEffect, useState } from 'react';

const ImageComponent = ({ images, imageTab }) => {
  const [imageDataset, setImageDataset] = useState(images);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    var imagesData = images;
    setImageDataset(images);
    if (imageTab.toLowerCase() != 'all') {
      const target = imageTab.toLowerCase();
      imagesData = imagesData.filter((image) => {
        // some image objects may have missing or shorter category arrays
        if (!image || !image.category) return false;
        return image.category.some((c) => String(c).toLowerCase() === target);
      });
      setImageDataset(imagesData);
    }
  }, [imageTab, images]);

  function openModal(index) {
    setModalIndex(index);
    setModalOpen(true);
    // lock scroll
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = '';
  }

  function prevImage(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const nextIdx =
      (modalIndex - 1 + imageDataset.length) % imageDataset.length;
    setModalIndex(nextIdx);
  }

  function nextImage(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const nextIdx = (modalIndex + 1) % imageDataset.length;
    setModalIndex(nextIdx);
  }

  useEffect(() => {
    function onKey(e) {
      if (!modalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft')
        setModalIndex(
          (i) => (i - 1 + imageDataset.length) % imageDataset.length
        );
      if (e.key === 'ArrowRight')
        setModalIndex((i) => (i + 1) % imageDataset.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, imageDataset.length]);

  return (
    <>
      <div className="image-grid">
        {imageDataset.map((image, idx) => {
          return (
            <div className="image-box" key={image.id}>
              <div className="image-fit" onClick={() => openModal(idx)}>
                <img src={image.image} alt="" />
              </div>
              <div className="img-box-nav">
                <div className="img-box-nav-logo">
                  <img src={image.imageNavLogo} alt="" />
                </div>
                <div className="img-nav-title">{image.imageNavTitle}</div>
              </div>
              <p className="image-box-heading">
                {image.imageHeading.slice(0, 35)}...
              </p>
            </div>
          );
        })}
      </div>

      {modalOpen && (
        <div
          className="lightbox-overlay"
          onClick={(e) => {
            if (e.target.classList.contains('lightbox-overlay')) closeModal();
          }}
        >
          <div className={`lightbox-card`} role="dialog" aria-modal="true">
            <div className="lightbox-slide">
              <button
                className="lightbox-close"
                onClick={closeModal}
                aria-label="Close"
              >
                ×
              </button>
              <button
                className="lightbox-prev"
                onClick={prevImage}
                aria-label="Previous"
              >
                ‹
              </button>
              <img
                className="lightbox-img"
                src={imageDataset[modalIndex].image}
                alt={imageDataset[modalIndex].imageHeading || ''}
              />
              <button
                className="lightbox-next"
                onClick={nextImage}
                aria-label="Next"
              >
                ›
              </button>
            </div>
            <div className="lightbox-caption">
              {imageDataset[modalIndex].imageHeading}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageComponent;
