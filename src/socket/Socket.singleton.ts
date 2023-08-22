import { io, Socket } from 'socket.io-client';
import ApiConstant from '../api/apiConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class SocketSingleton{
    async getSocket() {
      const token = await AsyncStorage.getItem('token')
      const socket = io(ApiConstant.URL, {
        query: { token },
        secure: true,
      });

      socket?.on('connect', () => {
        console.log('Connected to server');
      });

      socket.on('error', (error) => {
        console.error('Socket connection error:', error);
      });
      socket.on('disconnect', () => {
        console.log('Disconnected from socket');
      });

      return socket
    }
}

