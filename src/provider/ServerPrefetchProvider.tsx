import { ServerPrefetchProviderProps } from '@/types';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export default async function ServerPrefetchProvider({
  children,
  queries,
}: ServerPrefetchProviderProps) {
  const queryClient = new QueryClient();

  const queriesToPrefetch = Array.isArray(queries) ? queries : [queries];

  try {
    await Promise.all(
      queriesToPrefetch.map(({ queryKey, queryFn }) =>
        queryClient.prefetchQuery({ queryKey, queryFn }),
      ),
    );

    return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
  } catch (error) {
    console.error('서버사이드 프리패칭 에러:', error);

    queryClient.setQueryData(['serverError'], error);

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div>
          <h1>서버 사이드 렌더링중 에러 발생</h1>
          <p>{error instanceof Error ? error.message : '알 수 없는 오류'}</p>
        </div>
      </HydrationBoundary>
    );
  }
}
