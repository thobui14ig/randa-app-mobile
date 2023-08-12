import { AntDesign } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Sound from './src/hooks/Sound';
import Login from './pages/Login';
import Home from './pages/Home';

export default function App() {
  const { playSound } = Sound()

  // useEffect(() => {
  //   playSound()
  // }, [])

  return (
    <>
      {/* <Login /> */}
      <Home />
      {/* <View style={styles.container}>
        <Button title="Phát âm thanh" onPress={playSound} />
      </View> */}

    {/* <View style={styles.container}>
      <AntDesign name="down" size={24} color="black" />
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
