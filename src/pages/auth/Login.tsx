import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../api/auth';
import Toast from 'react-native-toast-message';
import { HttpStatusCode } from '../../enum/status-code';
import isValidEmail from '../../libs/validate/email';
import { LoginErrorMessage } from '../../enum/validation-error';
import { StatusCodeMessage } from '../../enum/status-code-message';


function Login({ navigation }: any) {
    const [email, setEmail] = useState<string>('')
    const [password, setPassWord] = useState<string>('')

    const handleLogin = async () => {
      if (email.trim().length === 0 || password.trim().length === 0) {
        return showError(LoginErrorMessage.NOT_NULL)
      }

      if (!isValidEmail(email)) {
        return showError(LoginErrorMessage.NOT_EMAIL)
      }

      try {
        const { data } = await login({ email, password })
        await AsyncStorage.setItem('token', data.access_token)
        navigation.navigate('MyTabs')

      } catch (error: any) {
        if (error.response?.data?.statusCode === HttpStatusCode.Unauthorized) {
          return showError(LoginErrorMessage.NOT_FOUND)
        }

        return showError(StatusCodeMessage.CODE_500)
      }
    }

    const showError = (message: string) => {
      Toast.show({
        type: 'error',
        text1: message
      });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>HeyAPP</Text>
            <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Email..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => setEmail(text)}/>
            </View>
            <View style={styles.inputView} >
            <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Password..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => setPassWord(text)}/>
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });