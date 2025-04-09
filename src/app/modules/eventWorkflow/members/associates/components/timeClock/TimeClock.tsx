/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {TeamLiveStatusesCard} from './components/cards/teamLiveStatusesCard/TeamLiveStatusesCard'
import {TeamGeoLocationCard} from './components/cards/teamGeoLocation/TeamGeoLocationCard'
import {TeamLatestWarningsCard} from './components/cards/teamLatestWarningsCard/TeamLatestWarningsCard'
import {TeamLatestPunchescard} from './components/cards/teamLatestPunchesCard/TeamLatestPunchesCard'

export function TimeClock() {
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-6'>
          <TeamLiveStatusesCard className='mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-6'>
          <TeamGeoLocationCard className='mb-5 mb-xl-8' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-6'>
          {/* <TeamLatestPunchescard /> */}
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-6'>
          {/* <TeamLatestWarningsCard /> */}
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
    </>
  )
}
