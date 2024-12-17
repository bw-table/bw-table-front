export interface SignupFormData {
  email: string;
  password: string;
  checkPassword: string;
  phone: string;
  nickname: string;
  name: string;
  businessNumber: string;
}

export interface SignInFormData {
  email: string;
  password: string;
}

export interface AnnouncementFormData {
  id: number;
  isEvent: boolean;
  title: string;
  content: string;
  createdAt: string;
}

export interface ReviewFormData {
  id: number;
  restaurantId: number;
  content: string;
  rating: number;
  images?: string[];
  createdAt: string;
  updatedAt: string;
  memberId: number;
  memberNickname: string;
  memberProfileImage: string;
}

export interface MenuFormData {
  id?: number;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  restaurantId: number;
}

export interface OperatingHourData {
  dayOfWeek: string;
  openingTime: string;
  closingTime: string;
  }

export interface SubmitRestaurantData {
  name: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  contact: string;
  closedDay: string;
  category: string;
  link: string;
  info: string;
  deposit: number;
  impCode: string;
  operatingHours: OperatingHourData[];
  menus: MenuFormData[];
  images: File[];
  facilities: string[];
  hashtags: string[];
}

export interface MainRestaurantType {
  image: string;
  id: number;
  name: string;
  address: string;
  category: string;
  averageRating: number;
}