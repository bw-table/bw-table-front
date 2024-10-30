'use client';

import { useState } from 'react';
import CommonButton from '@/components/common/button/CommonButton';
import FormInput from '@/components/common/input/FormInput';
import ValidationMessage from '@/components/feature/signup/ValidationMessage';
import { signupValidationRules } from '@/constants/validationRules';
import Logo from '@public/Logo.svg';
import { useForm } from 'react-hook-form';

export interface SignupFormData {
  email: string;
  password: string;
  checkPassword: string;
  tel: string;
  nickname: string;
  businessNumber: string;
}

export default function SignupForm() {
  const [management, setManagement] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    getValues,
  } = useForm<SignupFormData>({
    mode: 'all',
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

      <div className="flex items-center gap-2 mb-1.5">
        <input
          type="checkbox"
          id="management"
          checked={management}
          onChange={(e) => setManagement(e.target.checked)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="management" className="text-sm text-gray-700">
          사장님 이신가요?
        </label>
      </div>

      <form onSubmit={handleSubmit(handleSignup)}>
        <div>
          {/* 이메일 입력 */}
          <FormInput
            placeholder="이메일을 입력해 주세요."
            label="email"
            register={register}
            type="email"
            error={errors.email}
          />
          <div className="h-5 mb-2">
            <ValidationMessage
              error={errors.email?.message}
              isTouched={touchedFields.email}
            />
          </div>

          {/* 비밀번호 입력 */}
          <FormInput
            placeholder="비밀번호를 입력해 주세요."
            label="password"
            register={register}
            type="password"
            error={errors.password}
            rules={signupValidationRules.password}
          />
          <div className="h-5 mb-2">
            <ValidationMessage
              successMessage="사용 가능한 비밀번호 입니다"
              error={errors.password?.message}
              isTouched={touchedFields.password}
            />
          </div>

          {/* 비밀번호 확인 */}
          <FormInput
            placeholder="비밀번호를 한번 더 입력해 주세요."
            label="checkPassword"
            register={register}
            type="password"
            error={errors.checkPassword}
            rules={signupValidationRules.checkPassword(getValues)}
          />
          <div className="h-5 mb-2">
            <ValidationMessage
              successMessage="비밀번호 두개가 일치합니다"
              error={errors.checkPassword?.message}
              isTouched={touchedFields.checkPassword}
            />
          </div>

          {/* 전화번호 입력 */}
          <FormInput
            placeholder="전화번호를 입력해 주세요. (예: 01012345678)"
            label="tel"
            register={register}
            type="number"
            error={errors.tel}
            rules={signupValidationRules.tel}
          />
          <div className="h-5 mb-2">
            <ValidationMessage
              error={errors.tel?.message}
              isTouched={touchedFields.tel}
            />
          </div>

          {/* 닉네임 입력 */}
          <FormInput
            placeholder="닉네임을 입력해 주세요. (3-20자, 영문/숫자)"
            label="nickname"
            register={register}
            type="text"
            error={errors.nickname}
          />
          <div className="h-5 mb-2">
            <ValidationMessage
              error={errors.nickname?.message}
              isTouched={touchedFields.nickname}
            />
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${management ? 'h-[74px]' : 'h-0'} overflow-hidden`}
          >
            {management && (
              <>
                <FormInput
                  placeholder="사업자등록번호를 입력해 주세요. (숫자 10자리)"
                  label="businessNumber"
                  register={register}
                  type="number"
                  error={errors.businessNumber}
                />
                <div className="h-5 mb-2">
                  <ValidationMessage
                    error={errors.businessNumber?.message}
                    isTouched={touchedFields.businessNumber}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <CommonButton type="submit" classNames="w-full">
          회원가입
        </CommonButton>
      </form>
    </div>
  );
}
