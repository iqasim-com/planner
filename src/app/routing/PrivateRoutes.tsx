import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  // EventWorkflow members
  const MembersPage = lazy(() => import('../modules/eventWorkflow/members/MembersPage'))
  const ClientsPage = lazy(() => import('../modules/eventWorkflow/members/clients/ClientsPage'))
  const AssociatesPage = lazy(
    () => import('../modules/eventWorkflow/members/associates/AssociatesPage')
  )
  const AssociatePage = lazy(
    () =>
      import(
        '../modules/eventWorkflow/members/associates/components/overview/components/associate/AssociatePage'
      )
  )
  const VendorsPage = lazy(() => import('../modules/eventWorkflow/members/vendors/VendorsPage'))

  // EventWorkflow projects

  const EWFPhases = lazy(
    () => import('../modules/eventWorkflow/projects/overview/components/project/day/phase/routing')
  )
  const ProjectsPage = lazy(() => import('../modules/eventWorkflow/projects/ProjectsPage'))
  const DaysPage = lazy(
    () => import('../modules/eventWorkflow/projects/overview/components/project/day/DaysPage')
  )
  const ProjectBoardPage = lazy(
    () =>
      import(
        '../modules/eventWorkflow/projects/overview/components/project/day/projectBoard/ProjectBoardPage'
      )
  )
  const MeetingMinutesPage = lazy(
    () =>
      import(
        '../modules/eventWorkflow/projects/overview/components/project/day/projectBoard/coordination/meetingMinutes/meetingMinute/MeetingMinutesPage'
      )
  )
  const RequestForInformationPage = lazy(
    () =>
      import(
        '../modules/eventWorkflow/projects/overview/components/project/day/projectBoard/coordination/requestForInformations/requestForInformation/RequestForInformationPage'
      )
  )
  const SubmittalsPage = lazy(
    () =>
      import(
        '../modules/eventWorkflow/projects/overview/components/project/day/projectBoard/coordination/submittals/submittal/SubmittalPage'
      )
  )
  const SiteVisitsPage = lazy(
    () =>
      import(
        '../modules/eventWorkflow/projects/overview/components/project/day/projectBoard/coordination/siteVisits/siteVisit/SiteVisitPage'
      )
  )

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registration */}
        <Route index element={<Navigate to='/dashboard' />} />
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='members/account/*'
          element={
            <SuspensedView>
              <MembersPage />
            </SuspensedView>
          }
        />
        <Route
          path='members/account/clients/*'
          element={
            <SuspensedView>
              <ClientsPage />
            </SuspensedView>
          }
        />
        <Route
          path='members/account/associates/*'
          element={
            <SuspensedView>
              <AssociatesPage />
            </SuspensedView>
          }
        >
          {/* TODO: Where to include the nested (Live Status) components */}
        </Route>
        <Route
          path='members/account/associates/associate/*'
          element={
            <SuspensedView>
              <AssociatePage />
            </SuspensedView>
          }
        />
        <Route
          path='members/account/vendors/*'
          element={
            <SuspensedView>
              <VendorsPage />
            </SuspensedView>
          }
        />
        <Route
          path='projects/*'
          element={
            <SuspensedView>
              <ProjectsPage />
            </SuspensedView>
          }
        />
        <Route
          path='/projects/project/*'
          element={
            <SuspensedView>
              <DaysPage />
            </SuspensedView>
          }
        />
        <Route
          path='/projects/project/days/day/*'
          element={
            <SuspensedView>
              <EWFPhases />
            </SuspensedView>
          }
        />
        <Route
          path='/projects/project/days/day/phase/*'
          element={
            <SuspensedView>
              <ProjectBoardPage />
            </SuspensedView>
          }
        />
        <Route
          path='projects/PIM/project/overview/days/day/coordination/meeting-minutes/*'
          element={
            <SuspensedView>
              <MeetingMinutesPage />
            </SuspensedView>
          }
        />
        <Route
          path='projects/PIM/project/overview/days/day/coordination/request-for-information/*'
          element={
            <SuspensedView>
              <RequestForInformationPage />
            </SuspensedView>
          }
        />
        <Route
          path='projects/PIM/project/overview/days/day/coordination/submittals/*'
          element={
            <SuspensedView>
              <SubmittalsPage />
            </SuspensedView>
          }
        />
        <Route
          path='projects/PIM/project/overview/days/day/coordination/siteVisits/*'
          element={
            <SuspensedView>
              <SiteVisitsPage />
            </SuspensedView>
          }
        />

        {/* From Template */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
