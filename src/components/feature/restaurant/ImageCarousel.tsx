'use client';

import React from 'react';

interface CarouselProps {
  images: string[];
}

const RestaurantCarousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="carousel w-full">
      {images.map((image, index) => (
        <div id={`slide${index}`} key={index} className="carousel-item relative w-full">
          <img
            src={image}
            alt={`Restaurant Image ${index + 1}`}
            className="w-full h-52 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default RestaurantCarousel;
