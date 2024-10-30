import { REGEX_PATTERNS } from '@/constants/regex';
import { RegisterOptions } from 'react-hook-form';

export const signupValidationRules = {
  email: (
    checkEmail: (email: string) => Promise<boolean>,
  ): RegisterOptions => ({
    required: '이메일을 입력해주세요',
    pattern: {
      value: REGEX_PATTERNS.EMAIL,
      message: '올바른 이메일 형식이 아닙니다',
    },
    validate: {
      checkDuplicate: async (value) => {
        const isAvailable = await checkEmail(value);
        return isAvailable || '이미 사용 중인 이메일입니다';
      },
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
  } satisfies RegisterOptions,

  checkPassword: (getValues: () => Record<string, any>): RegisterOptions => ({
    required: '비밀번호를 한번 더 입력해주세요',
    validate: (value: string) =>
      value === getValues().password || '비밀번호가 일치하지 않습니다',
  }),

  nickname: (
    checkNickname: (nickname: string) => Promise<boolean>,
  ): RegisterOptions => ({
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
    validate: {
      checkDuplicate: async (value) => {
        const isAvailable = await checkNickname(value);
        return isAvailable || '이미 사용 중인 닉네임입니다';
      },
    },
  }),

  tel: {
    required: '전화번호를 입력해주세요',
    pattern: {
      value: REGEX_PATTERNS.TEL,
      message: '올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)',
    },
  } satisfies RegisterOptions,
} as const;
