import { useEffect } from 'react';
import { ReservationType } from '@/types';
import ClockIcon from '@public/ClockIcon.svg';
import PeopleBlack from '@public/PeopleBlackIcon.svg';

interface ReservationModalProps {
  id: string;
  reservation: ReservationType | null;
  onClose: () => void;
}

export default function ReservationModal({
  id,
  reservation,
  onClose,
}: ReservationModalProps) {
  useEffect(() => {
    const element = document.getElementById(id);
    const modal = element instanceof HTMLDialogElement ? element : null;

    if (reservation && modal) {
      modal.showModal();
    } else if (modal) {
      modal.close();
    }
  }, [id, reservation]);

  if (!reservation) return null;

  return (
    <dialog
      id={id}
      className="modal modal-bottom sm:modal-middle"
      onClose={onClose}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">예약 상세 정보</h3>
        <div className="py-4 space-y-2">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <ClockIcon />
              <span className="font-semibold">시간</span>
            </div>
            <span>{reservation.reservationTime}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <PeopleBlack />
              <span className="font-semibold">예약자</span>
            </div>
            <span>{reservation.nickname}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <PeopleBlack />
              <span className="font-semibold">인원</span>
            </div>
            <span>{reservation.numberOfPeople}명</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold">요청사항</span>
            <textarea
              defaultValue={reservation.specialRequest}
              readOnly
              className="h-20  border border-solid border-border-300 rounded focus:outline-0 p-3"
            />
          </div>
          <div className="flex justify-between" />
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">닫기</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
