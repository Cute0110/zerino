import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { MaterialCommunityIcons, AntDesign, Ionicons, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function MyWalletList() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.WalletList}>
        <View style={styles.WalletListContent}>
          <View style={styles.WalletInfoPanel}>
            <View style={styles.ImagePanel}>
              <Image
                  source={require('../assets/rocket.png')}
                  style={styles.WalletImage}
                  alt="image"
              ></Image>
            </View>
            <View style={styles.AddressPanel}>
            <TouchableOpacity onPress={() => navigation.navigate("AddWallet")} ><Text style={styles.AddressText}>0x607...770</Text></TouchableOpacity>
              <Text style={styles.CryptoText}>$0</Text>
            </View>
          </View>
          <View style={styles.PercentPanel}>
            <Text style={styles.PercentText}>0%</Text>
            <AntDesign name="right" size={12} color="black" />
          </View>
        </View>
      </View>

      <View style={styles.WalletList}>
        <View style={styles.WalletListContent}>
        <View style={styles.WalletInfoPanel}>
          <View style={styles.ImagePanel}>
            <Image
                source={require('../assets/rocket.png')}
                style={styles.WalletImage}
                alt="image"
            ></Image>
          </View>
          <View style={styles.AddressPanel}>
            <Text style={styles.AddressText}>0x607...770</Text>
            <Text style={styles.CryptoText}>$200</Text>
          </View>
        </View>
        <View style={styles.PercentPanel}>
          <Text style={styles.PercentBlueText}>1.5%</Text>
          <AntDesign name="right" size={12} color="black" />
        </View>
        </View>
      </View>

      <View style={styles.WalletList}>
        <View style={styles.WalletListContent}>
        <View style={styles.WalletInfoPanel}>
          <View style={styles.ImagePanel}>
            <Image
                source={require('../assets/rocket.png')}
                style={styles.WalletImage}
                alt="image"
            ></Image>
          </View>
          <View style={styles.AddressPanel}>
            <Text style={styles.AddressText}>0x607...770</Text>
            <Text style={styles.CryptoText}>$500</Text>
          </View>
        </View>
        <View style={styles.PercentPanel}>
          <Text style={styles.PercentRedText}>-1.5%</Text>
          <AntDesign name="right" size={12} color="black" />
        </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>

      <MyWalletList />

    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  WalletList: {
    marginTop: 20,
    height: 70,
  },
  WalletListContent: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderColor: 'black',
    borderWidth: 1,
    height: 70,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
  PercentPanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PercentText: {
    marginRight: 10,
    color: 'grey',
  },
  PercentBlueText: {
    marginRight: 10,
    color: '#026efd',
  },
  PercentRedText: {
    marginRight: 10,
    color: 'red',
  }
});
