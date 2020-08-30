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
            <Text style={styles.headerText}>Sign In</Text>
            <View style={styles.socialContainer}>
                <Button
                    style={styles.socialButton}
                    mode='contained'
                    icon='google'
                    uppercase={false}
                    color={Theme.GOOGLE_COLOR}
                    onPress={() => console.log("Logging in with Google")}
               >
                  Google
               </Button>
                <Button
                    style={styles.socialButton}
                    mode='contained'
                    icon='linkedin'
                    uppercase={false}
                    color={Theme.LINKEDIN_COLOR}
                    onPress={() => console.log("Logging in with LinkedIn")}
               >
                   LinkedIn
               </Button>
            </View>
            <View style={styles.socialContainer}>
                <Button
                    style={styles.socialButton}
                    mode='contained'
                    icon='facebook'
                    uppercase={false}
                    color={Theme.FACEBOOK_COLOR}
                    onPress={() => console.log("Logging in with Facebook")}
                >
                    Facebook
                </Button>
                <Button
                    style={styles.socialButton}
                    mode='contained'
                    icon='twitter'
                    uppercase={false}
                    color={Theme.TWITTER_COLOR}
                    onPress={() => console.log("Logging in with Twitter")}
                >
                    Twitter
                </Button>
            </View>
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
                uppercase={true}
            >
                Sign In
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

const commonTopBottomMargin = {
    marginTop: 10,
    marginBottom: 10
}

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
    socialContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-evenly'
    },
    socialButton: {
        flex: 1,
        height: 46,
        justifyContent: 'center'
    },
    divider: {
        backgroundColor: Theme.RAIL_LIGHT_GREY,
        alignSelf: 'stretch',
        ...commonTopBottomMargin
    },
    textInput: {
        height: 46,
        alignSelf: 'stretch',
        ...commonTopBottomMargin
    },
    button: {
        alignSelf: 'stretch',
        height: 46,
        justifyContent: 'center',
        borderRadius: 50,
        ...commonTopBottomMargin
    },
    linkContainer: {
        flexDirection: 'row',
        ...commonTopBottomMargin
    }
});

export default SigninScreen;