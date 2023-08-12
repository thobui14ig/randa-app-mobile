import { io, Socket } from 'socket.io-client';
import ApiConstant from '../api/apiConstant';

export class SocketSingleton{
    socket: Socket;

    constructor() {
        this.socket = io(ApiConstant.BASE_API_URL);
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