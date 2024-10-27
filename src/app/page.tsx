import ExampleComponent from '@/components/feature/example/ExampleComponent';
import ServerPrefetchProvider from '@/provider/ServerPrefetchProvider';
import {QUERY_KEYS} from '@/constants/queryKeys';
import {getExample} from '@/hooks/queries/example/useGetExample';

export default function Home() {
  return (
    <div>
      <ServerPrefetchProvider
        queries={{queryKey: [QUERY_KEYS.EXAMPLE], queryFn: getExample}}
      >
        <ExampleComponent />
      </ServerPrefetchProvider>
    </div>
  );
}
