import {useEffect, useState} from 'react';
import { useQueryClient } from '@tanstack/react-query';
// TODO: export ts on request-all-in-one
import { IBaseRequestOptions } from 'request-all-in-one/dist/tools/apiAllInOne/fetch-data';
import { RequestAllInOne } from 'request-all-in-one';

export interface ISocketRequestOptions extends IBaseRequestOptions {
  type: 'on' | 'emit'
  event: string
  value?: string
  callback?: Function;
  queryKey: string[]
  socketPath?: string;
}

export const useSocket = (url: string, eventName: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // const socket = io(url);
    const socket = new RequestAllInOne({
      socketPath: url // '/socket-io/'
    }).socketClient;

    if (!socket) {
      return;
    }

    socket.on(eventName, (message) => {
      setData(message);
    });

    return () => {
      socket.disconnect();
    };
  }, [url, eventName]);

  return data;
};

// TODO
export const useSocketWithCache = (url: string, options: ISocketRequestOptions) => {
  const [data, setData] = useState<any>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const _socket = new RequestAllInOne({
      socketPath: url // '/socket-io/'
    }).socketClient;

    if (!_socket) {
     return;
    }

    _socket.on(options.event, (socketId: string, message: string) => {
      console.log(options.event, socketId, message);
      const data = JSON.parse(message);

      queryClient.setQueryData(options.queryKey, (oldData: []) => {
        const _data = [...(oldData || []), data];
        setData(_data);
        return _data;
        // return [...(oldData || []), data];
      });
    });

    return () => {
      _socket.close();
    };
  }, [url, queryClient, options.queryKey, options.event, options.value]);

  return data;
};
