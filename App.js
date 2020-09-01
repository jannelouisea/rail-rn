// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Theme from './src/styles/theme.style'

// Providers
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Provider as AccountProvider } from './src/context/AccountContext'

// Navigator
import RailNavigator from './src/nav/RailNavigator'

// TODO: Move into separate file
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Theme.RAIL_GREEN,
  },
}

export default function App() {
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
