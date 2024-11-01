import { axiosDefault } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { useMutation } from '@tanstack/react-query';

// 이메일 중복 체크
const emailDuplicate = async (email: string) => {
  const res = await axiosDefault.post(END_POINT.EMAIL_DUPLICATE, { email });
  return res.data;
};

// 닉네임 중복 체크
const nicknameDuplicate = async (nickname: string) => {
  const res = await axiosDefault.post(END_POINT.NICKNAME_DUPLICATE, {
    nickname,
  });
  return res.data;
};

// 전화번호 중복 체크
const telDuplicate = async (tel: string) => {
  const res = await axiosDefault.post(END_POINT.TEL_DUPLICATE, { tel });
  return res.data;
};

// 사업자 번호 중복 체크
const businessDuplicate = async (business: string) => {
  const res = await axiosDefault.post(END_POINT.BUSINESS_DUPLICATE, {
    business,
  });
  return res.data;
};

// 메인 쿼리 훅
export const useSignupDuplicate = () => {
  const { mutateAsync: emailDuplicateMutation } = useMutation({
    mutationFn: emailDuplicate,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const { mutateAsync: nicknameDuplicateMutation } = useMutation({
    mutationFn: nicknameDuplicate,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const { mutateAsync: telDuplicateMutation } = useMutation({
    mutationFn: telDuplicate,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const { mutateAsync: businessDuplicateMutation } = useMutation({
    mutationFn: businessDuplicate,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    emailDuplicateMutation,
    nicknameDuplicateMutation,
    telDuplicateMutation,
    businessDuplicateMutation,
  };
};
