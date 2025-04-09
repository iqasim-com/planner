/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {AssociatesHeader} from './AssociatesHeader'
import {Associates} from './components/Associates'

import {Appraisals} from './components/appraisals/Appraisals'
import {Overview} from './components/overview/Overview'
import {Permissions} from './components/permissions/Permissions'
import {Projects} from './components/projects/Projects'
import TeamSchedule from './components/teamSchedule/TeamSchedule'
import {TimeClock} from './components/timeClock/TimeClock'
import {Timesheets} from './components/timesheets/Timesheets'

import {ClockedInCard} from './components/timeClock/components/cards/teamLiveStatusesCard/cards/ClockedInCard'
import {ClockedOutCard} from './components/timeClock/components/cards/teamLiveStatusesCard/cards/ClockedOutCard'
import {MealBreakcard} from './components/timeClock/components/cards/teamLiveStatusesCard/cards/MealBreakCard'
import {RestBreakCard} from './components/timeClock/components/cards/teamLiveStatusesCard/cards/RestBreakCard'

const associatesBreadCrumbs: Array<PageLink> = [
  {
    title: 'Associates',
    path: '/members/account/associates/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const AssociatesPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <AssociatesHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={associatesBreadCrumbs}>Overview</PageTitle>
              <Overview />
            </>
          }
        />
        <Route
          path='projects'
          element={
            <>
              <PageTitle breadcrumbs={associatesBreadCrumbs}>Projects</PageTitle>
              <Projects />
            </>
          }
        />
        <Route
          path='team-schedule'
          element={
            <>
              <PageTitle breadcrumbs={associatesBreadCrumbs}>Team Schedule</PageTitle>
              <TeamSchedule />
            </>
          }
        />
        <Route
          path='time-clock'
          element={
            <>
              <PageTitle breadcrumbs={associatesBreadCrumbs}>Time Clock</PageTitle>
              <TimeClock />
            </>
          }
        >
          {/* <Route path='clocked-in' element={<ClockedInCard />} />
          <Route path='clocked-out' element={<ClockedOutCard />} />
          <Route path='meal-break' element={<MealBreakcard />} />
          <Route path='rest-break' element={<RestBreakCard />} /> */}
        </Route>
        <Route
          path='Timesheets'
          element={
            <>
              <PageTitle breadcrumbs={associatesBreadCrumbs}>Timesheets</PageTitle>
              <Timesheets />
            </>
          }
        />
        <Route
          path='permissions'
          element={
            <>
              <PageTitle breadcrumbs={associatesBreadCrumbs}>Permissions</PageTitle>
              <Permissions />
            </>
          }
        />
        <Route
          path='appraisals'
          element={
            <>
              <PageTitle breadcrumbs={associatesBreadCrumbs}>Appraisals</PageTitle>
              <Appraisals />
            </>
          }
        />
        <Route index element={<Navigate to='/members/account/associates' />} />
      </Route>
    </Routes>
  )
}

export default AssociatesPage
