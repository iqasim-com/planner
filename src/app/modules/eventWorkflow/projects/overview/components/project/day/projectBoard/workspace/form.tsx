import React, { FC } from "react";
import { ErrorMessage, Field } from "formik"
import useCategoryHook from "../../../../../../../../hooks/useCategoryHook"
import moment from "moment";
import DatePicker from "react-datepicker";

interface Priority {
  name: string
  value: number
}

interface Status {
  name: string
  value: number
}

interface WorkspaceCreationFormProps {
  values: any,
  setFieldValue: any
}

const priorities: Priority[] = [
  { name: 'Normal', value: 1 },
  { name: 'Important', value: 2 },
  { name: 'Critical', value: 3 }
]

const statuses: Status[] = [
  { name: 'Pending', value: 1 },
  { name: 'ReOpened', value: 2 },
  { name: 'Completed', value: 3 }
]

const WorkspaceCreationForm: FC<WorkspaceCreationFormProps> = ({
  values,
  setFieldValue
}) => {
  const [categorySelection] = useCategoryHook({ options: priorities })
  const [statusSelection] = useCategoryHook({ options: statuses })

  return (
    <>
      <p className="text-muted w-xl-50 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt molestias officia cupiditate voluptatem neque?</p>
      <div className="w-full">
        <div className='fv-row row'>
          <div className='col-lg-6 col-sm-12 col-md-12 mb-6'>
            <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
              <span className='required'>Workspace Name</span>
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Enter Workspace Name'
              ></i>
            </label>
            <Field
              type='text'
              placeholder='Workspace Name'
              className='form-control form-control-lg form-control-solid'
              name='name'
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-danger mt-2"
            />
          </div>

          <div className='col-lg-6 col-sm-12 col-md-12 mb-6'>
            <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
              <span>Started At</span>
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Start date of workspace'
              ></i>
            </label>
            <Field
              type='text'
              readOnly
              placeholder='Started At'
              className='form-control form-control-lg form-control-solid'
              value={moment(new Date()).format('DD-MM-YYYY')}
              name='startedAt'
            />
            <ErrorMessage
              name="startedAt"
              component="div"
              className="text-danger mt-2"
            />
          </div>

          <div className='col-lg-3 col-sm-12 col-md-12 mb-6'>
            <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
              <span className='required'>Priority</span>
            </label>

            <Field
              type='text'
              component='select'
              className='form-control form-control-lg form-control-solid'
              name='priority'
              value={values.priority.value}
              onChange={(e: any) => {
                categorySelection(e, 'priority')
              }}
            >
              <option value="None">Select priority</option>
              {priorities?.map(obj => {
                return (
                  <option key={obj.value} value={obj.value}>
                    {obj.name}
                  </option>
                )
              })}
            </Field>
            <ErrorMessage
              name="priority"
              component="div"
              className="text-danger mt-2"
            />
          </div>
          <div className='col-lg-3 col-sm-12 col-md-12 mb-6'>
            <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
              <span className='required'>Status</span>
            </label>

            <Field
              type='text'
              component='select'
              className='form-control form-control-lg form-control-solid'
              name='status'
              value={values.status.value}
              onChange={(e: any) => {
                statusSelection(e, 'status')
              }}
            >
              <option value="None">Select status</option>
              {statuses?.map(obj => {
                return (
                  <option key={obj.value} value={obj.value}>
                    {obj.name}
                  </option>
                )
              })}
            </Field>
          </div>
          <div className='col-lg-3 col-sm-12 col-md-6 mb-6'>
            <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
              <span className="text-danger">Deadline</span>
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Deadline'
              ></i>
            </label>
            {/* <Field
              type='date'
              placeholder='Deadline'
              className='form-control form-control-lg form-control-solid'
              name='deadline'
            /> */}
            <DatePicker
              onChange={(date: any) => {
                setFieldValue('deadline', moment(date).format('YYYY-MM-DD'))
              }}
              name={`deadline`}
              placeholderText="Select Deadline"
              minDate={new Date()}
              className='form-control form-control-lg form-control-solid border'
              value={values.deadline}
            />
            <ErrorMessage
              name="deadline"
              component="div"
              className="text-danger mt-2"
            />
          </div>
        </div>
        <div className='fv-row mb-6'>
          <label className='form-label'>Workspace Description</label>

          <Field
            as='textarea'
            name='description'
            className='form-control form-control-lg form-control-solid'
            rows={3}
          ></Field>
        </div>
      </div>
    </>
  )
}

export { WorkspaceCreationForm }