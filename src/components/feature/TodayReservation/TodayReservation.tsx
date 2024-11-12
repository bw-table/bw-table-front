'use client';

import ReservationStatusCard from '@/components/common/ReservationStatusCard/ReservationStatusCard';
import { useGetReservationList } from '@/hooks/queries/reservation/useGetReservations';
import Calendar from '@public/Calender.svg';
import People from '@public/People.svg';
import { useSession } from 'next-auth/react';

export default function TodayReservation() {
  const { data: session } = useSession({ required: true });
  const { reservationData, isReservationLoading } = useGetReservationList(
    session?.user.restaurantId,
  );

  const reservationCount = reservationData?.content.length;
  const allPeople = reservationData?.content.reduce(
    (acc: number, current: any) => {
      return acc + current.numberOfPeople;
    },
    0,
  );

  return (
    <section className="flex flex-col justify-center items-center gap-3 w-full">
      <ReservationStatusCard
        title="오늘의 예약"
        mainData={`${isReservationLoading ? '' : reservationCount}팀`}
      >
        <Calendar />
      </ReservationStatusCard>
      <ReservationStatusCard
        title="총 고객수"
        mainData={`${isReservationLoading ? '' : allPeople}명`}
      >
        <People />
      </ReservationStatusCard>
    </section>
  );
}
