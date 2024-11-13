import React, { useRef, useState } from 'react';
import { FaCamera } from 'react-icons/fa6';

interface RestaurantImageUploadProps {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const RestaurantImageUpload: React.FC<RestaurantImageUploadProps> = ({ images, setImages }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    const totalImages = files.length + images.length;
    if (totalImages > 10) {
      alert('최대 10장의 사진만 등록할 수 있습니다.');
      return;
    }
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-4 flex flex-col gap-3">
      <label className="block text-sm font-medium">가게 사진</label>
      <div className="flex gap-2 overflow-x-auto">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="w-36 h-24 flex-shrink-0 relative rounded-md overflow-hidden">
              <img
                src={URL.createObjectURL(image)}
                alt={`가게 사진 ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))
        ) : (
          <div 
            onClick={handleDivClick}
            className="w-36 h-24 flex-shrink-0 flex flex-col gap-2 justify-center items-center border border-dashed border-gray-300 rounded-md cursor-pointer">
            <FaCamera className="text-gray-400" />
            <p className="text-gray-400 text-xs text-center">
              가게 대표 사진을 <br /> 등록해주세요.
            </p>
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="hidden"
      />
      <p className="text-xs text-gray-500">⚠︎ 최대 10장까지 업로드할 수 있습니다.</p>
    </div>
  );
};

export default RestaurantImageUpload;
