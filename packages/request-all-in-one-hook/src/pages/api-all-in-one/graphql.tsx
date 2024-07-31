'use client';
import {useGraphql} from '../../hooks/request';

export const queryCountries = `
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

export default function GraphqlPage() {
  const {data}: any = useGraphql('https://countries.trevorblades.com', {
    query: queryCountries
  });

  console.log('useGraphql  data: ', data);
  if (!data || !data.countries) {
    return <>No data</>;
  }

  return <div>
    {data.countries.slice(0, 4).map((country: any) => (
      <div key={country.code}>
        <h3>{country.name}</h3>
        <p>
          {country.code} - {country.emoji}
        </p>
      </div>
    ))}
  </div>
}
