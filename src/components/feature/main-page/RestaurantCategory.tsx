'use client';

import React from 'react';
import useGetCategoryRestaurants from '@/hooks/queries/restaurant/useGetCategoryRestaurant';
import CommonHeader from '@/components/common/header/CommonHeader';
import Divider from '@/components/common/divider/CommonDivider';
import { useRouter } from 'next/navigation';

interface RestaurantCategoryProps {
  category: string;
}

const RestaurantCategory: React.FC<RestaurantCategoryProps> = ({ category }) => {

  const router = useRouter();

  const {
    categoryRestaurants,
    isCategoryLoading,
    isCategoryError,
    categoryError,
  } = useGetCategoryRestaurants(category as string);

  if (isCategoryLoading) return <p>Loading...</p>;
  if (isCategoryError) return <p>Error: {categoryError?.message || 'Something went wrong.'}</p>;

  const handleRestaurantClick = (restaurantId: number) => {
    router.push(`/restaurants/${restaurantId}`);
  };

  return (
    <div className="p-4">
      <CommonHeader label={category} />
        {categoryRestaurants?.map((restaurant) => (
          <Divider 
            key={restaurant.id}
            classNames="p-4 m-4"
            onClick={() => handleRestaurantClick(restaurant.id)}
          >
            <p className="font-bold text-lg mb-4">📍 {restaurant.name}</p>            
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 mb-2 rounded-md" />
            <span className='text-yellow-500 text-lg'>★ </span>
            <span>{restaurant.averageRating}</span>
          </Divider>
        ))}

    </div>
  );
};

export default RestaurantCategory;
