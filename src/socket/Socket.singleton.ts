import { io, Socket } from 'socket.io-client';
import ApiConstant from '../api/apiConstant';

export class SocketSingleton{
    socket: Socket;

    constructor() {
        this.socket = io(ApiConstant.BASE_API_URL, {
            query: { token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInBob25lIjoiMDk2MzQ2NjI2OSIsImlhdCI6MTY5MTkxMTY1NSwiZXhwIjoxNjkxOTk4MDU1fQ._Ww3Cosatfy1Jf13PcLzPJRNLSZMekOfgHMHGZSckqU` },
            secure: true,
          });
        this.socket.on('connect', () => {
          console.log('Connected to server');
        });
    }

    getSocket() {
        return this.socket;
    }
}

const socketObj = new SocketSingleton()
export const socket = socketObj.getSocket()

