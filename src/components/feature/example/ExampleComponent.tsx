'use client';

import React from 'react';
import { useGetExample } from '../../../hooks/queries/example/useGetExample';
import { ExampleType } from '../../../types/response';

export default function ExampleComponent() {
  const { example } = useGetExample();

  return <div>{example.map((ex: ExampleType) => ex.name)}</div>;
}
