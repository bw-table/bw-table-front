'use client';

import { CommonCalendarProps } from '@/types/components';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const tileStyles = cva(
  'flex items-center justify-center rounded-full w-full h-full transition-colors',
  {
    variants: {
      variant: {
        default: 'text-gray-800 bg-transparent',
        active: 'text-white bg-mainColor',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export default function CommonCalendar({
  showTodayButton = true,
  onDateChangeAction = () => {},
}: CommonCalendarProps) {
  const [value, setValue] = useState<Value>(new Date());

  const goToToday = () => {
    const today = new Date();
    setValue(today);
    onDateChangeAction(today);
  };

  const handleDateClick = (value: Value) => {
    const selectedDate = value instanceof Date ? value : null;
  
    if (selectedDate) {
      // 로컬 시간대 기준으로 시간 초기화
      selectedDate.setHours(0, 0, 0, 0);
    }
  
    setValue(selectedDate);
    onDateChangeAction(selectedDate);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex gap-3 justify-center items-center mb-4">
        {showTodayButton && (
          <button
            onClick={goToToday}
            className="px-3 py-1 hover:rounded-full text-sm"
          >
            오늘
          </button>
        )}
        <button
          onClick={() =>
            setValue((prevValue: any) => {
              const newDate = new Date(prevValue);
              newDate.setMonth(newDate.getMonth() - 1);
              onDateChangeAction(newDate);
              return newDate;
            })
          }
          className="text-lg font-semibold"
        >
          <BiChevronLeft />
        </button>

        <div className="flex items-center space-x-4">
          <span className="text-lg font-bold">
            {value instanceof Date
              ? `${value.getFullYear()}년 ${value.getMonth() + 1}월`
              : ''}
          </span>
        </div>

        <button
          onClick={() =>
            setValue((prevValue: any) => {
              const newDate = new Date(prevValue);
              newDate.setMonth(newDate.getMonth() + 1);
              onDateChangeAction(newDate);
              return newDate;
            })
          }
          className="text-lg font-semibold"
        >
          <BiChevronRight />
        </button>
      </div>

      <Calendar
        onChange={handleDateClick}
        value={value}
        next2Label={null}
        prev2Label={null}
        locale="ko"
        formatDay={(locale, date) => date.getDate().toString()}
        minDetail="month"
        maxDetail="month"
        showNavigation={false}
        tileClassName={({ date }) =>
          cn(
            tileStyles({
              variant:
                value instanceof Date &&
                value.toDateString() === date.toDateString()
                  ? 'active'
                  : 'default',
            }),
          )
        }
      />
    </div>
  );
}
