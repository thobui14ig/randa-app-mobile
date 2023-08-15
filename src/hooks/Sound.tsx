import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSocket } from '../context/socket.context';

const source = require('../../public/family1.mp3')

function Sound() {
  const { socket, setSocket } = useSocket()
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState<Audio.Sound | null>(null); 

    const playSound = async () => {
      try {
        if (!isPlaying) {
          if (sound) {
            await sound.stopAsync();
            await sound.unloadAsync(); // giải phóng  tài nguyên âm thanh 
          }

          const soundObject = new Audio.Sound();
          await soundObject.loadAsync(source);
          setSound(soundObject);
          await soundObject.playAsync();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    };
  
    const stopSound = async () => {
      if (isPlaying && sound) {
        await sound.stopAsync();
        setIsPlaying(false);
      }
    };
  
    useEffect(() => {
      if (isPlaying) {
        Alert.alert(
          'Thông báo',
          'Đơn hàng mới! Nhận ngay.',
          [{ text: 'Cancel', onPress: async () => await stopSound() }, { text: 'OK', onPress: async () => await stopSound() }],
        );
      }
    }, [isPlaying]);

    useEffect(() => {    
      
      socket?.on('nhandon', async () => {
        await playSound();
        console.log('Có đơn hàng!.')
      });
    }, [socket]);


    return { playSound };
}

export default Sound;
