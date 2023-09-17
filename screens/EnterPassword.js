import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function EnterPassword() {
    const navigation = useNavigation();
    const [stateText, setStateText] = useState("Enter passcode");
    const [stateFlag, setStateFlag] = useState(0);
    const [passcodeLength, setPasscodeLength] = useState(0);
    const [passcodeArray, setPasscodeArray] = useState([-1, -1, -1, -1, -1, -1]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const onNumkeyPress = (num) => {
        if (passcodeLength <= 5) {
            passcodeArray[passcodeLength] = num;

            if (passcodeLength == 5) {
                let equalFlag = 0;
                for (let i = 0 ; i < 6; i ++) {
                    if (passcodeArray[i] != 1) {
                        equalFlag = 1;
                        break;
                    }
                }
                if (equalFlag == 0) {
                    navigation.navigate("ImportWallet");
                } else {
                    setStateFlag(3);
                    setTimeout(() => {
                        setStateText("Enter passcode");
                        setPasscodeLength(0);
                        setPasscodeArray([-1, -1, -1, -1, -1, -1]);
                        setStateFlag(0);
                    }, 1000);
                }
            } else {
                setPasscodeLength(passcodeLength + 1);
                setPasscodeArray([...passcodeArray]);
            }
        }
    }

    const onDeletePress = () => {
        if (passcodeLength > 0) {
            passcodeArray[passcodeLength - 1] = -1;
            setPasscodeLength(passcodeLength - 1);
            setPasscodeArray([...passcodeArray]);
        }
    }

    const onResetPress = () => {
        setIsModalVisible(true);
    }

    const onResetModalClose = () => {
        setIsModalVisible(false);
    }

    const onResetConfirm = () => {
        alert("aaaaaaaaaa");
    }

    return (
        <View style={styles.container}>
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={onResetModalClose}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={onResetModalClose}
                >
                    <View style={styles.modalBodyPanel} >
                        <Text>Do you want reset the passcode and</Text>
                        <Text>set up Zerion from scratch?</Text>

                        <View style={styles.modalButtonPanel}>
                            <Text style={{flex: 1}}></Text>
                            <Text style={styles.modalCancelButton} onPress={onResetModalClose}>Cancel</Text>
                            <Text style={styles.modalConfirmButton} onPress={onResetConfirm}>Confirm</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
            <View style={styles.ZerionTextPanel}>
                <Text style={styles.ZerionText}>Z E R I O N</Text>
            </View>
            <View style={styles.SetPasswordTextPanel}>
                <Text style={styles.SetPasswordText}>{stateText}</Text>
            </View>
                {stateFlag == 3 ? (
                    <View style={styles.PasswordDotPanel}>
                        {passcodeArray.length > 0 && passcodeArray.map((passcode, index) => (
                            <View style={styles.PasswordDotWarning} key={index}></View>
                        ))}
                    </View>
                ) : (
                    <View style={styles.PasswordDotPanel}>
                        {passcodeArray.length > 0 && passcodeArray.map((passcode, index) => (
                            <View style={passcode == -1 ? styles.PasswordDot : styles.PasswordDotFull} key={index}></View>
                        ))}
                    </View>
                )}
            <View style={styles.KeyboardPanel} >
                <View style={styles.NumkeyPanel}>
                    <Text style={styles.NumkeyText} onPress={() => onNumkeyPress(1)}>1</Text>
                    <Text style={styles.NumkeyText} onPress={() => onNumkeyPress(2)}>2</Text>
                    <Text style={styles.NumkeyText} onPress={() => onNumkeyPress(3)}>3</Text>
                </View>
                <View style={styles.NumkeyPanel}>
                    <Text style={styles.NumkeyText} onPress={() => onNumkeyPress(4)}>4</Text>
                    <Text style={styles.NumkeyText} onPress={() => onNumkeyPress(5)}>5</Text>
                    <Text style={styles.NumkeyText} onPress={() => onNumkeyPress(6)}>6</Text>
                </View>
                <View style={styles.NumkeyPanel}>
                    <Text style={styles.NumkeyText} onPress={() => onNumkeyPress(7)}>7</Text>
                    <Text style={styles.NumkeyText} onPress={() => onNumkeyPress(8)}>8</Text>
                    <Text style={styles.NumkeyText} onPress={() => onNumkeyPress(9)}>9</Text>
                </View>
                <View style={styles.NumkeyPanel}>
                    <Text style={styles.ResetText} onPress={() => onResetPress()}>Reset</Text>
                    <Text style={styles.NumkeyText} onPress={() => onNumkeyPress(0)}>0</Text>
                    <MaterialCommunityIcons name="backspace" style={styles.NumkeyText} color='grey' onPress={() => onDeletePress()}/>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default () => {
    return (
        <NativeBaseProvider>

            <EnterPassword />

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
    ZerionTextPanel: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ZerionText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#026efd',
    },
    KeyboardPanel: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    NumkeyPanel: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    NumkeyText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
    },
    ResetText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        color: 'grey',
    },
    SetPasswordTextPanel: {
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    SetPasswordText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    SetPasswordHintText: {
        marginTop: 5,
        fontSize: 16,
        color: 'grey',
    },
    PasswordDotPanel: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    PasswordDot: {
        margin: 5,
        width: 16,
        height: 16,
        borderRadius: 8,
        borderColor: '#d9d9d9',
        borderWidth: 1,
    },
    PasswordDotFull: {
        margin: 5,
        width: 16,
        height: 16,
        borderRadius: 8,
        borderColor: '#026efd',
        borderWidth: 1,
        backgroundColor: '#026efd',
    },
    PasswordDotWarning: {
        margin: 5,
        width: 16,
        height: 16,
        borderRadius: 8,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'red',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalBodyPanel: {
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
        alignItems: 'center',
        backgroundColor: 'white',
        height: 100,
        borderRadius: 10,
    },
    modalButtonPanel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalCancelButton: {
        padding: 10,
        fontWeight: 'bold',
        color: 'red',
    },
    modalConfirmButton: {
        padding: 10,
        fontWeight: 'bold',
        color: '#026efd',
    }
});
