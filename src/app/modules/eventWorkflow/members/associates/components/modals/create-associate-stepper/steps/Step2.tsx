/* eslint-disable jsx-a11y/anchor-is-valid */
import {KTSVG} from '../../../../../../../../../_metronic/helpers'
import {StepProps} from '../IAssociateModel'

const Step2 = ({data, updateData, hasError}: StepProps) => {
  return (
    <div className='pb-5' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Job Title</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the associate job title'
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='jobTitle'
            placeholder=''
            value={data.jobInformation.jobTitle}
            onChange={(e) =>
              updateData({
                jobInformation: {
                  jobTitle: e.target.value,
                  manager: data.jobInformation.manager,
                  department: data.jobInformation.department,
                  startDate: data.jobInformation.startDate,
                  hourlyPayRate: data.jobInformation.hourlyPayRate,
                },
              })
            }
          />
          {!data.jobInformation.jobTitle && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='jobTitle' data-validator='notEmpty' className='fv-help-block'>
                Job title of the associate is required
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}

        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Manager</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the Manager of  associate'
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='manager'
            placeholder='First & Last Name'
            value={data.jobInformation.manager}
            onChange={(e) =>
              updateData({
                jobInformation: {
                  jobTitle: data.jobInformation.jobTitle,
                  manager: e.target.value,
                  department: data.jobInformation.department,
                  startDate: data.jobInformation.startDate,
                  hourlyPayRate: data.jobInformation.hourlyPayRate,
                },
              })
            }
          />
          {!data.jobInformation.manager && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='manager' data-validator='notEmpty' className='fv-help-block'>
                Manager of the associate is required
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}

        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className=''>Department</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the associate Department'
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='department'
            placeholder=''
            value={data.jobInformation.department}
            onChange={(e) =>
              updateData({
                jobInformation: {
                  jobTitle: data.jobInformation.jobTitle,
                  manager: data.jobInformation.manager,
                  department: e.target.value,
                  startDate: data.jobInformation.startDate,
                  hourlyPayRate: data.jobInformation.hourlyPayRate,
                },
              })
            }
          />
          {!data.jobInformation.department && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='department' data-validator='notEmpty' className='fv-help-block'>
                Department of the associate is required
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}

        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Start Date</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the associate start date'
            ></i>
          </label>
          <input
            type='date'
            className='form-control form-control-lg form-control-solid'
            name='startDate'
            placeholder=''
            value={data.jobInformation.startDate}
            onChange={(e) =>
              updateData({
                jobInformation: {
                  jobTitle: data.jobInformation.jobTitle,
                  manager: data.jobInformation.manager,
                  department: data.jobInformation.department,
                  startDate: e.target.value,
                  hourlyPayRate: data.jobInformation.hourlyPayRate,
                },
              })
            }
          />
          {!data.jobInformation.startDate && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='startDate' data-validator='notEmpty' className='fv-help-block'>
                Start date of the associate is required
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}

        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Hourly Pay Rate</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the associate job title'
            ></i>
          </label>
          <input
            type='number'
            className='form-control form-control-lg form-control-solid'
            name='jobTitle'
            placeholder=''
            value={data.jobInformation.hourlyPayRate}
            onChange={(e) =>
              updateData({
                jobInformation: {
                  jobTitle: data.jobInformation.jobTitle,
                  manager: data.jobInformation.manager,
                  department: data.jobInformation.department,
                  startDate: data.jobInformation.startDate,
                  hourlyPayRate: parseFloat(e.target.value),
                },
              })
            }
          />
          {!data.jobInformation.jobTitle && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='hourlyPayRate' data-validator='notEmpty' className='fv-help-block'>
                Hourly Pay Rate of the associate is required
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}
      </div>
    </div>
  )
}

export {Step2}
