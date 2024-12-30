import { useQuery } from '@tanstack/react-query';
import { END_POINT } from '@/constants/endPoint';
import { axiosAuth } from '@/api/axiosInstance';
import { QUERY_KEYS } from '@/constants/queryKeys';


const fetchAPI = async () => {
  const response = await axiosAuth.get(`${END_POINT.GUEST_RESERVATIONS}`);
  return response.data;
};

export default function useGetMyReservations() {
  const {
    data: myReservations,
    isLoading: myReservationsIsLoading,
    isError: myReservationsIsError,
    isSuccess: myReservationsIsSuccess,
  } = useQuery({
    queryKey: [QUERY_KEYS.GUEST_RESERVATIONS],
    queryFn: () => fetchAPI(),
  });

  if (myReservationsIsSuccess) {
    console.log('데이터 가져오기 성공:',  myReservations);
  }

  if (myReservationsIsError) {
    console.error('데이터 가져오기 실패:');
  }

  return {
    myReservations,
    myReservationsIsLoading,
    myReservationsIsError,
    myReservationsIsSuccess,
  };
};
