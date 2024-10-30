'use client';

import CommonButton from '@/components/common/button/CommonButton';
import FormInput from '@/components/common/input/FormInput';
import { signupValidationRules } from '@/constants/validationRules';
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
              // rules={signupValidationRules.email(checkEmail)}
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
              rules={signupValidationRules.password}
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
              rules={signupValidationRules.checkPassword(getValues)}
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
              rules={signupValidationRules.tel}
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
              // rules={signupValidationRules.nickname(checkNickname)}
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
