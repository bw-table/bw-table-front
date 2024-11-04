import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

type NavigationBarProps = {
  tabs: { key: string; label?: string; icon?: React.ReactNode }[];
  selectedTab: string;
  onSelectTab: (key: string) => void;
  variant?: 'text' | 'icon';
};

const buttonStyles = cva('py-2 transition-colors', {
  variants: {
    variant: {
      'text': 'font-semibold text-gray-500',
      'icon': 'text-gray-500',
    },
    active: {
      true: 'text-mainColor-500',
      false: '',
    },
  },
});

export default function CommonNavigationBar({
  tabs,
  selectedTab,
  onSelectTab,
  variant = 'text',
}: NavigationBarProps) {
  return (
    <div className="flex justify-around mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onSelectTab(tab.key)}
          className={cn(
            buttonStyles({
              variant,
              active: selectedTab === tab.key,
            }),
            variant === 'text' && selectedTab === tab.key ? 'border-b-2 border-mainColor-500' : '',
          )}
          style={{
            flexBasis: `${100 / tabs.length}%`,
          }}
        >
          {variant === 'icon' ? (
            <div className="flex items-center justify-center w-full">{tab.icon}</div>
          ) : (
            tab.label
          )}
        </button>
      ))}
    </div>
  );
}
