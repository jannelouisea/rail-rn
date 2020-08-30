import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Theme from '../../styles/theme.style';
import Screens from '../../nav/screen.constants';

// Components
import AuthHeader from '../../components/auth/AuthHeader';
import Link from '../../components/common/Link';
import DismissKeyboard from '../../components/common/DismissKeyboard';
import { TextInput, Divider, Button, Text } from 'react-native-paper';

const SigninScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <DismissKeyboard>
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
            <Link
                text='Forgot Password'
                onPress={() => navigation.navigate(Screens.AUTH.PASSWORD_RESET)}
            />
            <Button 
                style={styles.button}
                mode='contained'
                onPress={() => console.log("Button was pressed")}
            >
                SIGN IN
            </Button>
            <View style={styles.linkContainer}>
                <Text>Don&apos;t have an account? </Text>
                <Link 
                    text='Sign Up here'
                    onPress={() => navigation.navigate(Screens.AUTH.SIGNUP)}
                />
            </View>
        </SafeAreaView>
        </DismissKeyboard>
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
    linkContainer: {
        flexDirection: 'row'
    }
});

export default SigninScreen;