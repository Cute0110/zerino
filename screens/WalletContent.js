import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, useWindowDimensions } from 'react-native';
import { NativeBaseProvider} from 'native-base';
import { FontAwesome, AntDesign, Ionicons, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Tokens from './Tokens';
import History from './History';
import Watchlist from './Watchlist';

function WalletContent ({datas}) {
    const navigation = useNavigation();
    const [isBridgeModalVisible, setIsBridgeModalVisible] = useState(false);

    const {address, network, totalCrypto, offsetCrypto, offsetPercent, watchType} = datas.params;
    const [totalCryptoFirst, setToTalCryptoFirst] = useState(0);
    const [totalCryptoSecond, setToTalCryptoSecond] = useState(0);

    useEffect(() => {
        setToTalCryptoFirst(totalCrypto.split(".")[0]);
        setToTalCryptoSecond(totalCrypto.split(".")[1]);
    }, [totalCrypto])

    const onDotButtonPress = () => {
        setIsBridgeModalVisible(true);
    }

    const onBridgeModalClose = () => {
        setIsBridgeModalVisible(false);
    }

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Tokens' },
        { key: 'second', title: 'NFTs' },
        { key: 'third', title: 'History' },
        { key: 'fourth', title: 'Perks' },
    ]);

    const onIndexChange = (index) => {
        setIndex(index);
    }

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <Tokens walletInfo={datas.params}/>;
            case 'second':
                return <Watchlist />;
            case 'third':
                return <History walletInfo={datas.params}/>;
            case 'fourth':
                return <Watchlist />;
            default:
            return null;
        }
    };
    
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#026efd' }}
            style={{ backgroundColor: 'white' }}
            renderLabel={({ route, focused, color }) => (
            <View>
                {focused ? (
                <Text style={{color: '#026efd', fontWeight: 'bold'}} onPress={() => onPress(2)}>{route.title}</Text>
                ) : (
                <Text style={{color: 'grey', fontWeight: 'bold'}} onPress={() => onPress(3)}>{route.title}</Text>
                )}
            </View>
            )}
        />
    );

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
                        <Text style={styles.WalletAddressText}>{address}</Text>
                        <Text style={styles.WalletNetworkText}>{network}</Text>
                    </View>
                </View>
                <View style={styles.TitleIconPanel}>
                    <Ionicons name="scan" size={24} color="black" style={{marginRight: 20}}/>
                    <FontAwesome name="user" size={24} color="black" style={{marginRight: 10}}/>
                </View>
            </View>
            <View style={styles.WalletInfoPanel}>
                <Image
                    source={require('../assets/WalletIcon.png')}
                    style={styles.WalletImage}
                    alt="image"
                ></Image>
                <View style={styles.WalletCryptoInfoPanel}>
                    <Text style={styles.WalletCrypto}>${totalCryptoFirst}
                        {totalCryptoSecond ? (
                            <Text style={styles.WalletCryptoSecond}>.{totalCryptoSecond}</Text>
                        ) :(<></>)}
                    </Text>
                    {totalCrypto != 0 ? (
                        <Text style={styles.WalletOffsetInfo}>{offsetPercent > 0 ? '+' : ''}{offsetPercent}% (${offsetCrypto})</Text>
                    ) : (<></>)
                    }
                </View>
            </View>
            {watchType ? (
                <View style={styles.WalletInfoPanel}>
                    <View style={styles.ControlButtonPanel}>
                        <AntDesign name="check" size={20} color="#026efd" />
                        <Text style={styles.ControlButtonText}>Added</Text>
                    </View>
                    <View style={styles.ControlButtonPanel}>
                        <AntDesign name="sharealt" size={20} color="#026efd" />
                        <Text style={styles.ControlButtonText}>Share</Text>
                    </View>
                </View>
            ) : (
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
            )}
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={onIndexChange}
                initialLayout={{ width: layout.width }}
            />
            <StatusBar style="auto" />
        </View>
    );
}

export default ({route}) => {
    return (
        <NativeBaseProvider>

            <WalletContent datas={route}/>

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
    WalletCryptoInfoPanel: {

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
    WalletCryptoSecond: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'grey',
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
    WalletOffsetInfo: {
        fontSize: 15,
        color: '#00cc00',
        fontWeight: 'bold',
    },
});
