/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useAuth } from '../../../../../../../auth'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../../../../../setup/store'
import { KTSVG, toAbsoluteUrl } from '../../../../../../../../../_metronic/helpers'
import { openModalAction } from '../../../../../redux/globalSlices/genericModal'


const PhaseHeader: React.FC = () => {
  const { eventDateId, projectId } = useParams()
  const location = useLocation()
  const dispatch = useAppDispatch()

  return (
    <div className='card py-4 mb-xl-10'>
      <div className='card-body pb-0'>
        <div className='d-flex justify-content-between'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/projects/project/days/day/${projectId}/event-dates/${eventDateId}/overview` && 'active')
                }
                to={`/projects/project/days/day/${projectId}/event-dates/${eventDateId}/overview`}
              >
                Overview
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/projects/project/days/day/${projectId}/event-dates/${eventDateId}/phase` && 'active')
                }
                to={`/projects/project/days/day/${projectId}/event-dates/${eventDateId}/phase`}
              >
                Phases
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/members/account/billings' && 'active')
                }
                to='#'
              >
                Weather forecast
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/members/account/subscription' && 'active')
                }
                to='#'
              >
                Guest List
              </Link>
            </li>
          </ul>
          <div className='d-flex'>
            <button
              onClick={() => dispatch(openModalAction('phaseCreationModal'))}
              className='btn btn-sm btn-outline btn-outline-success me-3'
            >
              <i className='fa fa-plus text-success'></i> Create Phase
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { PhaseHeader }
