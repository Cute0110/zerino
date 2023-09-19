import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { NativeBaseProvider} from 'native-base';
import { MaterialCommunityIcons, AntDesign, Ionicons, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MyWalletList from './MyWalletList';

function HomeContent() {
    const navigation = useNavigation();
    const layout = useWindowDimensions();

    const [pageType, setPageType] = useState(0);

    return (
        <View style={{height: layout.height}}>
            <View style={styles.titlePanel}>
                <Text style={styles.titleText}>My App</Text>
                <Text style={styles.editText}>Edit</Text>
                <Ionicons name="scan" size={24} color="black" style={styles.mR10}/>
                <TouchableOpacity onPress={() => navigation.navigate("AddWallet")} >
                    <MaterialCommunityIcons name="wallet-plus-outline" size={24} color="black"/>
                </TouchableOpacity>
            </View>
            <View style={styles.imgPanel}>
                <View style={styles.eachImgPanel}>
                    <View style={styles.circleImg}>
                        <Image
                            source={require('../assets/PhisingDefense.png')}
                            style={styles.PhisingDefenseImage}
                            alt="image"
                        ></Image>
                    </View>
                    <Text style={styles.circleImgText}>Phising</Text>
                    <Text style={styles.circleImgText}>Defense</Text>
                </View>
                <View style={styles.eachImgPanel}>
                    <View style={styles.circleImg}>
                        <Image
                            source={require('../assets/BaseNowLive.png')}
                            style={styles.PhisingDefenseImage}
                            alt="image"
                        ></Image>
                    </View>
                    <Text style={styles.circleImgText}>BASE now</Text>
                    <Text style={styles.circleImgText}>live!</Text>
                </View>
                <View style={styles.eachImgPanel}>
                    <View style={styles.circleImg}>
                        <Image
                            source={require('../assets/ZerionWallet.png')}
                            style={styles.PhisingDefenseImage}
                            alt="image"
                        ></Image>
                    </View>
                    <Text style={styles.circleImgText}>Zerion</Text>
                    <Text style={styles.circleImgText}>Wallet</Text>
                </View>
            </View>
            <MyWalletList />
        </View>
    );
}

export default () => {
    return (
        <NativeBaseProvider>

            <HomeContent />

        </NativeBaseProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
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
        backgroundColor: '#d9d9d9',
        borderRadius: 35,
    },
    PhisingDefenseImage: {
        width: 70,
        height: 70,
    },
    footerTabPanel: {
        position: 'absolute',
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        bottom: 0,
        left: 0,
        borderTopColor: '#d9d9d9',
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
