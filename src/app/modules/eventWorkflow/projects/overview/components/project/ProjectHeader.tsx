/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../../../../../_metronic/partials'
// import {useLocation} from 'react-router'
import {useLocation} from 'react-router-dom'

const ProjectHeader: React.FC = () => {
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
                  (location.pathname === '/projects/PIM/project/overview' && 'active')
                }
                to='/projects/PIM/project/overview'
              >
                Overview
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/people' && 'active')
                }
                to='/projects/PIM/project/people'
              >
                People
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/financial' && 'active')
                }
                to='/projects/PIM/project/financial'
              >
                Financial
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/coordination' && 'active')
                }
                to='/projects/PIM/project/coordination'
              >
                Coordination
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/invoices' && 'active')
                }
                to='/projects/PIM/project/invoices'
              >
                Invoices
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/party' && 'active')
                }
                to='/projects/PIM/project/party'
              >
                Party
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/moodboard' && 'active')
                }
                to='/projects/PIM/project/moodboard'
              >
                Moodboard
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/site-visits' && 'active')
                }
                to='/projects/PIM/project/site-visits'
              >
                Site Visits
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/tasks' && 'active')
                }
                to='/projects/PIM/project/tasks'
              >
                Tasks
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/timeline' && 'active')
                }
                to='/projects/PIM/project/timeline'
              >
                Timeline
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/Timesheets' && 'active')
                }
                to='/projects/PIM/project/Timesheets'
              >
                Timesheets
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/vendors' && 'active')
                }
                to='/projects/PIM/project/vendors'
              >
                Vendors
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/venue' && 'active')
                }
                to='/projects/PIM/project/venue'
              >
                Venue
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-5 ` +
                  (location.pathname === '/projects/PIM/project/weather-forecast' && 'active')
                }
                to='/projects/PIM/project/weather-forecast'
              >
                Weather Forecast
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export {ProjectHeader}
