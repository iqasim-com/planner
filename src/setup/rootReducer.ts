import { combineReducers } from '@reduxjs/toolkit';
import timelineSlice from '../app/modules/eventWorkflow/projects/redux/projectBoard/Timeline/timelineSlice'
import authSlice from '../app/modules/redux/auth/authSlice';
import meetingMinutesSlice from '../app/modules/eventWorkflow/projects/redux/projectBoard/Coordination/MeetingMinutes/meetingMinutesSlice';
import requestForInformationSlice from '../app/modules/eventWorkflow/projects/redux/projectBoard/Coordination/RequestForInformation/requestForInformationSlice';
import submittalSlice from '../app/modules/eventWorkflow/projects/redux/projectBoard/Coordination/Submittal/submittalSlice';
import siteVisitsSlice from '../app/modules/eventWorkflow/projects/redux/projectBoard/Coordination/SiteVisits/siteVisitsSlice';
import createProjectSlice from '../app/modules/eventWorkflow/projects/redux/projectBoard/createProjectSlice';
import WorkspaceSlice from '../app/modules/eventWorkflow/projects/overview/components/project/day/projectBoard/workspace/WorkspaceSlice';
import taskGroupSlice from '../_metronic/partials/layout/taskGroupCreation-drawer/taskGroupSlice';
import flagSlices from '../app/modules/eventWorkflow/projects/overview/components/project/components/modals/create-project-stepper/slice';
import taskSlice from '../app/modules/eventWorkflow/projects/overview/components/project/day/phase/PhaseKanban/taskSlice';
import AssigneeSlice from '../_metronic/partials/modals/AssigneeModal/AssigneeSlice';
import createClientSlice from '../app/modules/eventWorkflow/projects/overview/components/project/components/cards/modalslice';
import genericModalSlice from '../app/modules/eventWorkflow/projects/redux/globalSlices/genericModal'

const rootReducer = combineReducers({
  timeline: timelineSlice,
  auth: authSlice,
  meetingMins: meetingMinutesSlice,
  requestForInformation: requestForInformationSlice,
  submittal: submittalSlice,
  siteVisits: siteVisitsSlice,
  createProject: createProjectSlice,
  taskGroup: taskGroupSlice,
  workspace: WorkspaceSlice,
  flagStatus: flagSlices,
  tasks: taskSlice,
  assignee: AssigneeSlice,
  createClientModal: createClientSlice,
  genericModal: genericModalSlice
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
