'use client';

import { PropsWithChildren, useState } from 'react';
import { useError } from '@/hooks/useError';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function QueryProvider({ children }: PropsWithChildren) {
  const errorHandler = useError();

  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000 * 5,
            refetchOnWindowFocus: false,
          },
          mutations: {
            onError: errorHandler,
          },
        },
        queryCache: new QueryCache({
          onError: (error, query) => {
            // 서버사이드 프리페칭 에러 구분
            if (query.state.dataUpdatedAt === 0) {
              console.error('서버사이드 프리패칭 에러:', error);
              return;
            }
            errorHandler(error);
          },
        }),
      }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
