import React from 'react'
import { Stylesheet, View } from 'react-native'
import { TextInput, HelperText } from 'react-native-paper'

const OutlineTextInput = ({
  label,
  value,
  onChangeText,
  autoCapitalize = 'none',
  secureTextEntry = false,
  infoText = '',
  errorText = '',
}) => {
  const helperTextType = () => {
    return errorText !== '' ? 'error' : 'info'
  }

  const isHelperTextVisible = () => {
    return infoText !== '' || errorText !== '' ? true : false
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
    <View>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
      />
      <HelperText type={helperTextType()} visible={isHelperTextVisible}>
        {helperText()}
      </HelperText>
    </View>
  )
}

const styles = StyleSheet.create({})

export default OutlineTextInput
