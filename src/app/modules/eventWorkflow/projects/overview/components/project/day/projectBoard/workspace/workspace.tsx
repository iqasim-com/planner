import React, { useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { useAppDispatch } from "../../../../../../../../../../setup/store"
import { KTSVG, setStatus, toAbsoluteUrl } from "../../../../../../../../../../_metronic/helpers"
import { addWorkspace } from "./WorkspaceSlice"
import { PROJECTS } from "../../../../../../../../auth/core/_requests"
import moment from "moment"
import Status from "../../../../../../../../../../_metronic/helpers/components/status/status"
import ProjectInnerModal from "../../../components/modals/create-project-stepper/steps/components/modal"
import { Form, Formik } from "formik"
import { WorkspaceCreationForm } from "./form"
import { api } from "../../../../../../../../../../setup/axios/api"
import { initialValues, validationSchema } from "./WorkspaceCreationModel"
import { useQuery } from "react-query"

const WorkSpace = () => {
  const { state }: any = useLocation()
  const dispatch = useAppDispatch()
  const [showCreateProjectModal, setShowCreateProjectModal] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const {projectId, eventDateId, phaseId} = useParams()

  const fetchWorkspaces = () => {
    return api.get(`${PROJECTS}/${projectId}/event-dates/${eventDateId}/phases/${phaseId}/workspaces`)
  }

  const {data, isLoading, error, isError, refetch} = useQuery('fetch-workspaces', fetchWorkspaces)

  const workspaceCreation = (values: any) => {
    setLoading(true)
    const formValues = {
      name: values.name,
      description: values.description,
      priority: values.priority,
      status: values.status,
      startedAt: moment(values.deadline).format("YYYY-MM-DDTHH:mm:ss.SSSSSS"),
      deadline: values.deadline
    }
    try {
      api.post(`${PROJECTS}/${projectId}/event-dates/${eventDateId}/phases/${phaseId}/workspaces`, { workspace: formValues })
        .then(res => {
          dispatch(addWorkspace(res.data.workspace))
          setLoading(false)
          setShowCreateProjectModal(false)
          refetch()
        }).catch((err) => console.error('Error hai', err))
    } catch (error) {
      console.error('Something went worng')
    }
  }

  return (
    <div>
      <div className="d-flex align-items-center mb-8">
        <button className="btn btn-sm btn-light-success me-3" id='ewf_TaskGroup_modal_toggle' onClick={() => setShowCreateProjectModal(true)}>
          <i className='fa fa-plus'></i> Create Workspace
        </button>
        {/* <button className="btn btn-sm btn-outline btn-outline-primary"><i className="fa fa-refresh"></i></button> */}
      </div>
      <div className="container-fluid p-0">
        <div className="row">
          {data?.data?.workspaces?.length > 0 ? data?.data?.workspaces?.map((space: any) => (
            <div className="col-lg-4 col-md-6 mb-7" key={space.workspaceId}>
              <div className={`card border border-2 ${space.priority.name === 'Critical' ? 'border-danger bg-hover-light-danger' : 'border-gray-300 bg-hover-light-secondary'}`}>
                <Link to={`${space.workspaceId}/task-groups`}>
                  <div className="card-header d-flex justify-content-between align-items-center p-3">
                    <div>
                      <h3>{space.name}</h3>
                      <p className="m-0 text-muted">{space.description}</p>
                    </div>
                    <div>
                      {/* <p className="badge badge-info m-0 text-dark"><i className="text-success fa fa-calendar-check me-2"></i>{space.status.name}</p> */}
                      <Status status={space.status.name} />
                    </div>
                  </div>
                  <div className='card-body p-4'>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                      {/* <div>
                        <i className='fa fa-6x text-success fa-tasks'></i>
                      </div> */}
                      <div className='w-75'>
                        <div className="d-flex text-muted justify-content-between mb-3 align-items-center border border-bottom-dotted border-0 border-bottom-1 py-2">
                          <p className="m-0"><i className='fa fa-clock text-primary'></i> Created At</p>
                          <p className="m-0">{moment(space.createdAt).format('YYYY-MM-DD')}</p>
                        </div>
                        <div className="d-flex text-danger justify-content-between mb-3 align-items-center border border-bottom-dotted border-0 border-bottom-1 py-2">
                          <p className="m-0"><i className='fa fa-clock text-danger'></i> Deadline</p>
                          <p className="m-0">{space.deadline === null ? 'Not Defined' : moment(space.deadline).format('DD-MM-YYYY')}</p>
                        </div>
                        <div className="d-flex text-muted justify-content-between mb-3 align-items-center border border-bottom-dotted border-0 border-bottom-1 py-2">
                          <p className="m-0">Completed At</p>
                          <p className="m-0">{space.completedAt === null ? 'Not Defined' : space.completedAt}</p>
                        </div>
                        <div className="d-flex text-muted justify-content-between mb-3 align-items-center border border-bottom-dotted border-0 border-bottom-1 py-2">
                          <p className="m-0">Priority</p>
                          <p className={`m-0 badge badge-${setStatus(space.priority.name)} fw-bold`}>{space.priority.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="me-3 badge badge-info">Assignees: {space.assignees.length}</span>
                    <span className="me-3 badge badge-info">Comments: {space.comments.length}</span>
                    <span className="me-3 badge badge-info">Task Groups: {space.taskGroups.length}</span>
                  </div>
                </Link>
              </div>
            </div>
          )) : <>
            <div className='col-lg-12 text-center'>
              <img
                src={toAbsoluteUrl('/media/illustrations/sketchy-1/17.png')}
                alt='New project placeholder vector'
                className='mw-400px mb-8'
              />
              <h1 className='display-3 text-muted'>{isLoading ? 'Loading...' : 'No Workspaces found!'}</h1>
            </div>
          </>}
        </div>
      </div>

      <ProjectInnerModal show={showCreateProjectModal}>
        <div className='shadow border border-1'>
          <div className='modal-header'>
            <h2><i className="fa fa-plus fa-xl text-success me-4"></i> Create New Workspace</h2>
            {/* begin::Close */}
            <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={() => setShowCreateProjectModal(false)}>
              <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
            </div>
            {/* end::Close */}
          </div>
          <div className="modal-body">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => workspaceCreation(values)}
            >
              {({ isValid, isSubmitting, values, setFieldValue }) => {
                return (
                  (
                    <Form>
                      <WorkspaceCreationForm
                        values={values} setFieldValue={setFieldValue} />
                      <button
                        type='submit'
                        className='btn btn-outline btn-outline-success'
                        data-kt-stepper-action='submit'
                        disabled={!isValid || isSubmitting}
                      >
                        {!isSubmitting && (
                          <>
                            <span className='indicator-label'> <i className="fa fa-plus"></i> Create Workspace</span>{' '}
                            <KTSVG
                              path='/media/icons/duotune/arrows/arr064.svg'
                              className='svg-icon-3 ms-2 me-0'
                            />
                          </>
                        )}
                        {loading && (
                          <span>
                            Please wait...{' '}
                            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                          </span>
                        )}
                      </button>
                    </Form>
                  )
                )
              }}
            </Formik>
          </div>
        </div>
      </ProjectInnerModal>
    </div>
  )
}

export default WorkSpace
