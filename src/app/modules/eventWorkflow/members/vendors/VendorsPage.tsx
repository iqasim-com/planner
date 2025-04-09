import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {Vendors} from './components/Vendors'


const vendorsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Vendors',
    path: '/members/vendors',
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

const VendorsPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            {/* <UserAccountHeader /> */}
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={vendorsBreadCrumbs}>Vendors</PageTitle>
              <Vendors />
            </>
          }
        />
        <Route index element={<Navigate to='/members/vendors' />} />
      </Route>
    </Routes>
  )
}

export default VendorsPage
