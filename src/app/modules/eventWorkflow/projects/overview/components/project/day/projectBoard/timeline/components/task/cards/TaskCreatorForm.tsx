/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {IUpdateTask, updateTask as initialValues} from '../TaskModels'

const taskCreatorSchema = Yup.object().shape({
  deadlineTime: Yup.string().required('Deadline is required.'),
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
  onSendingToParent: (parameter: boolean) => void
}

const TaskCreatorForm: React.FC<Props> = ({onSendingToParent}) => {
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
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 pt-9'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_project_timeline_task_creation_form'
        aria-expanded='true'
        aria-controls='kt_project_timeline_task_creation_form'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Update Task</h3>
        </div>
      </div>

      <div id='kt_project_timeline_task_creator_form' className=''>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Deadline</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='time'
                  className='form-control-lg form-control-solid'
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

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Title</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control-lg form-control-solid'
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

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Sub-Title</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control-lg form-control-solid'
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

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Description</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control-lg form-control-solid'
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

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Start Date</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='date'
                  className='form-control-lg form-control-solid'
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

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Completion Date</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='date'
                  className='form-control-lg form-control-solid'
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

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Phase</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control-lg form-control-solid'
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

            {/* <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Creator</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input type='text' className='form-control-lg form-control-solid' placeholder='Task creator' {...formik.getFieldProps('creator')} />
                            </div>
                            {formik.touched.creator && formik.errors.creator && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>{formik.errors.creator}</div>
                                </div>
                            )}
                        </div> */}

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Assignees</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control-lg form-control-solid'
                  placeholder='Task is assigneed to'
                  {...formik.getFieldProps('assignees')}
                />
              </div>
              {formik.touched.assignees && formik.errors.assignees && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.assignees}</div>
                </div>
              )}
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span>Viewers</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control-lg form-control-solid'
                  placeholder='Task viewers'
                  {...formik.getFieldProps('viewers')}
                />
              </div>
              {formik.touched.viewers && formik.errors.viewers && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>{formik.errors.viewers}</div>
                </div>
              )}
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button
              className='btn btn-white btn-active-light-primary me-2'
              onClick={() => {
                onSendingToParent(false)
              }}
            >
              Cancel
            </button>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Save Changes'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {TaskCreatorForm}
