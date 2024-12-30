'use client';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import ReservationStatusCard from '@/components/common/ReservationStatusCard/ReservationStatusCard';
import { useGetReservationList } from '@/hooks/queries/reservation/useGetReservations';
import { useDateStore } from '@/store/management';
import { ReservationType } from '@/types';
import CalendarIcon from '@public/Calender.svg';
import People from '@public/People.svg';
import { useSession } from 'next-auth/react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function TodayReservation() {
  const [value, onChange] = useState<Value>(new Date());
  const setDate = useDateStore.use.setDate();
  const { data: session } = useSession({ required: true });
  const { reservationData, isReservationLoading } = useGetReservationList(
    session?.user.restaurantId,
    undefined,
    dayjs(new Date()).format('YYYY-MM-DD'),
  );
  console.log(reservationData);
  const reservationCount = reservationData?.length;
  const allPeople = reservationData?.reduce(
    (acc: number, current: ReservationType) => {
      return acc + current.numberOfPeople;
    },
    0,
  );

  useEffect(() => {
    if (!value) return;
    if (value instanceof Date) {
      setDate(value);
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      setDate(value[0]);
    }
  }, [value, setDate]);

  if (isReservationLoading) {
    return (
      <div className="flex flex-col gap-3 lg:col-span-3">
        <div className="skeleton h-20 w-full" />
        <div className="skeleton h-20 w-full" />
        <div className="skeleton h-96 w-full" />
      </div>
    );
  }

  return (
    <section className="lg:col-span-3 flex flex-col justify-center items-center gap-3 w-full">
      <ReservationStatusCard
        title="오늘의 예약"
        mainData={`${reservationCount}팀`}
      >
        <CalendarIcon />
      </ReservationStatusCard>
      <ReservationStatusCard title="총 고객수" mainData={`${allPeople}명`}>
        <People />
      </ReservationStatusCard>
      <div className="border border-solid border-border-300 rounded p-2">
        <Calendar onChange={onChange} value={value} />
      </div>
    </section>
  );
}
