'use client';

import { useState } from 'react';
import CommonButton from '@/components/common/button/CommonButton';
import FormInput from '@/components/common/input/FormInput';
import ValidationMessage from '@/components/feature/signup/ValidationMessage';
import { signupValidationRules } from '@/constants/validationRules';
import { SignupFormData } from '@/types';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  const [management, setManagement] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<SignupFormData>({
    mode: 'all',
  });

  const handleManagementToggle = (checked: boolean) => {
    setManagement(checked);
    if (!checked) {
      setValue('businessRegistrationNumber', '');
    }
  };

  const handleSignup = async (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <p className="text-sm text-gray-700">사장님으로 가입</p>
        <input
          type="checkbox"
          className="toggle"
          checked={management}
          onChange={(e) => handleManagementToggle(e.target.checked)}
        />
      </div>

      <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
        <div className="flex flex-col gap-4">
          {/* 이메일 입력 */}
          <div className="relative">
            <FormInput
              placeholder="이메일을 입력해 주세요."
              label="email"
              register={register}
              type="email"
              error={errors.email}
            />
            <ValidationMessage
              error={errors.email?.message}
              isValid={getValues('email') && !errors.email?.message}
            />
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
            <ValidationMessage
              error={errors.password?.message}
              isValid={getValues('password') && !errors.password?.message}
            />
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
            <ValidationMessage
              error={errors.checkPassword?.message}
              isValid={
                getValues('checkPassword') && !errors.checkPassword?.message
              }
            />
          </div>

          {/* 전화번호 입력 */}
          <div>
            <FormInput
              placeholder="전화번호를 입력해 주세요. (예: 01012345678)"
              label="contactNumber"
              register={register}
              type="number"
              error={errors.contactNumber}
              rules={signupValidationRules.tel}
            />
            <ValidationMessage
              error={errors.contactNumber?.message}
              isValid={
                getValues('contactNumber') && !errors.contactNumber?.message
              }
            />
          </div>

          {/* 닉네임 입력 */}
          <div>
            <FormInput
              placeholder="닉네임을 입력해 주세요. (3-20자, 영문/숫자)"
              label="nickname"
              register={register}
              type="text"
              error={errors.nickname}
            />
            <ValidationMessage
              error={errors.nickname?.message}
              isValid={getValues('nickname') && !errors.nickname?.message}
            />
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${
              management ? 'h-20 opacity-100' : 'h-0 opacity-0'
            } `}
          >
            {management && (
              <div>
                <FormInput
                  placeholder="사업자등록번호를 입력해 주세요. (숫자 10자리)"
                  label="businessRegistrationNumber"
                  register={register}
                  type="number"
                  error={errors.businessRegistrationNumber}
                  rules={signupValidationRules.businessNumber()}
                />
                <ValidationMessage
                  error={errors.businessRegistrationNumber?.message}
                  isValid={
                    getValues('businessRegistrationNumber') &&
                    !errors.businessRegistrationNumber
                  }
                />
              </div>
            )}
          </div>
        </div>

        <CommonButton type="submit" classNames="w-full mt-8">
          회원가입
        </CommonButton>
      </form>
    </>
  );
}
