import React from 'react';
import RestaurantFacilities from '@/components/feature/restaurant/RestaurantFacilities';
import RestaurantDetailInfo from '@/components/feature/restaurant/RestaurantDetailInfo';
import RestaurantAnnouncement from '@/components/feature/restaurant/RestaurantAnnouncement';
import RestaurantReviewTab from '@/components/feature/restaurant/RestaurantReviewTab';
import { RestaurantDetailRequestType } from '@/types';
import RestaurantMenuTab from './RestaurantMenuTab';

interface RestaurantHomeTabProps {
  restaurantId: number;
  restaurantDetail?: RestaurantDetailRequestType;
}

const RestaurantHome: React.FC<RestaurantHomeTabProps> = ({ restaurantId, restaurantDetail }) => {

  if (!restaurantDetail) {
    return <p>식당 정보를 불러올 수 없습니다.</p>;
  }

  return (
    <div>
      <RestaurantFacilities facilities={restaurantDetail?.facilities} />
      <RestaurantMenuTab menus={restaurantDetail?.menus}/>
      <RestaurantDetailInfo
        contact={restaurantDetail?.contact}
        operatingHours={restaurantDetail?.operatingHours}
        closedDay={restaurantDetail?.closedDay}
        info={restaurantDetail?.info}
      />
      <RestaurantAnnouncement restaurantId={restaurantId} />
      <RestaurantReviewTab restaurantId={restaurantId} />
    </div>
  );
};

export default RestaurantHome;
