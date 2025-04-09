import { call, put } from "redux-saga/effects";
import { CurrentUserSuccess } from "../../app/modules/redux/auth/authSlice";
import { getAllUserProjects, getUserProfileByToken, getWorkspacesById } from "../../app/modules/auth/core/_requests";
import { getAllProjectsSuccess } from "../../app/modules/eventWorkflow/projects/redux/projectBoard/createProjectSlice";
import { ProjectCreationInitialstateProps } from "../../app/modules/eventWorkflow/projects/overview/components/project/components/modals/create-project-stepper/IProjectModel";
import { loadWorkspaceSuccess } from "../../app/modules/eventWorkflow/projects/overview/components/project/day/projectBoard/workspace/WorkspaceSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getUserByTokenSaga(accessToken: any): Generator<any, void, string> {
  try {
    const userData = yield call(getUserProfileByToken, accessToken.payload ? { "accessToken": accessToken.payload } : accessToken)
    yield put(CurrentUserSuccess(userData))
  } catch (error) {
    console.error(error)
  }
}

export function* workspaceByIdSaga(action: PayloadAction<{ projectId: string, eventDateId: string, phaseId: string }>): Generator<any, any> {
  const { projectId, eventDateId, phaseId } = action.payload
  try {
    const workspaces = yield call(getWorkspacesById, projectId, eventDateId, phaseId)
    console.log('Workspaces in saga', workspaces)
    yield put(loadWorkspaceSuccess(workspaces))
  } catch (error) {
    throw new Error('Check workspace saga')
  }
}