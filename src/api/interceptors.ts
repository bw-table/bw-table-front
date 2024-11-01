import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { tokenManager } from '@/utils/tokenManager';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = tokenManager.getToken();

  if (!accessToken) {
    throw new Error('엑세스 토큰이 존재하지 않습니다.');
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const responseInterceptor = (error: AxiosError) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest) {
    return Promise.reject(error);
  }

  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
  }
};
