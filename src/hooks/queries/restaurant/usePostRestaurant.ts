import { useMutation } from '@tanstack/react-query';
import { END_POINT } from '@/constants/endPoint';
import { axiosAuth } from '@/api/axiosInstance';
import { useRouter } from 'next/navigation';
import useToast from '../useToast';

const fetchAPI = async (data: FormData) => {
  const response = await axiosAuth.post(END_POINT.NEW_RESTAURANTS, data);
  return response.data;
};

export const usePostRestaurant = () => {
  const router = useRouter();
  const { toastSuccess, toastError } = useToast();
  const { mutate: submitRestaurant, isPending, isSuccess, isError } = useMutation({
    mutationKey:['newRestaurant'],
    mutationFn: fetchAPI,
    onSuccess: (data) => {
      console.log('가게 등록 성공:', data);
      router.push('/management');
      toastSuccess('가게가 성공적으로 등록되었습니다!🍴');
    },
    onError: (error) => {
      console.error('가게 등록 실패:', error);
      toastError('가게 등록에 실패하였습니다😭');
    },
  });

  return {
    submitRestaurant,
    isPending,
    isSuccess,
    isError,
  };
};

