/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import clsx from 'clsx'
import {ToSiteVisit} from './cards/ToSiteVisit'
import {IconUserModel} from './ProfileModels'

type Props = {
  className: string
}

const SiteVisits: FC = () => {
  return (
    <>
      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-4'>
          <ToSiteVisit
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Fitnes App'
            description='CRM App application to HR efficiency'
            date='November 10, 2021'
            budget='$284,900.00'
            progress={50}
            users={users1}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <ToSiteVisit
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Fitnes App'
            description='CRM App application to HR efficiency'
            date='November 10, 2021'
            budget='$284,900.00'
            progress={50}
            users={users2}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <ToSiteVisit
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Fitnes App'
            description='CRM App application to HR efficiency'
            date='November 10, 2021'
            budget='$284,900.00'
            progress={50}
            users={users3}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <ToSiteVisit
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Fitnes App'
            description='CRM App application to HR efficiency'
            date='November 10, 2021'
            budget='$284,900.00'
            progress={50}
            users={users4}
          />
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

export {SiteVisits}

const users1: Array<IconUserModel> = [
  {name: 'Emma Smith', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/300-2.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users2 = [
  {name: 'Alan Warden', initials: 'A', color: 'warning'},
  {name: 'Brian Cox', avatar: '/media/avatars/300-4.jpg'},
]

const users3 = [
  {name: 'Mad Masy', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Cris Willson', avatar: '/media/avatars/300-2.jpg'},
  {name: 'Mike Garcie', initials: 'M', color: 'info'},
]

const users4 = [
  {name: 'Nich Warden', initials: 'N', color: 'warning'},
  {name: 'Rob Otto', initials: 'R', color: 'success'},
]
