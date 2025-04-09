import React, { useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { Formik, Field, Form as FormikForm } from 'formik'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../setup/store'
import { addAssigneeRequest } from './AssigneeSlice'
import DropdownWithButton from '../../../helpers/components/dropdown/dropdown'
import { useQuery } from 'react-query'
import { getClientByProjectId } from '../../../../app/modules/auth/core/_requests'

const AssignModal = ({ taskGroupId, taskId, assignees }: any) => {
  const [show, setShow] = useState(false)
  const { loading } = useAppSelector(state => state.assignee)
  const { projectId, eventDateId, phaseId, workspaceId } = useParams()
  const dispatch = useAppDispatch()
  
  // TODO: PageNumber and size shoule be in settings
  const { data, isLoading } = useQuery(['fetch-clients', projectId],
    () => getClientByProjectId(projectId ? projectId : '', 1, 6),
    {
      enabled: !!projectId, // Enable only if params are available
      retry: 0,
    })

  // Modal open/close handlers
  const handleClose = () => setShow(false)

  // Initial values for the form
  const initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    cellPhone: '',
  }

  const handleSubmit = (values: any) => {
    dispatch(addAssigneeRequest({
      projectId,
      eventDateId,
      phaseId,
      workspaceId,
      taskGroupId: taskGroupId,
      taskId,
      values
    }))
    if (!loading) handleClose()
  }

  return (
    <>
      {/* Trigger button */}
      <div id="assigneeModal">
        {/* <i className="fa fa-plus text-primary"></i> */}
        <DropdownWithButton assignees={assignees} data={data} handleClick={handleSubmit} />
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><i className='fa fa-xl fa-plus text-success me-3'></i> Add New Assignee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik initialValues={initialValues} onSubmit={(values) => handleSubmit(values)}>
            {({ handleChange, values }) => (
              <FormikForm>
                <div className="row">
                  <div className="col-lg-6">
                    <Form.Group className='mb-4'>
                      <Form.Label>First Name</Form.Label>
                      <Field
                        name="firstName"
                        className="form-control"
                        value={values.firstName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-lg-6">
                    <Form.Group className='mb-4'>
                      <Form.Label>Middle Name</Form.Label>
                      <Field
                        name="middleName"
                        className="form-control"
                        value={values.middleName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                </div>
                <Form.Group className='mb-4'>
                  <Form.Label>Last Name</Form.Label>
                  <Field
                    name="lastName"
                    className="form-control"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Email</Form.Label>
                  <Field
                    name="email"
                    type="email"
                    className="form-control"
                    value={values.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className='mb-12'>
                  <Form.Label>Cell Phone</Form.Label>
                  <Field
                    name="cellPhone"
                    className="form-control"
                    value={values.cellPhone}
                    onChange={handleChange}
                  />
                </Form.Group>
                <button type="submit" className="btn btn-outline btn-outline-success">
                  Add Assignee <i className='fa fa-arrow-right'></i>
                </button>
              </FormikForm>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AssignModal
