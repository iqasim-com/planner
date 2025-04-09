/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { selectProjectById } from '../../../../app/modules/eventWorkflow/projects/redux/Selectors/GlobalSelectors'
import { useSelector } from 'react-redux'

export function OverviewDropdown({ data }: any) {
  // const currentSelectedProject = useSelector(selectProjectById(data.authorUid))
  return (
    <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px border border-1'>
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>Project Overview</div>
      </div>

      <div className='separator border-gray-200'></div>

      <div className='px-7 py-5'>
        <div className='mb-4'>
          <label className='form-label fw-bold'>Clients:</label>
          <div className='d-flex flex-wrap'>
            {/* {currentSelectedProject?.clients.map((client) => (
              <label className='form-check form-check-sm form-check-custom form-check-solid badge badge-info mb-2 me-2'>
                <span className='form-check-label'>{client.firstName} {client.lastName}</span>
              </label>
            ))} */}
          </div>
        </div>
        <div className="separator mb-4"></div>
        {/* <div className='mb-4'>
          <label className='form-label fw-bold'>Internal Collaborators:</label>
          <div className='d-flex flex-wrap'>
            <label className='form-check form-check-sm form-check-custom form-check-solid badge badge-info mb-2 me-2'>
              <span className='form-check-label'>{currentSelectedProject?.planningPartner.length}</span>
            </label>
          </div>
        </div> */}
        <div className="separator mb-4"></div>
        <div className='mb-4'>
          <label className='form-label fw-bold'>Category</label>
          <div className='d-flex flex-wrap'>
            <label className='form-check form-check-sm form-check-custom form-check-solid badge badge-info mb-2 me-2'>
              {/* <span className='form-check-label'>{currentSelectedProject?.category}</span> */}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
