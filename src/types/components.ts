import React, { ReactNode } from 'react';
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  type: ButtonType;
  href?: string;
  onClick?: () => void;
  classNames?: string;
  variant?: 'default';
}

export interface CommonInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  variant?: 'default' | 'disabled';
  classNames?: string;
}

export interface FormInputProps<T extends FieldValues>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'variant'> {
  variant?: 'default' | 'disabled' | 'error';
  label: Path<T>;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T>;
  error?: FieldError;
  classNames?: string;
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
