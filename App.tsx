import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import SocketProvider from './src/context/socket.context';
import MyTabs from './src/navigation/Tab';
import Login from './src/pages/auth/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SocketProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MyTabs" component={MyTabs} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>      
    </SocketProvider>


  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>App kỹ thuật</Text>
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
