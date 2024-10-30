import { ReactNode } from 'react';
import { QueryFunction, QueryKey } from '@tanstack/react-query';
import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export type ButtonType = 'button' | 'submit' | 'reset';
type InputType = 'text' | 'password' | 'email' | 'date' | 'number' | 'tel';

export interface ButtonProps {
  children: string | ReactNode;
  type: ButtonType;
  href?: string;
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

export interface FormInputProps<T extends FieldValues>
  extends Omit<CommonInputProps, 'variant'> {
  variant?: 'default' | 'disabled' | 'error';
  label: Path<T>;
  register: UseFormRegister<T>;
  rules?: RegisterOptions;
  error?: FieldError;
}

interface QueryConfig {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}

export interface ServerPrefetchProviderProps {
  children: ReactNode;
  queries: QueryConfig | QueryConfig[];
}

export interface ContainerProps {
  children: ReactNode;
  variant: 'mobile' | 'tablet';
  classNames?: string;
}
