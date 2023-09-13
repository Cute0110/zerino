import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { NativeBaseProvider, Image } from 'native-base';
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function AddWallet() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.TitleStyle}>
                <Text style={styles.AddWalletText}>Add Wallet</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} ><Text style={styles.SkipText}>Skip</Text></TouchableOpacity>
            </View>
            <View style={styles.AddWalletMethodPanel}>
                <ImageBackground
                    source={require('../assets/add_wallet_back_img.png')}
                    style={styles.AddWalletMethodPanelImage}
                    imageStyle={{resizeMode: 'cover'}}
                >
                    <Text style={styles.IntroducingText}>Introducing</Text>
                    <View style={styles.ZerionTextPanel}>
                        <Text style={styles.ZerionText}>Zerion Wallet</Text>
                        <Image
                            source={require('../assets/rocket.png')}
                            style={styles.ZerionImage}
                            alt="image"
                        ></Image>
                    </View>
                    <View style={styles.GuideTextPanel}>
                        <View style={styles.EachGuideText}>
                            <View style={styles.CheckIconPanel}>
                                <AntDesign name="check" size={15} color="#026efd" />
                            </View>
                            <Text style={styles.GuideText}>Sign transactions in-app</Text>
                        </View>
                        <View style={styles.EachGuideText}>
                            <View style={styles.CheckIconPanel}>
                                <AntDesign name="check" size={15} color="#026efd" />
                            </View>
                            <Text style={styles.GuideText}>Manage your multichain portfolio</Text>
                        </View>
                        <View style={styles.EachGuideText}>
                            <View style={styles.CheckIconPanel}>
                                <AntDesign name="check" size={15} color="#026efd" />
                            </View>
                            <Text style={styles.GuideText}>Import multiple wallets</Text>
                        </View>
                    </View>

                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={() => navigation.navigate("SetPassword")} style={{...styles.CreateWalletButtonDesign, ...styles.ButtonBackColorBlue}}>
                            <Text style={styles.WhiteBoldText}>Create new wallet</Text>
                            <AntDesign name="right" size={12} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={() => navigation.navigate("EnterPassword")} style={{...styles.CreateWalletButtonDesign, ...styles.ButtonBackColorWhite}}>
                            <Text style={styles.BlackBoldText}>Import existing wallet</Text>
                            <AntDesign name="right" size={12} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity style={{...styles.CreateWalletButtonDesign, ...styles.ButtonBackColorWhite}}>
                            <Text style={styles.BlackBoldText}>Restore from Google Drive</Text>
                            <View style={styles.GoogleDrivePanel}>
                                <FontAwesome5 name="google-drive" size={24} color="black"/>
                                <AntDesign name="right" size={12} color="black" style={{marginLeft: 10}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.ConnectWalletPanel}>
                <Ionicons name="link" size={20} color="grey" />
                <Text style={styles.ConnectWalletText}>Connect a wallet</Text>
            </View>
            <View style={styles.lineStyle}>
            </View>
            <View style={styles.TrackWalletPanel}>
                <Ionicons name="eye-outline" size={20} color="grey" />
                <Text style={styles.ConnectWalletText}>Track any wallet</Text>
            </View>
            <View style={styles.lineStyle}>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default () => {
    return (
        <NativeBaseProvider>

            <AddWallet />

        </NativeBaseProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    TitleStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    AddWalletText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    SkipText: {
        fontSize: 15,
    },
    AddWalletMethodPanel: {
        marginTop: 30,
        height: 400,
    },
    AddWalletMethodPanelImage: {
        padding: 20,
        flex: 1,
        height: 400,
        borderRadius: 10,
        overflow: 'hidden',
    },
    IntroducingText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    ZerionTextPanel: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
    },
    ZerionImage: {
        marginLeft: 10,
        width: 30,
        height: 30,
    },
    ZerionText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#026efd',
    },
    GuideTextPanel: {
        marginTop: 15,
    },
    EachGuideText: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    CheckIconPanel: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    GuideText: {
        fontSize: 15,
    },
    buttonStyle:{
        marginTop: 10,
    },
    CreateWalletButtonDesign: { 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent:"space-between",
        padding: 10,
        height: 50,
        borderRadius: 5,
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 4,
            },
            android: {
              elevation: 4,
            },
        }),
    },
    GoogleDrivePanel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ButtonBackColorBlue: {
        backgroundColor: '#026efd', 
    },
    ButtonBackColorWhite: {
        backgroundColor: 'white', 
    },
    WhiteBoldText: {
        color: 'white',
        fontWeight: 'bold',
    },
    BlackBoldText: {
        color: 'black',
        fontWeight: 'bold',
    },
    ConnectWalletPanel: {
        marginTop: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    TrackWalletPanel: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    ConnectWalletText: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },
    lineStyle:{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
});
