import React, {FC} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'

const initialValues = {
  emailAddress: '',
  firstName: '',
  lastName: '',
  contactNumber: '',
  businessName: '',
  businessAddress: '',
  businessVerticals: '',
  instagramHandle: '',
  titokHandle: '',
  websiteUrl: '',
  password: '',
  passwordConfirmation: '',
  acceptTerms: false,
}

const registrationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  firstName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First name is required'),
  lastName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last name is required'),
  contactNumber: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Contact number is required'),
  businessName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Business name is required'),
  businessAddress: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Business address is required'),
  businessVerticals: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(150, 'Maximum 50 symbols')
    .required('Business verticals is required'),
  intagramHandle: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Intagram handle is required'),
  websiteUrl: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('website is required'),
  Password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(150, 'Maximum 50 symbols')
    .required('Tiktok Handle is required'),
  passwordConfirmation: Yup.string()
    .required('Password confirmation is required')
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('Password')], "Password and Confirm Password didn't match"),
    }),
  acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
})

const Step2: FC<{currentUserType?: string}> = ({currentUserType}) => {
  const businessVerticals = [
    {id: 'eventPlanner ', name: 'Event Planner '},
    {id: 'photographer', name: 'Photographer'},
    {id: 'videographer', name: 'Videographer'},
    {id: 'dj', name: 'DJ'},
    {id: 'makeupArtist', name: 'Makeup Artist'},
    {id: 'hairStylist', name: 'Hair Stylist'},
    {id: 'transportation', name: 'Transportation'},
    {id: 'cakeArtist', name: 'Cake Artist'},
    {id: 'florist', name: 'Florist'},
    {id: 'mC', name: 'MC'},
    {id: 'officiant', name: 'Officiant'},
    {id: 'venueAssociate ', name: 'Venue Associate'},
    {id: 'other', name: 'Other'},
  ]
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Account Info</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          <span className='me-2'>If you need more info, please check out</span>
          <a href='/dashboard' className='link-primary fw-bolder'>
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='d-flex justify-content-between'>
        <div className='fv-row mb-10 w-50'>
          <label className='form-label required'>First Name</label>

          <Field name='firstName' className='form-control form-control-lg form-control-solid' />
          <div className='text-danger mt-2'>
            <ErrorMessage name='firstName' />
          </div>
        </div>

        <div className='fv-row mb-10 w-50 ms-4'>
          <label className='form-label required'>Last Name</label>

          <Field name='lastName' className='form-control form-control-lg form-control-solid' />
          <div className='text-danger mt-2'>
            <ErrorMessage name='lastName' />
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between'>
        <div className='fv-row mb-10 w-50'>
          <label className='form-label required'>Email Address</label>
          {currentUserType === 'vendor' && (
            <span className='text-primary ms-3'>It is preferable to use business email</span>
          )}
          <Field name='emailAddress' className='form-control form-control-lg form-control-solid' />
          <div className='text-danger mt-2'>
            <ErrorMessage name='emailAddress' />
          </div>
        </div>

        <div className='fv-row mb-10 w-50 ms-4'>
          <label className='form-label required'>Contact Number</label>

          <Field name='contactNumber' className='form-control form-control-lg form-control-solid' />
          <div className='text-danger mt-2'>
            <ErrorMessage name='contactNumber' />
          </div>
        </div>
      </div>

      {currentUserType === 'vendor' && (
        <div>
          <div className='d-flex justify-content-between'>
            <div className='fv-row w-75 mb-10'>
              <label className='form-label required'>Business Address</label>

              <Field
                name='businessAddress'
                className='form-control form-control-lg form-control-solid'
              />
              <div className='text-danger mt-2'>
                <ErrorMessage name='businessAddress' />
              </div>
            </div>

            {currentUserType === 'vendor' && (
              <div className='fv-row mb-10 w-25 ms-4'>
                <label className='form-label required'>Business Verticals</label>
                <select
                  className='form-select form-select-solid'
                  data-kt-select2='true'
                  data-placeholder='Select option'
                  data-allow-clear='true'
                  defaultValue={'1'}
                >
                  <option value='none'>None</option>
                  {businessVerticals.map((ver) => (
                    <option key={ver.id} value={ver.id}>
                      {ver.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className='d-flex justify-content-between'>
            <div className='fv-row mb-10 w-100'>
              <label className='form-label'>
                <i className='fa-brands text-primary fa-instagram'></i> Instagram handle
              </label>
              <Field
                name='instagramHandle'
                className='form-control form-control-lg form-control-solid'
              />
            </div>

            <div className='fv-row mb-10 mx-4 w-100'>
              <label className='form-label'>
                <i className='fa-brands text-primary fa-tiktok'></i> Tiktok Handle
              </label>
              <Field
                name='tiktokHandle'
                className='form-control form-control-lg form-control-solid'
              />
            </div>

            <div className='fv-row mb-10 w-100'>
              <label className='form-label'>
                <i className='fa fa-globe text-primary' aria-hidden='true'></i> Website URL
              </label>
              <Field
                name='websiteUrl'
                placeholder='https://'
                className='form-control form-control-lg form-control-solid'
              />
              <div className='text-danger mt-2'>
                <ErrorMessage name='websiteUrl' />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='mb-10 fv-row' data-kt-password-meter='true'>
        <div className='mb-1'>
          <label className='form-label fw-bolder text-dark fs-6'>Password</label>
          <div className='position-relative mb-3'>
            <Field
              name='password'
              type='password'
              className='form-control form-control-lg form-control-solid'
            />
            <div className='text-danger mt-2'>
              <ErrorMessage name='password' />
            </div>
          </div>
          {/* begin::Meter */}
          <div
            className='d-flex align-items-center mb-3'
            data-kt-password-meter-control='highlight'
          >
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
          </div>
          {/* end::Meter */}
        </div>
        <div className='text-muted'>
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </div>
      </div>

      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>Confirm Password</label>
        <Field
          name='passwordConfirmation'
          type='password'
          className='form-control form-control-lg form-control-solid'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='passwordConfirmation' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <div className='form-check form-check-custom form-check-solid'>
          <input className='form-check-input' type='checkbox' id='kt_login_toc_agree' />
          <label
            className='form-check-label fw-bold text-gray-700 fs-6'
            htmlFor='kt_login_toc_agree'
          >
            I Agree the
            <Link to='/auth/terms' className='ms-1 link-primary'>
              terms and conditions
            </Link>
            .
          </label>
        </div>
      </div>
    </div>
  )
}

export {Step2}
