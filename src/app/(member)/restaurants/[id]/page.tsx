'use client';

import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import CommonButton from '@/components/common/button/CommonButton';
import CommonNavigationBar from '@/components/common/navigation-bar/CommonNavigationBar';
import { useRouter } from 'next/navigation';
import useGetRestaurantDetail from '@/hooks/queries/restaurant/useGetRestaurantDetail';
import { useGetReviewList } from '@/hooks/queries/restaurant/useGetReviewList';
import RestaurantReviewTab from '@/components/feature/restaurant/RestaurantReviewTab';
import RestaurantAnnouncement from '@/components/feature/restaurant/RestaurantAnnouncement';
import RestaurantMenuTab from '@/components/feature/restaurant/RestaurantMenuTab';
import RestaurantDetailInfo from '@/components/feature/restaurant/RestaurantDetailInfo';
import RestaurantFacilities from '@/components/feature/restaurant/RestaurantFacilities';
import { CATEGORY } from '@/constants/restaurantCategory';
import RestaurantHome from '@/components/feature/restaurant/ResturantHome';

export default function RestaurantDetail() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('home');
  const restaurantId = 2; // 임시 ID
  const { restaurantDetail } = useGetRestaurantDetail(restaurantId);
  const { totalReviews } = useGetReviewList(restaurantId);

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

  const today = new Date();
  const dayOfWeek = today.toLocaleString('ko-KR', { weekday: 'long' }).toUpperCase();
  

  const todayHours = restaurantDetail?.operatingHours?.find(hour => hour.dayOfWeek === dayOfWeek);


  return (
    <div className="max-w-md mx-auto bg-white relative">
      <div className="mb-4">
        <img
          src="/assets/restaurant-example.png"
          alt="Restaurant"
          className="w-full h-52 object-cover"
        />
      </div>

      <div className="px-4 mb-4">
        <p className='text-xs text-gray-500 mb-2'>{restaurantDetail?.category ? 
          CATEGORY[restaurantDetail.category] || '알 수 없는 카테고리' : 
          '카테고리가 없습니다.'
        }</p>
        <h1 className="text-2xl font-semibold">{restaurantDetail?.name}</h1>
        <div className="flex items-center text-yellow-500 my-2">
          <AiFillStar />
          <span className="ml-1">{restaurantDetail?.averageRating}</span>
          <span className="ml-1 text-black font-semibold">{totalReviews}개의 리뷰</span>
        </div>
        <p className="text-gray-500">{restaurantDetail?.description}</p>
        <div className='border border-b-gray-100 my-3'/>
        <p className="flex items-center gap-2 text-gray-500 mb-2">
          <FaMapMarkerAlt />
          {restaurantDetail?.address}
        </p>
        <p className="flex items-center gap-2 text-gray-500">
          <FaRegClock />
          <p className="text-gray-500">오늘({dayOfWeek})</p>
          {todayHours ? `${todayHours.openingTime} ~ ${todayHours.closingTime}` : '오늘은 영업하지 않습니다.'}
        </p>
      </div>

      <CommonNavigationBar
        tabs={tabs}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
        variant="text"
      />
      {/* 탭에 따라 다른 콘텐츠 표시 */}
      {selectedTab === 'home' && (
        <RestaurantHome restaurantId={restaurantId} restaurantDetail={restaurantDetail} />
      )}

    {selectedTab === 'news' && (
      <div className="mb-4">
        <RestaurantAnnouncement restaurantId={restaurantId} />
      </div>
    )}

    {selectedTab === 'menu' && restaurantDetail?.menus && (
      <RestaurantMenuTab menus={restaurantDetail.menus} />
    )}

    {selectedTab === 'reviews' && (
      <div className="mb-4">
        <RestaurantReviewTab restaurantId={restaurantId} />
      </div>
    )}

    {selectedTab === 'info' && (
      <div className="mb-4">
        <RestaurantFacilities facilities={restaurantDetail?.facilities} />
        <RestaurantDetailInfo
          contact={restaurantDetail?.contact}
          operatingHours={restaurantDetail?.operatingHours}
          closedDay={restaurantDetail?.closedDay}
          info={restaurantDetail?.info}
        />
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
