'use client';

import CommonButton from '@/components/common/button/CommonButton';
import FormInput from '@/components/common/input/FormInput';
import { useForm } from 'react-hook-form';

interface SignupFormData {
  email: string;
  password: string;
  checkPassword: string;
  tel: string;
  nickname: string;
}

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignupFormData>({
    mode: 'onBlur',
  });

  const handleSignup = async (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto p-6 ">
      <h2 className="text-2xl font-bold text-center mb-6">회원가입</h2>
      <form onSubmit={handleSubmit(handleSignup)} className="space-y-6">
        <div className="space-y-4">
          {/* 이메일 입력 */}
          <div>
            <FormInput
              placeholder="이메일을 입력해 주세요."
              label="email"
              register={register}
              type="email"
              error={errors.email}
              rules={{
                required: '이메일을 입력해주세요',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: '올바른 이메일 형식이 아닙니다',
                },
                validate: {
                  // 이메일 중복 체크 백엔드 API 연동
                  checkDuplicate: async (_value) => {
                    return true;
                  },
                },
              }}
            />
            <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
          </div>

          {/* 비밀번호 입력 */}
          <div>
            <FormInput
              placeholder="비밀번호를 입력해 주세요."
              label="password"
              register={register}
              type="password"
              error={errors.password}
              rules={{
                required: '비밀번호를 입력해주세요',
                minLength: {
                  value: 8,
                  message: '비밀번호는 8자 이상이어야 합니다',
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                  message:
                    '대문자, 소문자, 숫자, 특수문자를 모두 포함해야 합니다',
                },
              }}
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.password?.message}
            </p>
          </div>

          {/* 비밀번호 확인 */}
          <div>
            <FormInput
              placeholder="비밀번호를 한번 더 입력해 주세요."
              label="checkPassword"
              register={register}
              type="password"
              error={errors.checkPassword}
              rules={{
                required: '비밀번호를 한번 더 입력해주세요',
                validate: (value) =>
                  value === getValues('password') ||
                  '비밀번호가 일치하지 않습니다',
              }}
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.checkPassword?.message}
            </p>
          </div>

          {/* 전화번호 입력 */}
          <div>
            <FormInput
              placeholder="전화번호를 입력해 주세요. (예: 010-1234-5678)"
              label="tel"
              register={register}
              type="tel"
              error={errors.tel}
              rules={{
                required: '전화번호를 입력해주세요',
                pattern: {
                  value: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
                  message:
                    '올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)',
                },
              }}
            />
            <p className="mt-1 text-sm text-red-500">{errors.tel?.message}</p>
          </div>

          {/* 닉네임 입력 */}
          <div>
            <FormInput
              placeholder="닉네임을 입력해 주세요. (3-20자, 영문/숫자)"
              label="nickname"
              register={register}
              type="text"
              error={errors.nickname}
              rules={{
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
                  value: /^[A-Za-z0-9]+$/,
                  message: '영문자와 숫자만 사용 가능합니다',
                },
                validate: {
                  // 닉네임 중복 체크 백엔드 API 연동 필요
                  checkDuplicate: async (value) => {
                    return true;
                  },
                },
              }}
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.nickname?.message}
            </p>
          </div>
        </div>

        <div className="pt-4">
          <CommonButton type="submit" classNames="w-full">
            회원가입
          </CommonButton>
        </div>
      </form>
    </div>
  );
}
