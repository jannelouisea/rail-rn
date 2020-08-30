import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Theme from '../../styles/theme.style';

// TODO
// Instead of creating a separate component, create a common style file for this!
const AuthHeader = ({ text }) => {
    return <Text style={styles.header}>{ text }</Text>
};

const styles = StyleSheet.create({
    header: {
        fontSize: 21,
        fontWeight: 'bold',
        color: Theme.RAIL_GREEN,
    }
});

export default AuthHeader;