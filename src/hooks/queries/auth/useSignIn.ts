import { SignInRequestType } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export const signInFetch = async (signInData: SignInRequestType) => {
  const response = await signIn('email', {
    ...signInData,
    redirect: false,
  });

  console.log(response);

  if (response?.error) {
    throw new Error(response?.error || '로그인에 실패했습니다');
  }

  return response;
};

export const useSignIn = () => {
  const router = useRouter();

  const { mutate: signInMutation } = useMutation({
    mutationFn: signInFetch,
    onSuccess: async () => {
      router.push('/main');
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });
  return { signInMutation };
};
