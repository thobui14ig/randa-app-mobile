import { AntDesign } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Sound from './src/hooks/Sound';
import { socket } from './src/socket/Socket.singleton';


export default function App() {
  Sound()

  const handleNhanDon = () => {
    socket?.emit('nhandonhang');
  }

  return (
    <View style={styles.container}>
      <AntDesign name="down" size={24} color="black" />
      <Button title="Phát âm thanh" onPress={handleNhanDon} />
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
