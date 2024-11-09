'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BsChevronLeft } from 'react-icons/bs';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const headerStyles = cva('flex items-center justify-center gap-3 bg-white', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface CommonHeaderProps {
  label?: string;
  variant?: 'default';
  classNames?: '';
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  label,
  variant,
  classNames,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button 
      onClick={handleClick} 
      className={cn(headerStyles({ variant }), classNames )}
    >
      <BsChevronLeft className="mt-2 mb-4 text-2xl" />
      {label && <span className='text-2xl font-semibold'>{label}</span>}
    </button>
  );
};

export default CommonHeader;
