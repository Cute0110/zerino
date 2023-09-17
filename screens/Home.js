import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { NativeBaseProvider} from 'native-base';
import { MaterialCommunityIcons, AntDesign, Ionicons, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MyWalletList from './MyWalletList';
import HomeContent from './HomeContent';

function Home() {
    const navigation = useNavigation();
    const layout = useWindowDimensions();

    const [pageType, setPageType] = useState(0);

    return (
        <View style={{...styles.container, height: layout.height}}>
            {pageType == 0 ? (<HomeContent />) : (<></>)}
            {pageType == 1 ? (<HomeContent />) : (<></>)}
            {pageType == 2 ? (<HomeContent />) : (<></>)}
            {pageType == 3 ? (<HomeContent />) : (<></>)}
            {pageType == 4 ? (<HomeContent />) : (<></>)}

            <View style={styles.footerTabPanel}>
                <View style={styles.eachTabPanel}>
                    <TouchableOpacity onPress={() => setPageType(0)} style={{alignItems: 'center'}}>
                        <MaterialIcons name="bar-chart" size={20} color={`${pageType == 0 ? '#026efd' : 'grey'}`} />
                        <Text style={{...styles.tabText, color: `${pageType == 0 ? '#026efd' : 'grey'}`}}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.eachTabPanel}>
                    <TouchableOpacity onPress={() => setPageType(1)} style={{alignItems: 'center'}}>
                        <AntDesign name="find" size={20} color={`${pageType == 1 ? '#026efd' : 'grey'}`} />
                        <Text style={{...styles.tabText, color: `${pageType == 1 ? '#026efd' : 'grey'}`}}>Explore</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.eachTabPanel}>
                    <TouchableOpacity onPress={() => setPageType(2)} style={{alignItems: 'center'}}>
                        <Fontisto name="arrow-swap" size={20} color={`${pageType == 2 ? '#026efd' : 'grey'}`} />
                        <Text style={{...styles.tabText, color: `${pageType == 2 ? '#026efd' : 'grey'}`}}>Actions</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.eachTabPanel}>
                    <TouchableOpacity onPress={() => setPageType(3)} style={{alignItems: 'center'}}>
                        <AntDesign name="earth" size={20} color={`${pageType == 3 ? '#026efd' : 'grey'}`} />
                        <Text style={{...styles.tabText, color: `${pageType == 3 ? '#026efd' : 'grey'}`}}>Browser</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.eachTabPanel}>
                    <TouchableOpacity onPress={() => setPageType(4)} style={{alignItems: 'center'}}>
                        <Ionicons name="settings-outline" size={20} color={`${pageType == 4 ? '#026efd' : 'grey'}`} />
                        <Text style={{...styles.tabText, color: `${pageType == 4 ? '#026efd' : 'grey'}`}}>Settings</Text>
                    </TouchableOpacity>
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
