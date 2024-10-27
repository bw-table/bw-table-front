import axios from 'axios';

export const axiosDefault = axios.create({
  // 현재 목데이터 서버 주소 / 포트:9090
  baseURL: 'http://localhost:9090',
  headers: {
    'Content-Type': 'application/json',
  },
});
