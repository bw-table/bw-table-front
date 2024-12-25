import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { tokenManager } from '@/utils/tokenManager';
import { getSession } from 'next-auth/react';

export const requestInterceptor = async (
  config: InternalAxiosRequestConfig,
) => {
  const accessToken = await tokenManager.fetchHttpOnlyToken();
  const session = await getSession();

  if (!session) {
    alert('세션이 만료되었습니다.');
    window.location.href = process.env.NEXT_PUBLIC_ORIGINAL_URL as string;
  }

  if (!accessToken) {
    throw Error('토큰이 존재 하지 않습니다.');
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  // config.headers['Content-Type'] = 'application/json';

  return config;
};

export const responseInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest) {
    return Promise.reject(error);
  }

  if (error.response?.status === 401) {
    try {
      const newToken = await tokenManager.getNewToken();
      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      }

      await tokenManager.clearTokens();
      window.location.href = process.env.NEXT_PUBLIC_ORIGINAL_URL as string;
    } catch (err) {
      console.error('토큰 갱신 실패:', err);
      await tokenManager.clearTokens();
      window.location.href = process.env.NEXT_PUBLIC_ORIGINAL_URL as string;
      return Promise.reject(error);
    }
  }

  if (error.response?.status === 403) {
    try {
      await tokenManager.clearTokens();
      alert('다시 로그인 해 주세요.');
      window.location.href = process.env.NEXT_PUBLIC_ORIGINAL_URL as string;
    } catch (err) {
      console.error('로그아웃 처리 중 에러 발생:', err);
    }
  }

  return Promise.reject(error);
};
