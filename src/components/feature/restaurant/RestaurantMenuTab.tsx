import React from 'react';
import { RestaurantDetailRequestType } from '@/types';
import Divider from '@/components/common/divider/CommonDivider';

interface MenuTabProps {
  menus: RestaurantDetailRequestType['menus'];
}

const RestaurantMenuTab: React.FC<MenuTabProps> = ({ menus }) => {
  return (
    <Divider classNames="px-4 mb-4">
      <h2 className="text-lg font-semibold">메뉴</h2>
      {menus?.map((menu) => (
        <div key={menu.id} className="flex justify-between py-2 border-b">
          <div className='flex flex-col gap-1'>
            <span className='font-bold text-lg'>{menu.name}</span>
            <span className='text-gray-500 text-sm'>{menu.description}</span>
            <span className='font-bold text-sm'>{menu.price} 원</span>
          </div>
          {menu.imageUrl && (
            <img
              src={menu.imageUrl}
              alt={menu.name}
              className="w-16 h-16 object-cover rounded"
            />
          )}
        </div>
      ))}
    </Divider>
  );
};

export default RestaurantMenuTab;
