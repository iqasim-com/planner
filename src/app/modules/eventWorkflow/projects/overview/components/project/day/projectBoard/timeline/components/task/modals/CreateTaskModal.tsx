/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../../../../../../../../_metronic/helpers'
import {Modal} from 'react-bootstrap'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {IUpdateTask, updateTask as initialValues} from '../TaskModels'

const taskCreatorSchema = Yup.object().shape({
  activity: Yup.string() || Yup.date(),
  deadline: Yup.string().required('Deadline is required.'),
  title: Yup.string().required('Title is required.'),
  subTitle: Yup.string().required('Subtitle is required.'),
  description: Yup.string().required('Description is required.'),
  startDate: Yup.string().required('Start date is required.'),
  completionDate: Yup.string().required('Completion date is required.'),
  phase: Yup.string().required('Phase is required.'),
  creator: Yup.string().required('Creator is required.'),
  assignees: Yup.string().required('Assignees are required.'),
  viewers: Yup.string().required('Viewers is required.'),
})

type Props = {
  show: boolean
  handleClose: () => void
}

const CreateTaskModal: React.FC<Props> = ({show, handleClose}) => {
  const [data, setData] = useState<IUpdateTask>(initialValues)
  const updatedData = (fieldsToUpdate: Partial<IUpdateTask>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IUpdateTask>({
    initialValues,
    validationSchema: taskCreatorSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })

  return (
    <Modal
      className='fade'
      role='dialog'
      aria-hidden='true'
      aria-labelledby='contained-modal-title-vcenter'
      size='lg'
      show={show}
      centered
    >
      <Modal.Header>
        <Modal.Title>Add A New Task</Modal.Title>

        <div className='btn btn-icon btn-sm btn-light-primary ms-2' onClick={handleClose}>
          <KTSVG className='svg-icon-2' path='/media/icons/duotune/arrows/arr061.svg' />
        </div>
      </Modal.Header>

      <div id='kt_project_timeline_task_creator_modal' className=''>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <Modal.Body>
            <div className='mb-3 row'>
              <label
                htmlFor='deadline'
                className='col-sm-2  fs-6 fw-bolder text-dark col-form-label'
              >
                Deadline
              </label>
              <div className='col-sm-10'>
                <input
                  type='time'
                  className='form-control form-control-lg form-control-solid'
                  id='deadline'
                  placeholder='Task deadline time'
                  {...formik.getFieldProps('deadlineTime')}
                />
              </div>
              {formik.touched.deadlineTime && formik.errors.deadlineTime && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.deadlineTime}</div>
                </div>
              )}
            </div>

            <div className='mb-3 row'>
              <label htmlFor='title' className='col-sm-2  fs-6 fw-bolder text-dark col-form-label'>
                Title
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  id='title'
                  placeholder='Task title'
                  {...formik.getFieldProps('title')}
                />
              </div>
              {formik.touched.title && formik.errors.title && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.title}</div>
                </div>
              )}
            </div>

            <div className='mb-3 row'>
              <label
                htmlFor='subTitle'
                className='col-sm-2  fs-6 fw-bolder text-dark col-form-label'
              >
                Subtitle
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  id='subTitle'
                  placeholder='Task sub-title'
                  {...formik.getFieldProps('subTitle')}
                />
              </div>
              {formik.touched.subTitle && formik.errors.subTitle && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.subTitle}</div>
                </div>
              )}
            </div>

            <div className='mb-3 row'>
              <label
                htmlFor='description'
                className='col-sm-2  fs-6 fw-bolder text-dark col-form-label'
              >
                Description
              </label>
              <div className='col-sm-10'>
                <input
                  type='textarea'
                  className='form-control form-control-lg form-control-solid'
                  id='description'
                  placeholder='Task Description'
                  {...formik.getFieldProps('description')}
                />
              </div>
              {formik.touched.description && formik.errors.description && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.description}</div>
                </div>
              )}
            </div>

            <div className='mb-3 row'>
              <label
                htmlFor='startDate'
                className='col-sm-2  fs-6 fw-bolder text-dark col-form-label'
              >
                Start Date
              </label>
              <div className='col-sm-10'>
                <input
                  type='date'
                  className='form-control form-control-lg form-control-solid'
                  id='startDate'
                  placeholder='Task start date'
                  {...formik.getFieldProps('startDate')}
                />
              </div>
              {formik.touched.startDate && formik.errors.startDate && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.startDate}</div>
                </div>
              )}
            </div>

            <div className='mb-3 row'>
              <label
                htmlFor='CompletionDate'
                className='col-sm-2  fs-6 fw-bolder text-dark col-form-label'
              >
                Completion Date
              </label>
              <div className='col-sm-10'>
                <input
                  type='date'
                  className='form-control form-control-lg form-control-solid'
                  id='completionDate'
                  placeholder='Task completion date'
                  {...formik.getFieldProps('completionDate')}
                />
              </div>
              {formik.touched.completionDate && formik.errors.completionDate && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.completionDate}</div>
                </div>
              )}
            </div>

            <div className='mb-3 row'>
              <label htmlFor='phase' className='col-sm-2  fs-6 fw-bolder text-dark col-form-label'>
                Phase
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  id='phase'
                  placeholder='Task phase'
                  {...formik.getFieldProps('phase')}
                />
              </div>
              {formik.touched.phase && formik.errors.phase && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.phase}</div>
                </div>
              )}
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button className='btn btn-white btn-active-light-primary me-2' onClick={handleClose}>
              Cancel
            </button>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Submit'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </Modal.Footer>
        </form>
      </div>
    </Modal>
  )
}

export {CreateTaskModal}
