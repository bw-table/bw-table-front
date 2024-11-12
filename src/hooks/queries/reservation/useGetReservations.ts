import { axiosAuth } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ReservationsRequestType } from '@/types';
import { useQuery } from '@tanstack/react-query';

const fetchAPI = async (params: ReservationsRequestType) => {
  const {
    page,
    size,
    restaurantId,
    memberId,
    reservationStatus,
    reservationDate,
    reservationTime,
  } = params;

  const response = await axiosAuth.get(`${END_POINT.RESERVATIONS}`, {
    params: {
      page,
      size,
      restaurantId,
      memberId,
      reservationStatus,
      reservationDate,
      reservationTime,
    },
  });

  return response.data;
};

export const useGetReservationList = (
  restaurantId?: number,
  memberId?: number,
  reservationDate?: string,
) => {
  const {
    data: reservationData,
    isLoading: isReservationLoading,
    isError: isReservationError,
  } = useQuery({
    queryKey: [
      QUERY_KEYS.RESERVATIONS,
      restaurantId,
      memberId,
      reservationDate,
    ],
    queryFn: () =>
      fetchAPI({
        page: 1,
        size: 10,
        restaurantId,
        memberId,
        reservationStatus: '',
        reservationDate,
        reservationTime: '',
      }),
  });

  return {
    reservationData,
    isReservationLoading,
    isReservationError,
  };
};
