/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react'
import {Outlet, Route, Routes, useLocation} from 'react-router-dom'
import {Registration} from './components/registration/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login/Login'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {HomePage} from './HomePage'
import {Error404} from '../errors/components/Error404'

const AuthLayout = (props: any) => {
  const loc = useLocation()
  const [currentRoute, setCurrentRoute] = useState<string>()
  useEffect(() => {
    setCurrentRoute(loc.pathname)
    document.body.classList.add('bg-body')
    return () => {
      document.body.classList.remove('bg-body')
    }
  }, [])

  const applyClassBasedOnRoute = (route: string) => {
    console.log('PATHNAME', route)
    if (route === '/auth/registration') {
      return ''
    } else if (route === '/auth/forgot-password') {
      return 'w-700px'
    } else if (route === '/auth/login') {
      return 'w-500px'
    }
  }

  return (
    <div
      className='d-flex bg-light flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
      style={{backgroundColor: 'rgb(204,204,204)',
        background: 'linear-gradient(325deg, rgb(30 30 45) 0%, rgb(30 30 45) 100%)'}}
    >
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column-fluid py-12 p-lg-10 pb-lg-20'>
        {/* begin::Logo */}
        <a href='#' className='mb-12'>
          {/* <img alt='Logo' src={toAbsoluteUrl('/media/logos/default.svg')} className='h-45px' /> */}
        </a>
        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div
          className={`bg-body rounded shadow-lg border p-lg-10 mx-auto bg-dark`}
        >
          <Outlet />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className='d-flex flex-center flex-column-auto p-3'>
        <div className='d-flex align-items-center fw-bold fs-6'>
          <a href='/' className='text-muted text-hover-primary px-2'>
            Home
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact Us
          </a>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route path='*' element={<Error404 />} />
    <Route index element={<HomePage />} />
    <Route path='/auth' element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
    </Route>
  </Routes>
)

export {AuthPage}
