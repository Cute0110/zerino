import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { Input, NativeBaseProvider } from 'native-base';
import { AntDesign, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import Web3 from 'web3';

function ConnectWallet() {
    const navigation = useNavigation();

    // const [web3, setWeb3] = useState(null);
    // const [accountsName, setAccountsName] = useState("aaa");

    // useEffect(() => {
    //     async function connectToMetaMask() {
    //         const web3 = new Web3(Web3.givenProvider);

    //         // Set the web3 instance in the state
    //         setWeb3(web3);
    //     }

    //     connectToMetaMask();
    // }, []);

    // const handleSendTransaction = async () => {
    //     // Check if web3 is initialized
    //     if (!web3) {
    //         setAccountsName("Null");
    //         return;
    //     }

    //     // Get the accounts from MetaMask
    //     const accounts = await web3.eth.getAccounts();

    //     // Check if there are any accounts
    //     if (accounts.length === 0) {
    //         setAccountsName("Null")
    //         return;
    //     }

    //     // Set the account to use for the transaction
    //     const from = accounts[0];

    //     setAccountsName(from);

    //     // // Set the recipient and amount for the transaction
    //     // const to = '0x...';
    //     // const value = '1000000000000000000'; // 1 ETH

    //     // // Set the transaction options
    //     // const options = {
    //     //     from,
    //     //     to,
    //     //     value,
    //     // };

    //     // // Send the transaction
    //     // const result = await web3.eth.sendTransaction(options);
    //     // console.log(result);
    // };

    return (
        <View style={styles.container}>
            <View style={styles.TitleStyle}>
                <AntDesign name="arrowleft" size={20} color="black" onPress={() => navigation.navigate("AddWallet")}/>
                <Text style={styles.ConnectWalletText}>Zerion <Text style={{fontSize: 17}}>Connect to Zerion</Text></Text>
            </View>
            <View style={styles.ConnectWalletButtonPanel}>
                <Text style={styles.ButtonText}>Import to Zerion Wallet</Text>
                <AntDesign name="right" size={15} color="grey" style={{marginRight: 15}}/>
            </View>
            <Text style={styles.descriptionText}>We recommend importing your wallet with a recovery phrase or private key to get the <Text style={{color: '#026efd'}}>best experience</Text></Text>
            <Text style={styles.selectOptionText}>Select an option to connect</Text>
            
            <View style={styles.ConnectWalletButtonPanel}>
                <View style={styles.ButtonTextPanel}>
                    <Ionicons name="ios-apps" size={24} color="black" />
                <Text style={styles.ButtonText}>Ledger</Text>
                </View>
                <AntDesign name="right" size={15} color="grey" style={{marginRight: 15}}/>
            </View>
            
            <View style={styles.ConnectWalletButtonPanel}>
                <View style={styles.ButtonTextPanel}>
                    <Feather name="mail" size={24} color="black" />
                    <Text style={styles.ButtonText}>Email</Text>
                </View>
                <AntDesign name="right" size={15} color="grey" style={{marginRight: 15}}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default () => {
    return (
        <NativeBaseProvider>

            <ConnectWallet />

        </NativeBaseProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        position: 'relative',
    },
    TitleStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    ConnectWalletText: {
        fontSize: 20,
        marginLeft: 20,
    },
    ConnectWalletButtonPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        height: 60,
        width: '100%',
    },
    ButtonTextPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
    },
    ButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    descriptionText: {
        marginTop: 10,
        lineHeight: 20,
    },
    selectOptionText: {
        marginTop: 30,
        color: 'grey',
    },
});
