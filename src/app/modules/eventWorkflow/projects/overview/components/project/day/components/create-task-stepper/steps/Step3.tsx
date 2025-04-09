/* eslint-disable jsx-a11y/anchor-is-valid */
import { Field } from 'formik'
import {StepProps} from '../IAppModels'
import MultiSelect from '../../../../../../../../../auth/components/registration/components/create-registration-stepper/steps/MultiSelect'

const Step3 = ({data, updateData}: StepProps) => {
  const reviewers = [
    {value: 'Assignee1 ', label: 'Assignee 1'},
    {value: 'Assignee2', label: 'Assignee 2'},
  ]
  return (
    <>
      {/*begin::Step 3 */}
      <div className='pb-5' data-kt-stepper-element='content'>
        <div className='w-100'>
          {/*begin::Form Group */}

          <div className='fv-row mb-10'>
            <label className='required fs-5 fw-semibold mb-2'>Reviewer Name</label>
            <Field
              name='selectTaskReviewer'
              id='selectTaskReviewer'
              placeholder='Select Reviewer...'
              isMulti={true}
              component={MultiSelect}
              options={reviewers}
            />
          </div>
          {/*end::Form Group */}
        </div>
      </div>
      {/*end::Step 3 */}
    </>
  )
}

export {Step3}
