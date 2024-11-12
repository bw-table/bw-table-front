'use client';

import CommonButton from '@/components/common/button/CommonButton';
import CommonHeader from '@/components/common/header/CommonHeader';
import { FaCirclePlus } from "react-icons/fa6";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMenuStore } from '@/store/restaurant/useMenuStore';
import OperatingHoursModal from '@/components/feature/management/OperatingHoursForm';
import FormInput from '@/components/common/input/FormInput';
import { usePostRestaurant } from '@/hooks/queries/restaurant/usePostRestaurant';
import { SubmitRestaurantData } from '@/types';
import RestaurantImageUpload from '@/components/feature/management/RestaurantImageUpload';
import AddressInput from '@/components/feature/management/AddressInput';
import HashtagInput from '@/components/feature/management/HashTagInput';
import FacilitySelect from '@/components/feature/management/FacilitiesSelect';
import CommonTextarea from '@/components/common/textarea/CommonTextArea';
import CategorySelect from '@/components/feature/management/CategorySelect';


const NewRestaurantForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    submitRestaurant,
  } = usePostRestaurant();
  const [images, setImages] = useState<File[]>([]);
  const [location, setLocation] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [facilities, setFacilities] = useState<string[]>([]);
  const router = useRouter();
  const menuItems = useMenuStore((state) => state.menuItems);
  const [isOperatingHoursModalOpen, setIsOperatingHoursModalOpen] = useState(false);
  const [operatingHours, setOperatingHours] = useState<
    { dayOfWeek: string; openingTime: string; closingTime: string }[]
  >([]);
  const openOperatingHoursModal = () => setIsOperatingHoursModalOpen(true);
  const closeOperatingHoursModal = () => setIsOperatingHoursModalOpen(false);

  const handleSaveOperatingHours = (hours: { dayOfWeek: string; openingTime: string; closingTime: string }[]) => {
    setOperatingHours(hours);
  };

  const handleOpenModal = () => {
    router.push('/menus');
  };

  const onSubmit = (data:SubmitRestaurantData) => {
    const formData = {
      ...data,
      location,
      operatingHours,
      hashtags,
      images,
      facilities,
    };
    submitRestaurant(formData);
  };
  return (
    <div className="container mx-auto max-w-2xl p-4">
      <CommonHeader label='나의 가게 등록'/>  
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-3">
          <label htmlFor="store-name" className="block text-sm font-medium">가게 이름</label>
          <FormInput 
            register={register} 
            label="name" 
            rules={{ required: '가게 이름을 입력해주세요.' }}
            classNames="w-full bg-gray-100 border-none" 
            placeholder="가게 이름을 입력해주세요." 
          />
        </div>
        {/* 업종 선택 */}
        <CategorySelect register={register} label="가게 업종" rules={{ required: '업종을 선택하세요.' }} />
        {/* 가게 대표 사진 */}
        <RestaurantImageUpload images={images} setImages={setImages} />

        <div className="mb-4 flex flex-col gap-3">
          <label htmlFor="store-phone" className="block text-sm font-medium">가게 전화번호</label>
          <FormInput 
            register={register} 
            label="contact" 
            rules={{ required: '전화번호를 입력해주세요.' }} 
            classNames="w-full bg-gray-100 border-none" 
            placeholder="가게 전화번호를 입력해주세요." 
            type="tel"
          />
        </div>
        {/* 주소 등록 */}
        <AddressInput location={location} setLocation={setLocation} setValue={setValue} register={register} />
        <div className="mb-4 flex flex-col gap-3">
          <label htmlFor="store-menus" className="block text-sm font-medium">가게 메뉴</label>
          <div className="flex gap-2 overflow-x-auto flex-wrap">
            {menuItems.map((menu, index) => (
              <div key={index} className="w-36 h-24 flex-shrink-0 relative rounded-md overflow-hidden border">
                {menu.image ? (
                  <img
                    src={URL.createObjectURL(menu.image)}
                    alt={`메뉴 ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p>이미지 없음</p>
                )}
              </div>
            ))}

            {/* 메뉴 추가 버튼 */}
            <div 
              onClick={handleOpenModal}
              className="w-36 h-24 flex-shrink-0 flex flex-col gap-2 justify-center items-center border border-dashed border-gray-300 rounded-md cursor-pointer"
            >
              <FaCirclePlus className='text-gray-400'/>
              <p className="text-gray-400 text-xs">메뉴를 등록해보세요!</p>
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <label className="block text-sm font-medium">영업 시간 및 휴무일</label>
          <button type="button" onClick={openOperatingHoursModal} className="w-full p-2 border rounded-md">
            영업 시간 등록하기
          </button>
        </div>

      {/* 영업시간 모달 */}
      <OperatingHoursModal
        isOpen={isOperatingHoursModalOpen}
        onClose={closeOperatingHoursModal}
        onSave={handleSaveOperatingHours}
      />
      {/* 해시태그 입력 */}
      <HashtagInput hashtags={hashtags} setHashtags={setHashtags} />
      {/* 편의시설 선택 */}
      <FacilitySelect facilities={facilities} setFacilities={setFacilities} />
      {/* 예약금 선택 */}
      <div className="mb-4 flex flex-col gap-3">
        <label htmlFor="reservation-settings" className="block text-sm font-medium">예약금 설정</label>
        <FormInput 
          register={register} 
          label="deposit" 
          rules={{ required: '예약금을 입력해주세요.' }}
          classNames="w-full bg-gray-100 border-none" 
          placeholder="예약금을 입력해주세요." 
        />
      </div>
        {/* 가맹점 식별코드 등록 */}
        <div className="mb-4 flex flex-col gap-3">
          <label htmlFor="imp-code" className="block text-sm font-medium">가맹점 식별코드 등록</label>
          <FormInput 
            register={register} 
            label="impCode" 
            rules={{ required: 'KG이니시스에서 발급받은 가맹점 식별코드를 입력해주세요.' }}
            classNames="w-full bg-gray-100 border-none" 
            placeholder="KG이니시스에서 발급받은 가맹점 식별코드를 입력해주세요." 
          />
        </div>
        {/* 안내 및 유의사항 */}
        <CommonTextarea
          id="info"
          label="안내 및 유의사항"
          placeholder="안내 및 유의사항을 작성해주세요."
          register={register}
          rules={{ required: '안내 및 유의사항을 입력해주세요.' }}
        />

        {/* 가게 소개 */}
        <CommonTextarea
          id="description"
          label="가게 대표 소개"
          placeholder="가게를 소개하는 문장을 작성해주세요."
          register={register}
          rules={{ required: '가게 소개를 입력해주세요.' }}
        />
        {/* 매장 링크 */}
        <div className="mb-4 flex flex-col gap-3">
          <label htmlFor="store-link" className="block text-sm font-medium">매장 링크</label>
          <FormInput
            register={register}
            label="link"
            rules={{ required: '매장 링크를 입력해주세요.' }}
            placeholder="매장 링크를 입력해주세요."
            classNames="w-full bg-gray-100 border-none"
          />
        </div>

        <CommonButton type="submit">가게 등록하기</CommonButton>
      </form>
    </div>
  );
};

export default NewRestaurantForm;