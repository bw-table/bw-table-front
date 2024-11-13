import React, { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { CommonModalProps } from '@/types/components';

const modalContentStyles = cva(
  'bg-white rounded-t-lg shadow-lg border-t-4 max-w-[650px] mx-auto border-mainColor-500 max-w-md w-full p-6 transition-transform duration-300 transform',
  {
    variants: {
      isVisible: {
        true: 'translate-y-0',
        false: 'translate-y-full',
      },
    },
  },
);

export default function CommonModal({
  isOpen,
  onClose,
  children,
  className,
}: CommonModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        className,
      )}
    >
      <div className={modalContentStyles({ isVisible: isAnimating })}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕ {/* 닫기 버튼 */}
        </button>
        {children}
      </div>
    </div>
  );
}
