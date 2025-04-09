import { Field } from 'formik'
import React from 'react'

const AuthenticatorApp = () => {
  return (
    <div data-kt-element='apps'>
      <h3 className='text-dark fw-bold mb-7'>Authenticator Apps</h3>
      <div className='text-gray-500 fw-semibold fs-6 mb-10'>
        Using an authenticator app like
        <a href='https://support.google.com/accounts/answer/1066447?hl=en' target='_blank'>
          Google Authenticator
        </a>
        ,
        <a href='https://www.microsoft.com/en-us/account/authenticator' target='_blank'>
          Microsoft Authenticator
        </a>
        ,
        <a href='https://authy.com/download/' target='_blank'>
          Authy
        </a>
        , or
        <a href='https://support.1password.com/one-time-passwords/' target='_blank'>
          1Password
        </a>
        , scan the QR code. It will generate a 6 digit code for you to enter below.
        <div className='pt-5 text-center'>
          <img src='assets/media/misc/qr.png' alt='' className='mw-150px' />
        </div>
      </div>
      <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6'>
        <span className='svg-icon svg-icon-2tx svg-icon-warning me-4'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect opacity='0.3' x='2' y='2' width='20' height='20' rx='10' fill='currentColor' />
            <rect
              x='11'
              y='14'
              width='7'
              height='2'
              rx='1'
              transform='rotate(-90 11 14)'
              fill='currentColor'
            />
            <rect
              x='11'
              y='17'
              width='2'
              height='2'
              rx='1'
              transform='rotate(-90 11 17)'
              fill='currentColor'
            />
          </svg>
        </span>
        <div className='d-flex flex-stack flex-grow-1'>
          <div className='fw-semibold'>
            <div className='fs-6 text-gray-700'>
              If you having trouble using the QR code, select manual entry on your app, and enter
              your username and the code:
              <div className='fw-bold text-dark pt-2'>KBSS3QDAAFUMCBY63YCKI5WSSVACUMPN</div>
            </div>
          </div>
        </div>
      </div>
      <form data-kt-element='apps-form' className='form' action='#'>
        <div className='mb-10 fv-row'>
          <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            placeholder='Enter authentication code'
            name='code'
          />
        </div>
      </form>
    </div>
  )
}

export default AuthenticatorApp
