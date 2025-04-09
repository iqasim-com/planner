/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../../../../../../_metronic/layout/core'
import ProjectPhases from './phase'
import PhaseDetails from './TaskDetails/TaskDetails'
import { PhaseHeader } from './PhaseHeader'

const daysBreadCrumbs: Array<PageLink> = [
  {
    title: 'Projects Overview',
    path: '/projects/overview',
    isSeparator: false,
    isActive: false,
  }
]

const EWFPhases: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <PhaseHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path='/:projectId/event-dates/:eventDateId/overview'
          element={
            <>
              <PageTitle breadcrumbs={daysBreadCrumbs}>Overview</PageTitle>
              <h1>Overview of phase</h1>
            </>
          }
        />
        <Route
          path='/:projectId/event-dates/:eventDateId/phase'
          element={
            <>
              <PageTitle breadcrumbs={daysBreadCrumbs}>Phases</PageTitle>
              <ProjectPhases />
            </>
          }
        />
        {/* <Route path='details' element={
          <>
            <PageTitle breadcrumbs={daysBreadCrumbs}>Details</PageTitle>
            <div className='d-flex'><PhaseDetails /></div>
          </>
        } /> */}
        <Route path='/:projectId/event-date/:eventDateId/phase/:phaseId/workspace/:workspaceId/task-groups/:taskGroupId/tasks/:taskId' element={
          <>
            <PageTitle breadcrumbs={daysBreadCrumbs}>Task Details</PageTitle>
            <PhaseDetails />
          </>
        } />

        <Route index element={<Navigate to='/projects/project/days' />} />
      </Route>
    </Routes>
  )
}

export default EWFPhases
