// React imports
import React from 'react'

const PreviousActionItems = ({removePrevActionItem, index}: any) => (
  <>
    <div className='card border mb-3'>
      <div className='p-5 bg-gray-200 fw-bolder d-flex align-items-center d-flex justify-content-between'>
        <div>
          <p className='mb-0'>Participant {index + 1}</p>
        </div>
        <button
          className='btn btn-sm btn-danger'
          onClick={removePrevActionItem}
        >
          <i className='fa fa-close'></i>
        </button>
      </div>

      <div className='card-body p-5'>
        <div className='row'>
          <div className='col-lg-4 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> Assigne Company</label>
            <input className='form-control' name={`prevActionAssignerCompany${index}`} />
          </div>
          <div className='col-lg-4 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> Full Name</label>
            <input className='form-control' name={`prevActionFullName${index}`} />
          </div>
          <div className='col-lg-4 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> Company</label>
            <input className='form-control' name={`prevActionCompany${index}`} />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> Due Date</label>
            <input className='form-control' type="date" name={`prevActionDueDate${index}`} />
          </div>
          <div className='col-lg-2 col-12 col-md-3 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> Status</label>
            <select id={`prevActionStatus${index}`} className='form-control bg-gray-100' name={`prevActionStatus${index}`}>
              <option value='open'>Open</option>
              <option value='in-progress'>In-progress</option>
              <option value='pending'>Pending</option>
              <option value='completed'>Completed</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className='col-lg-12 mb-3'>
            <label className='text-muted mb-2 required fw-bold'> Action Points</label>
            <textarea rows={6} className='form-control' name={`prevActionActionPoints${index}`} />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default PreviousActionItems
