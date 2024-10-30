import React from 'react';

interface ValidationMessageProps {
  error?: string;
  isValid: boolean | '';
  successMessage?: string;
}

export default function ValidationMessage({
  error,
  isValid,
  successMessage = '인증되었습니다',
}: ValidationMessageProps) {
  if (error) {
    return <span className="text-red-500 text-sm">{error}</span>;
  }

  if (isValid) {
    return <span className="text-green-600 text-sm">{successMessage}</span>;
  }

  return null;
}
