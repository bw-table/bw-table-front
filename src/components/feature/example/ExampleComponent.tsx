'use client';

import {useGetExample} from '@/hooks/queries/example/useGetExample';
import {ExampleType} from '@/types';
import Button from '@/components/common/button/Button';

export default function ExampleComponent() {
  const {example} = useGetExample();

  return (
    <div>
      {example.map((ex: ExampleType) => ex.name)}
      <Button label={'예시 버튼'} />
    </div>
  );
}
