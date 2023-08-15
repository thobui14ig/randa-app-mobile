/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Sound from '../hooks/Sound';
import { SocketSingleton } from '../socket/Socket.singleton';
import { useSocket } from '../context/socket.context';

const Tab = createBottomTabNavigator();

function MyTabs() {
    Sound()

    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
            headerShown: false,
            tabBarIcon: ({color}) => {
                if (route.name === 'Home') {
                return <FontAwesome5 name="shipping-fast" size={24} color="black" />
                } else if (route.name === 'History') {
                return <Octicons name="list-unordered" size={24} color="black" />
                } else if (route.name === 'Settings') {
                    return <Ionicons name="person" size={24} color="black" />
                } 
            },
        })}>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            
            options={{
            tabBarLabel: 'Nhận đơn',
            headerShown: false,
            }}
        />
        <Tab.Screen
            name="History"
            component={OrderHistory}
            options={{
            tabBarLabel: 'Lịch sử',
            headerShown: false,
            }}
        />
            <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
            tabBarLabel: 'Tôi',
            headerShown: false,
            }}
        />
        </Tab.Navigator>
    );
}

function HomeScreen() {
    const { setSocket } = useSocket()
    const onPress = () => {
        const socket = (new SocketSingleton()).getSocket()
        setSocket(socket)
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
            onPress={onPress}
            title="Nhận đơn ngay"
            color="#841584"
        />
        </View>
    );
}

function OrderHistory() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Lịch sử đơn hàng</Text>
    </View>
  );
}

function SettingsScreen() {
    const navigation = useNavigation();
  
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Cài đặt</Text>
      </View>
    );
  }


export default MyTabs;