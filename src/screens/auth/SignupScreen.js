import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DismissKeyboard from '../../components/common/DismissKeyboard'
import OutlinedTextInput from '../../components/common/OutlinedTextInput'
import Link from '../../components/common/Link'
import Theme from '../../styles/theme.style'
import Screens from '../../nav/screen.constants'
import RNPickerSelect from 'react-native-picker-select'
import usaStates from '../../assets/data/usaStates'

import { Button } from 'react-native-paper'

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [usaState, setUSAState] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const placeholder = {
    label: 'State',
    value: null,
    color: '#9EA0A4',
  }

  const disableButton = () => {
    return name.length > 1 &&
      email.length > 1 &&
      username.length > 1 &&
      password.length > 1 &&
      confirmPassword.length > 1 &&
      !(password !== confirmPassword)
      ? false
      : true
  }

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Signup Screen</Text>
        <OutlinedTextInput
          label="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
        <OutlinedTextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
        <OutlinedTextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
        />
        <RNPickerSelect
          style={pickerSelectStyles}
          placeholder={placeholder}
          items={usaStates}
          value={usaState}
          onValueChange={setUSAState}
        />
        <OutlinedTextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          infoText="Must contain..."
        />
        <OutlinedTextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          infoText="Must be the same..."
          errorText="Passwords do not match"
          errorCondition={() => password !== confirmPassword}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Button was pressed')}
          uppercase={true}
          disabled={disableButton()}>
          Sign Up
        </Button>
        <View style={styles.linkContainer}>
          <Text>Have an account? </Text>
          <Link
            text="Sign In here"
            onPress={() => navigation.navigate(Screens.AUTH.SIGNIN)}
          />
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: Theme.RAIL_GREEN,
    marginBottom: 10,
  },
  button: {
    alignSelf: 'stretch',
    height: 46,
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 15,
    marginBottom: 15,
  },
  linkContainer: {
    flexDirection: 'row',
  },
  selectPicker: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})

export default SignupScreen
