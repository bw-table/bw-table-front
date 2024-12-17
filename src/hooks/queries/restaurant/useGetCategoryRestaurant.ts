import { useQuery } from '@tanstack/react-query';
import { END_POINT } from '@/constants/endPoint';
import { axiosDefault } from '@/api/axiosInstance';
import { QUERY_KEYS } from '@/constants/queryKeys';


interface CategoryRestaurantsType {
  id: number;
  name: string;
  averageRating: number;
  category: string;
  image: string;
}


const fetchCategoryAPI = async (category: string): Promise<CategoryRestaurantsType[]> => {
  const response = await axiosDefault.get(`${END_POINT.MAIN_PAGE}/${category}`);
  return response.data;
};

export default function useGetCategoryRestaurants(category: string) {
  const {
    data: categoryRestaurants,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
    error: categoryError,
    isSuccess: isCategorySuccess,
  } = useQuery<CategoryRestaurantsType[]>({
    queryKey: [QUERY_KEYS.MAIN_CATEGORY_RESTAURANTS, category],
    queryFn: () => fetchCategoryAPI(category),
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000 * 2,
  });

  if (isCategorySuccess) {
    console.log('카테고리 데이터 가져오기 성공:', categoryRestaurants);
  }

  if (isCategoryError) {
    console.error('카테고리 데이터 가져오기 실패:', categoryError);
  }

  return {
    categoryRestaurants,
    isCategoryLoading,
    isCategoryError,
    isCategorySuccess,
    categoryError,
  };
}
