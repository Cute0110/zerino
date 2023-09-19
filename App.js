import React from 'react';

import AddWallet from './screens/AddWallet';
import EnterPassword from './screens/EnterPassword';
import Home from './screens/Home';
import ImportWallet from './screens/ImportWallet';
import SetPassword from './screens/SetPassword';
import WalletContent from './screens/WalletContent';
import ConnectWallet from './screens/ConnectWallet';
import TestComponent from './screens/test';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      {/* <Stack.Screen name="test" component={TestComponent} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
      <Stack.Screen name="WalletContent" component={WalletContent} />
      <Stack.Screen name="AddWallet" component={AddWallet} />
      <Stack.Screen name="EnterPassword" component={EnterPassword} />
      <Stack.Screen name="ImportWallet" component={ImportWallet} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
    </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>
     
        <App />
      
    </NavigationContainer>
  )
}
