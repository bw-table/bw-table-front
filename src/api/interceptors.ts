/* eslint-disable no-underscore-dangle */
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { tokenManager } from '@/utils/tokenManager';

export const requestInterceptor = async (
  config: InternalAxiosRequestConfig,
) => {
  let accessToken = tokenManager.getToken();

  console.log('리퀘스트 인터셉터 토큰', accessToken);

  if (!accessToken) {
    accessToken = await tokenManager.refreshToken();
  }

  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

export const responseInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest) {
    return Promise.reject(error);
  }

  if (error.response?.status === 401) {
    const newToken = await tokenManager.refreshToken();
    if (newToken) {
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
    }
    return axios(originalRequest);
  }

  if (error.response?.status === 403) {
    tokenManager.clearToken();
    window.location.href = process.env.NEXT_PUBLIC_ORIGINAL_URL as string;
  }
  return Promise.reject(error);
};
