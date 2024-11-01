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
};
