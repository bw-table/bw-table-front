import { AnnouncementFormData, MenuFormData, ReviewFormData } from "./form";

export interface SignUpRequestType {
  email: string;
  password: string;
  name: string;
  nickname: string;
  phone: string;
  role: string;
  businessNumber?: string;
}

export interface ReservationData {
  restaurantId: number;
  reservationDate: string;
  reservationTime: string;
  numberOfPeople: number;
  specialRequest: string;
}

export interface SignInRequestType {
  email: string;
  password: string;
}

export interface RestaurantDetailRequestType {
  restaurantId: number;
  name: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  contact?: string;
  closedDay?: string;
  category: string;
  link: string;
  averageRating: number;
  info?: string;
  images: [];
  announcements: AnnouncementFormData[];
  menus: MenuFormData[];
  facilities: [];
  hashtags: [];
  operatingHours?: [
    {
      id: number;
      dayOfWeek: string;
      openingTime: string;

      closingTime: string;
      restaurantId: number;
    },
  ]
  reviews: ReviewFormData[];

}

export interface ReservationsRequestType {
  page?: number;
  size?: number;
  restaurantId?: number;
  reservationId?: number;
  memberId?: number;
  reservationStatus: string;
  reservationDate?: string;
  reservationTime: string;
  numberOfPeople?: number;
}
