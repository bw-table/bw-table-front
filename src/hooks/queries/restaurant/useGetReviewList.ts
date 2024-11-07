import { axiosAuth } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { DB } from '@/mocks/db/db';

// 목데이터 사용중
// const fetchAPI = async (restaurantId: number) => {
//   const res = await axiosAuth.get(`${END_POINT.RESTAURANTS}/${restaurantId}/reviews`);
//   return res.data;
// };

export const useGetReviewList = (restaurantId: number) => {
  const {
    data: reviewData,
    isLoading: isReviewLoading,
    isSuccess: isReviewLoadingSuccess,
    isError: isReviewError,
  } = useQuery({
    queryKey: [QUERY_KEYS.REVIEWS, restaurantId],
    queryFn: () => {
      return DB.reviews.filter(review => review.restaurantId === restaurantId);
    },
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
