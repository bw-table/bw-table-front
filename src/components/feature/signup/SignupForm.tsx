'use client';

import { useState } from 'react';
import CommonButton from '@/components/common/button/CommonButton';
import FormInput from '@/components/common/input/FormInput';
import ValidationMessage from '@/components/feature/signup/ValidationMessage';
import { useSignUp } from '@/hooks/queries/auth/useSignUp';
import { useSignupRules } from '@/hooks/useSignupRules';
import { useWatchDuplicate } from '@/hooks/useWatchDuplicate';
import { SignupFormData } from '@/types';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const [management, setManagement] = useState<boolean>(false);
  const router = useRouter();

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

  const { signUpMutation } = useSignUp();

  const handleSignup = async (data: SignupFormData) => {
    const { businessNumber, checkPassword, ...baseData } = data;

    if (management) {
      const managementData = {
        ...baseData,
        businessNumber,
        role: 'OWNER',
        loginType: 'EMAIL',
      };
      signUpMutation(managementData, {
        onSuccess: () => {
          router.push('/new-restaurant');
        },
      });
    } else {
      const guestData = {
        ...baseData,
        role: 'GUEST',
        loginType: 'EMAIL',
      };
      signUpMutation(guestData, {
        onSuccess: () => {
          router.push('/main');
        },
      });
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
            <ValidationMessage error={errors.password?.message} />
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
              placeholder="전화번호 (예: 01012345678)"
              label="phone"
              register={register}
              type="number"
              error={errors.phone}
              rules={validationRules.tel}
            />
            <ValidationMessage error={errors.phone?.message} />
          </div>

          {/* 이름 입력 */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <FormInput
                placeholder="이름"
                label="name"
                register={register}
                type="text"
                error={errors.name}
                rules={validationRules.name}
              />
              <ValidationMessage error={errors.name?.message} />
            </div>
          </div>

          {/* 닉네임 입력 */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <FormInput
                placeholder="닉네임 (3-20자, 영문/숫자)"
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
                  placeholder="사업자등록번호 (숫자 10자리)"
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
        <Link className="underline text-sm text-gray-500" href="/auth/signin">
          이미 회원이신가요?
        </Link>
        <CommonButton type="submit" classNames="w-full mt-8">
          회원가입
        </CommonButton>
      </form>
    </>
  );
}
