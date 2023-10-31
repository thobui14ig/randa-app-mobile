/* eslint-disable prettier/prettier */
import { FontAwesome5, Ionicons, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import Home from '../pages/home/Home';

const Tab = createBottomTabNavigator();

function MyTabs() {
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
            component={Home}
            
            options={{
            tabBarLabel: 'Nhận đơn',
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

function SettingsScreen() {
    const navigation = useNavigation();
  
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Cài đặt</Text>
      </View>
    );
  }


export default MyTabs;