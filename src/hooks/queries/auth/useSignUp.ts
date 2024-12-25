import { axiosDefault } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { SignUpRequestType } from '@/types';
import { useMutation } from '@tanstack/react-query';
import useToast from '../useToast';

export const signUp = async (signUpData: SignUpRequestType) => {
  const res = await axiosDefault.post(END_POINT.SIGNUP, signUpData);
  return res.data;
};

export const useSignUp = () => {
  const { toastSuccess } = useToast();
  const { mutate: signUpMutation } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {console.log('성공'), toastSuccess('회원가입이 성공적으로 완료되었습니다!');},
    
  });

  return { signUpMutation };
};
