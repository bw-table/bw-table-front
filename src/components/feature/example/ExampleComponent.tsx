'use client';

import CommonButton from '@/components/common/button/CommonButton';
import { useGetExample } from '@/hooks/queries/example/useGetExample';
import { ExampleType } from '@/types';

export default function ExampleComponent() {
  const { example } = useGetExample();

  return (
    <div>
      {example.map((ex: ExampleType) => ex.name)}
      <CommonButton label="예시 버튼" />
    </div>
  );
}
