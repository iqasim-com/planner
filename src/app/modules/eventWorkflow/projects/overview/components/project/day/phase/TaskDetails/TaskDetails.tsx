import { Field, Form, Formik } from "formik"
import React, { useState } from "react"
import { setStatus, toAbsoluteUrl } from "../../../../../../../../../../_metronic/helpers"
import { CommentsBox } from "../../../../../../../../../../_metronic/partials/widgets/comments/comments"
import { getTaskById } from "../../../../../../../../auth/core/_requests"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../../../../../../../../../setup/store"
import moment from "moment"

const TaskDetails = () => {
  const { projectId, eventDateId, phaseId, workspaceId, taskGroupId, taskId } = useParams()
  const { firstName, lastName }: any = useAppSelector(state => state.auth.currentUser)
  const [showOptions, setShowOptions] = useState(false)

  const handleSwitchToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      setShowOptions(false)
    } else {
      setShowOptions(true)
    }
  }

  const { data, isLoading, error, isError } = useQuery(
    ['get-task-details', projectId, eventDateId, phaseId, workspaceId, taskGroupId, taskId],
    () =>
      getTaskById({
        projectId,
        eventDateId,
        phaseId,
        workspaceId,
        taskGroupId,
        taskId
      }),
    {
      enabled: !!projectId && !!eventDateId && !!phaseId && !!workspaceId && !!taskGroupId && !!taskId, // Enable only if params are available
      retry: 0,
    }
  )

  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {isError && <p>Error fetching tasks</p>}
      <h1 className="mb-8 text-primary">{data?.data.task.name}</h1>
      <Formik initialValues={{ taskDescription: '' }} onSubmit={(values) => console.log(values)}>
        {({ setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="card mb-8">
                  <div className="card-header">
                    <p className="mb-0 card-title">Description</p>
                  </div>
                  <div className="card-body">
                    <textarea readOnly name="taskDescription" rows={6} value={data?.data.task.description} placeholder="Task Description" className="form-control mb-4" />
                    {/* <div className="mb-12">
                      <button className="btn btn-success">
                        Save
                      </button>
                    </div> */}
                  </div>
                </div>

                <div className="d-flex mb-5 justify-content-between align-items-center">
                  <p className="m-0"><i className="fa text-success fa-check-circle" aria-hidden="true"></i> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestiae?</p>
                  <div className="form-check form-switch d-inline-block me-2">
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      id="showOptionsSwitch"
                      checked={showOptions}
                      onChange={handleSwitchToggle}
                    />
                  </div>
                </div>
                {showOptions && <div className="mb-8 ms-4">
                  <div role="group" aria-labelledby="multi-choice-group">
                    <div className="form-check mb-4">
                      <Field type="radio" name="multiChoice" value="option1" className="form-check-input" id="option1" />
                      <label className="form-check-label" htmlFor="option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4">
                      <Field type="radio" name="multiChoice" value="option2" className="form-check-input" id="option2" />
                      <label className="form-check-label" htmlFor="option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4">
                      <Field type="radio" name="multiChoice" value="option3" className="form-check-input" id="option3" />
                      <label className="form-check-label" htmlFor="option3">Option 3</label>
                    </div>
                  </div>
                </div>}
                <hr />

                <div>
                  <h4 className="mb-4">Uploads</h4>
                  <div className="bg-light p-6 mb-12 rounded d-flex align-items-center">
                    <img src={toAbsoluteUrl("/media/svg/files/blank-image-dark.svg")} width="150" alt="File Upload" className="me-4" />
                    <div className="position-relative h-150px w-150px bg-gray-300i d-flex justify-content-center align-items-center">
                      <img src={toAbsoluteUrl("/media/svg/files/upload.svg")} width="100" alt="File Upload" />
                      <input type="file" className="position-absolute h-100 w-100 opacity-0 cursor-pointer" style={{ left: 0 }} />
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h4 className="mb-4">Coordination Items</h4>
                  <div className='accordion mb-4' id='kt_accordion_1'>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='kt_accordion_1_header_1'>
                        <button
                          className='accordion-button fs-4 fw-bold collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#kt_accordion_1_body_1'
                          aria-expanded='false'
                          aria-controls='kt_accordion_1_body_1'
                        >
                          Item #1
                        </button>
                      </h2>
                      <div
                        id='kt_accordion_1_body_1'
                        className='accordion-collapse collapse'
                        aria-labelledby='kt_accordion_1_header_1'
                        data-bs-parent='#kt_accordion_1'
                      >
                        <div className='accordion-body'>
                          <strong>This is the first item's accordion body.</strong>It is hidden by
                          default, until the collapse plugin adds the appropriate classes that we use to
                          style each element. These classes control the overall appearance, as well as the
                          showing and hiding via CSS transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also worth noting that just about
                          any HTML can go within the
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='kt_accordion_1_header_2'>
                        <button
                          className='accordion-button fs-4 fw-bold collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#kt_accordion_1_body_2'
                          aria-expanded='false'
                          aria-controls='kt_accordion_1_body_2'
                        >
                          Item #2
                        </button>
                      </h2>
                      <div
                        id='kt_accordion_1_body_2'
                        className='accordion-collapse collapse'
                        aria-labelledby='kt_accordion_1_header_2'
                        data-bs-parent='#kt_accordion_1'
                      >
                        <div className='accordion-body'>
                          <strong>This is the second item's accordion body.</strong>It is hidden by
                          default, until the collapse plugin adds the appropriate classes that we use to
                          style each element. These classes control the overall appearance, as well as the
                          showing and hiding via CSS transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also worth noting that just about
                          any HTML can go within the
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='kt_accordion_1_header_3'>
                        <button
                          className='accordion-button fs-4 fw-bold collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#kt_accordion_1_body_3'
                          aria-expanded='false'
                          aria-controls='kt_accordion_1_body_3'
                        >
                          Item #3
                        </button>
                      </h2>
                      <div
                        id='kt_accordion_1_body_3'
                        className='accordion-collapse collapse'
                        aria-labelledby='kt_accordion_1_header_3'
                        data-bs-parent='#kt_accordion_1'
                      >
                        <div className='accordion-body'>
                          <strong>This is the third item's accordion body.</strong>It is hidden by
                          default, until the collapse plugin adds the appropriate classes that we use to
                          style each element. These classes control the overall appearance, as well as the
                          showing and hiding via CSS transitions. You can modify any of this with custom
                          CSS or overriding our default variables. It's also worth noting that just about
                          any HTML can go within the
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <Field name='coordinationItems' type='text' placeholder="Add Item" className='form-control' />
                    <button className="btn btn-sm ms-3 btn-info">
                      <span className="fa fa-plus"></span>
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4">Comments</h4>
                  <CommentsBox className='mb-5 mb-xl-8' />
                </div>
              </div>
              <div className="col-lg-4 mb-4 border border-top-0 border-right-0 border-bottom-0 p-3">
                <div className="mb-4">
                  <label className="form-label" htmlFor="labels">Assignees</label>
                  {/* <Field placeholder="Assignees" name="assignees" className="form-control" /> */}
                  <div>
                    <div className="symbol-group symbol-hover">
                      {data?.data.task.assignees.length > 0 ? data?.data.task.assignees.map((assignee: any) => (
                        <div className="symbol symbol-circle symbol-30px">
                          <img src={toAbsoluteUrl("/media/avatars/300-6.jpg")} alt={assignee.name} title={assignee.title} />
                        </div>
                      )) : (
                        <>
                          <div className="d-flex justify-content-between w-100 align-items-center">
                            <p className="m-0 text-danger">Not assigned</p>
                            <i className="fa fa-plus text-primary"></i>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="mb-4">
                  <label className="form-label" htmlFor="labels">Viewers</label>
                  {/* <Field placeholder="Assignees" name="assignees" className="form-control" /> */}
                  <div>
                    <div className="symbol-group symbol-hover">
                      {data?.data.task.viewers.length > 0 ? data?.data.task.viewers.map((assignee: any) => (
                        <div className="symbol symbol-circle symbol-30px">
                          <img src={toAbsoluteUrl("/media/avatars/300-6.jpg")} alt={assignee.name} title={assignee.title} />
                        </div>
                      )) : (
                        <>
                          <div className="d-flex justify-content-between w-100 align-items-center">
                            <p className="m-0 text-danger">No viewers</p>
                            <i className="fa fa-plus text-primary"></i>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="mb-4">
                  <label className="form-label" htmlFor="labels">Creator</label>
                  {/* <Field placeholder="Assignees" name="assignees" className="form-control" /> */}
                  <div>
                    <div className="symbol-group symbol-hover">
                      {firstName && <div className="symbol symbol-circle symbol-30px">
                        <img src={toAbsoluteUrl("/media/avatars/300-3.jpg")} alt={'Profile picture'} title={`${firstName} ${lastName}`} />
                      </div>}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="mb-4">
                  <label className="form-label text-danger" htmlFor="labels">Deadline</label>
                  <Field placeholder="Deadline" type="date" value={moment(data?.data.task.deadline).format('YYYY-MM-DD')} className="form-control" name="labels" id="labels" />
                </div>
                <hr />
                <div className="mb-4">
                  <label className="form-label" htmlFor="labels">Priority</label>
                  <Field placeholder="Deadline" type="text" value={data?.data.task.priority.name} className={`form-control text-${setStatus(data?.data.task.priority.name)}`} name="labels" id="labels" />
                </div>
                <hr />
                <div className="mb-4">
                  <label className="form-label" htmlFor="labels">Status</label>
                  <Field placeholder="Deadline" type="text" value={data?.data.task.status.name} className={`form-control text-${setStatus(data?.data.task.status.name)}`} name="labels" id="labels" />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default TaskDetails
