// React imports
import React from 'react'
import { FC, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// Third party imports
import { Form, Formik } from 'formik'
// Component imports
import { PasswordMeterComponent } from '../../../../../_metronic/assets/ts/components'
import { StepperComponent } from '../../../../../_metronic/assets/ts/components'
import { Step1 } from './components/create-registration-stepper/steps/Step1'
import { Step2 } from './components/create-registration-stepper/steps/Step2'
import { KTSVG } from '../../../../../_metronic/helpers'
import { userRegistrationSchema } from '../../../wizards/components/CreateAccountWizardHelper'
import {
  defaultCreateMemberData,
  IMemberInformation,
} from './components/create-registration-stepper/IMemberModel'
import { registerUser } from '../../core/_requests'

const Registration: FC = () => {
  const [loading, setLoading] = useState(false)
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [onSubmit, setOnSubmit] = useState(true)
  const [currentEmail, setCurrentEmail] = useState<string>('')
  const [registrationMessage, setRegistrationMessage] = useState<string>('')

  /**
   * This useEffect hook is used to call the PasswordMeterComponent.bootstrap() function
   * and loadStepper() when the stepperRef is updated.
   */
  useEffect(() => {
    PasswordMeterComponent.bootstrap()
    if (!stepperRef.current) {
      return
    }
    loadStepper()
  }, [stepperRef])

  /**
   * This function is used to register a new user by taking in their
   * information and sending it to the registerVendor function.
   * It also sets loading to true, sets the current email, and sets a registration message if successful.
   * @param values
   * @param actions
   */
  const onRegisterNewUser = (values: IMemberInformation, actions: any) => {
    setLoading(true)
    setCurrentEmail(values.Email)
    setTimeout(() => {
      registerUser(values, values.AccountType)
        .then((res: any) => {
          setRegistrationMessage(res.message)
          setLoading(false)
          setOnSubmit(false)
        })
        .catch((error: any) => console.error(error))
    }, 2000)
  }

  /**
   * This function is used to create an instance of the StepperComponent
   * and assign it to the stepper.current variable.
   */
  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  /**
   * This function is used to go to the previous step in a stepper component
   */
  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    stepper.current.goPrev()
  }

  /**
   * This function will move the stepper to the next step.
   * @returns
   */
  const nextStep = () => {
    if (!stepper.current) {
      return
    }
    stepper.current.goNext()
  }

  return (
    <>


      <div className='card bg-transparent'>
        <div className="card-header p-3 mb-5">
          <h3 className="card-title">Create Account</h3>
          <div className="card-toolbar">
            Already have an account?
            <Link to='/auth/login' className='link-primary fw-bolder ms-2'>
              Sign In
            </Link>
          </div>
        </div>
        <div className='card-body p-0'>
          {onSubmit ? (
            <div
              ref={stepperRef}
              className='stepper stepper-links d-flex flex-column'
              id='kt_create_account_stepper'
            >
              <div className='stepper-nav mb-5'>
                <div className='stepper-item current' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>
                    <span className='badge badge-primary badge-circle me-4 p-3'>1</span> Account
                    Type
                  </h3>
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>
                    <span className='badge badge-primary badge-circle me-4 p-3'>2</span> Account
                    Info
                  </h3>
                </div>
              </div>

              {/*begin::Form */}
              <Formik
                initialValues={defaultCreateMemberData}
                validationSchema={userRegistrationSchema}
                onSubmit={(values, actions) => onRegisterNewUser(values, actions)}
              >
                {({ isSubmitting, isValid, errors, touched, values, setFieldValue }) => (
                  <Form
                    className='mx-auto mw-1000px w-100 pt-15 pb-10'
                    noValidate
                    id='kt_create_member_form'
                  >
                    <div className='current' data-kt-stepper-element='content'>
                      <Step1 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step2 extra={{ errors, touched, values, setFieldValue }} />
                    </div>

                    {/*begin::Actions */}
                    <div className='d-flex flex-stack pt-10'>
                      <div className='me-2'>
                        <button
                          type='button'
                          className='btn btn-lg btn-light-primary me-3'
                          data-kt-stepper-action='previous'
                          onClick={prevStep}
                        >
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr063.svg'
                            className='svg-icon-3 me-1'
                          />{' '}
                          Previous
                        </button>
                      </div>
                      <div>
                        <button
                          type='submit'
                          className='btn btn-lg btn-primary'
                          data-kt-stepper-action='submit'
                          disabled={!isValid || isSubmitting}
                        >
                          {!isSubmitting && (
                            <>
                              <span className='indicator-label'>Submit</span>{' '}
                              <KTSVG
                                path='/media/icons/duotune/arrows/arr064.svg'
                                className='svg-icon-3 ms-2 me-0'
                              />
                            </>
                          )}
                          {loading && (
                            <span>
                              Please wait...{' '}
                              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                            </span>
                          )}
                        </button>

                        <button
                          type='button'
                          className='btn btn-lg btn-primary'
                          data-kt-stepper-action='next'
                          onClick={nextStep}
                        >
                          Next Step{' '}
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-1 me-0'
                          />
                        </button>
                      </div>
                    </div>
                    {/*end::Actions */}
                  </Form>
                )}
              </Formik>
              {/*end::Form */}
            </div>
          ) : (
            <div className='pb-10 pb-lg-12 text-center'>
              <h1 className='text-success display-3 mb-4'>Thank you!</h1>
              <h2 className='mb-5'>Verify your email</h2>
              <p>{registrationMessage}</p>
              <p>
                We've sent an email to <span className='text-primary fw-bold'>{currentEmail}</span>{' '}
                to verify your email address and activate your account.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export { Registration }
