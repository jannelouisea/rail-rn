// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Screens from './src/nav/screen.constants'
import Theme from './src/styles/theme.style'

// Providers
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import {
  Context as AccountContext,
  Provider as AccountProvider,
} from './src/context/AccountContext'

// Navigator
import RailNavigator from './src/nav/RailNavigator'

// Screens
import SigninScreen from './src/screens/auth/SigninScreen'
import SignupScreen from './src/screens/auth/SignupScreen'
import PasswordResetScreen from './src/screens/auth/PasswordResetScreen'
import HomeScreen from './src/screens/home/HomeScreen'

const AuthStack = createStackNavigator()
const MainStack = createStackNavigator()

function RailAuthStack() {
  // Important note to self!!
  // You must name the state returned 'state' AND any actions returned
  // must also be named correctly
  const { state, restoreToken } = React.useContext(AccountContext)

  React.useEffect(() => {
    restoreToken()
  }, [])

  const authStack = (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={Screens.AUTH.SIGNIN} component={SigninScreen} />
      <AuthStack.Screen name={Screens.AUTH.SIGNUP} component={SignupScreen} />
      <AuthStack.Screen
        name={Screens.AUTH.PASSWORD_RESET}
        component={PasswordResetScreen}
      />
    </AuthStack.Navigator>
  )

  const mainStack = (
    <MainStack.Navigator>
      <MainStack.Screen name={Screens.HOME.LIST} component={HomeScreen} />
    </MainStack.Navigator>
  )

  return state.token === null ? authStack : mainStack
}

// TODO: Move into separate file
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Theme.RAIL_GREEN,
  },
}

export default function App() {
  // This is returning back as undefined
  // const { state, restoreToken } = useContext(Context)
  //const { restoreToken } = useContext(Context)

  // TODO: Remove TestProvider
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <AccountProvider>
          <NavigationContainer>
            <RailNavigator />
          </NavigationContainer>
        </AccountProvider>
      </PaperProvider>
    </SafeAreaProvider>
  )
}
