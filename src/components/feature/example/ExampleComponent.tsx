'use client';

import React from 'react';
import { useGetExample } from '@/hooks/queries/example/useGetExample';
import { ExampleType } from '@/types/response';
import Link from 'next/link';

export default function ExampleComponent() {
  const { example } = useGetExample();

  return (
    <div className="flex flex-col gap-5">
      {example.map((ex: ExampleType) => ex.name)}
      <Link href="/auth/auth-test">토큰 검증 페이지 바로가기</Link>
    </div>
  );
}
