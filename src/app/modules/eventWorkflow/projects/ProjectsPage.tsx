import React from 'react'
import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {Overview} from './overview/Overview'
import {Timesheet} from './timesheet/Timesheet'
import {Calendar} from './calendar/Calendar'
import ProjectSettings from './settings/Settings'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'

const projectsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Projects',
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

const ProjectsPage: React.FC = () => (
  <Routes>
    <Route
      element={
        <>
          <Outlet />
        </>
      }
    >
      <Route
        path='overview'
        element={
          <>
            <PageTitle breadcrumbs={[]}>Projects Overview</PageTitle>
            <Overview />
          </>
        }
      />
      <Route
        path='projectDetails'
        element={
          <>
            <ProjectDetails />
          </>
        }
      />
      <Route
        path='settings'
        element={
          <>
            <PageTitle breadcrumbs={[]}>Projects Settings</PageTitle>
            <ProjectSettings />
          </>
        }
      />
      <Route
        path='timesheet'
        element={
          <>
            <PageTitle breadcrumbs={projectsBreadCrumbs}>Timesheet</PageTitle>
            <Timesheet />
          </>
        }
      />
      <Route
        path='calendar'
        element={
          <>
            <PageTitle breadcrumbs={projectsBreadCrumbs}>Calendar</PageTitle>
            <Calendar />
          </>
        }
      />
      <Route index element={<Navigate to='/projects/overview' />} />
    </Route>
  </Routes>
)

export default ProjectsPage
