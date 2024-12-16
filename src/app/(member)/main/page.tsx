'use client';

import SearchInput from '@/components/common/input/SearchInput';
import Carousel from '@/components/feature/main-page/Carousel';
import CategoryList from '@/components/feature/main-page/CategoryList';
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
    </>
  );
};

export default MainPage;