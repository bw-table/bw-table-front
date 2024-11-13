'use client';

import CommonButton from '@/components/common/button/CommonButton';
import React, { useRef, useState } from 'react';
import { FaCamera } from "react-icons/fa6";
import { BsFlower3 } from "react-icons/bs";
import CommonInput from '@/components/common/input/CommonInput';
import CommonModal from '@/components/common/modal/CommonModal';
import { useRouter } from 'next/navigation';
import { useMenuStore } from '@/store/restaurant/useMenuStore';

const RegistrationMenuForm = () =>  {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const addMenu = useMenuStore((state) => state.addMenu);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const closeModal = () => router.back();

  const handleSubmit = () => {
    if (image && name && price) {
      addMenu({ image, name, price, description }); // 메뉴 추가
      closeModal(); // 모달 닫기
    } else {
      alert("모든 필드를 입력해주세요.");
    }
  };

  return (
    <CommonModal isOpen={isModalOpen} onClose={closeModal}>
      <div className='p-6'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* 메뉴 사진 등록 */}
          <div className="mb-4 flex flex-col gap-2">
            <label className="text-sm font-medium flex gap-2 items-center">
              <BsFlower3 className="text-mainColor-500" />
              메뉴 사진 등록
            </label>
            <div 
              onClick={handleDivClick}
              className="w-36 h-24 flex flex-col justify-center items-center border border-dashed border-gray-300 rounded-md cursor-pointer"
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="메뉴 사진 미리보기"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaCamera className="text-gray-400" size={24} />
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <p className="text-gray-400 text-xs mt-1">최대 1개의 사진을 등록할 수 있습니다.</p>
          </div>

          {/* 메뉴명 입력 */}
          <div className="mb-4">
            <label htmlFor="menu-name" className="text-sm flex items-center gap-2 mb-2">
              <BsFlower3 className="text-mainColor-500" />
              메뉴명
            </label>
            <CommonInput
              type="text"
              id="menu-name"
              placeholder="메뉴의 이름을 입력해주세요."
              onChange={(e) => setName(e.target.value)}
              classNames="bg-gray-100 border-none"
            />
          </div>

          {/* 메뉴 가격 입력 */}
          <div className="mb-4">
            <label htmlFor="menu-price" className="text-sm flex items-center gap-2 mb-2">
              <BsFlower3 className="text-mainColor-500" />
              메뉴 가격
            </label>
            <CommonInput
              type="text"
              id="menu-price"
              placeholder="가격을 입력해주세요."
              onChange={(e) => setPrice(e.target.value)}
              classNames="bg-gray-100 border-none"
            />
          </div>

          {/* 메뉴 설명 입력 */}
          <div className="mb-4">
            <label htmlFor="menu-description" className="text-sm flex items-center gap-2 mb-2">
              <BsFlower3 className="text-mainColor-500" />
              메뉴 설명
            </label>
            <textarea
              id="menu-description"
              placeholder="메뉴에 대한 설명을 작성해주세요."
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-60 bg-gray-100 border-none rounded-md px-3 py-2 focus:outline-none"
              rows={3}
            ></textarea>
          </div>

          <CommonButton type="button" onClick={handleSubmit}>메뉴 등록하기</CommonButton>
        </form>
      </div>
    </CommonModal>
  );
};

export default RegistrationMenuForm;
