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

export default function CommonButton({ label, variant, className }: ButtonProps) {
  return <button className={cn(buttonStyles({ variant }), className)}>{label}</button>;
}
