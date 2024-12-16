import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { axiosAuth } from '@/api/axiosInstance';
import { MainRestaurantType } from '@/types/form';
import { END_POINT } from '@/constants/endPoint';


export interface MainRestaurantsResponse {
  eventRestaurants: MainRestaurantType[];
  reviewRestaurants: MainRestaurantType[];
  recommendations: MainRestaurantType[];
  newRestaurants: MainRestaurantType[];
}

export const fetchMainRestaurants = async (): Promise<MainRestaurantsResponse> => {
  const response = await axiosAuth.get<MainRestaurantsResponse>(`${END_POINT.MAIN_PAGE}`);
  return response.data;
};

export const useGetMainRestaurants = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.MAIN_RESTAURANTS],
    queryFn: fetchMainRestaurants,
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000 * 2,
  });

  return {
    mainRestaurants: data,
    isLoading,
    isError,
    error,
  };
};
