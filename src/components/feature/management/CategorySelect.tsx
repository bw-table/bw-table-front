import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface CategorySelectProps {
  register: UseFormRegister<any>;
  label: string;
  rules?: Record<string, any>;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ register, label, rules }) => (
  <div className="mb-4 flex flex-col gap-3">
    <label htmlFor="store-type" className="block text-sm font-medium">{label}</label>
    <select
      id="store-type"
      {...register('category', rules)}
      className="w-full bg-gray-100 border-none pl-3 py-3 rounded-md focus:outline-none"
    >
      <option value="" hidden>업종을 선택하세요.</option>
      <option value="KOREAN">한식당</option>
      <option value="JAPANESE">일식당</option>
      <option value="CHINESE">중식당</option>
      <option value="RESTAURANT">레스토랑</option>
      <option value="FINE_DINING">파인다이닝</option>
      <option value="OMAKASE">오마카세</option>
      <option value="FUSION">퓨전 음식점</option>
      <option value="FAST_FOOD">패스트푸드</option>
      <option value="BUFFET">뷔페</option>
      <option value="ETC">기타</option>
    </select>
  </div>
);

export default CategorySelect;
