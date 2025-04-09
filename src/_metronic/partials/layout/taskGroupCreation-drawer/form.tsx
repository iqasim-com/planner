import { ErrorMessage, Field } from "formik"
import useCategoryHook from "../../../../app/modules/hooks/useCategoryHook"
import DatePicker from "react-datepicker"
import moment from "moment"

const options = [
  { name: 'Pending', value: 1 },
  { name: 'ReOpened', value: 2 },
  { name: 'Completed', value: 3 }
]

const priorities = [
  { name: 'Highest', value: 1 },
  { name: 'Medium', value: 2 },
  { name: 'Low', value: 3 }
]

const TaskGroupForm = ({ values, setFieldValue }: any) => {
  const [categorySelection] = useCategoryHook({ options })

  const setPriority = (priority: string) => {
    let p = ''
    switch (priority) {
      case 'Highest':
        p = 'text-danger'
        break;
      case 'Medium':
        p = 'text-warning'
        break;
      default:
        p = 'text-success'
        break;
    }
    return p
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <label className='form-label fw-bold'>Task Group Name</label>
          <Field
            placeholder='Task Group Name'
            type='text'
            name='name'
            className='form-control mb-3' />
          <ErrorMessage name='name'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>

        <div className="col-lg-3 mb-4">
          <label className='form-label fw-bold'>Status</label>
          <Field
            component='select'
            className='form-control form-control-lg form-control-solid'
            name='status'
            value={values.status.value}
            onChange={(e: any) => {
              categorySelection(e, 'status')
            }}
          >
            <option value="None">Select status</option>
            {options.map(obj => {
              return (
                <option key={obj.value} value={obj.value}>
                  {obj.name}
                </option>
              )
            })}
          </Field>
          <ErrorMessage name='status'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>

        <div className="col-lg-3 mb-4">
          <label className='form-label fw-bold'>Priority</label>
          <Field
            component='select'
            className='form-control form-control-lg form-control-solid'
            name='priority'
            value={values.priority.value}
            onChange={(e: any) => {
              categorySelection(e, 'priority')
            }}
          >
            <option value="None">Priority</option>
            {priorities.map(obj => {
              return (
                <option className={setPriority(obj.name)} key={obj.value} value={obj.value}>
                  {obj.name}
                </option>
              )
            })}
          </Field>
          <ErrorMessage name='priority'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
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
            name='deadline'
            className='form-control mb-3' /> */}
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
          <ErrorMessage name='deadline'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mb-4">
          <label className='form-label fw-bold'>Description</label>
          <Field
            placeholder='Taskgroup Description'
            component="textarea"
            rows={6}
            name='description'
            className='form-control mb-3' />
          <ErrorMessage name='description'>
            {(msg) => <div className='text-danger'>{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
    </>
  )
}

export default TaskGroupForm