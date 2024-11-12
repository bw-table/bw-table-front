import DashBord from '@/components/feature/dashbord/DashBord';
import TodayReservation from '@/components/feature/TodayReservation/TodayReservation';
import Logo from '@public/Logo.svg';

export default async function ManagementPage() {
  return (
    <div className="flex flex-col gap-5 py-10 px-3 lg:px-0">
      <div className="flex items-end justify-between">
        <Logo className="hidden lg:block" />
        <h1 className="font-bold text-2xl">식당 예약 대시보드</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-3">
        <TodayReservation />
        <DashBord />
      </div>
    </div>
  );
}
