import React, {FC, useState} from 'react'
import {ProjectTimeCard} from './components/cards/ProjectTimeCard'
import {TimeCard} from './components/cards/TimeCard'

const Timesheets: FC = () => {
  const categories = ['Current', 'Submitted', 'Rejected']

  const [categorySelectOption, setCategorySelectOption] = useState(categories[0])

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Timeline
          <span className='fs-6 text-gray-400 fw-bold ms-1'> {categorySelectOption}</span>
        </h3>

        <div className='d-flex flex-wrap my-2'>
          <div className='me-4'>
            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-sm form-select-white w-125px'
              defaultValue='Active'
              value={categorySelectOption}
              onChange={(e) => setCategorySelectOption(e.target.value)}
            >
              {categories.map((obj) => (
                <option key={obj} value={obj}>
                  {obj}
                </option>
              ))}
            </select>
          </div>
          <a
            href='#'
            className='btn btn-primary btn-sm'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_project'
          >
            New Timesheet
          </a>
        </div>
      </div>

      {/* <ProjectTimeCard className='mb-5 mb-xl-8' /> */}
      <TimeCard className='mb-5 mb-xl-8' />
    </>
  )
}

export {Timesheets}
