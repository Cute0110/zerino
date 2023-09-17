import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, AntDesign, Ionicons, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

function Watchlist() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.WalletList}>
      <TouchableOpacity onPress={() => navigation.navigate("WalletContent", {address: '0xcd9...068', network: 'All networks', totalCrypto: '0.59', offsetCrypto: '0.0034', offsetPercent: '0.64', watchType: true})} >
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

      <Watchlist />

    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  WalletList: {
    marginTop: 10,
    height: 70,
  },
  WalletListContent: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 70,
    borderRadius: 10,
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
    marginRight: 10,
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