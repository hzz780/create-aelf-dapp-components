import { useQuery } from '@tanstack/react-query';
import { RequestAllInOne } from 'request-all-in-one';
import { IBaseRequestOptions } from 'request-all-in-one/dist/tools/apiAllInOne/fetch-data';

const client = new RequestAllInOne({});
export const fetchDataGet = async (url: string) => {
  const response = await client.get(url);
  console.log('fetchDataGet: ', response, url);
  console.log('fetchDataGet data: ', response.data);
  return response;
};

export const fetchDataPost = async (url: string, options: IBaseRequestOptions) => {
  const response = await client.post(url, options);
  console.log('fetchDataPost: ', response);
  console.log('fetchDataPost data: ', response.data);
  return response;
};

export const useFetch = (url: string, options: IBaseRequestOptions = {}) => {
  return useQuery({
    queryKey: [url],
    queryFn: () => {
      if (options.method  === 'post') {
        return fetchDataPost(url, options);
      }
      return fetchDataGet(url);
    },
  });
};
