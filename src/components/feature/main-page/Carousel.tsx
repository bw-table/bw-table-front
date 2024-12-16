import React from 'react';

const Carousel = () => {
  return (
    <div className='flex justify-center my-3'>
      <div className="carousel w-full items-center space-x-4">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="/assets/carouselImage/BWT1.jpg"
            className="w-full rounded-lg" />
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/assets/carouselImage/BWT2.jpg"
            className="w-full rounded-lg" />
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/assets/carouselImage/BWT3.webp"
            className="w-full rounded-lg" />
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/assets/carouselImage/BWT4.jpg"
            className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;