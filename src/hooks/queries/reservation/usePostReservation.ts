import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { END_POINT } from '@/constants/endPoint';
import { axiosDefault } from '@/api/axiosInstance';
import { ReservationData } from '@/types/request';

const fetchAPI = async (data: ReservationData) => {
  const response = await axiosDefault.post(END_POINT.RESERVATION, data);
  return response.data;
};

export const usePostReservation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ReservationData>();
  
  const { mutate: submitReservation, isPending, isSuccess, isError } = useMutation({
    mutationFn: fetchAPI,
    onSuccess: (data) => {
      console.log('예약 성공:', data);
    },
    onError: (error) => {
      console.error('예약 실패:', error);
    },
  });

  return {
    register,
    handleSubmit,
    submitReservation,
    errors,
    isPending,
    isSuccess,
    isError,
  };
};
