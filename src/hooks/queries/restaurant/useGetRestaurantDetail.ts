import { useQuery } from '@tanstack/react-query';
import { END_POINT } from '@/constants/endPoint';
import { axiosDefault } from '@/api/axiosInstance';
import { RestaurantDetailRequestType } from '@/types';


const fetchAPI = async (restaurantId:number):Promise<RestaurantDetailRequestType> => {
  const response = await axiosDefault.get(`${END_POINT.RESTAURANTS}/${restaurantId}`);
  return response.data;
};

export default function useGetRestaurantDetail(restaurantId: number) {
  const {
    data: restaurantDetail,
    isLoading: restaurantDetailIsLoading,
    isError: restaurantDetailIsError,
    isSuccess: restaurantDetailIsSuccess,
  } = useQuery<RestaurantDetailRequestType>({
    queryKey: ['restaurantDetail', restaurantId],
    queryFn: () => fetchAPI(restaurantId),
    enabled: !!restaurantId,
  });

  if (restaurantDetailIsSuccess) {
    console.log('데이터 가져오기 성공:', restaurantDetail);
  }

  if (restaurantDetailIsError) {
    console.error('데이터 가져오기 실패:');
  }

  return {
    restaurantDetail,
    restaurantDetailIsLoading,
    restaurantDetailIsError,
    restaurantDetailIsSuccess,
  };
};
