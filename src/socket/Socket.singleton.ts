import { io, Socket } from 'socket.io-client';
import ApiConstant from '../api/apiConstant';

export class SocketSingleton{
    getSocket() {
      const socket = io(ApiConstant.BASE_API_URL, {
        query: { token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInBob25lIjoiMDk2MzQ2NjI2OSIsImlhdCI6MTY5MjAyOTgwMSwiZXhwIjoxNjkyMTE2MjAxfQ.wwz6ZGs_eFTJM8m0kkimC6bBjApRn-H2xfrUPXdScjM` },
        secure: true,
      });
      socket.on('connect', () => {
        console.log('Connected to server');
      });

      return socket
    }
}

// const socketObj = new SocketSingleton()
// export const socket = socketObj.getSocket()

