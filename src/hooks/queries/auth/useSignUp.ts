import { axiosDefault } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { SignUpRequestType } from '@/types';
import { useMutation } from '@tanstack/react-query';

export const signUp = async (signUpData: SignUpRequestType) => {
  const res = await axiosDefault.post(END_POINT.SIGNUP, signUpData);
  return res.data;
};

export const useSignUp = () => {
  const { mutate: signUpMutation } = useMutation({
    mutationFn: signUp,
    onSuccess: () => console.log('성공'),
  });

  return { signUpMutation };
};
