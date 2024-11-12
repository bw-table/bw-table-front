import TodayReservation from '@/components/feature/TodayReservation/TodayReservation';
import Logo from '@public/Logo.svg';

export default async function ManagementPage() {
  return (
    <div className="flex flex-col gap-5 py-10 px-3">
      <div className="flex items-end">
        <Logo className="hidden lg:block" />
        <h1 className="font-bold text-2xl">식당 예약 대시보드</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        <TodayReservation />
        <div className="col-span-1 lg:col-span-4 p-3 border border-solid border-border-300 rounded">
          대시보드 자리
        </div>
      </div>
    </div>
  );
}
