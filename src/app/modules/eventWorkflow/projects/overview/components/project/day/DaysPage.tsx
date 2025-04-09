/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../../../../_metronic/layout/core'
import {Overview} from './components/Overview'

const daysBreadCrumbs: Array<PageLink> = [
  {
    title: 'Project Overview',
    path: '/projects/overview',
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

const DaysPage: React.FC = () => (
  <Routes>
    <Route
      element={
        <>
          <Outlet />
        </>
      }
    >
      <Route
        path='days/:projectId'
        element={
          <>
            <PageTitle breadcrumbs={daysBreadCrumbs}>Overview</PageTitle>
            <Overview />
          </>
        }
      />

      <Route index element={<Navigate to='/projects/project/days' />} />
    </Route>
  </Routes>
)

export default DaysPage
