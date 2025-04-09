// React imports
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
// Third party imports
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useAuth } from '../../core/Auth'
import { loginSchema, memberLoginInitialValues } from './LoginModel'
import { useAppDispatch, useAppSelector } from '../../../../../setup/store'
import { loginRequest } from '../../../redux/auth/authSlice'

/**
 * This code is a React component that handles the logic for a user to log in to an application.
 * It uses the Formik library to handle form validation, and the useState and useAuth hooks to store
 * state and authentication information. The component contains a form with fields for
 * email and password, as well as a button to submit the form. The handleSubmit function is
 * called when the form is submitted, which sends an API request to log in with the provided credentials.
 * If successful, it saves the authentication information and retrieves user data from another API call.
 * It also contains a togglePassword function which is used to toggle the boolean state of passwordShown when invoked.
 * @returns component
 */
const Login: FC = () => {
  const [loading, setLoading] = useState(false)
  const { saveAuth, setCurrentUser } = useAuth()
  const [passwordShown, setPasswordShown] = useState<boolean>(false)
  const [isUser, setIsUser] = useState<boolean>(true)

  const dispatch = useAppDispatch()
  const loginError = useAppSelector(state => state.auth.error)
  const loadingIs = useAppSelector(state => state.auth.isLoading)

  const handleSubmit = async (values: any, actions: any) => {
    setLoading(true)
    try {
      dispatch(loginRequest({ username: values.email, password: values.password }))
    } catch (error) {
      // TODO: Proper error handling
      console.error(error)
      saveAuth(undefined)
      // setStatus('The login detail is incorrect')
      // setSubmitting(false)
      setLoading(false)
    }
  }

  /**
   * This function is used to toggle the boolean state of passwordShown
   * when invoked.
   */
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown)
  }

  return (
    <>
      <Formik
        initialValues={memberLoginInitialValues}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
        validationSchema={loginSchema}
      >
        {({ touched, errors, values }) =>
          isUser ? (
            <Form>
              <div className='text-center mb-10'>
                <h1 className='text-dark mb-3'>Sign In</h1>
              </div>
              <div className='fv-row mb-10'>
                <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
                <Field
                  type='email'
                  className='form-control form-control-lg form-control-solid mb-2'
                  name='email'
                  id='email'
                />
                <ErrorMessage name='email'>
                  {(msg) => <div className='text-danger'>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className='fv-row mb-10'>
                <div className='d-flex justify-content-between mt-n5'>
                  <div className='d-flex flex-stack mb-2'>
                    <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
                    <Link
                      to='/auth/forgot-password'
                      className='link-primary fs-6 fw-bolder'
                      style={{ marginLeft: '5px' }}
                    >
                      Forgot Password ?
                    </Link>
                  </div>
                </div>
                <div className='d-flex align-items-center bg-gray-100 mb-2'>
                  <Field
                    type={passwordShown ? 'text' : 'password'}
                    className='form-control form-control-lg form-control-solid'
                    autoComplete='off'
                    name='password'
                    id='password'
                  />
                  <span className='p-4' onClick={togglePassword}>
                    <i
                      className={`${passwordShown ? 'fa-eye' : 'fa-eye-slash'} fa text-primary`}
                    ></i>
                  </span>
                </div>
                <ErrorMessage name='password'>
                  {(msg) => <div className='text-danger'>{msg}</div>}
                </ErrorMessage>
              </div>
              <p className='text-danger'>{loginError}</p>
              <div className='text-center'>
                <button
                  type='submit'
                  id='kt_sign_in_submit'
                  className='btn btn-lg btn-primary w-100 mb-5'
                  disabled={Object.keys(touched).length === 0 || Object.keys(errors).length > 0}
                >
                  {!loadingIs && <span className='indicator-label'>Log In</span>}
                  {loadingIs && (
                    <span className='indicator-progress' style={{ display: 'block' }}>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
              </div>
            </Form>
          ) : (
            <div className='text-center'>
              <h2 className='mb-8'>
                <i className='fa fa-envelope-circle-check fa-6x text-primary'></i>
              </h2>
              <p className='mb-8'>
                We've sent an email <span className='text-primary fw-bold'>{values.email}</span>{' '}
                to verify your email address and activate your account.
              </p>
              <Link to='/' className='btn btn-primary'>
                Home
              </Link>
            </div>
          )
        }
      </Formik>
      <div className='text-gray-400 fw-bold text-center fs-4 mt-6'>
        New?{' '}
        <Link to='/auth/registration' className='link-primary fw-bolder'>
          Create an Account
        </Link>
      </div>
    </>
  )
}

export { Login }
