import axios from 'axios';
import { requestInterceptor, responseInterceptor } from '@/api/interceptors';

export const axiosDefault = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosAuth.interceptors.request.use(requestInterceptor, (error) =>
  Promise.reject(error),
);

axiosAuth.interceptors.response.use(
  (response) => response,
  responseInterceptor,
);
