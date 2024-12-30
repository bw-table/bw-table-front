'use client';

import CommonButton from '@/components/common/button/CommonButton';
import Divider from '@/components/common/divider/CommonDivider';
import CommonHeader from '@/components/common/header/CommonHeader';
import CommonNavigationBar from '@/components/common/navigation-bar/CommonNavigationBar';
import MyReservationList from '@/components/feature/my-page/MyReservationList';
import { useSignOut } from '@/hooks/queries/auth/useLogout';
import useGetMyInfo from '@/hooks/queries/my-page/useGetMyInfo';
import useGetMyReservations from '@/hooks/queries/my-page/useGetMyReservations';
import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import useGetMyReviews from '@/hooks/queries/my-page/useGetMyReviews';
import MyReviewList from '@/components/feature/my-page/MyReviewList';

const MyPage = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const { signOutMutation } = useSignOut();

  const handleLogout = () => {
    signOutMutation();
  };
  const tabs = [
    { key: 'my-reservation', label: '나의 예약' },
    { key: 'my-reviews', label: '나의 리뷰' },
  ];
  const { myReservations, myReservationsIsLoading, myReservationsIsError } = useGetMyReservations();
  const { myReviews } = useGetMyReviews();
  const{ myInfo } = useGetMyInfo();
  return (
    <>
      <Divider classNames='h-screen'>
        <CommonHeader label='마이 페이지'/>
        <div className="flex flex-col items-center mb-4">
          <img 
            src="assets/profile-default.png"
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-2"
          />
          <p className="text-lg font-semibold">🍴 {myInfo?.nickname} 님</p>
          <button className="flex items-center text-blue-500 mt-2">
            <AiFillEdit className="mr-1" />
            프로필 수정하기
          </button>
        </div>
        {/* 하단 네비게이션 바 */}
        <CommonNavigationBar
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
          variant="text"
        />
        {selectedTab === 'my-reservation' && (
          <MyReservationList
            reservationData={myReservations}
            isReservationLoading={myReservationsIsLoading}
            isReservationError={myReservationsIsError}
          />
        )}
        {selectedTab === 'my-reviews' && <MyReviewList reviews={myReviews} />}
          
        <button type='button' className='fixed bottom-4 left-1/2 transform -translate-x-1/2 text-gray-700w-40 h-10 text-sm' onClick={handleLogout}>
          로그아웃
        </button>
      </Divider>
    </>
  );
};

export default MyPage;
