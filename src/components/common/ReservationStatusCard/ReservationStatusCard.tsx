import { ReservationStateCardProps } from '@/types';

export default function ReservationStatusCard({
  title,
  children,
  mainData,
  increment,
  availableTable,
}: ReservationStateCardProps) {
  return (
    <div className="flex flex-col gap-2 flex-1 border border-solid border-border-300 rounded py-2 px-5">
      <div className="flex justify-between w-full">
        <h2 className="font-semibold">{title}</h2>
        {children}
      </div>
      <b className="text-xl">{mainData}</b>
      <p className="text-gray-400 text-sm">
        {availableTable
          ? `총 ${availableTable} 테이블`
          : `전날 대비 ${increment}%`}
      </p>
    </div>
  );
}
