'use client';

import React, { useEffect, useState } from 'react';
import CommonButton from '@/components/common/button/CommonButton';
import CommonModal from '@/components/common/modal/CommonModal';
import ReservationConfirm from '@/components/feature/reservation/ReservationConfirm';
import ReservationForm from '@/components/feature/reservation/ReservationForm';
import { useRouter } from 'next/navigation';
import { usePostReservation } from '@/hooks/queries/reservation/usePostReservation';

export default function ReservationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPeople, setSelectedPeople] = useState<number | null>(null);
  const [specialRequest, setSpecialRequest] = useState<string>('');
  const router = useRouter();

  // 예약 POST 요청 훅 설정
  const { submitReservation, isPending } = usePostReservation();

  const closeModal = () => router.back();
  const isNextDisabled = !selectedDate || !selectedTime || !selectedPeople;

  useEffect(() => {
    if (specialRequest.trim() === '') {
      setSpecialRequest('요청사항 없음');
    }
  }, [specialRequest]);

  // 다음 단계로 이동
  const handleNextStep = () => {
    if (isNextDisabled) {
      alert('모든 예약 정보를 입력해 주세요.');
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  // 이전 단계로 이동
  const prevStep = () => setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));


  // 예약 전송 함수
  const handleConfirmReservation = () => {
    submitReservation({
      date: selectedDate?.toISOString() || '',
      time: selectedTime || '',
      people: selectedPeople || 1,
      specialRequest: specialRequest,
    });
    closeModal();
  };

  return (
    <div className="p-6">
      <CommonModal isOpen={isModalOpen} onClose={closeModal}>
        {currentStep === 1 && (
          <div className="text-center">
            <ReservationForm
              onSelectDate={setSelectedDate}
              onSelectTime={setSelectedTime}
              onSelectPeople={setSelectedPeople}
              onSpecialRequest={(request) =>
                setSpecialRequest(request || '요청사항 없음')
              }
            />
            <div className="mt-6 flex justify-between gap-2">
              <CommonButton
                type="button"
                classNames="bg-white border text-border"
                onClick={closeModal}
              >
                취소하기
              </CommonButton>
              <CommonButton type="button" onClick={handleNextStep}>
                다음
              </CommonButton>
            </div>
          </div>
        )}

        {currentStep === 2 &&
          selectedDate &&
          selectedTime &&
          selectedPeople && (
            <div className="text-center">
              <ReservationConfirm
                date={selectedDate.toLocaleDateString()}
                time={selectedTime}
                people={selectedPeople}
                onCancel={prevStep}
                onSpecialRequest={specialRequest}
                onConfirm={handleConfirmReservation}
              />
            </div>
          )}
      </CommonModal>
    </div>
  );
}

