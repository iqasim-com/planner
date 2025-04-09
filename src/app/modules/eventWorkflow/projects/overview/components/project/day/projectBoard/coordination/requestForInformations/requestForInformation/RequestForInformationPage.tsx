/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../../../../../../../_metronic/layout/core'
import {Overview} from './components/Overview'

const requestForInformationBreadCrumbs: Array<PageLink> = [
  {
    title: 'Request For Information',
    path: '/projects/PIM/project/overview/days/day/coordination/request-for-information/overview',
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

const RequestForInformationPage: React.FC = () => {
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
              <PageTitle breadcrumbs={requestForInformationBreadCrumbs}>Overview</PageTitle>
              <Overview />
            </>
          }
        />
        <Route
          index
          element={
            <Navigate to='/projects/PIM/project/overview/days/day/coordination/request-for-information' />
          }
        />
      </Route>
    </Routes>
  )
}

export default RequestForInformationPage
