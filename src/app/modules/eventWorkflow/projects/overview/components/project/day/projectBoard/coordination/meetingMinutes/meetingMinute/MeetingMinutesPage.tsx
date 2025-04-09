/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../../../../../../../_metronic/layout/core'
import {Overview} from './components/Overview'

const meetingMinuteBreadCrumbs: Array<PageLink> = [
  {
    title: 'Meeting Recap',
    path: '/projects/PIM/project/overview/days/day/coordination/meeting-minutes/overview',
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

const MeetingMinutesPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            {/* <AssociateHeader /> */}
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={meetingMinuteBreadCrumbs}>Overview</PageTitle>
              <Overview />
            </>
          }
        />
        <Route
          index
          element={
            <Navigate to='/projects/PIM/project/overview/days/day/coordination/meeting-minutes/overview' />
          }
        />
      </Route>
    </Routes>
  )
}

export default MeetingMinutesPage
