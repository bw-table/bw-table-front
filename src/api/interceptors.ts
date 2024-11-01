/* eslint-disable no-underscore-dangle */
import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { axiosAuth } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { tokenManager } from '@/utils/tokenManager';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = tokenManager.getToken();

  if (!accessToken) {
    throw new Error('엑세스 토큰이 존재하지 않습니다.');
  }

  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const responseInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest) {
    return Promise.reject(error);
  }

  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;

    try {
      const res = await axiosAuth.post(END_POINT.TOKEN_REFRESH);

      if (res.status === 200) {
        const token = res.data.accessToken;
        tokenManager.setToken(token);

        return await axiosAuth(originalRequest);
      }
    } catch (tokenError) {
      if (tokenError instanceof AxiosError) {
        if (tokenError.response?.status === 403) {
          tokenManager.clearToken();
          window.location.href = 'http://localhost:3000/auth';
        }
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
};
