/* eslint-disable no-underscore-dangle */
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { END_POINT } from '@/constants/endPoint';
import { tokenManager } from '@/utils/tokenManager';

const getNewToken = async () => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${END_POINT.TOKEN_REFRESH}`,
      {},
      {
        withCredentials: true,
      },
    );
    const newToken = res.data.data.accessToken;
    tokenManager.setToken(newToken);
    return newToken;
  } catch (e) {
    if (e instanceof AxiosError) {
      window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/auth`;
      throw Error(e.message);
    }
  }
  return null;
};

export const requestInterceptor = async (
  config: InternalAxiosRequestConfig,
) => {
  let accessToken = tokenManager.getToken();

  if (!accessToken) {
    accessToken = await getNewToken();
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
    const newToken = await getNewToken(); // 새 토큰을 받아서
    if (newToken) {
      originalRequest.headers.Authorization = `Bearer ${newToken}`; // 헤더에 설정
    }
    return axios(originalRequest);
  }

  if (error.response?.status === 403) {
    window.location.href = process.env.NEXT_PUBLIC_BASE_URL as string;
  }
  return Promise.reject(error);
};
