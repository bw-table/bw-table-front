'use client';

import React from 'react';
import { BsTelephoneFill, BsGeoAltFill, BsChevronLeft } from 'react-icons/bs';
import CommonButton from '@/components/common/button/CommonButton';
import { useRouter } from 'next/navigation';
import { useReservationStore } from '@/store/reservations/useReservationStore';
import GoogleMaps from '@/components/common/googleMap/GoogleMap';

export default function ReservationDetail() {
  const router = useRouter();
  const reservationData = useReservationStore((state) => state.reservationData);

  if (!reservationData) {
    return <div className="p-4 max-w-md mx-auto bg-white">예약 정보를 불러오는 중입니다...</div>;
  }

  const { restaurant, reservation } = reservationData;

  return (
    <div className="p-4 mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4 ml-2">
        <BsChevronLeft className="cursor-pointer" onClick={() => router.back()} />
        <h1 className="text-lg font-semibold">예약 현황</h1>
      </div>

      {/* Image */}
      <div className="mb-4">
        <img
          src={restaurant.images[0] || '/assets/restaurant-example.png'}
          alt={restaurant.name}
          className="w-full h-52 object-cover"
        />
      </div>

      {/* 예약 상태와 이름 */}
      <div className="px-4 mb-4">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm">
          {reservation.reservationStatus === 'CONFIRMED' ? '예약확정' : '예약대기'}
        </span>
        <h2 className="text-2xl font-semibold mt-2">{restaurant.name}</h2>
        <p className="text-gray-500">{restaurant.category}</p>
        <p className="mt-2 text-mainColor-500 font-bold">
          {reservation.reservationDate} · {reservation.reservationTime} · {reservation.numberOfPeople}명
        </p>
      </div>
      <div className="w-full h-1 bg-gray-100 my-3" />

      {/* 위치 정보 */}
      <div className="px-4 mb-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <BsGeoAltFill className="mr-1" /> 위치
        </h3>
        <div className="w-full h-48 bg-gray-200 rounded-lg my-4">
          {/* 지도 이미지 임시지정 */}
          <GoogleMaps address={restaurant.address} />
        </div>
        <p className="text-gray-500 mb-2">{restaurant.address}</p>
        <CommonButton
          type="button"
          href={`https://map.kakao.com/link/to/${restaurant.name},${restaurant.address}`}
          classNames="border border-gray-300 bg-white font-semibold text-black"
        >
          매장 길찾기
        </CommonButton>
      </div>
      <div className="w-full h-1 bg-gray-100 my-3" />

      {/* 상세 정보 */}
      <div className="px-4 mb-4">
        <h3 className="text-2xl font-semibold mb-2">상세정보</h3>
        <div className="flex items-center text-gray-700 mb-2">
          <BsTelephoneFill className="mr-2" /> {restaurant.contact}
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700">정기 휴무</h4>
          <p className="text-gray-500">{restaurant.regularHoliday}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700">안내 및 유의사항</h4>
          <p className="text-gray-500 text-sm">{restaurant.info}</p>
        </div>
      </div>

      {/* 버튼들 */}
      <div className="px-4 flex justify-between gap-2">
        <CommonButton type="button" classNames="bg-mainColor-500 text-white w-full py-3">
          식당과 채팅하기
        </CommonButton>
        <CommonButton type="button" classNames="bg-mainColor-500 text-white w-full py-3">
          예약 취소하기
        </CommonButton>
      </div>
    </div>
  );
}
