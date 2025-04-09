import {ErrorMessage, Field, Form, Formik} from 'formik'
import React from 'react'
import {KTSVG} from '../KTSVG'
import * as Yup from 'yup'

const EWFDatePicker = ({callback, loading}: any) => {
  const initialValues = {
    id: 'EWF' + Date.now(),
    datePicker: '',
  }

  const timelineValidationSchema = Yup.object().shape({
    datePicker: Yup.string().required('Date is required.'),
  })

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={timelineValidationSchema}
        onSubmit={(values) => callback(values)}
      >
        {({isSubmitting, values, isValid, touched}) => (
          <Form>
            <div className='mb-4'>
              <Field type='hidden' name='id' />
              <Field type='date' className='form-control mb-2' name='datePicker' />
              <ErrorMessage name='datePicker'>
                {(msg) => <div className='text-danger'>{msg}</div>}
              </ErrorMessage>
            </div>
            <button
              type='submit'
              disabled={isSubmitting || !isValid}
              className='btn btn-lg btn-primary'
            >
              {!isSubmitting && (
                <>
                  <span className='indicator-label'>Create Timeline</span>{' '}
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
          </Form>
        )}
      </Formik>
    </>
  )
}

export default EWFDatePicker