import React from 'react';
import { useGetMainRestaurants } from '@/hooks/queries/restaurant/useGetRestaurants';
import { CATEGORY } from '@/constants/restaurantCategory';
import RestaurantCard from './RestaurantCard';

const MainRestaurantsCard = () => {
  const { mainRestaurants, isLoading, isError, error } = useGetMainRestaurants();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message || 'Something went wrong.'}</p>;

  // 카테고리 한글 이름 가져오기 함수
  const getCategoryLabel = (categoryKey: string) => {
    return CATEGORY[categoryKey] || '기타';
  };

  return (
    <div className="p-4 bg-white">
      {/* 놓치면 안되는 혜택 가득 */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">놓치면 안되는 혜택 가득!</h2>
          <button className="text-sm text-blue-500">전체보기 &gt;</button>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {mainRestaurants?.eventRestaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              imageSrc={restaurant.image}
              name={restaurant.name}
              averageRating={restaurant.averageRating}
              category={getCategoryLabel(restaurant.category)}
            />
          ))}
        </div>
      </section>

      {/* 방문자 리얼리뷰 Pick */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">방문자 리얼리뷰 Pick</h2>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {mainRestaurants?.reviewRestaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              imageSrc={restaurant.image}
              name={restaurant.name}
              averageRating={restaurant.averageRating}
              category={getCategoryLabel(restaurant.category)}
            />
          ))}
        </div>
      </section>

      {/* 고객님이 좋아할 매장 */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">고객님이 좋아할 매장</h2>
          <button className="text-sm text-blue-500">전체보기 &gt;</button>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {mainRestaurants?.recommendations?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              imageSrc={restaurant.image}
              name={restaurant.name}
              averageRating={restaurant.averageRating}
              category={getCategoryLabel(restaurant.category)}
            />
          ))}
        </div>
      </section>

      {/* 새로 오픈했어요 */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">새로 오픈했어요!</h2>
          <button className="text-sm text-blue-500">전체보기 &gt;</button>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {mainRestaurants?.newRestaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              imageSrc={restaurant.image}
              name={restaurant.name}
              averageRating={restaurant.averageRating}
              category={getCategoryLabel(restaurant.category)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainRestaurantsCard;
