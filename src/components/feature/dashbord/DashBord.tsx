'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import React from 'react';
import Badge from '@/components/common/badge/Badge';
import { useGetReservationList } from '@/hooks/queries/reservation/useGetReservations';
import { useDateStore } from '@/store/management';
import { StatusVariant } from '@/types';
import { groupReservationsByTime } from '@/utils/groupReservationsByTime';
import { switchToKorean } from '@/utils/switchStatusLang';
import { useSession } from 'next-auth/react';

dayjs.locale('ko');

export default function DashBord() {
  const date = useDateStore.use.date();
  const { data: session } = useSession({ required: true });
  const { reservationData, isReservationLoading } = useGetReservationList(
    session?.user.restaurantId,
    undefined,
    dayjs(date).format('YYYY-MM-DD'),
  );

  if (isReservationLoading) {
    return (
      <div className="flex items-center justify-center col-span-1 lg:col-span-5 p-3 border border-solid border-border-300 rounded">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div className="col-span-1 lg:col-span-5 p-3 border border-solid border-border-300 rounded ">
      <p className="text-2xl font-bold mb-5">
        {dayjs(date).format('YYYY-MM-DD (dd)')} 예약 목록
      </p>
      <div className="join join-vertical w-full">
        {Object.entries(groupReservationsByTime(reservationData?.content || []))
          .sort(([timeA], [timeB]) => timeA.localeCompare(timeB))
          .map(([time, reservations]) => (
            <div
              key={time}
              className="collapse collapse-arrow join-item border-base-300 border"
            >
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                {time} ({reservations.length}건)
              </div>
              <div className="collapse-content">
                {reservations.map((reservation) => (
                  <div
                    key={reservation.reservationId}
                    className="flex items-center justify-between py-2 border-b last:border-b-0"
                  >
                    <p>{reservation.nickname}</p>
                    <div className="flex items-center gap-4">
                      <Badge
                        variant={reservation.reservationStatus as StatusVariant}
                      >
                        {switchToKorean(reservation.reservationStatus)}
                      </Badge>
                      <select className="select select-bordered w-full max-w-xs">
                        <option>선택</option>
                        <option value="PENDING">대기</option>
                        <option value="CONFIRMED">방문</option>
                        <option value="NO_SHOW">노쇼</option>
                        <option value="CANCELED">취소</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
