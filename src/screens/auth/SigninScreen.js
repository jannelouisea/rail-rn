import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Theme from '../../styles/theme.style';

// Components
import AuthHeader from '../../components/auth/AuthHeader';
import { TextInput, Divider, Button, Text } from 'react-native-paper';

const SigninScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <AuthHeader text="Sign In"/>
            <Divider style={styles.divider}/>
            <TextInput
                style={styles.textInput}
                mode='outlined'
                label='Email or Username'
                value={username}
                onChangeText={setUsername}
                autoCapitalize='none'
            />
            <TextInput
                style={styles.textInput}
                mode='outlined'
                label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                secureTextEntry={true}
            />
            <Button 
                style={styles.button}
                mode='contained'
            >
                <Text style={styles.buttonText}>SIGN IN</Text>
            </Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    divider: {
        backgroundColor: Theme.RAIL_LIGHT_GREY,
        alignSelf: 'stretch',
        margin: 20
    },
    textInput: {
        height: 46,
        alignSelf: 'stretch',
        margin: 20,
    },
    button: {
        alignSelf: 'stretch',
        margin: 20,
        height: 46,
        justifyContent: 'center',
        borderRadius: 50
    },
    buttonText: {
        color: Theme.RAIL_WHITE
    }
});

export default SigninScreen;