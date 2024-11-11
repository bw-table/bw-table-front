import TodayReservation from '@/components/feature/TodayReservation/TodayReservation';
import Logo from '@public/Logo.svg';

export default function ManagementPage() {
  return (
    <div className="flex flex-col p-3">
      <div className="flex mb-5 items-center">
        <Logo />
        <h1 className="text-3xl font-bold ml-3">식당 예약 대시보드</h1>
      </div>
      <TodayReservation />
    </div>
  );
}
