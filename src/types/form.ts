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
  announcementId: number;
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
  userId: number;
}

export interface MenuFormData {
  id?: number;
  image?: File | null;
  name: string;
  price: string;
  description: string;
}

}