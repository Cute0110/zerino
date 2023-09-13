import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeBaseProvider} from 'native-base';
import { MaterialCommunityIcons, AntDesign, Ionicons, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MyWalletList from './MyWalletList';

function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.titlePanel}>
                <Text style={styles.titleText}>Summary</Text>
                <Text style={styles.editText}>Edit</Text>
                <Ionicons name="scan" size={24} color="black" style={styles.mR10}/>
                <TouchableOpacity onPress={() => navigation.navigate("AddWallet")} >
                    <MaterialCommunityIcons name="wallet-plus-outline" size={24} color="black"/>
                </TouchableOpacity>
            </View>
            <View style={styles.imgPanel}>
                <View style={styles.eachImgPanel}>
                    <View style={styles.circleImg}>

                    </View>
                    <Text style={styles.circleImgText}>Fee Update:</Text>
                    <Text style={styles.circleImgText}>Bridge</Text>
                </View>
                <View style={styles.eachImgPanel}>
                    <View style={styles.circleImg}>
                    </View>
                    <Text style={styles.circleImgText}>BASE now</Text>
                    <Text style={styles.circleImgText}>live!</Text>
                </View>
                <View style={styles.eachImgPanel}>
                    <View style={styles.circleImg}>

                    </View>
                    <Text style={styles.circleImgText}>Zerion</Text>
                    <Text style={styles.circleImgText}>Wallet</Text>
                </View>
            </View>
            <View>
                <MyWalletList />
            </View>
            <View style={styles.footerTabPanel}>
                <View style={styles.eachTabPanel}>
                    <MaterialIcons name="bar-chart" size={20} color="black" />
                    <Text style={styles.tabText}>Home</Text>
                </View>
                <View style={styles.eachTabPanel}>
                    <AntDesign name="find" size={20} color="black" />
                    <Text style={styles.tabText}>Explore</Text>
                </View>
                <View style={styles.eachTabPanel}>
                    <Fontisto name="arrow-swap" size={20} color="black" />
                    <Text style={styles.tabText}>Actions</Text>
                </View>
                <View style={styles.eachTabPanel}>
                    <AntDesign name="earth" size={20} color="black" />
                    <Text style={styles.tabText}>Browser</Text>
                </View>
                <View style={styles.eachTabPanel}>
                    <Ionicons name="settings-outline" size={20} color="black" />
                    <Text style={styles.tabText}>Settings</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default () => {
    return (
        <NativeBaseProvider>

            <Home />

        </NativeBaseProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    mR10: {
        marginRight: 10,
    },
    mL10: {
        marginLeft: 10,
    },
    titlePanel: {
        marginTop: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
    },
    editText: {
        marginRight: 10,
        fontWeight: 'bold',
    },
    imgPanel: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    eachImgPanel: {
        width: 80,
        alignItems: 'center',
    },
    circleImgText: {
        fontSize: 12,
    },
    circleImg: {
        width: 70,
        height: 70,
        backgroundColor: 'grey',
        borderRadius: 35,
    },
    footerTabPanel: {
        position: 'absolute',
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        bottom: 0,
        left: 0,
        borderTopColor: 'grey',
        borderTopWidth: 1,

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    eachTabPanel: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        fontSize: 12,
        fontWeight: 'bold',
    }
});
