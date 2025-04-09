import { Field } from 'formik'
import React from 'react'

const OptionsForTwoFector = () => {
  return (
    <div data-kt-element='options'>
      <p className='text-muted fs-5 fw-semibold mb-10'>
        In addition to your username and password, you’ll have to enter a code (delivered via app or
        SMS) to log into your account.
      </p>
      <div className='pb-10'>
        <Field
          type='radio'
          className='btn-check'
          name='authenticationType'
          value='authenticator'
          id='authenticationTypeAuthenticator'
        />
        <label
          className='btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-5'
          htmlFor='authenticationTypeAuthenticator'
        >
          <span className='svg-icon svg-icon-4x me-4'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.3'
                d='M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z'
                fill='currentColor'
              />
              <path
                d='M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z'
                fill='currentColor'
              />
            </svg>
          </span>
          <span className='d-block fw-semibold text-start'>
            <span className='text-dark fw-bold d-block fs-3'>Authenticator Apps <small className='text-success'>(Recommended)</small></span>
            <span className='text-muted fw-semibold fs-6'>
              Get codes from an app like Google Authenticator, Microsoft Authenticator, Authy or
              1Password.
            </span>
          </span>
        </label>
        <Field
          type='radio'
          className='btn-check'
          name='authenticationType'
          value='sms'
          id='authenticationTypeSMS'
        />
        <label
          className='btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center'
          htmlFor='authenticationTypeSMS'
        >
          <span className='svg-icon svg-icon-4x me-4'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.3'
                d='M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z'
                fill='currentColor'
              />
              <path
                d='M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z'
                fill='currentColor'
              />
            </svg>
          </span>
          <span className='d-block fw-semibold text-start'>
            <span className='text-dark fw-bold d-block fs-3'>SMS</span>
            <span className='text-muted fw-semibold fs-6'>
              We will send a code via SMS if you need to use your backup login method.
            </span>
          </span>
        </label>
      </div>
    </div>
  )
}

export default OptionsForTwoFector