import React, { useEffect, useState } from 'react'
import { Navigate, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../../../../../../_metronic/layout/core'
import { ProjectBoardHeader } from './ProjectBoardHeader'
import { Overview } from './Overview'
import { Invoices } from './invoices/Invoices'
import { MoodBoard } from './moodBoard/MoodBoard'
import { SiteVisits } from './siteVisits/SiteVisits'
import { Tasks } from './tasks/Tasks'
import { Timeline } from './timeline/Timeline'
import { Timesheets } from './timesheets/Timesheets'
import { Vendors } from './vendors/Vendors'
import { Venue } from './venue/Venue'
import { WeatherForecast } from './weatherForecast/WeatherForecast'
import Financial from './financial/Financial'
import Coordination from './coordination/Coordination'
import Party from './party/Party'
import WorkSpace from './workspace/workspace'
import PhaseDetails from '../phase/TaskDetails/TaskDetails'
import Budget from './budget/budget'
import TaskGroup from './workspace/taskGroup'
import Assignees from './assignees/assignees'
// projects/PIM/project/overview/days/day/phases/phase/overview
const projectBreadCrumbs: Array<PageLink> = [
  {
    title: 'Projects Overview',
    path: '/projects/overview',
    isSeparator: false,
    isActive: false
  }
]

const ProjectBoardPage: React.FC = () => {
  const location = useLocation()
  console.log('matches', location)

  const [navItems, setNavItems] = useState([
    {
      path: '/projects/PIM/project/overview/days/day/phases/phase/overview',
      label: 'Overview'
    },
    {
      path: '/projects/PIM/project/overview/days/day/phases/phase/workspace',
      label: 'Workspace'
    },
    {
      path: '/projects/PIM/project/overview/days/day/phases/phase/budget',
      label: 'Budget'
    },
    {
      path: '/projects/PIM/project/overview/days/day/phases/phase/weather-forecast',
      label: 'Weather Forecast'
    },
    {
      path: '/projects/PIM/project/overview/days/day/phases/phase/assignees',
      label: 'Assignees'
    }
  ])

  useEffect(() => {
    // Update the `path` based on the current location
    const updatedNavItems = navItems.map((item) => ({
      ...item,
      path: `${location.pathname.split('/').slice(0, -1).join('/')}/${item.label.toLowerCase().replace(' ', '-')}`
    }))
    setNavItems(updatedNavItems)
  }, [location])

  return (<Routes>
    <Route
      element={
        <>
          <ProjectBoardHeader navItems={navItems} />
          <Outlet />
        </>
      }
    >
      <Route
        path='/:projectId/event-date/:eventDateId/phase/:phaseId/overview'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Overview</PageTitle>
            <Overview />
          </>
        }
      />
      <Route
        path='/:projectId/event-date/:eventDateId/phase/:phaseId/workspace'
      >
        <Route path='' element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Workspace</PageTitle>
            <WorkSpace />
          </>
        } />
        <Route path='/:projectId/event-date/:eventDateId/phase/:phaseId/workspace/:workspaceId/task-groups' element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Task Group</PageTitle>
            <TaskGroup />
          </>
        } />
      </Route>
      <Route
        path='/:projectId/event-date/:eventDateId/phase/:phaseId/budget'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Budget</PageTitle>
            <Budget />
          </>
        } />
      <Route
        path='/:projectId/event-date/:eventDateId/phase/:phaseId/assignees'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Assignees</PageTitle>
            <Assignees />
          </>
        } />
      <Route
        path='financial'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Financial</PageTitle>
            <Financial />
          </>
        }
      />
      <Route
        path='coordination'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Coordination</PageTitle>
            <Coordination />
          </>
        }
      />
      <Route
        path='party'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Party</PageTitle>
            <Party />
          </>
        }
      />
      <Route
        path='invoices'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Invoices</PageTitle>
            <Invoices />
          </>
        }
      />
      <Route
        path='moodboard'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>MoodBoard</PageTitle>
            <MoodBoard />
          </>
        }
      />
      <Route
        path='siteVisits'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Site Visits</PageTitle>
            <SiteVisits />
          </>
        }
      />
      <Route
        path='tasks'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Tasks</PageTitle>
            <Tasks />
          </>
        }
      />
      <Route
        path='timeline'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Timeline</PageTitle>
            <Timeline />
          </>
        }
      />
      <Route
        path='timesheets'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Timesheets</PageTitle>
            <Timesheets />
          </>
        }
      />
      <Route
        path='vendors'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Vendors</PageTitle>
            <Vendors />
          </>
        }
      />
      <Route
        path='venue'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Venue</PageTitle>
            <Venue />
          </>
        }
      />
      <Route
        path='/:projectId/event-date/:eventDateId/phase/:phaseId/weather-forecast'
        element={
          <>
            <PageTitle breadcrumbs={projectBreadCrumbs}>Weather Forecast</PageTitle>
            <WeatherForecast />
          </>
        }
      />
      <Route index element={<Navigate to='/projects/PIM/project/overview/days/day/overview' />} />
    </Route>
  </Routes>)
}

export default ProjectBoardPage
