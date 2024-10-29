'use client';

import { useGetExample } from '@/hooks/queries/example/useGetExample';
import { ExampleType } from '@/types';

export default function ExampleComponent() {
  const { example } = useGetExample();

  return <div>{example.map((ex: ExampleType) => ex.name)}</div>;
}
