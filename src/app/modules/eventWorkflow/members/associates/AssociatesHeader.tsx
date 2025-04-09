/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../../../_metronic/partials'
import {useLocation} from 'react-router-dom'

const AssociatesHeader: React.FC = () => {
  const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex align-items-center overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/members/account/associates/overview' && 'active')
                }
                to='/members/account/associates/overview'
              >
                Overview
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/members/account/associates/projects' && 'active')
                }
                to='/members/account/associates/projects'
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/members/account/associates/team-schedule' && 'active')
                }
                to='/members/account/associates/team-schedule'
              >
                Team Schedule
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/members/account/associates/time-clock' && 'active')
                }
                to='/members/account/associates/time-clock'
              >
                Time Clock
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/members/account/associates/timesheets' && 'active')
                }
                to='/members/account/associates/timesheets'
              >
                Timesheets
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/members/account/associates/permissions' && 'active')
                }
                to='/members/account/associates/permissions'
              >
                Permissions
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/members/account/associates/appraisals' && 'active')
                }
                to='/members/account/associates/appraisals'
              >
                Appraisals
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export {AssociatesHeader}
