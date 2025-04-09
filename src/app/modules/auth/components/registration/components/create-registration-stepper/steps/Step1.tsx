// React imports
import React from 'react'
// Third party imports
import {Field} from 'formik'
import {KTSVG} from '../../../../../../../../_metronic/helpers'

/**
 * This code is a React component that renders two radio buttons with accompanying text, 
 * a link, and an icon. The two radio buttons are labeled 
 * "Are you planning an Event?" and "Are you an Event Professional?". The accompanying text 
 * provides additional information about each option. There is also a link to the Help Page 
 * and an icon with a tooltip that provides more information.
 * @returns component
 */
const Step1 = () => {
  return (
    <div className='w-100'>
      {/*begin::Form Group */}
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Account Type
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-lg-6'>
            <Field
              type='radio'
              name='AccountType'
              value='Client'
              className='btn-check'
              id='kt_create_account_form_account_type_client'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-7 d-lg-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_account_type_client'
            >
              <KTSVG
                path='/media/icons/duotune/communication/com005.svg'
                className='svg-icon-3x me-5'
              />

              <span className='d-block fw-bold text-start'>
                <p className='text-dark fw-bolder text-lg-start text-center d-block fs-4 mb-6 mb-lg-2'>
                  Are you planning an Event?
                </p>
                <ul>
                  <li>
                    <span className='text-gray-400 fw-bold fs-6'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                      numquam?
                    </span>
                  </li>
                  <li>
                    <span className='text-gray-400 fw-bold fs-6'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                      numquam?
                    </span>
                  </li>
                  <li>
                    <span className='text-gray-400 fw-bold fs-6'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                      numquam?
                    </span>
                  </li>
                </ul>
              </span>
            </label>
          </div>

          <div className='col-lg-6'>
            <Field
              type='radio'
              name='AccountType'
              value='Vendor'
              className='btn-check'
              id='kt_create_account_form_account_type_vendor'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-7 d-lg-flex align-items-center'
              htmlFor='kt_create_account_form_account_type_vendor'
            >
              <KTSVG path='/media/icons/duotune/finance/fin006.svg' className='svg-icon-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <p className='text-dark fw-bolder text-lg-start text-center d-block fs-4 mb-6 mb-lg-2'>
                  Are you an Event Professional?
                </p>
                <ul>
                  <li>
                    <span className='text-gray-400 fw-bold fs-6'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                      numquam?
                    </span>
                  </li>
                  <li>
                    <span className='text-gray-400 fw-bold fs-6'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                      numquam?
                    </span>
                  </li>
                  <li>
                    <span className='text-gray-400 fw-bold fs-6'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                      numquam?
                    </span>
                  </li>
                </ul>
              </span>
            </label>
          </div>
        </div>
      </div>
      {/*end::Form Group */}
    </div>
  )
}

export {Step1}
