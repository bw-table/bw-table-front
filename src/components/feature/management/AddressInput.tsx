import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import CommonButton from '@/components/common/button/CommonButton';
import FormInput from '@/components/common/input/FormInput';
import { UseFormSetValue, UseFormRegister } from 'react-hook-form';
import { SubmitRestaurantData } from '@/types';

interface AddressInputProps {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setValue: UseFormSetValue<SubmitRestaurantData>;
  register: UseFormRegister<SubmitRestaurantData>;
}

const AddressInput: React.FC<AddressInputProps> = ({ location, setLocation, setValue, register }) => {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  const handleCompletePostcode = (data: any) => {
    const fullAddress = data.address;
    setLocation(fullAddress);
    setValue('address', fullAddress);  // 타입 명시적 설정
    setIsPostcodeOpen(false);
  };

  return (
    <div className="mb-4 flex flex-col gap-3">
      <label htmlFor="store-location" className="block text-sm font-medium">가게 위치</label>
      <div className="flex items-center gap-2">
        <FormInput
          register={register}
          label="address"
          rules={{ required: '주소를 입력해주세요.' }}
          classNames="w-full bg-gray-100 border-none"
          placeholder="가게 위치를 입력해주세요."
        />
        <CommonButton classNames="w-24 text-sm" type="button" onClick={() => setIsPostcodeOpen(true)}>
          주소 검색
        </CommonButton>
      </div>

      {isPostcodeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-lg min-w-[650px]">
            <DaumPostcode onComplete={handleCompletePostcode} />
            <button onClick={() => setIsPostcodeOpen(false)} className="mt-4 w-full text-center text-blue-500">
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressInput;
