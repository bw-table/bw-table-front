import { useEffect, useRef } from 'react';
import { useAuthStore } from '@/store';
import { SignupFormData } from '@/types';
import { UseFormWatch } from 'react-hook-form';

export const useWatchDuplicate = (watch: UseFormWatch<SignupFormData>) => {
  const {
    setEmailDuplicate,
    setNicknameDuplicate,
    setTelDuplicate,
    setBusinessDuplicate,
  } = useAuthStore();

  const prevValuesRef = useRef({
    email: '',
    phone: '',
    nickname: '',
    businessNumber: '',
  });

  const formValues = watch();

  useEffect(() => {
    const { email, phone, nickname, businessNumber } = formValues;
    const prevValues = prevValuesRef.current;

    if (email !== prevValues.email) {
      setEmailDuplicate(false);
    }
    if (phone !== prevValues.phone) {
      setTelDuplicate(false);
    }
    if (nickname !== prevValues.nickname) {
      setNicknameDuplicate(false);
    }
    if (businessNumber !== prevValues.businessNumber) {
      setBusinessDuplicate(false);
    }

    prevValuesRef.current = {
      email,
      phone,
      nickname,
      businessNumber,
    };
  }, [
    formValues.email,
    formValues.phone,
    formValues.nickname,
    formValues.businessNumber,
    setEmailDuplicate,
    setNicknameDuplicate,
    setTelDuplicate,
    setBusinessDuplicate,
  ]);
};
