import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, HelperText } from 'react-native-paper'
import Theme from '../../styles/theme.style'

const OutlinedTextInput = ({
  label,
  value,
  onChangeText,
  autoCapitalize = 'none',
  secureTextEntry = false,
  infoText = '',
  errorText = '',
  errorCondition = () => false,
}) => {
  console.log('Rendering Outline')

  const helperTextType = () => {
    return errorCondition() && errorText !== '' ? 'error' : 'info'
  }

  const isHelperTextVisible = () => {
    return infoText !== '' || (errorCondition() && errorText !== '')
      ? true
      : false
  }

  const helperText = () => {
    if (helperTextType() === 'error' && errorText !== '') {
      return errorText
    } else if (helperTextType() === 'info' && infoText !== '') {
      return infoText
    } else {
      return ''
    }
  }

  return (
    <>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        error={errorCondition()}
      />
      <HelperText
        style={styles.helperText}
        type={helperTextType()}
        visible={isHelperTextVisible}>
        {helperText()}
      </HelperText>
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: Theme.DEFAULT_ITEM_HEIGHT,
    width: '100%',
  },
  helperText: {
    fontSize: 12,
    alignSelf: 'flex-start',
  },
})

export default OutlinedTextInput
