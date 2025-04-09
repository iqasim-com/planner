// React imports
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// Third party imports
import {Field, ErrorMessage} from 'formik'
import PhoneInput from 'react-phone-input-2'
// Component imports
import {countries} from './countries'
import MultiSelect from './MultiSelect'

const Step2 = ({extra}: any) => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false)

  /**
   * This function is used to toggle the boolean state of passwordShown
   * when invoked.
   */
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown)
  }

  const businessVerticals = [
    {value: 'eventPlanner ', label: 'Event Planner '},
    {value: 'photographer', label: 'Photographer'},
    {value: 'videographer', label: 'Videographer'},
    {value: 'dj', label: 'DJ'},
    {value: 'makeupArtist', label: 'Makeup Artist'},
    {value: 'hairStylist', label: 'Hair Stylist'},
    {value: 'transportation', label: 'Transportation'},
    {value: 'cakeArtist', label: 'Cake Artist'},
    {value: 'florist', label: 'Florist'},
    {value: 'mC', label: 'MC'},
    {value: 'officiant', label: 'Officiant'},
    {value: 'venueAssociate ', label: 'Venue Associate'},
    {value: 'other', label: 'Other'},
  ]

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 mb-12'>
          <h2 className='fw-bolder text-dark'>Account Info</h2>

          <div className='text-gray-400 fw-bold fs-6'>
            <span className='me-2'>If you need more info, please check out</span>
            <a href='/' className='link-primary fw-bolder'>
              Help Page
            </a>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 mb-10'>
          <label className='form-label required'>First Name</label>
          <Field type='text' name='FirstName' className='form-control form-control-lg mb-2' />
          <ErrorMessage name='FirstName'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>

        <div className='col-lg-6 mb-10'>
          <label className='form-label required'>Last Name</label>
          <Field type='text' name='LastName' className='form-control form-control-lg mb-2' />
          <ErrorMessage name='LastName'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div className='mb-10 row'>
        <div className='col-lg-12'>
          <label className='form-label required'>Email Address</label>
          {extra.values.accountType === 'Vendor' && (
            <span className='text-primary ms-3'>It is preferable to use business email</span>
          )}
          <Field type='email' name='Email' className='form-control form-control-lg mb-2' />
          <ErrorMessage name='Email'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-6 mb-10'>
          <label className='form-label'>Country</label>
          <Field
            name='BusinessAddressCountry'
            id='BusinessAddressCountry'
            placeholder='Choose country...'
            component={MultiSelect}
            options={countries}
          />
        </div>

        {/* New style */}
        <div className='col-lg-6 mb-10'>
          <label className='form-label'>Phone Number</label>
          <PhoneInput
            country={
              extra?.values.BusinessAddressCountry.toLowerCase()
                ? extra?.values.BusinessAddressCountry.toLowerCase()
                : 'us'
            }
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
              name: 'LineNumber',
            }}
            dropdownClass='bg-light text-primary'
            value={extra?.formik?.value?.lineNumber}
            onChange={(val: any) => {
              extra?.setFieldValue('LineNumber', val)
            }}
          />
          <ErrorMessage name='LineNumber'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      {extra.values.accountType === 'Vendor' && (
        <>
          <div className='row'>
            <div className='col-lg-6 mb-10'>
              <label className='form-label required'>Business Name</label>
              <Field
                type='text'
                name='BusinessName'
                className='form-control form-control-lg mb-2'
              />
              <ErrorMessage name='BusinessName'>
                {(msg) => <div className='text-danger'>{msg}</div>}
              </ErrorMessage>
            </div>

            <div className='col-lg-6 mb-10'>
              <label className='form-label required'>Business Segments</label>
              <Field
                name='BusinessVerticals'
                id='businessVerticals'
                placeholder='Choose verticals...'
                isMulti={true}
                component={MultiSelect}
                options={businessVerticals}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-9 mb-10'>
              <label className='form-label required'>Business Street Name</label>
              <Field
                type='text'
                name='BusinessAddressLine1'
                className='form-control form-control-lg mb-2'
              />
              <ErrorMessage name='BusinessAddressLine1'>
                {(msg) => <div className='text-danger'>{msg}</div>}
              </ErrorMessage>
            </div>

            <div className='col-lg-3 mb-10'>
              <label className='form-label'>Suite #</label>
              <Field
                type='text'
                name='BusinessAddressLine2'
                className='form-control form-control-lg mb-2'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-4 mb-10'>
              <label className='form-label'>City</label>
              <Field
                type='text'
                name='BusinessAddressCity'
                className='form-control form-control-lg'
              />
            </div>

            <div className='col-lg-4 mb-10'>
              <label className='form-label'>State</label>
              <Field
                type='text'
                name='BusinessAddressState'
                className='form-control form-control-lg'
              />
            </div>

            <div className='col-lg-4 mb-10'>
              <label className='form-label'>Zip Code</label>
              <Field
                type='text'
                name='BusinessAddressZipCode'
                className='form-control form-control-lg'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-4 mb-10'>
              <label className='form-label'>
                <i className='fa-brands text-primary fa-instagram'></i> Instagram handle
              </label>
              <Field
                type='text'
                name='InstagramHandle'
                className='form-control form-control-lg mb-2'
              />
              <ErrorMessage name='InstagramHandle'>
                {(msg) => <div className='text-danger'>{msg}</div>}
              </ErrorMessage>
            </div>

            <div className='col-lg-4 mb-10'>
              <label className='form-label'>
                <i className='fa-brands text-primary fa-tiktok'></i> Tiktok Handle
              </label>
              <Field type='text' name='TitokHandle' className='form-control form-control-lg mb-2' />
              <ErrorMessage name='TitokHandle'>
                {(msg) => <div className='text-danger'>{msg}</div>}
              </ErrorMessage>
            </div>

            <div className='col-lg-4 mb-10'>
              <label className='form-label'>
                <i className='fa fa-globe text-primary' aria-hidden='true'></i> Website URL
              </label>
              <Field type='text' name='WebsiteUrl' className='form-control form-control-lg mb-2' />
              <ErrorMessage name='WebsiteUrl'>
                {(msg) => <div className='text-danger'>{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
        </>
      )}

      <div className='row' data-kt-password-meter='true'>
        <div className='col-lg-12'>
          <label className='form-label fw-bolder text-dark fs-6 required'>Password</label>
          <p className='text-muted'>
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </p>
          <div className='position-relative mb-3'>
            <div className='d-flex align-items-center bg-gray-100 mb-2 border rounded bg-transparent'>
              <Field
                type={passwordShown ? 'text' : 'password'}
                className='form-control form-control-lg form-control-solid bg-transparent border-0'
                autoComplete='off'
                name='Password'
                id='password'
              />
              <span className='p-4' onClick={togglePassword}>
                <i className={`${passwordShown ? 'fa-eye' : 'fa-eye-slash'} fa text-primary`}></i>
              </span>
            </div>
            <ErrorMessage name='Password'>
              {(msg) => <div className='text-danger'>{msg}</div>}
            </ErrorMessage>
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
      </div>

      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6 required'>Confirm Password</label>
        <Field
          type={passwordShown ? 'text' : 'password'}
          name='PasswordConfirmation'
          className='form-control form-control-lg mb-2'
        />
        <ErrorMessage name='PasswordConfirmation'>
          {(msg) => <div className='text-danger'>{msg}</div>}
        </ErrorMessage>
      </div>

      <div className='fv-row mb-10'>
        <div className='form-check form-check-custom form-check-solid mb-2'>
          <Field type='checkbox' name='AcceptTerms' className='form-check-input' />

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
        <ErrorMessage name='AcceptTerms'>
          {(msg) => <div className='text-danger'>{msg}</div>}
        </ErrorMessage>
      </div>
    </div>
  )
}

export {Step2}
