import { cva } from 'class-variance-authority';
import { CommonInputProps } from '@/types';
import { cn } from '@/utils/cn';

const CommonInputStyle = cva('pl-3 py-3 rounded-md w-full focus:outline-none', {
  variants: {
    variant: {
      default: 'bg-white border border-solid border-border-300',
      disabled:
        'bg-white border border-solid border-border-300 cursor-not-allowed',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

export default function CommonInput({
  classNames,
  variant,
  type = 'text',
  placeholder,
  required = false,
  disable = false,
  maxLength,
  onClick,
  onFocus,
  onBlur,
  readOnly = false,
}: CommonInputProps) {
  return (
    <input
      type={type}
      className={cn(CommonInputStyle({ variant }), classNames)}
      placeholder={placeholder}
      required={required}
      disabled={disable}
      maxLength={maxLength}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      readOnly={readOnly}
    />
  );
}
