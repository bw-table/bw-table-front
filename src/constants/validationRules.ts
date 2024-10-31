import { REGEX_PATTERNS } from '@/constants/regex';
import { SignupFormData } from '@/types';
import { RegisterOptions } from 'react-hook-form';

export const signupValidationRules = {
  email: (): RegisterOptions<SignupFormData, 'email'> => ({
    required: '이메일을 입력해주세요',
    pattern: {
      value: REGEX_PATTERNS.EMAIL,
      message: '올바른 이메일 형식이 아닙니다',
    },
  }),

  password: {
    required: '비밀번호를 입력해주세요',
    minLength: {
      value: 8,
      message: '비밀번호는 8자 이상이어야 합니다',
    },
    pattern: {
      value: REGEX_PATTERNS.PASSWORD,
      message: '대문자, 소문자, 숫자, 특수문자를 모두 포함해야 합니다',
    },
  } satisfies RegisterOptions<SignupFormData, 'password'>,

  checkPassword: (
    getValues: () => SignupFormData,
  ): RegisterOptions<SignupFormData, 'checkPassword'> => ({
    required: '비밀번호를 한번 더 입력해주세요',
    validate: (value: string) =>
      value === getValues().password || '비밀번호가 일치하지 않습니다',
  }),

  nickname: (): RegisterOptions<SignupFormData, 'nickname'> => ({
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
  }),

  tel: {
    required: '전화번호를 입력해주세요',
    pattern: {
      value: REGEX_PATTERNS.TEL,
      message: '올바른 전화번호 형식이 아닙니다 (예: 01012345678)',
    },
  } satisfies RegisterOptions<SignupFormData, 'contactNumber'>,

  businessNumber: (): RegisterOptions<
    SignupFormData,
    'businessRegistrationNumber'
  > => ({
    required: '사업자등록번호를 입력해주세요',
    pattern: {
      value: REGEX_PATTERNS.BUSINESS,
      message: '사업자등록번호는 10자리 숫자여야 합니다',
    },
  }),
} as const;
