import React, { useState, useEffect } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import Sound from './src/hooks/Sound';
import Login from './pages/Login';

export default function App() {
  const { playSound } = Sound()

  useEffect(() => {
    playSound()
  }, [])

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
