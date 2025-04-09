import { api } from '../../../../setup/axios/api'
import store from '../../../../setup/store'
import { loginSuccess, logoutRequest, refreshTokenRequest } from '../../redux/auth/authSlice'
import { AuthModel } from './_models'
import { requestRefreshToken } from './_requests'

const AUTH_LOCAL_STORAGE_KEY = 'kt-auth-react-v'
const getAuth = (): AuthModel | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
  if (!lsValue) {
    return
  }

  try {
    const auth: AuthModel = JSON.parse(lsValue) as AuthModel
    if (auth) {
      // You can easily check auth_token expiration also
      return auth
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}

const setAuth = (auth: AuthModel) => {
  if (!localStorage) {
    return
  }

  try {
    const lsValue = JSON.stringify(auth)
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

const removeAuth = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
  }
}

export function setupAxios(axios: any) {
  api.interceptors.request.use((config: any) => {
    console.log('config', config)
    const state = store.getState()
    const token: any = state.auth.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  // Add a response interceptor to handle unauthorized responses
  api.interceptors.response.use(
    (response: any) => {
      return response
    },
    async (error: any) => {
      const originalRequest = error.config
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        const token = store.getState().auth.token
        if (token) {
          try {
            console.log('Token exists', token)
            // Dispatch the requestRefreshToken action to get a new access token
            store.dispatch(refreshTokenRequest())
            // Update the Authorization header with the new token
            originalRequest.headers.Authorization = `Bearer ${store.getState().auth.token}`
            // Retry the original request with the new token
            return api(originalRequest)
          } catch (refreshError) {
            // Refresh token request failed, logout the user
            store.dispatch(logoutRequest())
            return Promise.reject(refreshError)
          }
        } else {
          // Token is null, logout the user
          store.dispatch(logoutRequest())
          return Promise.reject(error)
        }
      }
      return Promise.reject(error)
    }
  )
}

export { getAuth, setAuth, removeAuth, AUTH_LOCAL_STORAGE_KEY }
