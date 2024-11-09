import { axiosAuth } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKeys';

const fetchAPI = async (restaurantId: number) => {
  const res = await axiosAuth.get(`${END_POINT.RESTAURANTS}/${restaurantId}/reviews`);
  return res.data;
};

export const useGetReviewList = (restaurantId: number) => {
  const {
    data: reviewData,
    isLoading: isReviewLoading,
    isSuccess: isReviewLoadingSuccess,
    isError: isReviewError,
  } = useQuery({
    queryKey: [QUERY_KEYS.REVIEWS, restaurantId],
    queryFn: () => fetchAPI(restaurantId),
  });
  const totalReviews = reviewData ? reviewData.length : 0;

  if (isReviewLoadingSuccess) {
    console.log('데이터 가져오기 성공:', reviewData);
  }

  return {
    totalReviews,
    reviewData,
    isReviewLoading,
    isReviewError,
  };
};
