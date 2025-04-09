/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export function TaskDropdownMenu() {
  return (
    <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'>
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>Options</div>
      </div>
      <div>
        <div className='p-3 bg-hover-light-primary'>
          <i className="fa-solid fa-up-right-from-square me-4"></i> Open in new Tab
        </div>
        <div className="separator"></div>
        <div className='p-3 bg-hover-light-primary'>
          <i className="fa-regular fa-copy me-4"></i> Copy link
        </div>
        <div className="separator"></div>
        <div className='p-3 bg-hover-light-danger text-danger'>
          <i className="fa-solid fa-trash me-4 text-danger"></i> Delete from workspace
        </div>
      </div>

    </div>
  )
}
