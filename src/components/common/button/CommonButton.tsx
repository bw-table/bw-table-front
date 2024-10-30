'use client';

import { cva } from 'class-variance-authority';
import React from 'react';
import { ButtonProps } from '@/types';
import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';

const buttonStyles = cva('rounded-md transition-colors w-full', {
  variants: {
    variant: {
      default: 'bg-primary-500 py-3 text-white',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

export default function CommonButton({
  children,
  variant = 'default',
  classNames,
  onClick,
  disabled,
  type,
  href,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
    if (onClick) {
      onClick();
    }
    return undefined;
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      className={cn(buttonStyles({ variant }), classNames)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
