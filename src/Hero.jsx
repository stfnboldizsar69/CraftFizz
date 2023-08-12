import React, { useState } from 'react';
import './Hero.css';

function Hero({ images }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>

      <div className="page-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`page ${currentPage === index ? 'active' : ''}`}
          >
            <img src={image} alt={`Page ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="center-container">
        <div className="circle-container">
          {images.map((_, index) => (
            <div
              key={index}
              className={`circle ${currentPage === index ? 'active' : ''}`}
              onClick={() => handlePageClick(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </>

  );
}

export default Hero;