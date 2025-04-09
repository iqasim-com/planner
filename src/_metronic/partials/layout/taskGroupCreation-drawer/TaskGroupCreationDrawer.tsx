import React from "react"
import { KTSVG } from "../../../helpers"
import { Form, Formik } from "formik"
import { initialTaskGroupCreationState, taskGroupCreationValidation } from "./TaskGroupCreationModel"
import { useAppSelector } from "../../../../setup/store"
import { Modal } from 'react-bootstrap'
import TaskGroupForm from "./form"
import { ConflictDataAlert } from "../../modals/alerts/conflict"

type Props = {
  show: boolean
  handleClose: () => void
  handleSubmit: (values: any) => void
}

const TaskGroupCreationDrawer = ({ show, handleClose, handleSubmit }: Props) => {
  const { loading, error } = useAppSelector(state => state.taskGroup)

  console.log('Error in taskgroup', error)

  return (
    <>
      <Modal
        id='kt_modal_create_task_group'
        tabIndex={-1}
        aria-hidden='true'
        dialogClassName='modal-dialog modal-dialog-centered mw-900px'
        show={show}
      >
        <div className='card rounded-0 w-100 h-100'>
          <div className='card-header' id='kt_activities_header'>
            <h3 className='card-title fw-bolder text-dark'><i className="fa fa-xl fa-plus text-success me-4"></i> Create Task Group</h3>

            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                onClick={handleClose}
              >
                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
              </button>
            </div>
          </div>
          <div className='card-body position-relative' id='kt_activities_body'>
            <div
              id='kt_activities_scroll'
              className='position-relative me-n5 pe-5'
              data-kt-scroll='true'
              data-kt-scroll-height='auto'
              data-kt-scroll-wrappers='#kt_activities_body'
              data-kt-scroll-dependencies='#kt_activities_header, #kt_activities_footer'
              data-kt-scroll-offset='5px'
            >
              <div className='timeline'>
                <Formik
                  initialValues={initialTaskGroupCreationState}
                  validationSchema={taskGroupCreationValidation}
                  onSubmit={(values) => handleSubmit(values)}>
                  {({ values, isValid, setFieldValue }) => {
                    return (<Form>
                      <TaskGroupForm values={values} setFieldValue={setFieldValue} />
                      {error != null && <ConflictDataAlert show={true} message={<><span className="text-danger">{values.name}</span> <span>Already exist!</span></>} />}
                      <div className="row">
                        <div className="col-lg-12">
                          <button
                            type='submit'
                            className='btn btn-info'
                            data-kt-stepper-action='submit'
                            disabled={!isValid}>
                            <>
                              <span className='indicator-label'> <i className="fa fa-plus"></i> Create Task Group {loading && (
                                <span>
                                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                </span>
                              )}</span>
                              <KTSVG
                                path='/media/icons/duotune/arrows/arr064.svg'
                                className='svg-icon-3 ms-2 me-0'
                              />
                            </>
                          </button>
                        </div>
                      </div>
                    </Form>)
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export { TaskGroupCreationDrawer }