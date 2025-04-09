/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../../../../_metronic/layout/core'
import {AssociateHeader} from './AssociateHeader'

import {Appraisals} from '../../../appraisals/Appraisals'
import {Overview} from './Overview'
import {Permissions} from './permissions/Permissions'
import {Projects} from './projects/Projects'
import {WorkSchedule} from './workSchedule/WorkSchedule'
import {TimeClock} from './timeClock/TimeClock'
import {Timesheets} from './timesheets/Timesheets'

const associateBreadCrumbs: Array<PageLink> = [
  {
    title: 'Associates',
    path: '/members/account/associates/associate/overview',
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

const AssociatePage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <AssociateHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={associateBreadCrumbs}>Overview</PageTitle>
              <Overview />
            </>
          }
        />
        <Route
          path='projects'
          element={
            <>
              <PageTitle breadcrumbs={associateBreadCrumbs}>Projects</PageTitle>
              <Projects />
            </>
          }
        />
        <Route
          path='work-schedule'
          element={
            <>
              <PageTitle breadcrumbs={associateBreadCrumbs}>Work Schedule</PageTitle>
              <WorkSchedule />
            </>
          }
        />
        <Route
          path='time-clock'
          element={
            <>
              <PageTitle breadcrumbs={associateBreadCrumbs}>Time Clock</PageTitle>
              <TimeClock />
            </>
          }
        />
        <Route
          path='Timesheets'
          element={
            <>
              <PageTitle breadcrumbs={associateBreadCrumbs}>Timesheets</PageTitle>
              <Timesheets />
            </>
          }
        />
        <Route
          path='permissions'
          element={
            <>
              <PageTitle breadcrumbs={associateBreadCrumbs}>Permissions</PageTitle>
              <Permissions />
            </>
          }
        />
        <Route
          path='appraisals'
          element={
            <>
              <PageTitle breadcrumbs={associateBreadCrumbs}>Appraisals</PageTitle>
              <Appraisals />
            </>
          }
        />
        <Route index element={<Navigate to='/members/account/associates/associate' />} />
      </Route>
    </Routes>
  )
}

export default AssociatePage
