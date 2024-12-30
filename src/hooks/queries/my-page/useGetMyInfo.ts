import { useQuery } from '@tanstack/react-query';
import { END_POINT } from '@/constants/endPoint';
import { axiosAuth } from '@/api/axiosInstance';
import { QUERY_KEYS } from '@/constants/queryKeys';


const fetchAPI = async () => {
  const response = await axiosAuth.get(`${END_POINT.MY_INFO}`);
  return response.data;
};

export default function useGetMyInfo() {
  const {
    data: myInfo,
    isLoading: myInfoIsLoading,
    isError: myInfoIsError,
    isSuccess: myInfoIsSuccess,
  } = useQuery({
    queryKey: [QUERY_KEYS.MY_INFO],
    queryFn: () => fetchAPI(),
  });

  if (myInfoIsSuccess) {
    console.log('데이터 가져오기 성공:',  myInfo);
  }

  if (myInfoIsError) {
    console.error('데이터 가져오기 실패:');
  }

  return {
    myInfo,
    myInfoIsLoading,
    myInfoIsError,
    myInfoIsSuccess,
  };
};
