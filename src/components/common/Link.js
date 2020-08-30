import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import Theme from '../../styles/theme.style'

const Link = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.linkText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  linkText: {
    textDecorationLine: 'underline',
    color: Theme.RAIL_BLACK,
  },
})

export default Link
