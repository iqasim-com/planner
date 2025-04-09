/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import EWFModal from '../../../../../../_metronic/partials/modals/modal/modal'
import SMSAuthentication from './sms'
import AuthenticatorApp from './authenticator'
import OptionsForTwoFector from './options'
import {Form, Formik} from 'formik'

export interface TwoFactorProps {
  authenticationType: string,
  mobile?: string,
  code? : string
}

const initialValue: TwoFactorProps = {
  authenticationType: '',
  mobile: '',
  code: ''
}

const Authentication: FC = () => {
  const [showSMS, setSMS] = useState(false)
  const [showOptions, setoptions] = useState(true)
  const [showAuthenticator, setAuthenticator] = useState(false)
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)

  const submitOption = (values: any) => {
    console.log(values)
    if (values.authenticationType === 'sms') {
      setSMS(true)
      setoptions(false)
    } else {
      setSMS(false)
      setoptions(false)
      setAuthenticator(true)
    }
  }

  return (
    <>
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body'>
          <div className='card-px text-center pt-15 pb-15'>
            <h2 className='fs-2x fw-bold mb-0'>Two-factor Authentication</h2>
            <p className='text-gray-400 fs-4 fw-semibold py-7'>
              Click on the below buttons to launch
              <br />
              two-factor authentication setup example.
            </p>
            {/* <a href="#" className="btn btn-primary er fs-6 px-8 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_two_factor_authentication">Enable Two-factor Authentication</a> */}
            <button onClick={() => setShowCreateAppModal(true)} className='btn btn-primary'>
              Two-factor Authentication
            </button>
          </div>
          <div className='text-center pb-15 px-5'>
            <img
              src='assets/media/illustrations/sketchy-1/4.png'
              alt=''
              className='mw-100 h-200px h-sm-325px'
            />
          </div>
        </div>
      </div>

      <EWFModal
        modalTitle='Two-Factor Authentication'
        show={showCreateAppModal}
        classes='w-100'
        modalId='ewf_modal_two_factor'
        handleClose={() => setShowCreateAppModal(false)}
      >
        
          <Formik initialValues={initialValue} onSubmit={(values) => submitOption(values)}>
            {({values}) => (
              <Form>
                {showOptions && <OptionsForTwoFector />}
                {showAuthenticator && <AuthenticatorApp />}
                {showSMS && <SMSAuthentication extra={{values}} />}
                <div className='d-flex'>
                  <button className='btn btn-primary me-4' onClick={() => setShowCreateAppModal(false)}>
                    Cancel
                  </button>
                  <button className='btn btn-success' type='submit'>
                    Continue
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        
      </EWFModal>

      {/* OLD MODAL */}

      {/* <div className="modal fade" id="kt_modal_two_factor_authentication" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered mw-650px">
          <div className="modal-content">
            <div className="modal-header flex-stack">
              <h2>Choose An Authentication Method</h2>
              <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                <span className="svg-icon svg-icon-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                    <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="modal-body scroll-y pt-10 pb-15 px-lg-17">
              <div data-kt-element="options">
                <p className="text-muted fs-5 fw-semibold mb-10">In addition to your username and password, you’ll have to enter a code (delivered via app or SMS) to log into your account.</p>
                <div className="pb-10">
                  <input type="radio" className="btn-check" name="auth_option" value="apps" id="kt_modal_two_factor_authentication_option_1" />
                  <label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-5" htmlFor="kt_modal_two_factor_authentication_option_1">
                    <span className="svg-icon svg-icon-4x me-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="currentColor" />
                        <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="d-block fw-semibold text-start">
                      <span className="text-dark fw-bold d-block fs-3">Authenticator Apps</span>
                      <span className="text-muted fw-semibold fs-6">Get codes from an app like Google Authenticator, Microsoft Authenticator, Authy or 1Password.</span>
                    </span>
                  </label>
                  <input type="radio" className="btn-check" name="auth_option" value="sms" id="kt_modal_two_factor_authentication_option_2" />
                  <label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center" htmlFor="kt_modal_two_factor_authentication_option_2">
                    <span className="svg-icon svg-icon-4x me-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor" />
                        <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="d-block fw-semibold text-start">
                      <span className="text-dark fw-bold d-block fs-3">SMS</span>
                      <span className="text-muted fw-semibold fs-6">We will send a code via SMS if you need to use your backup login method.</span>
                    </span>
                  </label>
                </div>
                <button className="btn btn-primary w-100" data-kt-element="options-select">Continue</button>
              </div>

              <div className={showAuthenticator ? 'd-block': 'd-none'} data-kt-element="apps">
                <h3 className="text-dark fw-bold mb-7">Authenticator Apps</h3>
                <div className="text-gray-500 fw-semibold fs-6 mb-10">Using an authenticator app like
                <a href="https://support.google.com/accounts/answer/1066447?hl=en" target="_blank">Google Authenticator</a>,
                <a href="https://www.microsoft.com/en-us/account/authenticator" target="_blank">Microsoft Authenticator</a>,
                <a href="https://authy.com/download/" target="_blank">Authy</a>, or
                <a href="https://support.1password.com/one-time-passwords/" target="_blank">1Password</a>, scan the QR code. It will generate a 6 digit code for you to enter below.
                <div className="pt-5 text-center">
                  <img src="assets/media/misc/qr.png" alt="" className="mw-150px" />
                </div></div>
                <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6">
                  <span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                      <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor" />
                      <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor" />
                    </svg>
                  </span>
                  <div className="d-flex flex-stack flex-grow-1">
                    <div className="fw-semibold">
                      <div className="fs-6 text-gray-700">If you having trouble using the QR code, select manual entry on your app, and enter your username and the code:
                      <div className="fw-bold text-dark pt-2">KBSS3QDAAFUMCBY63YCKI5WSSVACUMPN</div></div>
                    </div>
                  </div>
                </div>
                <form data-kt-element="apps-form" className="form" action="#">
                  <div className="mb-10 fv-row">
                    <input type="text" className="form-control form-control-lg form-control-solid" placeholder="Enter authentication code" name="code" />
                  </div>
                  <div className="d-flex flex-center">
                    <button type="reset" data-kt-element="apps-cancel" className="btn btn-light me-3">Cancel</button>
                    <button type="submit" data-kt-element="apps-submit" className="btn btn-primary">
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                  </div>
                </form>
              </div>

              <div className={showSMS ? 'd-block': 'd-none'} data-kt-element="sms">
                <h3 className="text-dark fw-bold fs-3 mb-5">SMS: Verify Your Mobile Number</h3>
                <div className="text-muted fw-semibold mb-10">Enter your mobile phone number with country code and we will send you a verification code upon request.</div>
                <form data-kt-element="sms-form" className="form" action="#">
                  <div className="mb-10 fv-row">
                    <input type="text" className="form-control form-control-lg form-control-solid" placeholder="Mobile number with country code..." name="mobile" />
                  </div>
                  <div className="d-flex flex-center">
                    <button type="reset" data-kt-element="sms-cancel" className="btn btn-light me-3">Cancel</button>
                    <button type="submit" data-kt-element="sms-submit" className="btn btn-primary">
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export {Authentication}
