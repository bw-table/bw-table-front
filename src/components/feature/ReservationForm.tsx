import CommonCalendar from '../common/calendar/CommonCalendar';
import React, { useState } from 'react';

type ReservationFormProps = {
  onSelectDate: (date: Date | null) => void;
  onSelectTime: (time: string | null) => void;
  onSelectPeople: (people: number | null) => void;
};

export default function ReservationForm({
  onSelectDate,
  onSelectTime,
  onSelectPeople,
}: ReservationFormProps) {
  const [selectedPeople, setSelectedPeople] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  {
    /* 임시데이터 - 목데이터로 연동예정 */
  }
  const peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const timeOptions = [
    '오후 5:00',
    '오후 5:30',
    '오후 6:00',
    '오후 6:30',
    '오후 7:00',
  ];

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onSelectDate(date);
    console.log('선택된 날짜:', date);
  };

  const handlePeopleSelect = (people: number) => {
    setSelectedPeople(people);
    onSelectPeople(people);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onSelectTime(time);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <CommonCalendar onDateChangeAction={handleDateChange} />

      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-4 whitespace-nowrap">
        {peopleOptions.map((people) => (
          <button
            key={people}
            onClick={() => handlePeopleSelect(people)}
            className={`px-4 py-2 rounded-full border ${
              selectedPeople === people
                ? 'bg-mainColor-500 text-white'
                : 'text-gray-700 border-gray-300'
            }`}
          >
            {people}명
          </button>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-4 whitespace-nowrap">
        {timeOptions.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelect(time)}
            className={`px-4 py-2 rounded-full ${
              selectedTime === time
                ? 'bg-mainColor-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
