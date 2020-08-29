// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SigninScreen from './src/screens/auth/SigninScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
import PasswordResetScreen from './src/screens/auth/PasswordResetScreen';

const AuthStack = createStackNavigator();

function RailAuthStack() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Signin" component={SigninScreen}/>
      <AuthStack.Screen name="Signup" component={SignupScreen}/>
      <AuthStack.Screen name="PasswordReset" component={PasswordResetScreen}/>
    </AuthStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RailAuthStack />
    </NavigationContainer>
  );
}
