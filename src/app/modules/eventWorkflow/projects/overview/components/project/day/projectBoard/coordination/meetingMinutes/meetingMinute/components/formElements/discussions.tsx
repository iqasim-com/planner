// React imports
import {Field} from 'formik'
import React from 'react'
import { useAppDispatch } from '../../../../../../../../../../../../../../setup/store'
import { addDiscussionItems } from '../../../../../../../../../../redux/projectBoard/Coordination/MeetingMinutes/meetingMinutesSlice'

const Discussions = ({removeDiscussion, index, data}: any) => {
  const dispatch = useAppDispatch()

  return (
    <>
    <div className='card border mb-3'>
      <div className='p-5 bg-gray-200 fw-bolder d-flex align-items-center d-flex justify-content-between'>
        <div>
          <p className='mb-0'>Item No {index + 1}</p>
        </div>
        <button className='btn btn-sm btn-danger' onClick={removeDiscussion}>
          <i className='fa fa-close'></i>
        </button>
      </div>

      <div className='card-body p-5'>
        <div className='container-fluid p-0'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Company</label>
              <input
                className='form-control'
                type='text'
                onChange={(e) => dispatch(addDiscussionItems({
                  id: data.id,
                  value: e.target.value,
                  key: 'company'
                }))}
                value={data.company}
                id={`discussion.${index}.company`}
                name={`discussion.${index}.company`}
              />
            </div>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Due Date</label>
              <input
                className='form-control'
                type='date'
                onChange={(e) => dispatch(addDiscussionItems({
                  id: data.id,
                  value: e.target.value,
                  key: 'dueDate'
                }))}
                value={data.dueDate}
                id={`discussion.${index}.dueDate`}
                name={`discussion.${index}.dueDate`}
              />
            </div>
            <div className='col-lg-2 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Status</label>
              <Field
                id={`discussion.${index}.status`}
                component='select'
                className='form-control bg-gray-100'
                name={`discussion.${index}.status`}
                onChange={(e: any) => dispatch(addDiscussionItems({
                  id: data.id,
                  value: e.target.value,
                  key: 'status'
                }))}
                value={data.status}
              >
                <option value='open'>Open</option>
                <option value='in-progress'>In-progress</option>
                <option value='pending'>Pending</option>
                <option value='completed'>Completed</option>
              </Field>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-lg-6 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Agenda Item</label>
              <textarea
                rows={6}
                className='form-control'
                onChange={(e) => dispatch(addDiscussionItems({
                  id: data.id,
                  value: e.target.value,
                  key: 'agendaItem'
                }))}
                value={data.agendaItem}
                id={`discussion.${index}.agendaItem`}
                name={`discussion.${index}.agendaItem`}
              />
            </div>
            <div className='col-lg-6 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Notes</label>
              <textarea
                rows={6}
                className='form-control'
                onChange={(e) => dispatch(addDiscussionItems({
                  id: data.id,
                  value: e.target.value,
                  key: 'notes'
                }))}
                value={data.notes}
                id={`discussion.${index}.notes`}
                name={`discussion.${index}.notes`}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='fw-bold text-muted mb-8'>Action Items</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Next step</label>
              <Field
                className='form-control'
                type='text'
                onChange={(e: any) => dispatch(addDiscussionItems({
                  id: data.id,
                  value: e.target.value,
                  key: 'actionItem'
                }))}
                value={data.actionItem}
                id={`discussion.${index}.actionItem`}
                name={`discussion.${index}.actionItem`}
              />
            </div>
            <div className='col-lg-6 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Assignee Company</label>
              <Field
                className='form-control'
                type='text'
                onChange={(e: any) => dispatch(addDiscussionItems({
                  id: data.id,
                  value: e.target.value,
                  key: 'assigneeCompany'
                }))}
                value={data.assigneeCompany}
                id={`discussion.${index}.assigneeCompany`}
                name={`discussion.${index}.assigneeCompany`}
              />
            </div>

            <div className='col-lg-6 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Assignees</label>
              <Field
                className='form-control'
                type='text'
                onChange={(e: any) => dispatch(addDiscussionItems({
                  id: data.id,
                  value: e.target.value,
                  key: 'assignee'
                }))}
                value={data.assignee}
                id={`discussion.${index}.assignee`}
                name={`discussion.${index}.assignee`}
              />
            </div>

            <div className='col-lg-6 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Deadline</label>
              <Field
                className='form-control'
                type='date'
                onChange={(e: any) => dispatch(addDiscussionItems({
                  id: data.id,
                  value: e.target.value,
                  key: 'deadline'
                }))}
                value={data.deadline}
                id={`discussion.${index}.deadline`}
                name={`discussion.${index}.deadline`}
              />
            </div>

            <div className='col-lg-12 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Description</label>
              <textarea
                rows={6}
                className='form-control'
                onChange={(e: any) => dispatch(addDiscussionItems({
                  id: data.id,
                  value: e.target.value,
                  key: 'description'
                }))}
                value={data.description}
                id={`discussion.${index}.description`}
                name={`discussion.${index}.description`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Discussions
