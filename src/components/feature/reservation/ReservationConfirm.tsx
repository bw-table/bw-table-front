import React from 'react';
import CommonButton from '@/components/common/button/CommonButton';
import { ReservationConfirmProps } from '@/types/components';
import {
  BsCalendarCheck,
  BsClock,
  BsFillPeopleFill,
  BsMagic,
} from 'react-icons/bs';

export default function ReservationConfirm({
  date,
  time,
  people,
  onCancel,
  onConfirm,
  onSpecialRequest,
}: ReservationConfirmProps) {
  const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  });
  return (
    <div className="p-3 mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        {formattedDate} 방문이 맞으신가요?
      </h2>
      <p className="text-gray-500 mb-6">방문 일정을 다시 한번 확인해 주세요.</p>

      <div className="border border-gray-200 rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold">양지경성 광안 본점</h3>
        <p className="text-gray-500 mb-4">부산 광안리 · 양고기</p>

        <div className="flex justify-center gap-3 text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">
              <BsCalendarCheck />
            </span>
            <span>{formattedDate}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">
              <BsClock />
            </span>
            <span>{time}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">
              <BsFillPeopleFill />
            </span>
            <span>{people}명</span>
          </div>
        </div>
        <div className="p-4 mx-auto bg-white">
          <div className="flex items-center mb-2">
            <BsMagic className="text-xl mr-2" />
            <p className="font-semibold text-lg">요청사항</p>
          </div>
          <span className="block text-gray-700">{onSpecialRequest}</span>
        </div>
      </div>

      <p className="text-gray-500 text-sm mb-6">
        당일취소 및 노쇼는 레스토랑뿐만 아니라 다른 고객님께도 피해가 될 수
        있으므로 신중히 예약 부탁드립니다 :)
      </p>

      <div className="flex gap-2">
        <CommonButton
          type="button"
          onClick={onCancel}
          classNames="bg-white border text-border"
        >
          취소
        </CommonButton>
        <CommonButton type="submit" onClick={onConfirm}>
          확인
        </CommonButton>
      </div>
    </div>
  );
}
