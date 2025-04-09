// React imports
import { Field } from 'formik'
import React from 'react'

const Participant = ({removeParticipant, index, name}: any) => (
  <>
    <div className='card border mb-3'>
      <div className='p-5 bg-gray-200 fw-bolder d-flex align-items-center d-flex justify-content-between'>
        <div>
          <p className='mb-0'>Participant {index + 1}</p>
        </div>
        <button
          className='bg-transparent border-0'
          onClick={removeParticipant}
        >
          <i className='fa fa-trash text-danger'></i>
        </button>
      </div>

      <div className='card-body p-5'>
        <div className='row'>
          <div className='col-lg-4 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> First Name</label>
            <Field className='form-control' type='text' name={`${name}.${index}.firstName`} />
          </div>
          <div className='col-lg-4 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> Last Name</label>
            <Field className='form-control' type='text' name={`${name}.${index}.lastName`} />
          </div>
          <div className='col-lg-4 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> Job Title</label>
            <Field className='form-control' type='text' name={`${name}.${index}.jobTitle`} />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> Email</label>
            <Field className='form-control' type='text' name={`${name}.${index}.email`} />
          </div>
          <div className='col-lg-4 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> Company</label>
            <Field className='form-control' type='text' name={`${name}.${index}.company`} />
          </div>
          <div className='col-lg-4 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> Attendance</label>
            <Field component='select' className='form-control' name={`${name}.${index}.attendance`}>
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

export default Participant
