import createContextProvider from './createContextProvider'
import { AsyncStorage } from 'react-native' // Is this still viable?

const ACCOUNT_ACTION_TYPES = {
  ADD_ERROR: 'add_error',
  SIGNIN: 'signin',
  SIGNIP: 'signup',
}

const accountReducer = (prevState, action) => {
  switch (action.type) {
    default:
      return prevState
  }
}

// function for signup

// function for signin

// function for signout

const defaultValue = {
  username: '',
  email: '',
  state: '',
  token: null,
  error: '',
}

export const { Context, Provider } = createContextProvider(
  accountReducer,
  {},
  defaultValue
)
