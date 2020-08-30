import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Theme from '../../styles/theme.style';

const AuthHeader = ({ text }) => {
    return <Text style={styles.header}>{ text }</Text>
};

const styles = StyleSheet.create({
    header: {
        fontSize: 21,
        color: Theme.RAIL_GREEN,
        margin: 25
    }
});

export default AuthHeader;