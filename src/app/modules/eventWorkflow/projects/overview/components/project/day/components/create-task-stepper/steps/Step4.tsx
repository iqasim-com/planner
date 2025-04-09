/* eslint-disable jsx-a11y/anchor-is-valid */
import {StepProps} from '../IAppModels'

const Step4 = ({data, updateData}: StepProps) => {
  return (
    <>
      {/*begin::Step 4 */}
      <div className='pb-5' data-kt-stepper-element='content'>
        <div className='w-100'>
          {/*begin::Form Group */}
          <div className='fv-row text-center'>
            <h1 className='text-success'>All Done!</h1>
            <p>
              Click <span className='fw-bold'>Create Task</span> to create a new task.
            </p>
          </div>
          {/*end::Form Group */}
        </div>
      </div>
      {/*end::Step 4 */}
    </>
  )
}

export {Step4}
