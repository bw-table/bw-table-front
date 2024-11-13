import { cva } from 'class-variance-authority';
import React from 'react';
import { BadgeProps } from '@/types';
import { cn } from '@/utils/cn';

const BadgeStyles = cva('rounded-md w-full', {
  variants: {
    variant: {
      PENDING: 'bg-warning-500 p-3 text-white',
      CONFIRMED: 'bg-success-500 p-3 text-white',
      CANCELED: 'bg-danger-500 p-3 text-white',
    },
  },

  defaultVariants: {
    variant: 'PENDING',
  },
});

export default function Badge({
  variant,
  classNames,
  children,
  ...htmlProps
}: BadgeProps) {
  return (
    <div className={cn(BadgeStyles({ variant }), classNames)} {...htmlProps}>
      {children}
    </div>
  );
}
