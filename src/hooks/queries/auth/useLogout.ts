import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export const signOutFetch = async () => {
  const response = await signOut({ redirect: false });

  if (!response) {
    throw new Error('로그아웃에 실패했습니다');
  }

  return response;
};

export const useSignOut = () => {
  const router = useRouter();

  const { mutate: signOutMutation } = useMutation({
    mutationFn: signOutFetch,
    onSuccess: async () => {
      console.log('로그아웃 성공');
      router.push('/main'); // 로그아웃 후 메인 페이지로 이동
    },
    onError: (error) => {
      console.error('로그아웃 실패:', error);
    },
  });

  return { signOutMutation };
};
