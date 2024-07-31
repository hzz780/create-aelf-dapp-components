'use client';
import { useFetch } from '../../hooks/request';
export default function FetchPage() {
  const {data}: any = useFetch('https://api.github.com/repos/TanStack/query');

  console.log(' useFetch data: ', data);
  if (!data) {
    return <>No data</>;
  }

  return <>
    <div>
      <p>{data.full_name}</p>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  </>;
}
