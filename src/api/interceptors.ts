import { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  return config;
};

export const responseInterceptor = (error: AxiosError) => {
  return error;
};
