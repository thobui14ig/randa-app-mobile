import React, { useState, useEffect } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import Login from './pages/Login';
const source = require('./public/family1.mp3')

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound>(); // Sử dụng null thay vì undefined
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
        [{ text: 'Cancel', onPress: async () => await stopSound() }, { text: 'OK', onPress: async () => await stopSound() },],
      );
    }
  }, [isPlaying]);

  return (
    <>
      <Login />
      {/* <View style={styles.container}>
        <Button title="Phát âm thanh" onPress={playSound} />
      </View> */}
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
