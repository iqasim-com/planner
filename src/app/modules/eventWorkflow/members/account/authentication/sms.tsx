import { ErrorMessage } from 'formik'
import React from 'react'
import PhoneInput from 'react-phone-input-2'

const SMSAuthentication = ({...props}) => {
  return (
    <div data-kt-element='sms' className='mb-4'>
      <h3 className='text-dark fw-bold fs-3 mb-5'>SMS: Verify Your Mobile Number</h3>
      <div className='text-muted fw-semibold mb-10'>
        Enter your mobile phone number with country code and we will send you a verification code
        upon request.
      </div>
      <PhoneInput
        country={'us'}
        inputClass='form-control'
        disableDropdown={true}
        disableCountryGuess={true}
        disableCountryCode={true}
        inputStyle={{
          height: 'auto',
          width: '100%',
          background: 'transparent',
          borderColor: 'inherit',
          lineHeight: 'unset',
        }}
        inputProps={{
          name: 'mobile',
        }}
        dropdownClass='bg-light text-primary'
        value={props.extra?.formik?.value?.mobile}
      />
      <ErrorMessage name='mobile'>
        {(msg) => <div className='text-danger'>{msg}</div>}
      </ErrorMessage>
    </div>
  )
}

export default SMSAuthentication
