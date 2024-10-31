import { cva } from 'class-variance-authority';
import { FormInputProps } from '@/types';
import { cn } from '@/utils/cn';
import { FieldValues } from 'react-hook-form';

const FormInputStyle = cva('input input-bordered w-full', {
  variants: {
    variant: {
      default: 'input-ghost w-full',
      disabled: 'input-bordered',
      error: 'input-bordered input-error',
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
  error,
  ...htmlProps
}: FormInputProps<T>) {
  let inputVariant = variant;

  if (error?.type) {
    inputVariant = 'error';
  } else if (htmlProps.disabled) {
    inputVariant = 'disabled';
  }

  return (
    <input
      {...register(label, rules)}
      {...htmlProps}
      type={type}
      className={cn(FormInputStyle({ variant: inputVariant }), classNames)}
    />
  );
}
