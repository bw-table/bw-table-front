import { axiosDefault } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { SignInRequestType } from '@/types';
import { useMutation } from '@tanstack/react-query';

export const signIn = async (signInData: SignInRequestType) => {
  const res = await axiosDefault.post(END_POINT.SIGN_IN, signInData);
  return res.data;
};

export const useSignIn = () => {
  const { mutate: signInMutation } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      console.log('성공');
    },
  });
  return { signInMutation };
};
