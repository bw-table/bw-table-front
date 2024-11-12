'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useGetReservationList } from '@/hooks/queries/reservation/useGetReservations';
import { useDateStore } from '@/store/management';
import { ReservationType } from '@/types';
import { useSession } from 'next-auth/react';

dayjs.locale('ko');

interface GroupedReservations {
  [key: string]: ReservationType[];
}

export default function DashBord() {
  const date = useDateStore.use.date();
  const { data: session } = useSession({ required: true });
  const { reservationData, isReservationLoading } = useGetReservationList(
    session?.user.restaurantId,
    undefined,
    dayjs(date).format('YYYY-MM-DD'),
  );

  const groupReservationsByTime = (reservations: ReservationType[]) => {
    const groupedByTime: GroupedReservations = {};

    reservations.forEach((reservation) => {
      const time = reservation.reservationTime;
      if (!groupedByTime[time]) {
        groupedByTime[time] = [];
      }

      groupedByTime[time].push({
        memberId: reservation.memberId,
        nickname: reservation.nickname,
        numberOfPeople: reservation.numberOfPeople,
        reservationDate: reservation.reservationDate,
        reservationId: reservation.reservationId,
        reservationStatus: reservation.reservationStatus,
        reservationTime: reservation.reservationTime,
        restaurantId: reservation.restaurantId,
        specialRequest: reservation.specialRequest,
      });
    });

    return groupedByTime;
  };

  if (isReservationLoading) {
    return (
      <div className="flex items-center justify-center col-span-1 lg:col-span-5 p-3 border border-solid border-border-300 rounded">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div className="col-span-1 lg:col-span-5 p-3 border border-solid border-border-300 rounded">
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
                      <p>{reservation.numberOfPeople}명</p>
                      <p
                        className={`px-2 py-1 rounded ${
                          reservation.reservationStatus === 'PENDING'
                            ? 'bg-yellow-100 text-yellow-800'
                            : reservation.reservationStatus === 'CONFIRMED'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {reservation.reservationStatus}
                      </p>
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
