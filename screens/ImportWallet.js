import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { Input, NativeBaseProvider } from 'native-base';
import { AntDesign, Ionicons, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function ImportWallet() {
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isPrivateModalVisible, setIsPrivateModalVisible] = useState(false);

    const onRecoveryKeyPress = () => {
        setIsModalVisible(true);
    }

    const onRecoveryModalClose = () => {
        setIsModalVisible(false);
    }

    const onPrivateKeyPress = () => {
        setIsPrivateModalVisible(true);
    }

    const onPrivateModalClose = () => {
        setIsPrivateModalVisible(false);
    }

    const onPastePress = () => {
    }

    return (
        <View style={styles.container}>
            <Modal
                visible={isPrivateModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={onPrivateModalClose}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={onPrivateModalClose}
                >
                    <View style={styles.recoveryModalBodyPanel} >
                        <View style={styles.slashPanel}>
                            <View style={styles.slash}></View>
                        </View>

                        <View style={styles.RecoveryLabelPanel}>
                            <EvilIcons name="question" size={30} color="black" style={{marginRight: 10}}/>
                            <Text style={styles.EnterLabel}>Private Key</Text>
                        </View>
                        
                        <View style={styles.lineStyle}>
                        </View>

                        <Text style={styles.RecoveryDescriptionPanel}>
                            A private key is an access key to one address (account). <Text style={{color: '#026efd'}}>Read more</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
            </Modal>
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={onRecoveryModalClose}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={onRecoveryModalClose}
                >
                    <View style={styles.recoveryModalBodyPanel} >
                        <View style={styles.slashPanel}>
                            <View style={styles.slash}></View>
                        </View>

                        <View style={styles.RecoveryLabelPanel}>
                            <EvilIcons name="question" size={30} color="black" style={{marginRight: 10}}/>
                            <Text style={styles.EnterLabel}>Recovery (seed) Phrase</Text>
                        </View>
                        
                        <View style={styles.lineStyle}>
                        </View>

                        <Text style={styles.RecoveryDescriptionPanel}>
                            This is a 12 or 24-word phrase you got when you created your previous wallet. <Text style={{color: '#026efd'}}>Read more</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
            </Modal>
            <View style={styles.TitleStyle}>
                <View style={styles.ArrowAndTextStyle}>
                    <AntDesign name="arrowleft" size={20} color="black" onPress={() => navigation.navigate("AddWallet")}/>
                    <Text style={styles.ImportWalletText}>Import Wallet</Text>
                </View>
                <Ionicons name="scan" size={24} color="black" />
            </View>
            <View style={styles.EnterLabelPanel}>
                <Text style={styles.EnterLabel} onPress={onRecoveryKeyPress}>Enter recovery phrase</Text>
                <EvilIcons name="question" size={20} color="grey" onPress={onRecoveryKeyPress}/>
            </View>
            <View style={styles.EnterLabelPanel}>
                <Text style={styles.EnterLabel} onPress={onPrivateKeyPress}>or private key</Text>
                <EvilIcons name="question" size={20} color="grey" onPress={onPrivateKeyPress}/>
            </View>

            <View style={styles.keyInput}>
                <Input
                    variant="unstyled"
                    placeholder="Use spaces between words if using a recovery phrase"
                    _light={{
                        placeholderTextColor: "blueGray.400",
                    }}
                    _dark={{
                        placeholderTextColor: "blueGray.50",
                    }}
                />
            </View>

            <Text style={styles.pasteText} onPress={onPastePress}>Paste from clipboard</Text>

            <View style={styles.importButtonPanel}>
                <TouchableOpacity style={styles.importButtonStyle} disabled>
                    <Text style={styles.importButtonText}>Import</Text>
                </TouchableOpacity>

                <View style={styles.footerTextPanel}>
                    <MaterialCommunityIcons name="shield-check-outline" size={24} color="grey" />
                    <Text style={{color: 'grey'}}>Zerion passed security audits</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default () => {
    return (
        <NativeBaseProvider>

            <ImportWallet />

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
    ArrowAndTextStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    TitleStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 20,
    },
    ImportWalletText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    EnterLabelPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    EnterLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    recoveryModalBodyPanel: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        height: 170,
        borderRadius: 10,
    },
    lineStyle:{
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    RecoveryLabelPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
    },
    RecoveryDescriptionPanel: {
        padding: 20,
    },
    slashPanel: {
        marginTop: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slash: {
        width: 30,
        borderBottomWidth: 4,
        borderBottomColor: 'grey',
        borderRadius: 2,
    },
    keyInput: {
        marginTop: 10,
        marginLeft: -10,
    },
    importButtonPanel: {
        position: 'absolute',
        bottom: 50,
        left: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: '100%',
    },
    importButtonStyle: {
        alignItems: 'center', 
        justifyContent:"center",
        padding: 10,
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
        backgroundColor: '#026efd',
        width: '100%',
        opacity: 0.5,
    },
    importButtonText: {
        fontSize: 15,
        color: 'white',
    },
    footerTextPanel: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pasteText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#026efd',
    }
});
