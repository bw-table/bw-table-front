import { axiosAuth } from '@/api/axiosInstance';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type MutationParams = {
  reservationId: string;
  date: string;
};

export const putVisited = async ({ reservationId, date }: MutationParams) => {
  const res = await axiosAuth.put(`api/reservations/${reservationId}/visit`);
  return { data: res.data, date };
};

export const putNoShow = async ({ reservationId, date }: MutationParams) => {
  const res = await axiosAuth.put(`api/reservations/${reservationId}/noshow`);
  return { data: res.data, date };
};

export const putCancel = async ({ reservationId, date }: MutationParams) => {
  const res = await axiosAuth.put(
    `api/reservations/${reservationId}/cancel`,
  );
  return { data: res.data, date };
};

export const useStatusChange = () => {
  const queryClient = useQueryClient();

  const { mutate: visitedMutation } = useMutation({
    mutationFn: putVisited,
    onSuccess: (data, variables) => {
      console.log('성공', data);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.RESERVATIONS, variables.date],
      });
    },
  });

  const { mutate: noShowMutation } = useMutation({
    mutationFn: putNoShow,
    onSuccess: (data, variables) => {
      console.log('성공', data);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.RESERVATIONS, variables.date],
      });
    },
  });

  const { mutate: cancelMutation } = useMutation({
    mutationFn: putCancel,
    onSuccess: (data, variables) => {
      console.log('성공', data);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.RESERVATIONS, variables.date],
      });
    },
  });

  return { visitedMutation, noShowMutation, cancelMutation };
};
