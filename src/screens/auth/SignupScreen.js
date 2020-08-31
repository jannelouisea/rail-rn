import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DismissKeyboard from '../../components/common/DismissKeyboard'
import OutlinedTextInput from '../../components/common/OutlinedTextInput'
import Theme from '../../styles/theme.style'

import { TextInput, HelperText } from 'react-native-paper'

const SignupScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
})

export default SignupScreen
