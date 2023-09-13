import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function SetPassword() {
    const navigation = useNavigation();
    const [stateText, setStateText] = useState("Set passcode");
    const [stateFlag, setStateFlag] = useState(0);
    const [passcodeLength, setPasscodeLength] = useState(0);
    const [passcodeArray, setPasscodeArray] = useState([-1, -1, -1, -1, -1, -1]);

    const [newPasscode, setNewPasscode] = useState([]);

    const onNumkeyPress = (num) => {
        if (passcodeLength <= 5) {
            passcodeArray[passcodeLength] = num;

            if (passcodeLength == 5) {
                if (stateFlag == 0) {
                    setNewPasscode([...passcodeArray]);
                    setStateText("Confirm new passcode");
                    setPasscodeLength(0);
                    setPasscodeArray([-1, -1, -1, -1, -1, -1]);
                    setStateFlag(1);
                } else {
                    let equalFlag = 0;
                    for (let i = 0 ; i < 6; i ++) {
                        if (passcodeArray[i] != newPasscode[i]) {
                            equalFlag = 1;
                            break;
                        }
                    }
                    if (equalFlag == 0) {
                        navigation.navigate("Home");
                    } else {
                        setStateFlag(3);
                        setTimeout(() => {
                            setNewPasscode([]);
                            setStateText("Enter new passcode");
                            setPasscodeLength(0);
                            setPasscodeArray([-1, -1, -1, -1, -1, -1]);
                            setStateFlag(0);
                        }, 1000);
                        
                    }
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

    return (
        <View style={styles.container}>
            <View style={styles.SetPasswordTextPanel}>
                <Text style={styles.SetPasswordText}>{stateText}</Text>
                <Text style={styles.SetPasswordHintText}>Protect your wallet by setting a passcode</Text>
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
                    <Text style={styles.NumkeyText}></Text>
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

            <SetPassword />

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
    SetPasswordTextPanel: {
        marginTop: 250,
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
        borderColor: 'grey',
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
    }
});
