import { AntDesign } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Sound from './src/hooks/Sound';
import Socket from './src/socket/socket';


export default function App() {
  const { playSound } = Sound()
  const { socket } = Socket()

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
