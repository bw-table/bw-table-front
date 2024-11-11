import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    nickname: string;
    phone: string;
    profileImage: string;
    role: string;
    businessNumber: string;
    restaurantId?: string;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      nickname: string;
      phone: string;
      profileImage: string;
      role: string;
      businessNumber: string;
      restaurantId?: string;
    };
  }
}
