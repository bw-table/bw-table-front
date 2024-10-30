import React from 'react';
import ExampleComponent from '../components/feature/example/ExampleComponent';
import { QUERY_KEYS } from '../constants/queryKeys';
import { getExample } from '../hooks/queries/example/useGetExample';
import ServerPrefetchProvider from '../provider/ServerPrefetchProvider';

export default function Home() {
  return (
    <div>
      <ServerPrefetchProvider
        queries={{ queryKey: [QUERY_KEYS.EXAMPLE], queryFn: getExample }}
      >
        <ExampleComponent />
      </ServerPrefetchProvider>
    </div>
  );
}
