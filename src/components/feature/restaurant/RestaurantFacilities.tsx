import React from 'react';
import { FACILITY_ICONS, FacilityKey } from '@/constants/icons';
import Divider from '@/components/common/divider/CommonDivider';

interface RestaurantFacilitiesProps {
  facilities?: FacilityKey[];
}

const RestaurantFacilities: React.FC<RestaurantFacilitiesProps> = ({ facilities }) => {
  return (
    <Divider classNames=" p-4 gap-2">
      <h2 className='font-semibold text-lg my-2'>편의시설</h2>
      <div className="flex flex-wrap gap-2">
        {facilities?.map((key) => {
          const facility = FACILITY_ICONS[key];
          const IconComponent = facility.icon;
          return (
            <div key={key} className="flex flex-col items-center px-2 py-1 gap-2">
              <IconComponent className="w-8 h-8" />
              <span className="ml-1">{facility.name}</span>
            </div>
          );
        })}
      </div>
    </Divider>
  );
};

export default RestaurantFacilities;
