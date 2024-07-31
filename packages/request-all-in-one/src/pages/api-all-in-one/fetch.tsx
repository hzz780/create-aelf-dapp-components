'use client';
import {RequestAllInOne} from '../../tools/apiAllInOne/fetch-data';
import {useEffect, useState} from 'react';

const client = new RequestAllInOne({});

export default function FetchPage() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.get('https://api.github.com/repos/TanStack/query');
      setData(response);
    };
    fetchData();
  }, []);

  if (!data) {
    return <>No data</>;
  }

  return <>
    <div>
      <div> Fetch Only </div>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      {/*<div>{isFetching ? 'Updating...' : ''}</div>*/}
    </div>
  </>;
}
