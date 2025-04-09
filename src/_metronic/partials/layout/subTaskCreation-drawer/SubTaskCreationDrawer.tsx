import React, { FC, useState } from "react"
import { KTSVG } from "../../../helpers"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { createNewTaskInTaskGroup } from "../../../../app/modules/auth/core/_requests"
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../../../setup/store";
import { addNewTaskRequest, closeModal, fetchTasksRequest } from "../../../../app/modules/eventWorkflow/projects/overview/components/project/day/phase/PhaseKanban/taskSlice";
import ProjectInnerModal from "../../../../app/modules/eventWorkflow/projects/overview/components/project/components/modals/create-project-stepper/steps/components/modal";
import { Modal } from "react-bootstrap";

// Validation schema
const TaskSchema = Yup.object().shape({
  name: Yup.string().required("Task name is required"),
  description: Yup.string().required("Task description is required"),
  priority: Yup.object().shape({
    value: Yup.number().required("Priority is required"),
  }),
  status: Yup.object().shape({
    value: Yup.number().required("Status is required"),
  }),
  deadline: Yup.date().required("Deadline is required"),
  selectionOptionEnabled: Yup.boolean(),
  selectionOption: Yup.object().shape({
    allowedConcurrentSelections: Yup.boolean().when('selectionOptionEnabled', {
      is: true,
      then: Yup.boolean().required("Allowed concurrent selections is required")
    }),
    totalConcurrentSelections: Yup.number().when('selectionOptionEnabled', {
      is: true,
      then: Yup.number().min(0, "Must be greater than or equal to 0").required("Total concurrent selections is required"),
    })
  }),
});

