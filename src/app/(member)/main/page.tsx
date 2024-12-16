'use client';

import SearchInput from '@/components/common/input/SearchInput';
import BottomNavigationBar from '@/components/common/navigation-bar/BottomNavigationBar';
import Carousel from '@/components/feature/main-page/Carousel';
import CategoryList from '@/components/feature/main-page/CategoryList';
import LocationCarousel from '@/components/feature/main-page/LocationCarousel';
import React from 'react';

const MainPage = () => {
  return (
    <>
      <div className='flex justify-center my-4'>
        <img src='/Logo.svg' />
      </div>
      <SearchInput />
      <Carousel />
      <CategoryList />
      <LocationCarousel />
      <BottomNavigationBar />
    </>
  );
};

export default MainPage;