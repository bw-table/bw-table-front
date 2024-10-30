import { cva } from 'class-variance-authority';
import { FormInputProps } from '@/types';
import { cn } from '@/utils/cn';
import { FieldValues } from 'react-hook-form';

const FormInputStyle = cva('pl-3 py-3 rounded-md w-full focus:outline-none', {
  variants: {
    variant: {
      default: 'bg-white border border-solid border-border-300',
      disabled:
        'bg-white border border-solid border-border-300 cursor-not-allowed',
      error: 'bg-white border border-solid border-red-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default function FormInput<T extends FieldValues>({
  register,
  label,
  rules,
  variant,
  classNames,
  type = 'text',
  placeholder,
  disable,
  error,
  maxLength,
  readOnly,
}: FormInputProps<T>) {
  let inputVariant = variant;

  if (error?.type) {
    inputVariant = 'error';
  } else if (disable) {
    inputVariant = 'disabled';
  }

  return (
    <input
      {...register(label, rules)}
      className={cn(FormInputStyle({ variant: inputVariant }), classNames)}
      type={type}
      placeholder={placeholder}
      disabled={disable}
      maxLength={maxLength}
      readOnly={readOnly}
    />
  );
}
