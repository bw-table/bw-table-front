import { useQuery } from '@tanstack/react-query';
import { END_POINT } from '@/constants/endPoint';
import { axiosAuth } from '@/api/axiosInstance';
import { QUERY_KEYS } from '@/constants/queryKeys';


const fetchAPI = async () => {
  const response = await axiosAuth.get(`${END_POINT.MY_REVIEWS}`);
  return response.data;
};

export default function useGetMyReviews() {
  const {
    data: myReviews,
    isLoading: myReviewsIsLoading,
    isError: myReviewsIsError,
    isSuccess: myReviewsIsSuccess,
  } = useQuery({
    queryKey: [QUERY_KEYS.MY_REVIEWS],
    queryFn: () => fetchAPI(),
  });

  if (myReviewsIsSuccess) {
    console.log('데이터 가져오기 성공:',  myReviews);
  }

  if (myReviewsIsError) {
    console.error('데이터 가져오기 실패:');
  }

  return {
    myReviews,
    myReviewsIsLoading,
    myReviewsIsError,
    myReviewsIsSuccess,
  };
};
