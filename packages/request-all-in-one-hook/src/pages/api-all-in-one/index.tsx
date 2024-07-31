'use client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import FetchPage from './fetch.tsx';
import SocketPage from './socket.tsx';
import GraphqlPage from './graphql.tsx';

const queryClient = new QueryClient();

export default function RequestAllPage() {

  return <>
    <QueryClientProvider client={queryClient}>
      <span>QueryClientProvider</span>
      <h1>Fetch</h1>
      <FetchPage />
      <h1>Socket</h1>
      <SocketPage />
      <h1>Graphql</h1>
      <GraphqlPage />
    </QueryClientProvider>
  </>;
}
