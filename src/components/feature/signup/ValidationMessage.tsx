import React from 'react';

interface ValidationMessageProps {
  error?: string;
  isTouched: boolean | undefined;
  successMessage?: string; // 기본 메시지
}

export default function ValidationMessage({
  error,
  isTouched,
  successMessage = '인증되었습니다',
}: ValidationMessageProps) {
  if (error) {
    return <span className="text-red-500 text-sm">{error}</span>;
  }

  if (isTouched && !error) {
    return <span className="text-green-600 text-sm">{successMessage}</span>;
  }

  return null;
}
