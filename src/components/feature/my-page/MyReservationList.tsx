import React from 'react';
import Divider from '@/components/common/divider/CommonDivider';
import { ReservationsRequestType } from '@/types';

interface MyReservationListProps {
  reservationData: { content: ReservationsRequestType[] } | null;
  isReservationLoading: boolean;
  isReservationError: boolean;
}

const MyReservationList: React.FC<MyReservationListProps> = ({ reservationData, isReservationLoading, isReservationError }) => {
  return (
    <div className="my-4 p-3">
      {reservationData && Array.isArray(reservationData.content) && reservationData.content.length > 0 ? (
        reservationData.content.map((reservation: ReservationsRequestType) => (
          <Divider key={reservation.reservationId} classNames="flex gap-2 mb-4 p-4">
            {/* 이미지 섹션 */}
            <div className="w-24 h-24 mr-4">
              <img 
                src="assets/restaurant-example.png" // 이미지 URL 변경 필요
                alt="Restaurant"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* 정보 섹션 */}
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <span className={`text-xs font-semibold px-2 py-1 rounded ${reservation.reservationStatus === 'CONFIRMED' ? 'bg-blue-100 text-blue-500' : 'bg-gray-100 text-gray-500'}`}>
                  {reservation.reservationStatus === 'CONFIRMED' ? '예약확정' : '대기중'}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-1">{reservation.restaurantId}세이지 앤 버터</h3>
              <p className="text-sm text-gray-600 mb-1">압구정 | 이탈리아 음식</p> 
              <p className="text-sm text-gray-500">
                {reservation.reservationDate} · {reservation.reservationTime} · {reservation.numberOfPeople}명
              </p>
            </div>
          </Divider>
        ))
      ) : (
        !isReservationLoading && <p className="text-gray-500">예약이 없습니다.</p>
      )}
    </div>
  );
};

export default MyReservationList;
