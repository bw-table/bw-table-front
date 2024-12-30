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
  type?: ButtonType;
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
  label?: string;
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

export interface CommonCalendarProps {
  onDateChangeAction?: (date: Date | null) => void;
  showTodayButton?: boolean;
}

export interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface ReservationConfirmProps {
  date: string;
  time: string;
  numberOfPeople: number;
  onSpecialRequest: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export interface ReservationStateCardProps {
  children: ReactNode;
  title: string;
  mainData: string;
}

export type StatusVariant = 'VISITED' | 'CONFIRMED' | 'CANCELED' | 'NO_SHOW';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: StatusVariant;
  classNames?: string;
  children: React.ReactNode | string;
}
