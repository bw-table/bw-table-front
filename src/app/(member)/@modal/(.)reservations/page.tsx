'use client';

import React, { useState } from 'react';
import CommonModal from '@/components/common/modal/CommonModal';
import CommonButton from '@/components/common/button/CommonButton';
import ReservationForm from '@/components/feature/ReservationForm';
import ReservationConfirm from '@/components/feature/ReservationConfirm';
import { useRouter } from 'next/navigation';

export default function ReservationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPeople, setSelectedPeople] = useState<number | null>(null);
  const [specialRequest, setSpecialRequest] = useState<string>('');
  const router = useRouter();

  const closeModal = () => router.back();

  // 다음 단계로 이동
  const nextStep = () => setCurrentStep((prev) => prev + 1);

  // 이전 단계로 이동
  const prevStep = () => setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));

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
              <CommonButton type="button" onClick={nextStep}>
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
                onConfirm={() => {
                  closeModal();
                }}
                onSpecialRequest={specialRequest}
                onConfirm={handleConfirmReservation}
              />
            </div>
          )}
      </CommonModal>
    </div>
  );
}

