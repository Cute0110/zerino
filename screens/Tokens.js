import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions, ImageBackground  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign, Ionicons, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

function Tokens({walletInfo}) {
    const navigation = useNavigation();
    const {address, network, totalCrypto, offsetCrypto, offsetPercent} = walletInfo;
    const [totalCryptoFirst, setToTalCryptoFirst] = useState(0);
    const [totalCryptoSecond, setToTalCryptoSecond] = useState(0);
    const [isCryptoShow, setIsCryptoShow] = useState(true);
    const [chartShowType, setChartShowType] = useState(2);
    const chartShowTypeText = ['Past Hour', 'Today', 'Past Week', 'Past Month', 'Past Year', 'All time'];
    const chartShowTypeButtonText = ['H', 'D', 'W', 'M', 'Y', 'Max'];
    const offsetTotalDataArray = [0.1, 0.2, 0.5, 1, 2, 5, 0.4, 0.3, 0.2, 0.1, 0.5, 0.7, 3, -1, -0.5, 0, -0.2, 0.3, 0.4, 0.9, 0.1, 2, 0.3, 0.5];
    const [displayOffsetDataArray, setDisplayOffsetDataArray] = useState([3, -1, -0.5, 0, -0.2, 0.3, 0.4, 0.9, 0.1, 2, 0.3, 0.5]);

    useEffect(() => {
        let tempArray = [];
        for (let i = offsetTotalDataArray.length - (chartShowType + 1) * 4 ; i < offsetTotalDataArray.length; i ++) {
            tempArray.push(offsetTotalDataArray[i]);
        }
        setDisplayOffsetDataArray(tempArray);
    }, [chartShowType])

    useEffect(() => {
        setToTalCryptoFirst(totalCrypto.split(".")[0]);
        setToTalCryptoSecond(totalCrypto.split(".")[1]);
    }, [totalCrypto])

    const layout = useWindowDimensions();

    onCryptoShowPress = (value) => {
    setIsCryptoShow(value);
    }

    const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
        data: displayOffsetDataArray,
        color: (opacity = 1) => "black", // Set the color for the chart line
        shadowColor: 'transparent',
        },
    ],
    };

    const onChartShowTypePress = (type) => {
        setChartShowType(type);
    }

  const chartConfig = {
    backgroundColor: 'whtie',
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    decimalPlaces: 0, // Number of decimal places for chart values
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Set the color for the chart labels and axis  
    propsForDots: {
      r: "0",
    },
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
    propsForVerticalLabels: {
      display: "none",
    },
    propsForHorizontalLabels: {
      display: "none",
    },
  };

  return (
    <View style={{...styles.container, height: layout.height}}>
        {totalCrypto != 0 ? (
            <View>
                <View style={styles.ChartPanel}>
                    <View style={styles.ChartTotalCryptoPanel}>
                        <Text style={styles.ChartToTalCryptoText}>${totalCryptoFirst}
                            {totalCryptoSecond ? (
                                <Text style={{...styles.ChartToTalCryptoText, color: '#bfbfbf', marginLeft: 0}}>.{totalCryptoSecond}</Text>
                            ) :(<></>)}
                        </Text>
                        <Ionicons name="information-circle-outline" size={24} color="grey" style={{marginLeft: 5}}/>
                    </View>
                    {offsetPercent > 0 ? (
                        <Text style={styles.ChartPercentGreenText}>+{offsetPercent}% (${offsetCrypto}) {chartShowTypeText[chartShowType]}</Text>
                    ) : (
                        <Text style={styles.ChartPercentRedText}>-{offsetPercent}% (${offsetCrypto}) {chartShowTypeText[chartShowType]}</Text>
                    )}
                    <LineChart
                        data={chartData}
                        width={layout.width + layout.width / (4 * (chartShowType + 1))}
                        height={100}
                        chartConfig={chartConfig}
                        style={{borderRadius: 10, paddingRight: 0}}
                        
                        endSpacing = {0}
                    />
                    <View style={styles.ChartShowTypePanel}>
                        {chartShowTypeButtonText.map((txt, index) => (
                            <TouchableOpacity onPress={() => onChartShowTypePress(index)} key={index}>
                                {index == chartShowType ? (
                                    <Text style={{...styles.ChartTypeText, backgroundColor: '#bfbfbf'}}>{index == 5 ? '' : '1'}{txt}</Text>
                                ) : (
                                    <Text style={styles.ChartTypeText}>{index == 5 ? '' : '1'}{txt}</Text>
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.AssetsPanel}>
                    <View style={styles.AssetTitlePanel}>
                        <Text style={styles.AssetText}>Assets</Text>
                        {isCryptoShow ? (
                                <TouchableOpacity onPress={() => onCryptoShowPress(false)}><FontAwesome name="compress" size={17} color="#026efd" style={{marginRight: 20}}/></TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => onCryptoShowPress(true)}><FontAwesome name="expand" size={17} color="#026efd" style={{marginRight: 20}}/></TouchableOpacity>
                            )}
                        <FontAwesome name="sliders" size={20} color="#026efd" style={{marginRight: 5}}/>
                    </View>
                    <View style={styles.AssetInfoPanel}>
                        <View style={{marginBottom: 20}}>
                            <View style={styles.AssetTotalInfoTitle}>
                                <View style={styles.AssetTotalInfoTitleFirst}>
                                    <AntDesign name="folder1" size={24} color="black" />
                                    <Text style={styles.WalletText}>Wallet</Text>
                                    <Text style={styles.TitlePercentText}>100%</Text>
                                </View>
                                <View style={styles.AssetTotalInfoTitleFirst}>
                                    <Text>2</Text>
                                    <AntDesign name="right" size={12} color="grey" style={{marginLeft: 10}}/>
                                </View>
                            </View>
                            <Text style={styles.WalletCrypto}>${totalCryptoFirst}
                                {totalCryptoSecond ? (
                                    <Text style={styles.WalletCryptoSecond}>.{totalCryptoSecond}</Text>
                                ) :(<></>)}
                            </Text>
                        </View>
                        {isCryptoShow ? (
                            <View>
                                <View style={styles.AssetLine}></View>
                                <View style={styles.CryptoPanel}>
                                    <View style={styles.CryptoPanelFirst}>
                                        <Image
                                            source={require('../assets/usdt.png')}
                                            style={styles.CryptoImage}
                                            alt="image"
                                        ></Image>
                                        <View>
                                            <Text style={styles.CryptoNameText}>Tether USD</Text>
                                            <Text style={styles.CryptoAmountText}>0.32 USDT</Text>
                                        </View>
                                    </View>
                                    <View style={styles.CryptoPanelSecond}>
                                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>$0<Text style={{color: '#bfbfbf'}}>.32</Text></Text>
                                        <Text style={styles.PercentGreenText}>+0.03% ($0.0001)</Text>
                                    </View>
                                </View>
                                <View style={styles.AssetLine}></View>
                                <View style={styles.CryptoPanel}>
                                    <View style={styles.CryptoPanelFirst}>
                                        <Image
                                            source={require('../assets/ethereum.png')}
                                            style={styles.CryptoImage}
                                            alt="image"
                                        ></Image>
                                        <View>
                                            <Text style={styles.CryptoNameText}>Ethereum</Text>
                                            <Text style={styles.CryptoAmountText}>0.00016 ETH</Text>
                                        </View>
                                    </View>
                                    <View style={styles.CryptoPanelSecond}>
                                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>$0<Text style={{color: '#bfbfbf'}}>.27</Text></Text>
                                        <Text style={styles.PercentGreenText}>+0.95% ($0.0026)</Text>
                                    </View>
                                </View>
                            </View>
                        ) : (
                            <></>
                        )}
                    </View>
                </View>
            </View>
        ) : (
            <View>
                <View style={{height: ((layout.width - 20) * 18 / 53), marginTop : 30}}>
                    <ImageBackground
                        source={require('../assets/buy_crypto.png')}
                        style={styles.BuyCryptoImage}
                        imageStyle={{resizeMode: 'cover'}}
                    >
                        <View style={styles.BuyCryptoContentPanel}>
                            <Text style={styles.BuyCryptoDescriptionText}>Purchse crypto with cash</Text>
                            <View style={styles.BuyCryptoButtonPanel}>
                                <Text style={styles.BuyCryptoButton}>Buy</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.ReceivePanel}>
                    <View style={styles.ReceiveTitlePanel}>
                        <MaterialCommunityIcons name="view-grid-plus-outline" size={30} color="black" />
                        <Text style={styles.ReceiveText}>Receive</Text>
                    </View>
                    <Text style={styles.ReceiveDescriptionText}>Deposit tokens to you wallet</Text>
                </View>
            </View>
        )}
    </View>
  )
}

export default ({walletInfo}) => {
  return (
    <NativeBaseProvider>

      <Tokens walletInfo = {walletInfo}/>

    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
    },
    ChartPanel: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    ChartTotalCryptoPanel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ChartToTalCryptoText: {
        marginLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    ChartShowTypePanel: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ChartTypeText: {
        color: '#026efd',
        fontSize: 12,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    BuyCryptoImage: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        aspectRatio: 53 / 18,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    BuyCryptoContentPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 10,
        width: '100%',
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
    },
    BuyCryptoDescriptionText: {
        color: 'white',
    },
    BuyCryptoButtonPanel: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 5,
    },
    BuyCryptoButton: {
        color: '#206efd',
        fontWeight: 'bold',
        fontSize: 15,
    },
    ReceivePanel: {
        borderRadius: 5,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 4,
            },
            android: {
              elevation: 4,
            },
        }),
    },
    ReceiveTitlePanel: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    ReceiveText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 20,
    },
    ReceiveDescriptionText: {
        marginTop: 20,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'grey',
    },
    AssetsPanel: {
        padding: 10,
    },
    AssetTitlePanel: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    AssetText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    AssetInfoPanel: {
        marginTop: 10,
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 4,
            },
            android: {
              elevation: 4,
            },
        }),
        borderRadius: 5,
        backgroundColor: 'white',
    },
    WalletCrypto: {
        marginLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    WalletCryptoSecond: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'grey',
    },
    AssetTotalInfoTitle: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    AssetTotalInfoTitleFirst: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    WalletText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    TitlePercentText: {
        backgroundColor: '#d9d9d9',
        borderRadius: 5,
        padding: 5,
        marginLeft: 10,
    },
    AssetLine: {
        flex: 1,
        height: 1,
        borderWidth: 1,
        borderColor: '#d9d9d9',
    },
    CryptoPanel: {
        padding: 10,
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
        marginRight: 10,
    },
    CryptoAmountText: {
        fontSize: 15,
        color: '#bfbfbf',
    },
    CryptoNameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    PercentGreenText: {
        color: '#00cc00',
    },
    ChartPercentGreenText: {
        color: '#00cc00',
        marginLeft: 10,
        fontWeight: 'bold'
    },
    ChartPercentRedText: {
        color: 'red',
        marginLeft: 10,
        fontWeight: 'bold'
    },
})