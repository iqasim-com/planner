import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {Archives} from './components/archives/Archives'
import {Booking} from './components/booking/Booking'
import {Current} from './components/current/Current'


const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Clients',
    path: '/members/clients',
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

const ClientsPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path='current'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Current</PageTitle>
              <Current />
            </>
          }
        />
        <Route
          path='booking'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Booking</PageTitle>
              <Booking />
            </>
          }
        />
        <Route
          path='archives'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Archives</PageTitle>
              <Archives />
            </>
          }
        />
        <Route index element={<Navigate to='/members/clients' />} />
      </Route>
    </Routes>
  )
}

export default ClientsPage
