'use client';

import CommonButton from '@/components/common/button/CommonButton';
import FormInput from '@/components/common/input/FormInput';
import { signupValidationRules } from '@/constants/validationRules';
import Logo from '@public/Logo.svg';
import { useForm } from 'react-hook-form';

export interface SignupFormData {
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
    formState: { errors, touchedFields },
    getValues,
  } = useForm<SignupFormData>({
    mode: 'onBlur',
  });

  const handleSignup = async (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col px-3 w-full">
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <h1>
          <Logo />
        </h1>
        <h2 className="text-2xl font-bold text-center mb-6">회원가입</h2>
      </div>
      <form onSubmit={handleSubmit(handleSignup)} className="space-y-6">
        <div className="space-y-2">
          {/* 이메일 입력 */}
          <div className="h-[74px]">
            <FormInput
              placeholder="이메일을 입력해 주세요."
              label="email"
              register={register}
              type="email"
              error={errors.email}
              // rules={signupValidationRules.email(checkEmail)}
            />
            <p className="mt-1 h-5 text-sm">
              {errors.email?.message ? (
                <span className="text-red-500">{errors.email.message}</span>
              ) : touchedFields.email && !errors.email ? (
                <span className="text-green-600">사용 가능합니다</span>
              ) : null}
            </p>
          </div>

          {/* 비밀번호 입력 */}
          <div className="h-[74px]">
            <FormInput
              placeholder="비밀번호를 입력해 주세요."
              label="password"
              register={register}
              type="password"
              error={errors.password}
              rules={signupValidationRules.password}
            />
            <p className="mt-1 h-5 text-sm">
              {errors.password?.message ? (
                <span className="text-red-500">{errors.password.message}</span>
              ) : touchedFields.password && !errors.password ? (
                <span className="text-green-600">사용 가능합니다</span>
              ) : null}
            </p>
          </div>

          {/* 비밀번호 확인 */}
          <div className="h-[74px]">
            <FormInput
              placeholder="비밀번호를 한번 더 입력해 주세요."
              label="checkPassword"
              register={register}
              type="password"
              error={errors.checkPassword}
              rules={signupValidationRules.checkPassword(getValues)}
            />
            <p className="mt-1 h-5 text-sm">
              {errors.checkPassword?.message ? (
                <span className="text-red-500">
                  {errors.checkPassword.message}
                </span>
              ) : touchedFields.checkPassword && !errors.checkPassword ? (
                <span className="text-green-600">일치합니다</span>
              ) : null}
            </p>
          </div>

          {/* 전화번호 입력 */}
          <div className="h-[74px]">
            <FormInput
              placeholder="전화번호를 입력해 주세요. (예: 01012345678)"
              label="tel"
              register={register}
              type="number"
              error={errors.tel}
              rules={signupValidationRules.tel}
            />
            <p className="mt-1 h-5 text-sm">
              {errors.tel?.message ? (
                <span className="text-red-500">{errors.tel.message}</span>
              ) : touchedFields.tel && !errors.tel ? (
                <span className="text-green-600">사용 가능합니다</span>
              ) : null}
            </p>
          </div>

          {/* 닉네임 입력 */}
          <div className="h-[74px]">
            <FormInput
              placeholder="닉네임을 입력해 주세요. (3-20자, 영문/숫자)"
              label="nickname"
              register={register}
              type="text"
              error={errors.nickname}
              // rules={signupValidationRules.nickname(checkNickname)}
            />
            <p className="mt-1 h-5 text-sm">
              {errors.nickname?.message ? (
                <span className="text-red-500">{errors.nickname.message}</span>
              ) : touchedFields.nickname && !errors.nickname ? (
                <span className="text-green-600">사용 가능합니다</span>
              ) : null}
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
