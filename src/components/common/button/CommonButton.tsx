import { cva } from 'class-variance-authority';
import { ButtonProps } from '@/types';
import { cn } from '@/utils/cn'; // variant 마다 다른 스타일링을 하기 위해 cva 이용

// variant 마다 다른 스타일링을 하기 위해 cva 이용
const buttonStyles = cva('rounded-md transition-colors', {
  variants: {
    variant: {
      default: 'bg-green-400 hover:bg-green-500 text-white',
      outline: 'border-2 border-green-400 text-green-400 hover:bg-green-50',
      ghost: 'hover:bg-green-100 text-green-400',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default function CommonButton({ label, variant, className }: ButtonProps) {
  return <button className={cn(buttonStyles({ variant }), className)}>{label}</button>;
}
