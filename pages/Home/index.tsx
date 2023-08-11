import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
const Home = () => {
    return (
        <View>
            <View style={styles.homeHeader}>
                <Text style={styles.homeHeaderLeft}>Account</Text>
                <Text style={styles.homeHeaderCenter}>I want</Text>
                <Text style={styles.homeHeaderRight}>Search</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeHeader: {
        width: '100%',
        height: 50,
        marginTop: 50,
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    homeHeaderLeft: {
        color: 'white',
        fontSize: 17,
    },
    homeHeaderCenter: {
        color: 'white',
        fontSize: 17,
    },
    homeHeaderRight: {
        color: 'white',
        fontSize: 17,
    }
});
export default Home;