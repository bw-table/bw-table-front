import axios from 'axios'; // 이메일 중복 체크
import { axiosDefault } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { useAuthStore } from '@/store';
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
const telDuplicate = async (phone: string) => {
  const res = await axiosDefault.post(END_POINT.TEL_DUPLICATE, { phone });
  return res.data;
};

// 사업자 번호 중복 체크
const businessDuplicate = async (business: string) => {
  const res = await axiosDefault.post(END_POINT.BUSINESS_DUPLICATE, {
    business,
  });
  return res.data;
};
// 실제 사업자번호 여부 체크 -> 차후 재도입 예정
// const businessCheck = async (business: string) => {
//   const res = await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
//     b_no: [business],
//   });
//   return res.data;
// };

};

export const useSignupDuplicate = () => {
  const {
    setEmailDuplicate,
    setNicknameDuplicate,
    setTelDuplicate,
    setBusinessDuplicate,
  } = useAuthStore();

  const { mutateAsync: emailDuplicateMutation } = useMutation({
    mutationFn: emailDuplicate,
    onSuccess: (data) => {
      setEmailDuplicate(!data.data.isEmailDuplicate);
      return data;
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const { mutateAsync: nicknameDuplicateMutation } = useMutation({
    mutationFn: nicknameDuplicate,
    onSuccess: (data) => {
      setNicknameDuplicate(!data.data.isNicknameDuplicate);
      return data;
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const { mutateAsync: telDuplicateMutation } = useMutation({
    mutationFn: telDuplicate,
    onSuccess: (data) => {
      setTelDuplicate(!data.data.isPhoneDuplicate);
      return data;
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const { mutateAsync: businessDuplicateMutation } = useMutation({
    mutationFn: businessDuplicate,
    onSuccess: (data) => {
      setBusinessDuplicate(!data.data.isBusinessNumberDuplicate);
      return data;
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const { mutateAsync: businessCheckMutation } = useMutation({
    mutationFn: businessCheck,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error(error);
    },
  });
  // const { mutateAsync: businessCheckMutation } = useMutation({
  //   mutationFn: businessCheck,
  //   onSuccess: (data) => {
  //     return data;
  //   },
  //   onError: handleMutationError,
  // });

  return {
    businessCheckMutation,
    emailDuplicateMutation,
    nicknameDuplicateMutation,
    telDuplicateMutation,
    businessDuplicateMutation,
    // businessCheckMutation,
  };
};
