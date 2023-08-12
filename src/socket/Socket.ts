import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

function Socket() {
    const [socket, setSocket] = useState<any>()
    useEffect(() => {
        const socket = io('http://192.168.60.59:3000');
        socket.on('connect', () => {
            console.log('Connected to server');
        });
        setSocket(socket)

        return () => {
            socket?.disconnect();
        };
      }, []);

    return { socket }
}

export default Socket