/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../../../../../../../_metronic/layout/core'
import {Overview} from './components/Overview'

const submittalBreadCrumbs: Array<PageLink> = [
  {
    title: 'Submittals',
    path: '/projects/PIM/project/overview/days/day/coordination/submittals/overview',
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

const SubmittalPage: React.FC = () => {
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
              <PageTitle breadcrumbs={submittalBreadCrumbs}>Overview</PageTitle>
              <Overview />
            </>
          }
        />
        <Route
          index
          element={
            <Navigate to='/projects/PIM/project/overview/days/day/coordination/submittals' />
          }
        />
      </Route>
    </Routes>
  )
}

export default SubmittalPage
