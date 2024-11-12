'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useGetReservationList } from '@/hooks/queries/reservation/useGetReservations';
import { useDateStore } from '@/store/management';
import { ReservationType } from '@/types';
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
      <div className="col-span-1 lg:col-span-5 ">
        <div className="skeleton h-full w-full" />
      </div>
    );
  }

  console.log(reservationData);

  return (
    <div className="col-span-1 lg:col-span-5 p-3 border border-solid border-border-300 rounded">
      <p>{dayjs(date).format('YYYY-MM-DD (dd)')}</p>
      <div className="join join-vertical w-full">
        {reservationData?.content.map((reservation: ReservationType) => (
          <div
            key={reservation.reservationId}
            className="collapse collapse-arrow join-item border-base-300 border"
          >
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {reservation.reservationTime}
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
