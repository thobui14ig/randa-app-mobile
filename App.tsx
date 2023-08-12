import { AntDesign } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Sound from './src/hooks/Sound';

export default function App() {
  const { playSound } = Sound()

  useEffect(() => {
    playSound()
  }, [])

  return (
    <View style={styles.container}>
      <AntDesign name="down" size={24} color="black" />
      <Button title="Phát âm thanh" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
