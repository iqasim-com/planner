/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react'
import { CreateProject } from '../../../../../../../projects/overview/components/project/components/modals/CreateProject'
import { ToProjectCard } from '../../../../../../../projects/overview/components/project/components/cards/ToProjectCard'
import { IconUserModel } from '../../../../../../../projects/overview/components/project/ProjectsModels'

const Projects: FC = () => {
  const categories = ['Active', 'In Progress', 'To Do', 'Completed', 'Templates']

  const [categorySelectOption, setCategorySelectOption] = useState(categories[0])

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          My Projects
          <span className='fs-6 text-gray-400 fw-bold ms-1'>{categorySelectOption}</span>
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
          {/* <a
            href='#'
            className='btn btn-primary btn-sm'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_project'
            onClick={toggleCreateAssociateModal}
          >
            New Project
          </a> */}
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-4'>
          {/* <ToProjectCard
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Fitnes App'
            description='CRM App application to HR efficiency'
            date='November 10, 2021'
            progress={50}
            users={users1}
          /> */}
        </div>

        <div className='col-md-6 col-xl-4'>
          {/* <ToProjectCard
            icon='/media/svg/brand-logos/disqus.svg'
            badgeColor='info'
            status='Pending'
            statusColor='info'
            title='Leaf CRM'
            description='CRM App application to HR efficiency'
            date='May 10, 2021'
            progress={30}
            users={users2}
          /> */}
        </div>

        <div className='col-md-6 col-xl-4'>
          {/* <ToProjectCard
            icon='/media/svg/brand-logos/figma-1.svg'
            badgeColor='success'
            status='Completed'
            statusColor='success'
            title='Atica Banking'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            progress={100}
            users={users3}
          /> */}
        </div>

        <div className='col-md-6 col-xl-4'>
          {/* <ToProjectCard
            icon='/media/svg/brand-logos/sentry-3.svg'
            badgeColor='info'
            status='Pending'
            statusColor='info'
            title='Finance Dispatch'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            progress={60}
            users={users4}
          /> */}
        </div>

        <div className='col-md-6 col-xl-4'>
          {/* <ToProjectCard
            icon='/media/svg/brand-logos/xing-icon.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='9 Degree'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            progress={40}
            users={users5}
          /> */}
        </div>
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export { Projects }

const users1: Array<IconUserModel> = [
  { name: 'Emma Smith', avatar: '/media/avatars/300-1.jpg' },
  { name: 'Rudy Stone', avatar: '/media/avatars/300-2.jpg' },
  { name: 'Susan Redwood', initials: 'S', color: 'primary' },
]

const users2 = [
  { name: 'Alan Warden', initials: 'A', color: 'warning' },
  { name: 'Brian Cox', avatar: '/media/avatars/300-4.jpg' },
]

const users3 = [
  { name: 'Mad Masy', avatar: '/media/avatars/300-1.jpg' },
  { name: 'Cris Willson', avatar: '/media/avatars/300-2.jpg' },
  { name: 'Mike Garcie', initials: 'M', color: 'info' },
]

const users4 = [
  { name: 'Nich Warden', initials: 'N', color: 'warning' },
  { name: 'Rob Otto', initials: 'R', color: 'success' },
]

const users5 = [
  { name: 'Francis Mitcham', avatar: '/media/avatars/300-5.jpg' },
  { name: 'Michelle Swanston', avatar: '/media/avatars/300-13.jpg' },
  { name: 'Susan Redwood', initials: 'S', color: 'primary' },
]

const users6 = [
  { name: 'Emma Smith', avatar: '/media/avatars/300-1.jpg' },
  { name: 'Rudy Stone', avatar: '/media/avatars/300-2.jpg' },
  { name: 'Susan Redwood', initials: 'S', color: 'primary' },
]

const users7 = [
  { name: 'Meloday Macy', avatar: '/media/avatars/300-3.jpg' },
  { name: 'Rabbin Watterman', initials: 'S', color: 'success' },
]

const users8 = [
  { name: 'Emma Smith', avatar: '/media/avatars/300-1.jpg' },
  { name: 'Rudy Stone', avatar: '/media/avatars/300-2.jpg' },
  { name: 'Susan Redwood', initials: 'S', color: 'primary' },
]

const users9 = [
  { name: 'Meloday Macy', avatar: '/media/avatars/300-3.jpg' },
  { name: 'Rabbin Watterman', initials: 'S', color: 'danger' },
]
