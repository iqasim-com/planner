// React imports
import {Field} from 'formik'
import React from 'react'
import { useAppDispatch } from '../../../../../../../../../../../../../../setup/store'
import { deleteOptionalParticipant, deleteRequiredParticipant } from '../../../../../../../../../../redux/projectBoard/Coordination/MeetingMinutes/meetingMinutesSlice'

const Participant = ({index, name, changeEvent, participantData}: any) => {
  const dispatch = useAppDispatch()
  return (
    <>
      <div className='card border mb-3'>
        <div className='p-5 bg-gray-200 fw-bolder d-flex align-items-center d-flex justify-content-between'>
          <div>
            <p className='mb-0'>Participant {index + 1}</p>
          </div>
          <button className='bg-transparent border-0' onClick={() => {
            if (
              window.confirm(
                `Are you sure you want to delete? This operation can't be undo`
              )
            ) {
              name === 'requiredParticipants' ? dispatch(deleteRequiredParticipant(participantData.id)) : dispatch(deleteOptionalParticipant(participantData.id))
            } else {
              return
            }
          }}>
            <i className='fa fa-trash text-danger'></i>
          </button>
        </div>

        <div className='card-body p-5'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> First Name</label>
              <Field
                className='form-control'
                onChange={(e: any) => changeEvent(`${name}.${index}.firstName`, e.target.value)}
                type='text'
                value={participantData.firstName}
                name={`${name}.${index}.firstName`}
              />
            </div>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Last Name</label>
              <Field
                className='form-control'
                type='text'
                value={participantData.lastName}
                name={`${name}.${index}.lastName`}
                onChange={(e: any) => changeEvent(`${name}.${index}.lastName`, e.target.value)}
              />
            </div>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Job Title</label>
              <Field
                className='form-control'
                type='text'
                value={participantData.jobTitle}
                name={`${name}.${index}.jobTitle`}
                onChange={(e: any) => changeEvent(`${name}.${index}.jobTitle`, e.target.value)}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Email</label>
              <Field
                className='form-control'
                type='email'
                value={participantData.email}
                name={`${name}.${index}.email`}
                onChange={(e: any) => changeEvent(`${name}.${index}.email`, e.target.value)}
              />
            </div>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Company</label>
              <Field
                className='form-control'
                type='text'
                value={participantData.company}
                name={`${name}.${index}.company`}
                onChange={(e: any) => changeEvent(`${name}.${index}.company`, e.target.value)}
              />
            </div>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Attendance</label>
              <Field
                component='select'
                className='form-control'
                value={participantData.attendance}
                onChange={(e: any) => changeEvent(`${name}.${index}.attendance`, e.target.value)}
                name={`${name}.${index}.attendance`}
              >
                <option value='none'>None</option>
                <option value='tentative'>Tentative</option>
                <option value='present'>Present</option>
                <option value='absent'>Absent</option>
                <option value='rejected'>Rejected</option>
              </Field>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Participant
