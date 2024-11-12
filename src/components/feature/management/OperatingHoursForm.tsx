import React, { useState } from 'react';
import CommonButton from '@/components/common/button/CommonButton';
import CommonModal from '@/components/common/modal/CommonModal';
import { BsFlower3 } from 'react-icons/bs';

interface OperatingHoursModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (hours: { dayOfWeek: string; openingTime: string; closingTime: string }[]) => void;
}

const OperatingHoursModal: React.FC<OperatingHoursModalProps> = ({ isOpen, onClose, onSave }) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");

  const daysOfWeek = [
    { value: "MONDAY", label: "월요일" },
    { value: "TUESDAY", label: "화요일" },
    { value: "WEDNESDAY", label: "수요일" },
    { value: "THURSDAY", label: "목요일" },
    { value: "FRIDAY", label: "금요일" },
    { value: "SATURDAY", label: "토요일" },
    { value: "SUNDAY", label: "일요일" },
  ];

  const toggleDaySelection = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    const hours = selectedDays.map((day) => ({
      dayOfWeek: day,
      openingTime,
      closingTime,
    }));
    onSave(hours);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg text-center mb-4 text-gray-700">영업시간</h2>
      
      {/* 요일 선택 */}
      <div className="mb-4">
        <div className='flex gap-3 items-center mb-4'>
          <BsFlower3 className='text-mainColor-500'/>
          <h3 className="text-sm font-medium">영업 요일 선택</h3>
        </div>
        {daysOfWeek.map((day) => (
          <label key={day.value} className="block mb-2 ml-2 text-gray-500">
            <input
              type="checkbox"
              value={day.value}
              checked={selectedDays.includes(day.value)}
              onChange={() => toggleDaySelection(day.value)}
              className="mr-2"
            />
            {day.label}
          </label>
        ))}
      </div>

      {/* 시간 선택 */}
      <div className="mb-4">
        <div className='flex gap-3 items-center mb-4'>
          <BsFlower3 className='text-mainColor-500'/>
          <h3 className="text-sm font-medium">영업 시간 선택</h3>
        </div>
        <div className="flex gap-2">
          <select
            value={openingTime}
            onChange={(e) => setOpeningTime(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">오픈 시간 선택</option>
            {[...Array(24)].map((_, hour) => (
              <option key={hour} value={`${hour}:00`}>
                {`${hour}:00`}
              </option>
            ))}
          </select>
          <select
            value={closingTime}
            onChange={(e) => setClosingTime(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">마감 시간 선택</option>
            {[...Array(24)].map((_, hour) => (
              <option key={hour} value={`${hour}:00`}>
                {`${hour}:00`}
              </option>
            ))}
          </select>
        </div>
      </div>

      <CommonButton type="button" onClick={handleSave}>
        영업시간 등록하기
      </CommonButton>
    </CommonModal>
  );
};

export default OperatingHoursModal;
