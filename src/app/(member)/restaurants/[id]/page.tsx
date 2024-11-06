'use client';

import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import CommonButton from '@/components/common/button/CommonButton';
import CommonNavigationBar from '@/components/common/navigation-bar/CommonNavigationBar';
import { useRouter } from 'next/navigation';
import useGetRestaurantDetail from '@/hooks/queries/restaurant/useGetRestaurantDetail';
import RestaurantReviewTab from '@/components/feature/restaurant/RestaurantReviewTab';

export default function RestaurantDetail() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('home');
  const restaurantId = 2; // 임시 ID
  const { restaurantDetail } = useGetRestaurantDetail(restaurantId);

  const handleOpenModal = () => {
    router.push('/reservations');
  };

  const tabs = [
    { key: 'home', label: '홈' },
    { key: 'news', label: '소식' },
    { key: 'menu', label: '메뉴' },
    { key: 'reviews', label: '리뷰' },
    { key: 'info', label: '매장정보' },
  ];


  return (
    <div className="p-4 max-w-md mx-auto bg-white relative">
      <div className="mb-4">
        <img
          src="/assets/restaurant-example.png"
          alt="Restaurant"
          className="w-full h-52 object-cover"
        />
      </div>

      <div className="px-4 mb-4">
        <h1 className="text-2xl font-semibold">{restaurantDetail?.name}</h1>
        <div className="flex items-center text-yellow-500 my-2">
          <AiFillStar />
          <span className="ml-1">{restaurantDetail?.averageRating}</span>
        </div>
        <p className="text-gray-500">{restaurantDetail?.address}</p>
        <p className="text-gray-500">{restaurantDetail?.closedDay}</p>
      </div>

      <CommonNavigationBar
        tabs={tabs}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
        variant="text"
      />
      {/* 탭에 따라 다른 콘텐츠 표시 */}
    {/* // {selectedTab === 'home' && (
    //   <div className="px-4 mb-4">
    //     <h2 className="text-lg font-semibold">소식</h2>
    //     {restaurantDetail?.info?.map((notice) => (
    //       <div key={notice.id} className="p-2 border border-gray-300 rounded mb-2">
    //         <h3 className="font-semibold text-gray-700">{notice.title}</h3>
    //         <p className="text-gray-500 text-sm">{notice.content}</p>
    //       </div>
    //     ))}
    //   </div>
    // )} */}

    {selectedTab === 'menu' && (
      <div className="px-4 mb-4">
        <h2 className="text-lg font-semibold">메뉴</h2>
        {restaurantDetail?.menus?.map((menu) => (
          <div key={menu.id} className="flex justify-between py-2 border-b">
            <span>{menu.name}</span>
            <span>{menu.price}</span>
          </div>
        ))}
      </div>
    )}

    {selectedTab === 'reviews' && (
      <div className="px-4 mb-4">
        <h2 className="text-lg font-semibold">리뷰</h2>
        {/* 리뷰 리스트 컴포넌트를 표시합니다. */}
        <RestaurantReviewTab restaurantId={restaurantId} />
      </div>
    )}
      <div className="fixed inset-x-0 bottom-0 p-4 bg-white border-t border-gray-300 max-w-md mx-auto">
        <CommonButton
          type="button"
          onClick={handleOpenModal}
          classNames="w-full py-3 bg-mainColor-500 text-white font-semibold rounded"
        >
          예약하기
        </CommonButton>
      </div>
    </div>
  );
}
