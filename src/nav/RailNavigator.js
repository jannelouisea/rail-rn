import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Context as AccountContext } from '../context/AccountContext'

import Screens from './screen.constants'
import SigninScreen from '../screens/auth/SigninScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import PasswordResetScreen from '../screens/auth/PasswordResetScreen'
import HomeScreen from '../screens/home/HomeScreen'

const RailNavigator = () => {
  const { state, restoreToken } = useContext(AccountContext)

  useEffect(() => {
    restoreToken()
  }, [])

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
