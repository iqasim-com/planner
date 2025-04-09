/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, { useState } from 'react'
import { KTSVG } from '../../../../../../../../../../_metronic/helpers'
import { SiteVisits } from './siteVisits/SiteVisits'
import { MeetingMinutes } from './meetingMinutes/MeetingMinutes'
import { RequestForInformation } from './requestForInformations/RequestForInformation'
import { Submittals } from './submittals/Submittals'

const Coordination: React.FC = () => {
  const [tab, setTab] = useState('MeetingMinutes')

  return (
    <>
      <div className='card mb-10'>
        <div className='card card-custom'>
          {/* begin::Header */}
          <div className='card-header card-header-stretch overflow-auto d-flex flex-wrap flex-stack mb-6'>
            <ul
              className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap fw-bolder my-2'
              role='tablist'
            >
              <li className='nav-item'>
                <a
                  className={clsx(`nav-link cursor-pointer`, { active: tab === 'MeetingMinutes' })}
                  onClick={() => setTab('MeetingMinutes')}
                  role='tab'
                >
                  Meeting Recap
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className={clsx(`nav-link cursor-pointer`, {
                    active: tab === 'RequestForInformation',
                  })}
                  onClick={() => setTab('RequestForInformation')}
                  role='tab'
                >
                  Request For Information
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className={clsx(`nav-link cursor-pointer`, { active: tab === 'Submittals' })}
                  onClick={() => setTab('Submittals')}
                  role='tab'
                >
                  {/* Submittals (or Documents) */}
                  Submittals
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className={clsx(`nav-link cursor-pointer`, { active: tab === 'SiteVisits' })}
                  onClick={() => setTab('SiteVisits')}
                  role='tab'
                >
                  Site visits
                </a>
              </li>
            </ul>

            <div className='d-flex flex-wrap my-2 justify-content-center align-items-center'>
              <div
                className='card-toolbar'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-trigger='hover'
                title='Click to create a new meeting minute'
              >
                <a
                  href='#'
                  className='btn btn-sm btn-light-primary cursor-pointer'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_create_meeting_minute'
                // onClick={}
                >
                  <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                  New Meeting Recap
                </a>
              </div>
            </div>
          </div>
          {/* end::Header */}

          {/* begin::Body */}
          <div className='card-body'>
            <div className='tab-content pt-3'>
              <div className={clsx('tab-pane', { active: tab === 'MeetingMinutes' })}>
                <MeetingMinutes />
              </div>

              <div className={clsx('tab-pane', { active: tab === 'RequestForInformation' })}>
                <RequestForInformation />
              </div>

              <div className={clsx('tab-pane', { active: tab === 'Submittals' })}>
                <Submittals />
              </div>

              <div className={clsx('tab-pane', { active: tab === 'SiteVisits' })}>
                <SiteVisits />
              </div>
            </div>
          </div>
          {/* end::Body */}
        </div>
      </div>
    </>
  )
}

export default Coordination
