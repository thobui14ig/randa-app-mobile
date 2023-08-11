import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
const source = require('./public/family.mp3')

export default function App() {
  const playSound = async() => {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(source);
      await soundObject.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }

  return (
    <View style={styles.container}>
      <View>
      <Button title="Phát âm thanh" onPress={playSound} />
    </View>
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
