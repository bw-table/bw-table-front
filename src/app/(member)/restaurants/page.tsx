'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function RestaurantPage() {
  const router = useRouter();

  const handleOpenModal = () => {
    router.push('/reservations');
  };
  // 임시 페이지입니다.차후 변경 예정!
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">식당 상세 페이지</h1>
      <p>여기에 식당에 대한 상세 정보가 표시됩니다.</p>
      <button
        onClick={handleOpenModal}
        className="mt-4 px-6 py-2 bg-mainColor-500 text-white rounded-lg"
      >
        예약하기
      </button>
    </div>
  );
}
