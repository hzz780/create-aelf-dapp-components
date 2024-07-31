import {useQuery} from '@tanstack/react-query';
import {RequestAllInOne} from 'request-all-in-one';
import {IApolloRequestOptions} from 'request-all-in-one/dist/tools/apiAllInOne/apollo-client';
import {gql} from '@apollo/client';

const client = new RequestAllInOne({});
export const graphql = async (url: string, query: string) => {
  return await client.gql(url, {
    query: gql`${query}`
  });
};

export const useGraphql = (url: string, options: IApolloRequestOptions = {}) => {
  return useQuery({
    queryKey: [url],
    queryFn: () => graphql(url, options.query),
  });
};
