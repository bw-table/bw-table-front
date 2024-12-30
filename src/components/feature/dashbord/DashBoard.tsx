'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import React, { useState } from 'react';
import Badge from '@/components/common/badge/Badge';
import ReservationModal from '@/components/feature/dashbord/reservationDetailModal';
import { useStatusChange } from '@/hooks/queries/management/useStatusChange';
import { useGetReservationList } from '@/hooks/queries/reservation/useGetReservations';
import { useDateStore } from '@/store/management';
import { ReservationType, StatusVariant } from '@/types';
import { groupReservationsByTime } from '@/utils/groupReservationsByTime';
import { switchToKorean } from '@/utils/switchStatusLang';
import { useSession } from 'next-auth/react';
import { IoSettingsOutline } from "react-icons/io5";
import SettingsModal from './ReservationSettingModal';

dayjs.locale('ko');

export default function DashBoard() {
  const [selectedReservation, setSelectedReservation] =
    useState<ReservationType | null>(null);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [reservationStatus, setReservationStatus] = useState<Record<string, StatusVariant>>({});
  const date = useDateStore.use.date();
  const { data: session } = useSession({ required: true });
  const { reservationData, isReservationLoading } = useGetReservationList(
    session?.user.restaurantId,
    undefined,
    dayjs(date).format('YYYY-MM-DD'),
  );
  const { visitedMutation, noShowMutation, cancelMutation } = useStatusChange();

  const handleChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    reservationId: string,
    date: string,
  ) => {
    const status = e.target.value as StatusVariant;
    try {
      switch (status) {
        case 'VISITED':
          await visitedMutation({ reservationId, date });
          break;
        case 'NO_SHOW':
          await noShowMutation({ reservationId, date });
          break;
        case 'CANCELED':
          await cancelMutation({ reservationId, date });
        default:
          break;
      }
      setReservationStatus((prev) => ({
        ...prev,
        [reservationId]: status,
      }));
    } catch (error) {
      console.error('Status change failed:', error);
    }
  };

  const handleCloseModal = () => {
    setSelectedReservation(null);
  };

  const handleOpenSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const handleCloseSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };

  if (isReservationLoading) {
    return (
      <div className="flex items-center justify-center col-span-1 lg:col-span-5 p-3 border border-solid border-border-300 rounded">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div className="col-span-1 lg:col-span-5 p-3 border border-solid border-border-300 rounded ">
      <div className="flex justify-between">
        <p className="text-2xl font-bold mb-5">
          {dayjs(date).format('YYYY-MM-DD (dd)')} 예약 목록
        </p>
        <button
          onClick={handleOpenSettingsModal}
          className="text-2xl"
        >
          <IoSettingsOutline />
        </button>
      </div>
      <div className="join join-vertical w-full">
        {Object.entries(groupReservationsByTime(reservationData || []))
          .sort(([timeA], [timeB]) => timeA.localeCompare(timeB))
          .map(([time, reservations]) => (
            <div
              key={time}
              className="collapse collapse-arrow join-item border-base-300 border"
            >
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                {time} ({reservations.length}건)
              </div>
              <div className="collapse-content">
                {reservations.map((reservation) => (
                  <div
                    key={reservation.reservationId}
                    className="flex items-center justify-between py-2 border-b last:border-b-0"
                  >
                    <button
                      className="cursor-pointer font-semibold"
                      onClick={() => setSelectedReservation(reservation)}
                    >
                      {reservation.nickname}
                    </button>
                    <div className="flex items-center gap-4">
                      <Badge
                        variant={reservationStatus[reservation.reservationId] || reservation.reservationStatus as StatusVariant}
                      >
                        {switchToKorean(reservationStatus[reservation.reservationId] || reservation.reservationStatus)}
                      </Badge>
                      <select
                        value={reservationStatus[reservation.reservationId] || reservation.reservationStatus}
                        onChange={(e) =>
                          handleChange(
                            e,
                            String(reservation.reservationId),
                            reservation.reservationDate,
                          )
                        }
                        className="select select-bordered w-full max-w-xs"
                      >
                        <option value="PENDING">선택</option>
                        <option value="VISITED">방문</option>
                        <option value="NO_SHOW">노쇼</option>
                        <option value="CANCELED">취소</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        <ReservationModal
          id="reservation_modal"
          reservation={selectedReservation}
          onClose={handleCloseModal}
        />
        <SettingsModal isOpen={isSettingsModalOpen} onClose={handleCloseSettingsModal} />
      </div>
    </div>
  );
}
