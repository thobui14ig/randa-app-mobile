import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        alert('Bạn đã đăng nhập thành công.')
        // Xử lý đăng nhập ở đây
    };

    return (
        <View style={styles.login}>
            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.btnParent}>
                <TouchableOpacity style={styles.btnText}>
                    <Text style={styles.text}>Quên mật khẩu?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF6600' // màu cam
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#CC6633',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        height: 40,
        display: 'flex',
        alignItems: 'center',
    },
    btnParent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        width: '50%',
    },
    text: {
        width: '100%',
        color: 'white',
        fontSize: 17
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },

});
export default Login;