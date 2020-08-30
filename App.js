// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Providers
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// Screens
import SigninScreen from './src/screens/auth/SigninScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
import PasswordResetScreen from './src/screens/auth/PasswordResetScreen';
import Theme from './src/styles/theme.style';

const AuthStack = createStackNavigator();

function RailAuthStack() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStack.Screen name="Signin" component={SigninScreen}/>
      <AuthStack.Screen name="Signup" component={SignupScreen}/>
      <AuthStack.Screen name="PasswordReset" component={PasswordResetScreen}/>
    </AuthStack.Navigator>
  );
}

// TODO: Move into separate file
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Theme.RAIL_GREEN
  }
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}> 
        <NavigationContainer>
          <RailAuthStack />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
