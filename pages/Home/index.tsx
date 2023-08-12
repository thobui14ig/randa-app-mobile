import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
const Home = () => {
    const Header = () => (
        <View style={styles.homeHeader}>
            <Image
                source={require('../../assets/account.jpg')}
                style={styles.image}
            />
            <FontAwesome name="search" size={20} color="black" />
        </View>
    );

    const Container = () => (
        <ScrollView>
            <View style={styles.homeMain}>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl4.jpg')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Điện tử, Điên lạnh</Text>
                    </View>
                </View>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl3.jpg')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Đồ gỗ, Điện nước, Xây trát</Text>
                    </View>
                </View>
            </View>
            <View style={styles.homeMain}>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl6.jpg')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Thuê xe có lái</Text>
                    </View>
                </View>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl5.png')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Thiết bị thông minh</Text>
                    </View>
                </View>
            </View>
            <View style={styles.homeMain}>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl2.jpg')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Cưu hộ giao thông</Text>
                    </View>
                </View>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl6.jpg')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Giúp việc, vệ sinh</Text>
                    </View>
                </View>
            </View>
            <View style={styles.homeMain}>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl4.jpg')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Máy tính, camera</Text>
                    </View>
                </View>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl3.jpg')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Đồ gỗ, Điện nước, Xây trát</Text>
                    </View>
                </View>
            </View>
            <View style={styles.homeMain}>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl2.jpg')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Cưu hộ giao thông</Text>
                    </View>
                </View>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl6.jpg')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Giúp việc, vệ sinh</Text>
                    </View>
                </View>
            </View>
            <View style={styles.homeMain}>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl4.jpg')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Máy tính, camera</Text>
                    </View>
                </View>
                <View style={styles.homeMainItem}>
                    <Image
                        source={require('../../assets/girl3.jpg')}
                        style={styles.imageMain}
                    />
                    <View style={styles.homeMainParentText}>
                        <Text style={styles.homeMainText}>Đồ gỗ, Điện nước, Xây trát</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

    const Footer = () => (
        <View style={styles.footer}>
            <View style={styles.footerItem}>
                <FontAwesome name="history" size={28} color="black" />
                <Text>History</Text>
            </View>
            <View style={styles.footerItem}>
                <MaterialIcons name="design-services" size={28} color="black" />
                <Text>Service</Text>
            </View>
            <View style={styles.footerItem}>
                <AntDesign name="like1" size={28} color="black" />
                <Text>Like</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.screen}>
            <Header />
            <Container />
            <Footer />
        </View>

    );
};

const styles = StyleSheet.create({
    homeHeader: {
        width: '100%',
        height: 50,
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 50
    },
    homeMain: {
        marginTop: 5,
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '1%',
        paddingRight: '1%',
        justifyContent: 'space-between',
        marginBottom: 3
    },
    homeMainItem: {
        width: '48%',
        height: 200
    },
    homeMainParentText: {
        width: '100%',
        height: '22%',
        backgroundColor: '#440000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeMainText: {
        color: 'white',
        fontSize: 16
    },
    imageMain: {
        width: '100%',
        height: '78%',
    },
    screen: {
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#EEEEEE',
        padding: 18,
        alignItems: 'center',
    },
    footerItem: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Home;