import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage'

import { Context as AccountContext } from '../context/AccountContext'

import Screens from './screen.constants'
import SigninScreen from '../screens/auth/SigninScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import PasswordResetScreen from '../screens/auth/PasswordResetScreen'
import HomeScreen from '../screens/home/HomeScreen'

const RailNavigator = () => {
  const { state, restoreToken } = useContext(AccountContext)

  // NOTE: This is only for testing purposes!
  // Clearing anything stored in the cache (like token)
  // TODO: Make sure to delete!!
  const clearAppData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      await AsyncStorage.multiRemove(keys)
    } catch (error) {
      console.error('Error clearing app data.')
    }
  }
  useEffect(() => {
    clearAppData()
  }, [])

  // TODO: What happens when cached token is expired??
  useEffect(() => {
    restoreToken()
  }, [state.token])

  const AuthNavigator = createStackNavigator()
  const MainNavigator = createStackNavigator()

  const authStack = (
    <AuthNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthNavigator.Screen
        name={Screens.AUTH.SIGNIN}
        component={SigninScreen}
      />
      <AuthNavigator.Screen
        name={Screens.AUTH.SIGNUP}
        component={SignupScreen}
      />
      <AuthNavigator.Screen
        name={Screens.AUTH.PASSWORD_RESET}
        component={PasswordResetScreen}
      />
    </AuthNavigator.Navigator>
  )

  const mainStack = (
    <MainNavigator.Navigator>
      <MainNavigator.Screen name={Screens.HOME.LIST} component={HomeScreen} />
    </MainNavigator.Navigator>
  )

  return state.token === null ? authStack : mainStack
}

export default RailNavigator
