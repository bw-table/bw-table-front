'use client';

import { useState } from 'react';
import CommonButton from '@/components/common/button/CommonButton';
import FormInput from '@/components/common/input/FormInput';
import ValidationMessage from '@/components/feature/signup/ValidationMessage';
import { useSignupRules } from '@/constants/validationRules';
import { useWatchDuplicate } from '@/hooks/useWatchDuplicate';
import { useAuthStore } from '@/store';
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
    watch,
  } = useForm<SignupFormData>({
    mode: 'onBlur',
  });
  useWatchDuplicate(watch);
  const validationRules = useSignupRules(getValues);

  const handleManagementToggle = (checked: boolean) => {
    setManagement(checked);
    if (!checked) {
      setValue('businessNumber', '');
    }
  };

  const { isEmailDuplicate } = useAuthStore();

  const handleSignup = async (data: SignupFormData) => {
    const { businessNumber, checkPassword, ...baseData } = data;

    if (management) {
      const managementData = {
        ...baseData,
        businessNumber,
        role: 'OWNER',
      };
      console.log(managementData);
    } else {
      const guestData = {
        ...baseData,
        role: 'GUEST',
      };
      console.log(guestData);
    }
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
        <div className="flex flex-col  gap-4">
          {/* 이메일 입력 */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <FormInput
                classNames="flex-1"
                placeholder="이메일"
                label="email"
                register={register}
                type="email"
                error={errors.email}
                rules={validationRules.email}
              />
              <ValidationMessage error={errors.email?.message} />
            </div>
          </div>

          {/* 비밀번호 입력 */}
          <div>
            <FormInput
              placeholder="비밀번호 (8자 이상, 영문/숫자/특수문자 조합)"
              label="password"
              register={register}
              type="password"
              error={errors.password}
              rules={validationRules.password}
            />
            <ValidationMessage
              error={errors.password?.message}
              isValid={getValues('password') && !errors.password?.message}
            />
          </div>

          {/* 비밀번호 확인 */}
          <div>
            <FormInput
              placeholder="비밀번호 확인"
              label="checkPassword"
              register={register}
              type="password"
              error={errors.checkPassword}
              rules={validationRules.checkPassword}
            />
            <ValidationMessage error={errors.checkPassword?.message} />
          </div>

          {/* 전화번호 입력 */}
          <div>
            <FormInput
              placeholder="전화번호를 입력해 주세요. (예: 01012345678)"
              label="phone"
              register={register}
              type="number"
              error={errors.phone}
              rules={validationRules.tel}
            />
            <ValidationMessage error={errors.phone?.message} />
          </div>

          {/* 닉네임 입력 */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <FormInput
                placeholder="닉네임을 입력해 주세요. (3-20자, 영문/숫자)"
                label="nickname"
                register={register}
                type="text"
                error={errors.nickname}
                rules={validationRules.nickname}
              />
              <ValidationMessage error={errors.nickname?.message} />
            </div>
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
                  label="businessNumber"
                  register={register}
                  type="number"
                  maxLength={10}
                  error={errors.businessNumber}
                  rules={validationRules.businessNumber}
                />
                <ValidationMessage error={errors.businessNumber?.message} />
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
