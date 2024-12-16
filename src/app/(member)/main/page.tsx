'use client';

import Carousel from '@/components/feature/main-page/Carousel';
import React from 'react';

const MainPage = () => {
  return (
    <>
      <div className='flex justify-center my-4'>
        <img src='/Logo.svg' />
      </div>
      <Carousel />
    </>
  );
};

export default MainPage;