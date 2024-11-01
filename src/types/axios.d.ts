import { InternalAxiosRequestConfig } from 'axios';

declare module 'axios' {
  export interface InternalAxiosRequestConfig<T = any>
    extends Omit<
      InternalAxiosRequestConfig<T>,
      '_retry' | '_retryCount' | '_maxRetries'
    > {
    _retry?: boolean;
    _retryCount?: number;
    _maxRetries?: number;
  }
}
