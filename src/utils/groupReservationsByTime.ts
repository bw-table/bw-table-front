import { ReservationType } from '@/types';

interface GroupedReservations {
  [key: string]: ReservationType[];
}

export const groupReservationsByTime = (reservations: ReservationType[]) => {
  const groupedByTime: GroupedReservations = {};

  reservations.forEach((reservation) => {
    const time = reservation.reservationTime;
    if (!groupedByTime[time]) {
      groupedByTime[time] = [];
    }

    groupedByTime[time].push({
      memberId: reservation.memberId,
      nickname: reservation.nickname,
      numberOfPeople: reservation.numberOfPeople,
      reservationDate: reservation.reservationDate,
      reservationId: reservation.reservationId,
      reservationStatus: reservation.reservationStatus,
      reservationTime: reservation.reservationTime,
      restaurantId: reservation.restaurantId,
      specialRequest: reservation.specialRequest,
    });
  });

  return groupedByTime;
};
