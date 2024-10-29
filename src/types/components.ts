import { ReactNode } from 'react';
import { QueryFunction, QueryKey } from '@tanstack/react-query';

export interface ExampleComponentsProps {
  content: string;
}

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  children: string | ReactNode;
  type: ButtonType;
  classNames?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'default';
}

interface QueryConfig {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}

export interface ServerPrefetchProviderProps {
  children: ReactNode;
  queries: QueryConfig | QueryConfig[];
}
