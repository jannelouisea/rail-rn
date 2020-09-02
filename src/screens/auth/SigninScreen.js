import React, { useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Theme from '../../styles/theme.style'
import Screens from '../../nav/screen.constants'
import authStyles from '../../styles/auth/auth.style'

// Components
import Link from '../../components/common/Link'
import DismissKeyboard from '../../components/common/DismissKeyboard'
import { TextInput, Divider, Button, Text } from 'react-native-paper'

import { Context as AccountContext } from '../../context/AccountContext'

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AccountContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const disableButton = () => {
    return email.length > 1 && password.length > 1 ? false : true
  }

  // TODO: Replace text inputs with OutlinedTextInput
  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Sign In</Text>
        <View style={styles.socialContainer}>
          <Button
            style={styles.googleButton}
            mode="contained"
            icon="google"
            uppercase={false}
            color={Theme.GOOGLE_COLOR}
            onPress={() => console.log('Logging in with Google')}>
            Google
          </Button>
          <Button
            style={styles.linkedinButton}
            mode="contained"
            icon="linkedin"
            uppercase={false}
            color={Theme.LINKEDIN_COLOR}
            onPress={() => console.log('Logging in with LinkedIn')}>
            LinkedIn
          </Button>
        </View>
        <View style={styles.socialContainer}>
          <Button
            style={styles.facebookButton}
            mode="contained"
            icon="facebook"
            uppercase={false}
            color={Theme.FACEBOOK_COLOR}
            onPress={() => console.log('Logging in with Facebook')}>
            Facebook
          </Button>
          <Button
            style={styles.twitterButton}
            mode="contained"
            icon="twitter"
            uppercase={false}
            color={Theme.TWITTER_COLOR}
            onPress={() => console.log('Logging in with Twitter')}
            dark={true}>
            Twitter
          </Button>
        </View>
        <Divider style={styles.divider} />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Email or Username"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        {state.error !== '' ? (
          <Text style={styles.error}>{state.error}</Text>
        ) : null}
        <Link
          text="Forgot Password"
          onPress={() => navigation.navigate(Screens.AUTH.PASSWORD_RESET)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => signin({ email, password })}
          uppercase={true}
          disabled={disableButton()}>
          Sign In
        </Button>
        <View style={styles.linkContainer}>
          <Text>Don&apos;t have an account? </Text>
          <Link
            text="Sign Up here"
            onPress={() => navigation.navigate(Screens.AUTH.SIGNUP)}
          />
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  )
}

const socialButtonMargin = 7
const socialButtonStyle = {
  flex: 1,
  height: Theme.DEFAULT_ITEM_HEIGHT,
  justifyContent: 'center',
}

const styles = StyleSheet.create({
  container: {
    ...authStyles.container,
  },
  headerText: {
    ...authStyles.headerText,
  },
  socialContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  googleButton: {
    ...socialButtonStyle,
    marginRight: socialButtonMargin,
    marginBottom: socialButtonMargin,
  },
  linkedinButton: {
    ...socialButtonStyle,
    marginLeft: socialButtonMargin,
    marginBottom: socialButtonMargin,
  },
  facebookButton: {
    ...socialButtonStyle,
    marginRight: socialButtonMargin,
    marginTop: socialButtonMargin,
  },
  twitterButton: {
    ...socialButtonStyle,
    marginLeft: socialButtonMargin,
    marginTop: socialButtonMargin,
  },
  divider: {
    backgroundColor: Theme.RAIL_DARK_GREY,
    alignSelf: 'stretch',
    marginTop: 20,
    marginBottom: 5,
  },
  textInput: {
    height: Theme.DEFAULT_ITEM_HEIGHT,
    alignSelf: 'stretch',
    marginTop: 13,
    marginBottom: 10,
  },
  button: {
    ...authStyles.button,
    marginTop: 35,
    marginBottom: 10,
  },
  error: {
    color: Theme.RAIL_ERROR,
    marginBottom: 7,
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
})

export default SigninScreen