const SubTaskCreationDrawer = ({ taskGroupId }: any) => {
  const { projectId, eventDateId, phaseId, workspaceId } = useParams()
  const [showOptions, setShowOptions] = useState(false)
  const dispatch = useAppDispatch()
  const { isOpen, isLoading } = useAppSelector((state) => state.tasks)

  const handleSwitchToggle = () => {
    setShowOptions(!showOptions);
  };

  const initialValues = {
    name: "",
    description: "",
    selectionOptionEnabled: false,
    selectionOption: {
      selectionOptionsId: null,
      allowedConcurrentSelections: false,
      totalConcurrentSelections: 0,
      selectionOptionEnabled: false,
      options: [],
    },
    priority: { name: "", value: 0 },
    status: { name: "", value: 0 },
    deadline: "",
    assignees: [],
    viewers: [],
  }

  const priorityOptions = [
    { name: "Low", value: 1 },
    { name: "Medium", value: 2 },
    { name: "Critical", value: 3 },
  ];

  const statusOptions = [
    { name: "Pending", value: 1 },
    { name: "In Progress", value: 2 },
    { name: "Completed", value: 3 },
  ]

  return (
    <>
      <Modal
        id='kt_modal_create_task_group'
        tabIndex={-1}
        aria-hidden='true'
        dialogClassName='modal-dialog modal-dialog-centered mw-900px'
        show={isOpen}
      >
        <div className='card rounded-0 w-100 h-100'>
          <div className='card-header' id='kt_activities_header'>
            <h3 className='card-title fw-bolder text-dark'><i className="fa fa-plus fa-xl text-success me-4"></i> Create New Task</h3>

            <div className='card-toolbar'>
              <button
                type='button'
                onClick={() => dispatch(closeModal())}
                className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                id='ewf_subtaskmodal_close'
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
                <div className="row mb-8">
                  <div className="col-lg-8">
                    <p className="mb-0 text-muted">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum esse temporibus dolorum ullam explicabo ratione.
                    </p>
                  </div>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={TaskSchema}
                  onSubmit={(values, { resetForm }) => {
                    try {
                      dispatch(addNewTaskRequest({
                        projectId, eventDateId, phaseId, workspaceId, taskGroupId: taskGroupId.taskGroupId, values
                      }))
                      resetForm()
                    } catch (error) {
                      alert("Error creating task")
                    }
                  }}
                >
                  {({ values, setFieldValue, isValid, isSubmitting }) => {
                    return (
                      (
                        <Form>
                          <div className="mb-4">
                            <label className="mb-2">Task Name</label>
                            <Field name="name" className="form-control mb-2" type="text" />
                            <ErrorMessage name='name'>
                              {(msg) => <div className='text-danger'>{msg}</div>}
                            </ErrorMessage>
                          </div>

                          <div className="mb-4">
                            <label className="mb-2">Description</label>
                            <Field className="form-control" name="description" as="textarea" />
                            <ErrorMessage name='description'>
                              {(msg) => <div className='text-danger'>{msg}</div>}
                            </ErrorMessage>
                          </div>

                          <div className="row">
                            <div className="col-lg-6 col-md-12">
                              <label className="mb-2">Priority</label>
                              <Field className="form-control mb-4" as="select" name="priority.value">
                                <option value="none">Select priority</option>
                                {priorityOptions.map((option) => (
                                  <option key={option.value} value={option.value}>
                                    {option.name}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage name='priority.value'>
                                {(msg) => <div className='text-danger'>{msg}</div>}
                              </ErrorMessage>
                            </div>

                            <div className="col-lg-6 col-md-12">
                              <label className="mb-2">Status</label>
                              <Field className="form-control mb-4" as="select" name="status.value">
                                <option value="none">Select status</option>
                                {statusOptions.map((option) => (
                                  <option key={option.value} value={option.value}>
                                    {option.name}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage name='status.value'>
                                {(msg) => <div className='text-danger'>{msg}</div>}
                              </ErrorMessage>
                            </div>
                          </div>

                          <div className="row">
                            <div className="mb-8 col-lg-6 col-md-12">
                              <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                <span className="text-danger">Deadline</span>
                                <i
                                  className='fas fa-exclamation-circle ms-2 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Deadline'
                                ></i>
                              </label>

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

                          {/* <div className="row mb-6">
                            <div className="col-lg-6">
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <label htmlFor="showOptionsSwitch">Enable Selection Options?</label>
                                <div className="form-check form-switch d-inline-block me-2">
                                  <Field
                                    type="checkbox"
                                    className="form-check-input"
                                    id="showOptionsSwitch"
                                    checked={showOptions}
                                    onChange={() => {
                                      handleSwitchToggle();
                                      setFieldValue("selectionOptionEnabled", !showOptions);
                                    }}
                                  />
                                </div>
                              </div>
                              {showOptions && (
                                <div className="ms-4">
                                  <div className="mb-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <label className="mb-2">Allowed Concurrent Selections</label>
                                      <div className="form-check form-switch d-inline-block me-2">
                                        <Field name="selectionOption.allowedConcurrentSelections" type="checkbox" className="form-check-input" />
                                      </div>
                                    </div>
                                    <ErrorMessage name="selectionOption.allowedConcurrentSelections" component="div" />
                                  </div>

                                  <div>
                                    <label>Total Concurrent Selections</label>
                                    <Field min={0} className="form-control" name="selectionOption.totalConcurrentSelections" type="number" />
                                    <ErrorMessage name="selectionOption.totalConcurrentSelections" component="div" />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div> */}
                          <hr className="mb-8" />
                          <div>
                            <button
                              type='submit'
                              className='btn btn-outline btn-outline-success'
                              data-kt-stepper-action='submit'
                              disabled={!isValid || isSubmitting}
                            >
                              {!isLoading && (
                                <>
                                  <span className='indicator-label'> <i className="fa fa-plus"></i> Create Task</span>{' '}
                                  <KTSVG
                                    path='/media/icons/duotune/arrows/arr064.svg'
                                    className='svg-icon-3 ms-2 me-0'
                                  />
                                </>
                              )}
                              {isLoading && (
                                <span>
                                  Please wait...{' '}
                                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                </span>
                              )}
                            </button>
                          </div>
                        </Form>
                      )
                    )
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

export { SubTaskCreationDrawer }