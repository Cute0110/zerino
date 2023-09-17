import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, AntDesign, Ionicons, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

function MyWallet() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.TotalWalletInfoPanel}>
        <TouchableOpacity onPress={() => navigation.navigate("WalletContent", {address: 'Portfolio', network: 'Ethereum', totalCrypto: '0.59', offsetCrypto: '0.0036', offsetPercent: '0.6', watchType: false})} >
        <View style={styles.PortfolioPanel}>
          <Text style={styles.PortfolioText}>Portfolio</Text>
          <AntDesign name="right" size={12} color="grey" />
        </View>
        <Text style={styles.ToTalCryptoFirstText}>$0<Text style={styles.ToTalCryptoSecondText}>.59</Text></Text>
        <Text style={styles.TotalPriceOffsetText}>+0.67% ($0.0039) Today</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.WalletList}>
        <TouchableOpacity onPress={() => navigation.navigate("WalletContent", {address: '0x7CA...853', network: 'All networks', totalCrypto: '0', offsetCrypto: '0', offsetPercent: '0', watchType: false})} >
          <View style={styles.WalletListContent}>
            <View style={styles.WalletInfoPanel}>
              <View style={styles.ImagePanel}>
                <Image
                    source={require('../assets/WalletIcon.png')}
                    style={styles.WalletImage}
                    alt="image"
                ></Image>
              </View>
              <View style={styles.AddressPanel}>
              <Text style={styles.AddressText}>0x7CA...853</Text>
                <Text style={styles.CryptoText}>$0</Text>
              </View>
            </View>
            <View style={styles.PercentPanel}>
              <Text style={styles.PercentText}>0%</Text>
              <AntDesign name="right" size={12} color="grey" />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.WalletList}>
        <TouchableOpacity onPress={() => navigation.navigate("WalletContent", {address: '0xcd9...068', network: 'All networks', totalCrypto: '0.59', offsetCrypto: '0.0034', offsetPercent: '0.64', watchType: false})} >
          <View style={styles.WalletListContent}>
            <View style={styles.WalletInfoPanel}>
              <View style={styles.ImagePanel}>
                <Image
                    source={require('../assets/WalletIcon.png')}
                    style={styles.WalletImage}
                    alt="image"
                ></Image>
              </View>
              <View style={styles.AddressPanel}>
              <Text style={styles.AddressText}>0xcd9...068</Text>
                <Text style={styles.CryptoText}>$0<Text style={styles.CryptoTextSecond}>.59</Text></Text>
              </View>
            </View>
            <View style={styles.PercentPanel}>
              <Text style={styles.PercentGreenText}>+0.64%</Text>
              <AntDesign name="right" size={12} color="grey" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default () => {
  return (
    <NativeBaseProvider>

      <MyWallet />

    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  TotalWalletInfoPanel: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  PortfolioPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  PortfolioText: {
    color: 'grey',
    fontSize: 15,
  },
  ToTalCryptoFirstText: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  ToTalCryptoSecondText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'grey'
  },
  TotalPriceOffsetText: {
    marginTop: 5,
    color: '#00cc00',
    fontWeight: 'bold',
    fontSize: 15,
  },
  WalletList: {
    marginTop: 10,
    height: 70,
  },
  WalletListContent: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 70,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  WalletInfoPanel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  WalletImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  AddressText: {
    fontSize: 15,
  },
  CryptoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  CryptoTextSecond: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  PercentPanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PercentText: {
    marginRight: 5,
    color: 'grey',
  },
  PercentGreenText: {
    marginRight: 10,
    color: '#00cc00',
  },
  PercentRedText: {
    marginRight: 10,
    color: 'red',
  },
  tabBarLabel: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})