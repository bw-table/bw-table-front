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
  date: string;
  time: string;
  people: number;
  specialRequest: string;
}

export interface SignInRequestType {
  email: string;
  password: string;
}

export interface RestaurantDetailRequestType {
  restaurantId: number,
  name: string,
  description: string,
  address: string,
  contact: string,
  closedDay: string,
  category: string,
  link: string,
  rating: number,
  reviews: [],
  notices: [
    { id: number, title: string, content: string },
  ]
  images: [],
  menus: [
      {
          id: number,
          name: string,
          price: number,
          description: string,
          imageUrl: string,
          restaurantId: number
      }
  ],
  facilities: [],
  hashtags: [],
  operatingHours: [
      {
          id: number,
          dayOfWeek: string,
          openingTime: string,
          closingTime: string,
          restaurantId: number
      }
]
}
