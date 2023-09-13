import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { NativeBaseProvider} from 'native-base';
import { FontAwesome, AntDesign, Ionicons, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MyWalletList from './MyWalletList';

function WalletContent() {
    const navigation = useNavigation();
    const [isBridgeModalVisible, setIsBridgeModalVisible] = useState(false);

    const onDotButtonPress = () => {
        setIsBridgeModalVisible(true);
    }

    const onBridgeModalClose = () => {
        setIsBridgeModalVisible(false);
    }

    return (
        <View style={styles.container}>

            <Modal
                visible={isBridgeModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={onBridgeModalClose}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={onBridgeModalClose}
                >
                    <View style={styles.BridgeModalPanel} >
                        <View style={styles.BridgeModalListPanel}>
                            <View style={styles.ModalListImagePanel}>
                                <Entypo name="cycle" size={24} color="white" />
                            </View>
                            <View style={styles.ModalListTextPanel}>
                                <Text style={styles.ModalListTitleText}>Bridge</Text>
                                <Text style={styles.ModalListDescriptionText}>Send crypto between networks</Text>
                            </View>
                        </View>
                        <View style={styles.BridgeModalListPanel}>
                            <View style={styles.ModalListImagePanel}>
                                <Feather name="plus" size={24} color="white" />
                            </View>
                            <View style={styles.ModalListTextPanel}>
                                <Text style={styles.ModalListTitleText}>Buy</Text>
                                <Text style={styles.ModalListDescriptionText}>Purchase crypto with cash</Text>
                            </View>
                        </View>
                        <View style={styles.BridgeModalListPanel}>
                            <View style={styles.ModalListImagePanel}>
                                <Ionicons name="share-social-outline" size={24} color="white" />
                            </View>
                            <View style={styles.ModalListTextPanel}>
                                <Text style={styles.ModalListTitleText}>Share</Text>
                                <Text style={styles.ModalListDescriptionText}>Share your wallet</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>

            <View style={styles.TitleStyle}>
                <View style={styles.ArrowAndTextStyle}>
                    <AntDesign name="arrowleft" size={20} color="black" onPress={() => navigation.navigate("Home")}/>
                    <View style={styles.WalletAddressPanel}>
                        <Text style={styles.WalletAddressText}>0x667...770</Text>
                        <Text style={styles.WalletNetworkText}>All networks</Text>
                    </View>
                </View>
                <View style={styles.TitleIconPanel}>
                    <Ionicons name="scan" size={24} color="black" style={{marginRight: 20}}/>
                    <FontAwesome name="user" size={24} color="black" style={{marginRight: 10}}/>
                </View>
            </View>
            <View style={styles.WalletInfoPanel}>
              <Image
                  source={require('../assets/rocket.png')}
                  style={styles.WalletImage}
                  alt="image"
              ></Image>
              <Text style={styles.WalletCrypto}>$0</Text>
            </View>
            <View style={styles.WalletInfoPanel}>
                <View style={styles.ControlButtonPanel}>
                    <MaterialCommunityIcons name="view-grid-plus-outline" size={20} color="#026efd" />
                    <Text style={styles.ControlButtonText}>Receive</Text>
                </View>
                <View style={styles.ControlButtonPanel}>
                    <Ionicons name="ios-paper-plane" size={20} color="#026efd" />
                    <Text style={styles.ControlButtonText}>Send</Text>
                </View>
                <View style={styles.ControlButtonPanel}>
                    <AntDesign name="swap" size={20} color="#026efd" />
                    <Text style={styles.ControlButtonText}>Swap</Text>
                </View>
                <View style={styles.DotButtonPanel}>
                    <TouchableOpacity onPress={onDotButtonPress}>
                        <Entypo name="dots-three-vertical" size={24} color="#026efd"/>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default () => {
    return (
        <NativeBaseProvider>

            <WalletContent />

        </NativeBaseProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    ArrowAndTextStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    TitleIconPanel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    TitleStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    WalletAddressPanel: {
        marginLeft: 20,
    },
    WalletAddressText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    WalletNetworkText: {
    },
    WalletInfoPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    WalletImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    WalletCrypto: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    ControlButtonPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#cce6ff',
        height: 40,
        borderRadius: 5,
        marginRight: 5,
    },
    ControlButtonText: {
        color: '#026efd',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    DotButtonPanel: {
        width: 40,
        height: 40,
        backgroundColor: '#cce6ff',
        borderRadius: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BridgeModalPanel: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    BridgeModalListPanel: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    ModalListImagePanel: {
        backgroundColor: '#026efd',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ModalListTextPanel: {
        marginLeft: 20,
    },
    ModalListTitleText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    ModalListDescriptionText: {
        color: 'grey'
    },
});
