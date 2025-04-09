/* eslint-disable jsx-a11y/anchor-is-valid */
import {Field} from 'formik'
import {StepProps} from '../IAppModels'
import MultiSelect from '../../../../../../../../../auth/components/registration/components/create-registration-stepper/steps/MultiSelect'

const Step2 = ({data, updateData}: StepProps) => {
  const assignees = [
    {value: 'Assignee1 ', label: 'Assignee 1'},
    {value: 'Assignee2', label: 'Assignee 2'},
  ]
  return (
    <div className='pb-5' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/*begin::Form Group */}
        <div className='fv-row'>
          {/* begin::Label */}
          <label className='d-flex align-items-center fs-5 fw-semibold mb-4'>
            <span className='required'>Select Assignee</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Assign task to assignee'
            ></i>
          </label>
          <Field
            name='selectTaskAssignee'
            id='selectTaskAssignee'
            placeholder='Select Assignees...'
            isMulti={true}
            component={MultiSelect}
            options={assignees}
          />
          {/* end::Label */}
        </div>
        {/*end::Form Group */}
      </div>
    </div>
  )
}

export {Step2}
