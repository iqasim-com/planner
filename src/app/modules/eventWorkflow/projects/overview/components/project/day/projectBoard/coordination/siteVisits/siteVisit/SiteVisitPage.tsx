/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../../../../../../../_metronic/layout/core'
import {Overview} from './components/Overview'

const siteVisitBreadCrumbs: Array<PageLink> = [
  {
    title: 'Meeting Recap',
    path: '/projects/PIM/project/overview/days/day/coordination/siteVisits/overview',
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
              <PageTitle breadcrumbs={siteVisitBreadCrumbs}>Overview</PageTitle>
              <Overview />
            </>
          }
        />
        <Route index element={<Navigate to='projects/PIM/project/coordination/siteVisits' />} />
      </Route>
    </Routes>
  )
}

export default MeetingMinutesPage
