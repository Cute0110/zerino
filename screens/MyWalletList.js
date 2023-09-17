import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, AntDesign, Ionicons, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import MyWallet from './MyWallet';
import Watchlist from './Watchlist';

const renderScene = SceneMap({
  first: MyWallet,
  second: Watchlist,
});

function MyWalletList() {
  const navigation = useNavigation();

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'My wallets' },
    { key: 'second', title: 'Watchlist' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#026efd' }}
      style={{ backgroundColor: '#f2f2f2' }}
      onTabPress={({ route, preventDefault }) => {
        if (route.key === 'first') {
        } else {
        }
      }}

      renderLabel={({ route, focused, color }) => (
        <View>
          {focused ? (
            <Text style={{ color: '#026efd', fontWeight: 'bold' }}>{route.title}</Text>
          ) : (
            <Text style={{ color: 'grey', fontWeight: 'bold' }}>{route.title}</Text>
          )}
        </View>
      )}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
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
  },
  tabBarLabel: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})