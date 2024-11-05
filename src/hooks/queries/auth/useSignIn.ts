import { SignInRequestType } from '@/types';
import { tokenManager } from '@/utils/tokenManager';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export const signInFetch = async (signInData: SignInRequestType) => {
  const response = await signIn('credentials', {
    ...signInData,
    redirect: false,
  });

  if (!response?.ok) {
    throw new Error(response?.error || '로그인에 실패했습니다');
  }

  return response;
};

export const useSignIn = () => {
  const router = useRouter();

  const { mutate: signInMutation } = useMutation({
    mutationFn: signInFetch,
    onSuccess: async () => {
      const token = await tokenManager.fetchHttpOnlyToken();
      console.log(token);
      router.push('/');
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return { signInMutation };
};
