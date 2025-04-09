import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UserAccountHeader} from './account/UserAccountHeader'
import Overview from './account/components/Overview'
import {Settings} from './account/components/settings/Settings'
import {Billings} from './account/components/billings/Billings'
import {Subscription} from './account/subscription/Subscription'
import { Authentication } from './account/authentication/authentication'

const membersBreadCrumbs: Array<PageLink> = [
  {
    title: 'Members',
    path: '/members/account/overview',
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

const MembersPage = () => (
  <Routes>
    <Route
      element={
        <>
          <UserAccountHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='overview'
        element={
          <>
            <PageTitle breadcrumbs={membersBreadCrumbs}>Overview</PageTitle>
            <Overview />
          </>
        }
      />
      <Route
        path='settings'
        element={
          <>
            <PageTitle breadcrumbs={membersBreadCrumbs}>Settings</PageTitle>
            <Settings />
          </>
        }
      />
      <Route
        path='billings'
        element={
          <>
            <PageTitle breadcrumbs={membersBreadCrumbs}>Billings</PageTitle>
            <Billings />
          </>
        }
      />
      <Route
        path='subscription'
        element={
          <>
            <PageTitle breadcrumbs={membersBreadCrumbs}>Subscription</PageTitle>
            <Subscription />
          </>
        }
      />
      <Route
        path='authentication'
        element={
          <>
            <PageTitle breadcrumbs={membersBreadCrumbs}>Authentication</PageTitle>
            <Authentication />
          </>
        }
      />
      <Route index element={<Navigate to='/members/account/overview' />} />
    </Route>
  </Routes>
)

export default MembersPage
