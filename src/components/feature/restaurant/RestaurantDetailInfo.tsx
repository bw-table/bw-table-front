import React from 'react';
import { RestaurantDetailRequestType } from '@/types';
import Divider from '@/components/common/divider/CommonDivider';

interface RestaurantDetailInfoProps {
  contact: RestaurantDetailRequestType['contact'];
  operatingHours: RestaurantDetailRequestType['operatingHours'];
  closedDay: RestaurantDetailRequestType['closedDay'];
  info: RestaurantDetailRequestType['info'];
}

const RestaurantDetailInfo: React.FC<RestaurantDetailInfoProps> = ({
  contact,
  operatingHours,
  closedDay,
  info
}) => {
  return (
    <Divider classNames="p-4 bg-white shadow-md my-4">
      <h2 className="text-xl font-semibold mb-2">상세 정보</h2>
      <div className="mt-2">
        <p className="font-semibold">전화번호</p>
        <p className='text-blue-500'>{contact || '전화번호가 없습니다.'}</p>
      </div>
      <div className="mt-4">
        <p className="font-semibold my-2">영업시간</p>
        <ul className="list-inside">
          {operatingHours?.map((hour) => (
            <li key={hour.id} className='text-gray-500 text-sm mb-2'>
              {hour.dayOfWeek}<br />{hour.openingTime} ~ {hour.closingTime}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <p className="my-2 font-semibold">정기휴무일</p>
        <p className='text-gray-500 text-sm mb-2'>{closedDay}</p>
      </div>
      <div className="mt-4">
        <p className="my-2 font-semibold">안내 및 유의사항</p>
        <p className='text-gray-500 text-sm mb-2'>{info}</p>
      </div>
    </Divider>
  );
};

export default RestaurantDetailInfo;