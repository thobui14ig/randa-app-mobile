import { io, Socket } from 'socket.io-client';
import ApiConstant from '../api/apiConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class SocketSingleton{
    async getSocket() {
      const token = await AsyncStorage.getItem('token')
      console.log(123, token)
      const socket = io(ApiConstant.BASE_API_URL, {
        query: { token },
        secure: true,
      });
      socket?.on('connect', () => {
        console.log('Connected to server');
      });

      return socket
    }
}

// const socketObj = new SocketSingleton()
// export const socket = socketObj.getSocket()

