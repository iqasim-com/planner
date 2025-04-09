import React, {FC, useEffect, useRef, useState} from 'react'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {KTSVG} from '../../../../_metronic/helpers'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {createAccountSchemas, ICreateAccount, inits} from './CreateAccountWizardHelper'

const Horizontal: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const [userType, setUserType] = useState('')
  const [onSubmit, setOnSubmit] = useState(true)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    console.log('current', stepper.current?.currentStepIndex)
    if (stepper.current?.currentStepIndex === 2) {
      setOnSubmit(false)
    }
    setUserType(values.accountType)
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
      console.log('Current stepper', stepper.current)
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='card bg-transparent'>
      <div className='card-body'>
        {onSubmit ? (
          <div
            ref={stepperRef}
            className='stepper stepper-links d-flex flex-column'
            id='kt_create_account_stepper'
          >
            <div className='stepper-nav mb-5'>
              <div className='stepper-item current' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>Account Type</h3>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>Account Info</h3>
              </div>
            </div>

            <Formik
              validationSchema={currentSchema}
              initialValues={initValues}
              onSubmit={submitStep}
            >
              {() => (
                <Form className='mx-auto mw-1000px w-100 pt-15 pb-10' id='kt_create_account_form'>
                  <div className='current' data-kt-stepper-element='content'>
                    <Step1 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Step2 currentUserType={userType} />
                  </div>

                  <div className='d-flex flex-stack pt-15'>
                    <div className='mr-2'>
                      <button
                        onClick={prevStep}
                        type='button'
                        className='btn btn-lg btn-light-primary me-3'
                        data-kt-stepper-action='previous'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr063.svg'
                          className='svg-icon-4 me-1'
                        />
                        Back
                      </button>
                    </div>

                    <div>
                      <button type='submit' className='btn btn-lg btn-primary me-3'>
                        <span className='indicator-label'>
                          {!isSubmitButton && 'Continue'}
                          {isSubmitButton && 'Submit'}
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-2 me-0'
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        ) : (
          <div className='pb-10 pb-lg-12 text-center'>
            <h1 className='text-success display-3 mb-4'>Thank you!</h1>
            <h2 className='mb-5'>Verify your email</h2>
            <p>
              We've sent an email to{' '}
              <span className='text-primary fw-bold'>email@organization.com</span> to verify your
              email address and activate your account.{' '}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export {Horizontal}
