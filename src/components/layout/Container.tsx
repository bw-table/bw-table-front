import { cva } from 'class-variance-authority';
import { ContainerProps } from '@/types';
import { cn } from '@/utils/cn';

const buttonStyles = cva('', {
  variants: {
    variant: {
      mobile: 'max-w-[600px] mx-auto',
      tablet: 'max-w-[1024px] mx-auto',
    },
  },

  defaultVariants: {
    variant: 'mobile',
  },
});

export default function Container({
  children,
  variant,
  classNames,
}: ContainerProps) {
  return (
    <div className={cn(buttonStyles({ variant }), classNames)}>{children}</div>
  );
}
