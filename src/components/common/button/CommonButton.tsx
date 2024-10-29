import { cva } from 'class-variance-authority';
import { ButtonProps } from '@/types';
import { cn } from '@/utils/cn';

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
  variant,
  classNames,
  onClick,
  disabled,
  type,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(buttonStyles({ variant }), classNames)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
