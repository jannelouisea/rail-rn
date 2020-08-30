import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Theme from '../../styles/theme.style';
import { TextInput, Button } from 'react-native-paper';
import DismissKeyboard from '../../components/common/DismissKeyboard';
import Link from '../../components/common/Link';
import Screens from '../../nav/screen.constants';

const PasswordResetScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                <Text style={styles.headerText}>Password Reset</Text>
                <TextInput
                    style={styles.textInput}
                    mode='outlined'
                    label='Email'
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                />
                <Button 
                    style={styles.button}
                    mode='contained'
                    onPress={() => console.log("Button was pressed")}
                    uppercase={true}
                    disabled={email.length < 1}
                >
                    Send
                </Button>
                <Link
                    text='Back to Sign In'
                    onPress={() => navigation.navigate(Screens.AUTH.SIGNIN)}
                />
            </SafeAreaView>
        </DismissKeyboard>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    headerText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: Theme.RAIL_GREEN,
        marginBottom: 10
    },
    textInput: {
        height: 46,
        alignSelf: 'stretch',
        marginTop: 15,
        marginBottom: 15
    },
    button: {
        alignSelf: 'stretch',
        height: 46,
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 15,
        marginBottom: 15
    },
});

export default PasswordResetScreen;