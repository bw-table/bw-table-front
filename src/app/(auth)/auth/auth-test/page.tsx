'use client';

import { useEffect, useState } from 'react';
import { axiosAuth } from '@/api/axiosInstance';

export default function AuthTestPage() {
  const [data, setData] = useState<any>([]);

  const testAuthFetch = async () => {
    try {
      const res = await axiosAuth('/api/auth/test');
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    testAuthFetch();
  }, []);

  console.log(data);

  return <div>테스트 페이지</div>;
}
