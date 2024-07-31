'use client';
import { useSocket } from '../../hooks/request';

export default function SocketPage() {
  const timeFromSocket = useSocket('/socket-io', 'time');

  return <>
    <p>Socket io demo.</p>
    <div>Time: {timeFromSocket}, update every 3s.</div>
  </>
}
