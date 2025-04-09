/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC, useEffect} from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {Logout, AuthPage} from '../modules/auth'
import {App} from '../App'
import {useAppDispatch, useAppSelector} from '../../setup/store'
import {currentUserRequest, loginSuccess, logoutSuccess} from '../modules/redux/auth/authSlice'
import { getAllProjectsRequest } from '../modules/eventWorkflow/projects/redux/projectBoard/createProjectSlice'

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
  const isLogedIn = useAppSelector((state) => state.auth.isLoggedIn)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const tokenDetails: any = localStorage.getItem('kt-auth-react-v')
    let parseToken = JSON.parse(tokenDetails)
    if (!tokenDetails) dispatch(logoutSuccess())
    if (tokenDetails) {
      dispatch(loginSuccess(parseToken.accessToken))
      dispatch(currentUserRequest(parseToken.accessToken))
      dispatch(getAllProjectsRequest())
    }
  }, [dispatch])

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          {/* <Route path='error/*' element={<ErrorsPage />} /> */}
          <Route path='logout' element={<Logout />} />
          {isLogedIn ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
            </>
          ) : (
            <>
              <Route path='/*' element={<AuthPage />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}
