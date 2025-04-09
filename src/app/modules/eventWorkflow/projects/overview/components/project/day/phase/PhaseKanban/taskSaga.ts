import { call, put } from "redux-saga/effects"
import { createNewTaskInTaskGroup, getTasksByTaskGroupId } from "../../../../../../../../auth/core/_requests"
import { addNewTaskFailure, addNewTaskRequest, addNewTaskSuccess, closeModal, fetchTasksFailure, fetchTasksRequest, fetchTasksSuccess } from "./taskSlice"
import { PayloadAction } from "@reduxjs/toolkit"

export function* fetchTasksSaga(action: ReturnType<typeof fetchTasksRequest>): Generator<any> {
  try {
    const { projectId, eventDateId, phaseId, workspaceId, taskGroupId, pageNumber, pageSize }: any = action.payload
    const response: any = yield call(getTasksByTaskGroupId, {
      projectId,
      eventDateId,
      phaseId,
      workspaceId,
      taskGroupId: taskGroupId,
      pageNumber,
      pageSize
    })
    yield put(fetchTasksSuccess(response.data))
  } catch (error: any) {
    yield put(fetchTasksFailure(error.message))
  }
}

export function* addNewTaskSaga(action: PayloadAction<any>): Generator<any> {
  try {
    const { projectId, eventDateId, phaseId, workspaceId, taskGroupId }: any = action.payload
    const response: any = yield call(createNewTaskInTaskGroup, {
      projectId, eventDateId, phaseId, workspaceId, taskGroupId: taskGroupId, payload: action.payload.values
    })
    yield put(fetchTasksRequest({
      // TODO: Need to address pageNumber and size
      projectId, eventDateId, phaseId, workspaceId, taskGroupId: taskGroupId, pageNumber: 1, pageSize: 15
    }))
    yield put(closeModal())
  } catch (error: any) {
    yield put(addNewTaskFailure(error))
  }
}