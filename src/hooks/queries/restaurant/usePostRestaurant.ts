import { useMutation } from '@tanstack/react-query';
import { END_POINT } from '@/constants/endPoint';
import { axiosAuth } from '@/api/axiosInstance';
import { useRouter } from 'next/navigation';

const fetchAPI = async (data: FormData) => {
  const response = await axiosAuth.post(END_POINT.NEW_RESTAURANTS, data);
  return response.data;
};

export const usePostRestaurant = () => {
  const router = useRouter();
  const { mutate: submitRestaurant, isPending, isSuccess, isError } = useMutation({
    mutationFn: fetchAPI,
    onSuccess: (data) => {
      console.log('가게 등록 성공:', data);
      router.push('/management');
    },
    onError: (error) => {
      console.error('가게 등록 실패:', error);
    },
  });

  return {
    submitRestaurant,
    isPending,
    isSuccess,
    isError,
  };
};

