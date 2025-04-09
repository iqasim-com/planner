/* eslint-disable jsx-a11y/anchor-is-valid */
import {ErrorMessage, Field} from 'formik'
import {StepProps} from '../IAppModels'

const Step1 = ({data, updateData}: StepProps) => {
  const taskStatus = [
    { value: 'pending', label: 'Pending' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'done', label: 'Done' }
  ];
  return (
    <div className='current' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Deadline</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Task deadline'
            ></i>
          </label>
          <Field
            type='date'
            className='form-control form-control-lg form-control-solid'
            name='deadline'
          />
          <ErrorMessage name='deadline'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>
        <div className='fv-row mb-10'>
          <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='taskTitle'
            placeholder='Title'
          />
          <ErrorMessage name='taskTitle'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>
        <div className='fv-row mb-10'>
          <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='taskSubTitle'
            placeholder='Sub Title'
          />
          <ErrorMessage name='taskSubTitle'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>
        <div className='fv-row mb-10'>
          <Field name='taskDescription'>
            {({field}: {field: any}) => (
              <textarea
                {...field}
                className='form-control form-control-lg form-control-solid'
                rows={5}
                placeholder='Enter your description'
              />
            )}
          </Field>
          <ErrorMessage name='taskDescription'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Start Date</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Task start date'
            ></i>
          </label>
          <Field
            type='date'
            className='form-control form-control-lg form-control-solid'
            name='taskStartDate'
            placeholder='Start Date'
          />
          <ErrorMessage name='taskStartDate'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>

        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Completion Date</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Task Completion date'
            ></i>
          </label>
          <Field
            type='date'
            className='form-control form-control-lg form-control-solid'
            name='taskCompletionDate'
            placeholder='Completion Date'
          />
          <ErrorMessage name='taskCompletionDate'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>
        <div className='row mb-10'>
          <div className='col-lg-6'>
            <Field
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='taskPhase'
              placeholder='Task Phase'
            />
            <ErrorMessage name='taskPhase'>
              {(msg) => <div className='text-danger'>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className='col-lg-6'>
            <Field name="taskStatus" as="select" className='form-select'>
              {/* {taskStatus.map((task: any) => (
                <option key={task.value} value={task.value}>
                  {task.label}
                </option>
              ))} */}
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </Field>
            <ErrorMessage name='taskStatus'>
              {(msg) => <div className='text-danger'>{msg}</div>}
            </ErrorMessage>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step1}
