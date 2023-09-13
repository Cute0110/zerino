import React from 'react';

import Login from './screens/Login';
import Signup from './screens/Signup';


import AddWallet from './screens/AddWallet';
import EnterPassword from './screens/EnterPassword';
import Home from './screens/Home';
import ImportWallet from './screens/ImportWallet';
import SetPassword from './screens/SetPassword';
import MyWallet from './screens/MyWalletList';
import WalletContent from './screens/WalletContent';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="WalletContent" component={WalletContent} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddWallet" component={AddWallet} />
      <Stack.Screen name="EnterPassword" component={EnterPassword} />
      <Stack.Screen name="ImportWallet" component={ImportWallet} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="MyWallet" component={MyWallet} />

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
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
