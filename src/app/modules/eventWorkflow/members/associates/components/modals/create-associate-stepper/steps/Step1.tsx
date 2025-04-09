/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import {KTSVG} from '../../../../../../../../../_metronic/helpers'
import {StepProps} from '../IAssociateModel'

const Step1 = ({data, updateData, hasError}: StepProps) => {
  const phoneCategories = ['Mobile', 'Office Desk Number', 'Home']

  const [phoneCategorySelection, setPhoneCategorySelection] = useState(phoneCategories[0])

  return (
    <div className='current' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>First Name</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the associate first name'
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='firstName'
            placeholder=''
            value={data.associateInformation.firstName}
            onChange={(e) =>
              updateData({
                associateInformation: {
                  firstName: e.target.value,
                  lastName: data.associateInformation.lastName,
                  email: data.associateInformation.email,
                  primaryPhone: data.associateInformation.primaryPhone,
                  primaryPhoneType: data.associateInformation.primaryPhoneType,
                },
              })
            }
          />
          {!data.associateInformation.firstName && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='firstName' data-validator='notEmpty' className='fv-help-block'>
                First name of the associate is required
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}

        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Last Name</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the associate last name'
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='lastName'
            placeholder=''
            value={data.associateInformation.lastName}
            onChange={(e) =>
              updateData({
                associateInformation: {
                  firstName: data.associateInformation.firstName,
                  lastName: e.target.value,
                  email: data.associateInformation.email,
                  primaryPhone: data.associateInformation.primaryPhone,
                  primaryPhoneType: data.associateInformation.primaryPhoneType,
                },
              })
            }
          />
          {!data.associateInformation.lastName && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='lastName' data-validator='notEmpty' className='fv-help-block'>
                Last name of the associate is required
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}

        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Email</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Specify the associate unique email'
            ></i>
          </label>
          <input
            type='email'
            className='form-control form-control-lg form-control-solid'
            name='email'
            placeholder=''
            value={data.associateInformation.email}
            onChange={(e) =>
              updateData({
                associateInformation: {
                  firstName: data.associateInformation.firstName,
                  lastName: data.associateInformation.lastName,
                  email: e.target.value,
                  primaryPhone: data.associateInformation.primaryPhone,
                  primaryPhoneType: data.associateInformation.primaryPhoneType,
                },
              })
            }
          />
          {!data.associateInformation.email && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='email' data-validator='notEmpty' className='fv-help-block'>
                Email of the associate is required
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}

        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Phone Number</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Specify the associate primary phone number'
            ></i>
          </label>
          <input
            type='tel'
            className='form-control form-control-lg form-control-solid'
            name='primaryPhone'
            placeholder=''
            value={data.associateInformation.primaryPhone}
            onChange={(e) =>
              updateData({
                associateInformation: {
                  firstName: data.associateInformation.firstName,
                  lastName: data.associateInformation.lastName,
                  email: data.associateInformation.email,
                  primaryPhone: e.target.value,
                  primaryPhoneType: data.associateInformation.primaryPhoneType,
                },
              })
            }
          />
          {!data.associateInformation.primaryPhone && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='primaryPhone' data-validator='notEmpty' className='fv-help-block'>
                Phone number is required
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}

        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Phone Type</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Specify your unique app name'
            ></i>
          </label>
          <select
            name='primaryPhoneType'
            data-control='select2'
            data-hide-search='true'
            className='form-control form-control-lg form-control-solid'
            placeholder='Select option'
            // value={data.associateInformation.primaryPhoneType}
            defaultValue='Mobile'
            value={phoneCategorySelection}
            onChange={(e) =>
              updateData({
                associateInformation: {
                  firstName: data.associateInformation.firstName,
                  lastName: data.associateInformation.lastName,
                  email: data.associateInformation.email,
                  primaryPhone: data.associateInformation.primaryPhone,
                  primaryPhoneType: setPhoneCategorySelection(e.target.value),
                },
              })
            }
          >
            {phoneCategories.map((obj) => (
              <option key={obj} value={obj}>
                {obj}
              </option>
            ))}
          </select>
          {!data.associateInformation.primaryPhoneType && hasError && (
            <div className='fv-plugins-message-container'>
              <div
                data-field='primaryPhoneType'
                data-validator='notEmpty'
                className='fv-help-block'
              >
                Phone Type of the associate is required
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}
      </div>
    </div>
  )
}

export {Step1}
