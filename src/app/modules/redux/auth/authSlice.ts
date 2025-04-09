import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {initialAuthState, LoginRequest} from './AuthModel'
export const logoutRedirection = createAction('/login')

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    CurrentUserSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.currentUser = action.payload
    },
    currentUserRequest: (state, action: PayloadAction<string>) => {
      state.isLoading = true
    },
    loginRequest: (state, action: PayloadAction<LoginRequest>) => {
      state.isLoading = true
      state.error = null
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true
      state.token = action.payload
      state.isLoading = false
      state.error = null
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = false
      state.token = null
      state.isLoading = false
      state.error = action.payload
    },
    logoutRequest: (state) => {
      state.isLoading = true
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false
      state.isLoading = false
      state.token = null
      state.error = null
    },
    refreshTokenRequest: (state) => {
      state.isLoading = true
    },
    refreshTokenSuccess: (state, action: PayloadAction<{accessToken: string}>) => {
      state.token = action.payload.accessToken
    }
  },
})

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  currentUserRequest,
  CurrentUserSuccess,
  refreshTokenRequest,
  refreshTokenSuccess
} = authSlice.actions

export default authSlice.reducer
