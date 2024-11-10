'use client';

import ReservationStatusCard from '@/components/common/ReservationStatusCard/ReservationStatusCard';
import Calendar from '@public/Calender.svg';
import People from '@public/People.svg';
import Table from '@public/Table.svg';

export default function TodayReservation() {
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
