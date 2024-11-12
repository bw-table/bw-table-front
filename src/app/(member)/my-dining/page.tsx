'use client';

import Divider from '@/components/common/divider/CommonDivider';
import CommonHeader from '@/components/common/header/CommonHeader';
import BottomNavigationBar from '@/components/common/navigation-bar/BottomNavigationBar';
import CommonNavigationBar from '@/components/common/navigation-bar/CommonNavigationBar';
import MyReservationList from '@/components/feature/my-page/MyReservationList';
import { useGetReservationList } from '@/hooks/queries/reservation/useGetReservations';
import React, { useState } from 'react';

const MyDiningPage = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  const tabs = [
    { key: 'my-reservation', label: '나의 예약' },
    { key: 'my-alarms', label: '나의 알림' },
  ];
  const restaurantId = 2;
  const memberId = 2;

  const {
    reservationData,
    isReservationLoading,
    isReservationError,
  } = useGetReservationList(restaurantId, memberId);

  return (
    <>
      <Divider classNames='h-screen'>
        <CommonHeader label='마이 다이닝'/>
        <CommonNavigationBar
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
          variant="text"
        />
        {selectedTab === 'my-reservation' && (
          <MyReservationList
            reservationData={reservationData}
            isReservationLoading={isReservationLoading}
            isReservationError={isReservationError}
          />
        )}
        {selectedTab === 'my-alarms' && (
          <div className="mb-4">
            <p className="text-gray-500">알림이 없습니다.</p>
          </div>
        )}  
      </Divider>
      <BottomNavigationBar />
    </>
  );
};

export default MyDiningPage;
