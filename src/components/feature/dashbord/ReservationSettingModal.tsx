import React, { useState } from 'react';
import CommonButton from '@/components/common/button/CommonButton';
import CommonModal from '@/components/common/modal/CommonModal';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const handleTimeClick = (time: string) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      {/* Modal Header */}
      <h2 className="text-2xl font-bold text-center mb-6">예약 설정</h2>

      {/* 상시 설정 / 단위별 설정 */}
      <div className="flex gap-2 mb-6">
        <label className="flex items-center mr-4">
          <input
            type="radio"
            name="setting-type"
            className="radio radio-primary mr-2"
            defaultChecked
          />
          상시 설정
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="setting-type"
            className="radio radio-primary mr-2"
          />
          단위별 설정
        </label>
      </div>

      {/* 예약 가능 시간 선택 */}
      <div className="mb-6">
        <p className="font-semibold text-lg mb-2">예약 가능시간 선택</p>
        <div className="grid grid-cols-6 gap-2">
          {[
            '10:00',
            '10:30',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '17:30',
            '18:00',
            '19:00',
            '20:00',
          ].map((time, index) => (
            <button
              key={index}
              onClick={() => handleTimeClick(time)}
              className={`px-4 py-2 text-sm rounded-md ${
                selectedTimes.includes(time)
                  ? 'bg-mainColor-500 text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* 시간당 최대 예약 가능 인원 선택 */}
      <div className="mb-6">
        <p className="font-semibold text-lg mb-2">시간당 최대 예약 가능 인원 선택</p>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4, 5, 6, '제한하지 않음', '직접입력'].map(
            (option, index) => (
              <label key={index} className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span>{option}</span>
              </label>
            ),
          )}
        </div>
      </div>

      {/* 등록 버튼 */}
      <div className="text-center">
        <CommonButton onClick={onClose} className="w-full bg-mainColor-500 text-white py-2 rounded-md">
          예약설정 등록하기
        </CommonButton>
      </div>
    </CommonModal>
  );
};

export default SettingsModal;
