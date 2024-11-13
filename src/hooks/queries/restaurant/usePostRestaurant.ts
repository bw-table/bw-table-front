import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { END_POINT } from '@/constants/endPoint';
import { axiosDefault } from '@/api/axiosInstance';
import { SubmitRestaurantData } from '@/types';

const fetchAPI = async (data: SubmitRestaurantData) => {
  const response = await axiosDefault.post(END_POINT.NEW_RESTAURANTS, data);
  return response.data;
};

export const usePostRestaurant = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<SubmitRestaurantData>();

  const { mutate: submitRestaurant, isPending, isSuccess, isError } = useMutation({
    mutationFn: fetchAPI,
    onSuccess: (data) => {
      console.log('가게 등록 성공:', data);
    },
    onError: (error) => {
      console.error('가게 등록 실패:', error);
    },
  });

  return {
    register,
    handleSubmit,
    submitRestaurant,
    setValue,
    errors,
    isPending,
    isSuccess,
    isError,
  };
};
