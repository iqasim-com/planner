import { call, put } from "redux-saga/effects"
import { addAssigneeFailure, addAssigneeSuccess } from "./AssigneeSlice"
import { addNewAssigneeToTask } from "../../../../app/modules/auth/core/_requests"
import { fetchTasksRequest } from "../../../../app/modules/eventWorkflow/projects/overview/components/project/day/phase/PhaseKanban/taskSlice"

export function* addAssigneeSaga(action: any): Generator<any> {
  try {
    const { projectId, eventDateId, phaseId, workspaceId, taskGroupId, taskId, values } = action.payload

    const response: any = yield call(addNewAssigneeToTask, {
      projectId,
      eventDateId,
      phaseId,
      workspaceId,
      taskGroupId: taskGroupId.taskGroupId,
      taskId,
      payload: values,
    })

    if (response.status === 200) {
      yield put(addAssigneeSuccess(response.data))
      yield put(fetchTasksRequest({
        projectId, eventDateId, phaseId, workspaceId, taskGroupId: taskGroupId.taskGroupId, pageNumber: 1, pageSize: 15
      }))
    } else {
      yield put(addAssigneeFailure('Failed to add assignee'))
    }
  } catch (error: any) {
    yield put(addAssigneeFailure(error.toString()))
  }
}