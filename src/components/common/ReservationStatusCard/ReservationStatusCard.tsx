import { ReservationStateCardProps } from '@/types';

export default function ReservationStatusCard({
  title,
  mainData,
  children,
}: ReservationStateCardProps) {
  return (
    <div className="flex justify-between border border-solid border-border-300 rounded py-7 px-5 w-full">
      <div className="flex items-center gap-3">
        {children}
        {title}
      </div>
      <p className="font-bold text-lg">{mainData}</p>
    </div>
  );
}
