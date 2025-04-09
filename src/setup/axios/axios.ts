import store from '../store'
import {logoutRequest, logoutSuccess} from '../../app/modules/redux/auth/authSlice'
import {requestRefreshToken} from '../../app/modules/auth/core/_requests'
import {loginSuccess} from '../../app/modules/redux/auth/authSlice'
import {api} from './api'

// Add a request interceptor to attach the token
// api.interceptors.request.use((config: any) => {
//   const state = store.getState()
//   const token: any = state.auth.token
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

// // Add a response interceptor to handle unauthorized responses
// api.interceptors.response.use(
//   (response: any) => {
//     return response
//   },
//   async (error: any) => {
//     const originalRequest = error.config
//     console.log('status',)
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true
//       const token = store.getState().auth.token
//       if (token) {
//         try {
//           // Dispatch the requestRefreshToken action to get a new access token
//           const response = await requestRefreshToken(token)
//           const {accessToken} = response.data
//           // Update the token in the store
//           store.dispatch(loginSuccess(accessToken))
//           // Update the Authorization header with the new token
//           originalRequest.headers.Authorization = `Bearer ${accessToken}`
//           // Retry the original request with the new token
//           return api(originalRequest)
//         } catch (refreshError) {
//           // Refresh token request failed, logout the user
//           store.dispatch(logoutRequest())
//           return Promise.reject(refreshError)
//         }
//       } else {
//         // Token is null, logout the user
//         store.dispatch(logoutRequest())
//         return Promise.reject(error)
//       }
//     }
//     return Promise.reject(error)
//   }
// )

// Export the configured Axios instance
export default api

export const logout = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    // Implement the logout logic here
    // For example, making an API request to log out the user
    // Once the logout operation is complete, resolve the Promise
    localStorage.removeItem('kt-auth-react-v')
    localStorage.removeItem('Current_User')
    store.dispatch(logoutSuccess())
    window.location.href = '/auth/login'
    resolve()
  })
}
