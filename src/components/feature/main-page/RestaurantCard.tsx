import { useRouter } from 'next/navigation';
import React from 'react';

interface CardProps {
  imageSrc: string;
  name: string;
  averageRating: number;
  category: string;
  id: number;
}

const RestaurantCard: React.FC<CardProps> = ({ imageSrc, name, averageRating, category, id }) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/restaurants/${id}`);
  };

  return (
    <div 
      className="w-60 flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <img src={imageSrc} alt={name} className="w-full h-32 object-cover" />
      <div className="p-3">
        <p className="text-sm text-gray-700 truncate">{name}</p>
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <span className="text-yellow-500 text-lg mr-1">★</span>
          <span>{averageRating}</span>
          <span className="mx-1">·</span>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
