'use client';

import CommonButton from '@/components/common/button/CommonButton';
import FormInput from '@/components/common/input/FormInput';
import ValidationMessage from '@/components/feature/signup/ValidationMessage';
import { SignInFormData } from '@/types';
import { useForm } from 'react-hook-form';

export default function SignInForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SignInFormData>();

  const handleSignUp = (data: SignInFormData) => {};

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
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
              rules={{ required: '이메일을 입력해 주세요.' }}
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
            rules={{ required: '비밀번호를 입력해 주세요.' }}
          />
          <ValidationMessage error={errors.password?.message} />
        </div>
      </div>
      <CommonButton type="submit" classNames="w-full mt-8">
        로그인
      </CommonButton>
    </form>
  );
}
