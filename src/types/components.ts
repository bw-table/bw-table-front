import { ReactNode } from 'react';
import { QueryFunction, QueryKey } from '@tanstack/react-query';

export interface ExampleComponentsProps {
  content: string;
}

export type ButtonProps = {
  label: string;
  variant?: 'default';
  className?: string;
};

interface QueryConfig {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}

export interface ServerPrefetchProviderProps {
  children: ReactNode;
  queries: QueryConfig | QueryConfig[];
}
