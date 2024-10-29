import { ReactNode } from 'react';
import { QueryFunction, QueryKey } from '@tanstack/react-query';

export type ButtonType = 'button' | 'submit' | 'reset';
type InputType = 'text' | 'password' | 'email' | 'date' | 'number';

export interface ButtonProps {
  children: string | ReactNode;
  type: ButtonType;
  onClick?: () => void;
  disabled?: boolean;
  classNames?: string;
  variant?: 'default';
}

export interface CommonInputProps {
  type: InputType;
  variant?: 'default' | 'disabled';
  classNames?: string;
  placeholder?: string;
  required?: boolean;
  disable?: boolean;
  maxLength?: number;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  readOnly?: boolean;
}

interface QueryConfig {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}

export interface ServerPrefetchProviderProps {
  children: ReactNode;
  queries: QueryConfig | QueryConfig[];
}
