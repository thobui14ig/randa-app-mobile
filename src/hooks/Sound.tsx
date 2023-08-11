import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { Audio } from 'expo-av';

const source = require('../../public/family1.mp3')

function Sound() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState<Audio.Sound>(); 
    const soundObject = new Audio.Sound();
  
    const playSound = async () => {
      try {
        if (!isPlaying) {
          await soundObject.loadAsync(source);
          setSound(soundObject);
          await soundObject?.playAsync();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    };
  
    const stopSound = async () => {
      if (isPlaying) {
        await sound?.stopAsync();
        setIsPlaying(false);
      }
    };
  
    useEffect(() => {
      if (isPlaying) {
        
        Alert.alert(
          'Thông báo',
          'Đơn hàng mới!. Nhận ngay.',
          [{ text: 'Cancel', onPress: async () => await stopSound() }, {text: 'OK', onPress: async () => await stopSound()},],
        );
      }
    }, [isPlaying]);

  return { playSound }
}

export default Sound
