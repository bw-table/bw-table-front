import { REGEX_PATTERNS } from '@/constants/regex';
import { useSignupDuplicate } from '@/hooks/queries/auth/useSignupDuplicate';
import { useAuthStore } from '@/store';
import { SignupFormData } from '@/types';
import { UseFormGetValues } from 'react-hook-form';

export const useSignupRules = (getValues: UseFormGetValues<SignupFormData>) => {
  const {
    nicknameDuplicateMutation,
    businessDuplicateMutation,
    telDuplicateMutation,
    emailDuplicateMutation,
    // businessCheckMutation,
  } = useSignupDuplicate();

  const {
    isEmailDuplicate,
    isNicknameDuplicate,
    isTelDuplicate,
    isBusinessDuplicate,
  } = useAuthStore();

  const emailRule = {
    required: '이메일을 입력해주세요',
    pattern: {
      value: REGEX_PATTERNS.EMAIL,
      message: '올바른 이메일 형식이 아닙니다',
    },
    validate: async (value: string) => {
      if (isEmailDuplicate) {
        return true;
      }
      const res = await emailDuplicateMutation(value);
      return res.data?.isEmailDuplicate ? '이미 존재하는 이메일 입니다' : true;
    },
  };

  const passwordRule = {
    required: '비밀번호를 입력해주세요',
    minLength: {
      value: 8,
      message: '비밀번호는 8자 이상이어야 합니다',
    },
    pattern: {
      value: REGEX_PATTERNS.PASSWORD,
      message: '대문자, 소문자, 숫자, 특수문자를 모두 포함해야 합니다',
    },
  } as const;

  const checkPasswordRule = {
    required: '비밀번호를 한번 더 입력해주세요',
    validate: (value: string) =>
      value === getValues().password || '비밀번호가 일치하지 않습니다',
  };

  const nameRule = {
    required: '이름을 입력해주세요',
    maxLength: {
      value: 5,
      message: '이름은 5자를 초과할 수 없습니다',
    },
    pattern: {
      value: REGEX_PATTERNS.NAME,
      message: '한글 이름만 가능합니다.',
    },
  };

  const nicknameRule = {
    required: '닉네임을 입력해주세요',
    minLength: {
      value: 3,
      message: '닉네임은 3자 이상이어야 합니다',
    },
    maxLength: {
      value: 20,
      message: '닉네임은 20자를 초과할 수 없습니다',
    },
    pattern: {
      value: REGEX_PATTERNS.NICKNAME,
      message: '영문자와 숫자만 사용 가능합니다',
    },
    validate: async (value: string) => {
      if (isNicknameDuplicate) {
        return true;
      }
      const res = await nicknameDuplicateMutation(value);
      return res.data?.isNicknameDuplicate
        ? '이미 존재하는 닉네임 입니다'
        : true;
    },
  };

  const telRule = {
    required: '전화번호를 입력해주세요',
    pattern: {
      value: REGEX_PATTERNS.TEL,
      message: '올바른 전화번호 형식이 아닙니다 (예: 01012345678)',
    },
    validate: async (value: string) => {
      if (isTelDuplicate) {
        return true;
      }
      const res = await telDuplicateMutation(value);
      return res.data?.isPhoneDuplicate ? '이미 존재하는 번호 입니다' : true;
    },
  } as const;

  const businessNumberRule = {
    required: '사업자등록번호를 입력해주세요',
    pattern: {
      value: REGEX_PATTERNS.BUSINESS,
      message: '사업자등록번호는 10자리 숫자여야 합니다',
    },
    validate: async (value: string) => {
      if (isBusinessDuplicate) {
        return true;
      }
      const res = await businessDuplicateMutation(value);
      // const check = await businessCheckMutation(value);
      // const isChecked = check.match_cnt === 1;
      if (res.data?.isBusinessNumberDuplicate) {
        return '이미 존재하는 사업자 번호 입니다';
      }
      // if (!isChecked) {
      //   return '없는 사업자 번호 입니다.';
      // }
      return true;
    },
  };

  return {
    email: emailRule,
    password: passwordRule,
    checkPassword: checkPasswordRule,
    name: nameRule,
    nickname: nicknameRule,
    tel: telRule,
    businessNumber: businessNumberRule,
  };
};
