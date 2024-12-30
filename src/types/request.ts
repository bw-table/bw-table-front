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
  restaurantCategory?: string;
  restaurantImages?: string[];
  page?: number;
  size?: number;
  restaurantId?: number;
  reservationId?: number;
  restaurantName?: string;
  memberId?: number;
  reservationStatus?: string;
  reservationDate?: string;
  reservationTime: string;
  numberOfPeople?: number;
}

export interface ReviewRequestType {
  id: number;
  content: string;
  rating: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
  restaurantId: number;
  restaurantName: string;
  restaurantCategory: string;
  memberId: number;
  memberProfileImage: string | null;
  memberNickname: string;
}