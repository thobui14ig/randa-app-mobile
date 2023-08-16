import React, { useContext, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface SocketState {
  socket: Socket | null;
  setSocket: any
}

export const SocketContext = React.createContext<SocketState>({
    socket: null,
    setSocket: undefined
});

const SocketProvider = ({ children }: any) => {
  const [socket, setSocket] = useState(null);

  const values = {
    socket, setSocket
  };

  return <SocketContext.Provider value={values}>{children}</SocketContext.Provider>;
};

export default SocketProvider;

export const useSocket = (): SocketState => {
  return useContext(SocketContext);
};