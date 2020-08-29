import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SigninScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Signin Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SigninScreen;