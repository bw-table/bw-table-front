'use client';

import Button from '@/components/common/button/Button';
import { useGetExample } from '@/hooks/queries/example/useGetExample';
import { ExampleType } from '@/types';

export default function ExampleComponent() {
  const { example } = useGetExample();

  return (
    <div>
      {example.map((ex: ExampleType) => ex.name)}
      <Button label="예시 버튼" />
    </div>
  );
}
