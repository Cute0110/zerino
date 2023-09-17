import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider, Input, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign, Ionicons, Entypo, FontAwesome5, Feather } from '@expo/vector-icons';

function History({walletInfo}) {
  const navigation = useNavigation();
  const {address, network, totalCrypto, offsetCrypto, offsetPercent} = walletInfo;

  const layout = useWindowDimensions();

  return (
    <View style={{...styles.container, height: layout.height}}>
        <View style={styles.SearchPanel}>
            <View style={styles.SearchButton}>
                <Ionicons name="search-sharp" size={24} color="grey" />
                <Text style={styles.SearchText}>Search</Text>
            </View>
            <FontAwesome name="sliders" size={20} color="#026efd" style={{marginLeft: 10}}/>
        </View>
        {totalCrypto == 0 ? (
            <View>
                <View style={styles.NoHistoryPanel}>
                    <Image
                        source={require('../assets/NoHistoryIcon.png')}
                        style={styles.NoHistoryImage}
                        alt="image"
                    ></Image>
                    <Text style={styles.NoHistoryText}>No transactions yet</Text>
                </View>
            </View>
        ) : (
            <View style={styles.HistoryPanel}>
                <View style={styles.HistoryByDayPanel}>
                    <Text style={styles.DateText}>June 23,2023</Text>
                    <View style={styles.HistoryContentPanel}>
                        <View style={styles.CryptoPanel}>
                            <View style={styles.CryptoPanelFirst}>
                                <Image
                                    source={require('../assets/ethereum.png')}
                                    style={styles.CryptoImage}
                                    alt="image"
                                ></Image>
                                <View>
                                    <Text style={{fontSize: 15}}>Send</Text>
                                    <View style={styles.ConnectAddressPanel}>
                                        <Image
                                            source={require('../assets/ethereum.png')}
                                            style={styles.SmallCryptoImage}
                                            alt="image"
                                        ></Image>
                                        <Text style={{color: '#bfbfbf'}}>0xc62...a3c</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.CryptoPanelSecond}>
                                <Text style={{fontSize: 15}}>-0.0022 ETH</Text>
                                <Text style={{color: '#bfbfbf'}}>$4.15</Text>
                            </View>
                        </View>
                        <View style={styles.AssetLine}></View>
                        <View style={styles.CryptoPanel}>
                            <View style={styles.CryptoPanelFirst}>
                                <Image
                                    source={require('../assets/execute.png')}
                                    style={styles.CryptoImage}
                                    alt="image"
                                ></Image>
                                <View>
                                    <Text style={{fontSize: 15}}>Send</Text>
                                    <View style={styles.ConnectAddressPanel}>
                                        <Image
                                            source={require('../assets/ethereum.png')}
                                            style={styles.SmallCryptoImage}
                                            alt="image"
                                        ></Image>
                                        <Text style={{color: '#bfbfbf'}}>0xc62...a3c</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.HistoryByDayPanel}>
                    <Text style={styles.DateText}>June 22,2023</Text>
                    <View style={styles.HistoryContentPanel}>
                        <View style={styles.CryptoPanel}>
                            <View style={styles.CryptoPanelFirst}>
                                <Image
                                    source={require('../assets/ethereum.png')}
                                    style={styles.CryptoImage}
                                    alt="image"
                                ></Image>
                                <View>
                                    <Text style={{fontSize: 15}}>Send</Text>
                                    <View style={styles.ConnectAddressPanel}>
                                        <Image
                                            source={require('../assets/ethereum.png')}
                                            style={styles.SmallCryptoImage}
                                            alt="image"
                                        ></Image>
                                        <Text style={{color: '#bfbfbf'}}>0xc62...a3c</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.CryptoPanelSecond}>
                                <Text style={{fontSize: 15}}>-0.0022 ETH</Text>
                                <Text style={{color: '#bfbfbf'}}>$4.15</Text>
                            </View>
                        </View>
                        <View style={styles.AssetLine}></View>
                        <View style={styles.CryptoPanel}>
                            <View style={styles.CryptoPanelFirst}>
                                <Image
                                    source={require('../assets/usdt.png')}
                                    style={styles.CryptoImage}
                                    alt="image"
                                ></Image>
                                <View>
                                    <Text style={{fontSize: 15}}>Send</Text>
                                    <View style={styles.ConnectAddressPanel}>
                                        <Image
                                            source={require('../assets/ethereum.png')}
                                            style={styles.SmallCryptoImage}
                                            alt="image"
                                        ></Image>
                                        <Text style={{color: '#bfbfbf'}}>0xc62...a3c</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.CryptoPanelSecond}>
                                <Text style={{fontSize: 15}}>-230 USDT</Text>
                                <Text style={{color: '#bfbfbf'}}>$229.83</Text>
                            </View>
                        </View>
                        <View style={styles.AssetLine}></View>
                        <View style={styles.CryptoPanel}>
                            <View style={styles.CryptoPanelFirst}>
                                <Image
                                    source={require('../assets/usdt.png')}
                                    style={styles.CryptoImage}
                                    alt="image"
                                ></Image>
                                <View>
                                    <Text style={{fontSize: 15}}>Receive</Text>
                                    <View style={styles.ConnectAddressPanel}>
                                        <Image
                                            source={require('../assets/ethereum.png')}
                                            style={styles.SmallCryptoImage}
                                            alt="image"
                                        ></Image>
                                        <Text style={{color: '#bfbfbf'}}>Binance</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.CryptoPanelSecond}>
                                <Text style={{fontSize: 15, color: '#00cc00'}}>+230.32 USDT</Text>
                                <Text style={{color: '#bfbfbf'}}>$230.32</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )}
    </View>
  )
}

export default ({walletInfo}) => {
  return (
    <NativeBaseProvider>

      <History walletInfo = {walletInfo}/>

    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
    },
    NoHistoryPanel: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    NoHistoryImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    NoHistoryText: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    SearchPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    HistoryByDayPanel: {
        marginTop: 20,
    },
    SearchButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        borderRadius: 20,
        height: 40,
        paddingLeft: 20,
    },
    SearchText: {
        marginLeft: 10,
        fontSize: 20,
        color: '#bfbfbf',
    },
    HistoryContentPanel: {
        backgroundColor: 'white',
        marginTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
    },
    AssetLine: {
        flex: 1,
        height: 1,
        borderColor: '#dfdfdf',
        borderWidth: 1,
        marginTop: 10,
    },
    CryptoPanel: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    CryptoPanelFirst: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    CryptoPanelSecond: {
        alignItems: 'flex-end',
    },
    CryptoImage: {
        width: 40,
        height: 40,
        borderRadius: 5,
        marginRight: 5,
    },
    ConnectAddressPanel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    SmallCryptoImage: {
        width: 15,
        height: 15,
        borderRadius: 1,
        marginRight: 5,
    },
    DateText: {
        marginLeft: 10,
        fontSize: 15,
    },
})