'use client';

import ReservationStatusCard from '@/components/common/ReservationStatusCard/ReservationStatusCard';
import { useGetReservationList } from '@/hooks/queries/reservation/useGetReservations';
import Calendar from '@public/Calender.svg';
import People from '@public/People.svg';
import Table from '@public/Table.svg';
import { useSession } from 'next-auth/react';

export default function TodayReservation() {
  const { data: session } = useSession();
  const { reservationData } = useGetReservationList(session?.user.restaurantId);

  console.log(session);

  return (
    <section className="flex flex-col justify-center items-center gap-7 w-full lg:flex-row">
      <ReservationStatusCard title="오늘의 예약" mainData={6} increment={2}>
        <Calendar />
      </ReservationStatusCard>
      <ReservationStatusCard title="총 고객수" mainData={8} increment={3}>
        <People />
      </ReservationStatusCard>
      <ReservationStatusCard
        title="가용 테이블"
        mainData={2}
        increment={4}
        availableTable={10}
      >
        <Table />
      </ReservationStatusCard>
    </section>
  );
}
