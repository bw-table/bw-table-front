'use client';

import React from 'react';
import { BsTelephoneFill, BsGeoAltFill, BsChevronLeft } from 'react-icons/bs';
import CommonButton from '@/components/common/button/CommonButton';
import { useRouter } from 'next/navigation';

{/* 현재 마크업만 진행한 상태, 차후 목데이터 연동 후 조정 예정! */}
export default function ReservationDetail() {
  const router = useRouter();
  return (
    <div className="p-4 max-w-md mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4 ml-2">
        <BsChevronLeft 
          className="cursor-pointer" 
          onClick={() => router.back()} 
        />
        <h1 className="text-lg font-semibold">예약 현황</h1>
      </div>

      {/* Image */}
      <div className="mb-4">
        <img
          src="/assets/restaurant-example.png"
          alt="Restaurant"
          className="w-full h-52 object-cover"
        />
      </div>

      {/* 예약 상태와 이름 */}
      <div className="px-4 mb-4">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm">예약확정</span>
        <h2 className="text-2xl font-semibold mt-2">세이지 앤 버터</h2>
        <p className="text-gray-500">압구정 | 이탈리아 음식</p>
        <p className="mt-2 text-mainColor-500 font-bold">
          2024.10.31 (목) · 오후 2:00 · 2명 · 홀
        </p>
      </div>
      <div className='w-full h-1 bg-gray-100 my-3'/>
      {/* 위치 정보 */}
      <div className="px-4 mb-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <BsGeoAltFill className="mr-1" /> 위치
        </h3>
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-2">
          {/* 지도 이미지 임시지정 */}
          <img
            src="/assets/map-image.png"
            alt="Map"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <p className="text-gray-500 mb-2">서울특별시 강남구 언주로 157길 6 1층</p>
        <CommonButton
          type='button'
          href=''
          classNames='border border-gray-300 bg-white font-semibold text-black'
        >
          매장 길찾기
        </CommonButton>
      </div>
      <div className='w-full h-1 bg-gray-100 my-3'/>
      {/* 상세 정보 */}
      <div className="px-4 mb-4">
        <h3 className="text-2xl font-semibold mb-2">상세정보</h3>
        <div className="flex items-center text-gray-700 mb-2">
          <BsTelephoneFill className="mr-2" /> 070-4118-1111
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700">정기 휴무</h4>
          <p className="text-gray-500">맛있는 스테이크를 위해 '매주 월요일'은 정기휴무입니다.</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700">안내 및 유의사항</h4>
          <p className="text-gray-500 text-sm">
            - 예약시 꼭 스테이크 종류, 중량을 기입 부탁드립니다.<br />
            - 자체 숙성 에이징 스테이크 특성상 일부 메뉴의 중량이 조기 품절될 수 있습니다.<br />
            - 예약한 스테이크가 조기 품절 될 경우 가능한 한 스테이크의 중량 문자로 드립니다.
          </p>
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
