// taskGroupsSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects'
 // import your API call function
import {
  updateTaskGroupStatusSuccess,
  updateTaskGroupStatusFail,
  fetchTaskGroupsSuccess,
  fetchTaskGroupsFail,
  addNewTaskGroupSuccess,
  addNewTaskGroupFail,
  setModalClose,
  fetchTaskGroupsStart,
} from './taskGroupSlice'
import { createNewTaskGroup, getTaskGroupByWorkspaceId, updateTaskGroupStatus } from '../../../../app/modules/auth/core/_requests'
import { PayloadAction } from '@reduxjs/toolkit'

export function* updateTaskGroupStatusSaga(action: any): Generator<any> {
  try {
    const { projectId, eventDateId, phaseId, workspaceId, taskGroupId, payload, pageNumber, pageSize } = action.payload
    const updatedTaskGroup: any = yield call(
      updateTaskGroupStatus,
      projectId,
      eventDateId,
      phaseId,
      workspaceId,
      taskGroupId,
      payload
    );
    yield put(updateTaskGroupStatusSuccess(updatedTaskGroup.data))
    yield put(fetchTaskGroupsStart({projectId, eventDateId, phaseId, workspaceId, pageNumber: 1, pageSize: 6}))
    console.log('actions', action.payload)
  } catch (error) {
    yield put(updateTaskGroupStatusFail())
  }
}

export function* fetchTaskGroupsSaga(action: any): Generator<any> {
  try {
    const { projectId, eventDateId, phaseId, workspaceId, pageNumber, pageSize } = action.payload
    
    // Pass the parameters directly as an object
    const response: any = yield call(getTaskGroupByWorkspaceId, {
      projectId,
      eventDateId,
      phaseId,
      workspaceId,
      pageNumber,
      pageSize
    })

    // Dispatch success action with the fetched data
    yield put(fetchTaskGroupsSuccess(response.data.taskGroups))
  } catch (error) {
    // Dispatch fail action in case of an error
    yield put(fetchTaskGroupsFail())
  }
}

// Worker saga: makes the API call when the action is dispatched
export function* handleAddNewTaskGroup(action: PayloadAction<any>): Generator<any> {
  const { projectId, eventDateId, phaseId, workspaceId, formData } = action.payload

  try {
    // Call the API using the helper function
    const response: any = yield call(createNewTaskGroup, projectId, eventDateId, phaseId, workspaceId, formData)

    // Dispatch success action with the response data
    yield put(addNewTaskGroupSuccess(response.data))
    yield put(setModalClose())
    yield put(fetchTaskGroupsStart({
      projectId, eventDateId, phaseId, workspaceId, pageNumber: 1, pageSize: 10
    }))
  } catch (error: any) {
    // Dispatch failure action if the API call fails
    yield put(addNewTaskGroupFail(error))
  }
}
