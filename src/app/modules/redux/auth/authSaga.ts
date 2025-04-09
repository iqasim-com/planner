import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  loginRequest,
  logoutRequest,
  currentUserRequest,
  refreshTokenSuccess,
  refreshTokenRequest,
} from './authSlice'
import { logout } from '../../../../setup/axios/axios'
import { requestRefreshToken, userLogin } from '../../auth/core/_requests'
import store from '../../../../setup/store'
import { getUserByTokenSaga, workspaceByIdSaga } from '../../../../setup/saga/globalSagas'
import { loadWorkspaceRequest } from '../../eventWorkflow/projects/overview/components/project/day/projectBoard/workspace/WorkspaceSlice'
import { addNewTaskGroupStart, fetchTaskGroupsStart, updateTaskGroupStatusStart } from '../../../../_metronic/partials/layout/taskGroupCreation-drawer/taskGroupSlice'
import { fetchTaskGroupsSaga, handleAddNewTaskGroup, updateTaskGroupStatusSaga } from '../../../../_metronic/partials/layout/taskGroupCreation-drawer/taskGroupSaga'
import { addAssigneeRequest } from '../../../../_metronic/partials/modals/AssigneeModal/AssigneeSlice'
import { addAssigneeSaga } from '../../../../_metronic/partials/modals/AssigneeModal/AssigneeSaga'
import { addNewTaskRequest, fetchTasksRequest } from '../../eventWorkflow/projects/overview/components/project/day/phase/PhaseKanban/taskSlice'
import { addNewTaskSaga, fetchTasksSaga } from '../../eventWorkflow/projects/overview/components/project/day/phase/PhaseKanban/taskSaga'

const AUTH_LOCAL_STORAGE_KEY = 'kt-auth-react-v'

/**
 * Generator function for saga, performing login request and
 * getting loggedin user data once successfully login
 * @param action any
 */
function* login(action: any): Generator<any, void, string> {
  try {
    // Call the authentication API
    const { username, password } = action.payload
    const token: any = yield call(userLogin, username, password)
    // Save token in localStorage
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, JSON.stringify(token))
    // Dispatch a success action with the token
    yield put(loginSuccess(token.accessToken))
    // Call getUserByTokenSaga with the token
    yield call(getUserByTokenSaga, store.getState().auth.token)
  } catch (error) {
    // Dispatch a failure action with the error message
    yield put(loginFailure('Incorrect email/password'))
  }
}

function* handleRefreshToken(): Generator<any, void, string> {
  try {
    const refreshToken = store.getState().auth.token
    console.log('Trying to hit refreshToken saga', refreshToken)
    const response: any = yield call(requestRefreshToken, { "accessToken": refreshToken })
    console.log('Refresh token triggered successfully')
    yield put(refreshTokenSuccess(response.data))

    if (!refreshToken) {
      store.dispatch(logoutRequest())
    }
  } catch (error) {
    store.dispatch(logoutRequest())
  }
}

/**
 * Logout saga
 */
function* logoutSaga() {
  try {
    // Call the logout API
    yield call(logout)
    // Dispatch a success logout action
    yield put(logoutSuccess())
  } catch (error) {
    console.error(error)
  }
}

/**
 * Watching all sagas
 */
export function* watchAuth() {
  yield takeLatest(loginRequest.type, login)
  yield takeLatest(logoutRequest.type, logoutSaga)
  yield takeEvery(currentUserRequest.type, getUserByTokenSaga)
  yield takeLatest(refreshTokenRequest.type, handleRefreshToken)
  yield takeLatest(loadWorkspaceRequest.type, workspaceByIdSaga)
  yield takeLatest(updateTaskGroupStatusStart.type, updateTaskGroupStatusSaga)
  yield takeLatest(fetchTaskGroupsStart, fetchTaskGroupsSaga)
  yield takeLatest(addNewTaskGroupStart, handleAddNewTaskGroup)
  yield takeLatest(addAssigneeRequest.type, addAssigneeSaga)
  yield takeLatest(fetchTasksRequest.type, fetchTasksSaga)
  yield takeLatest(addNewTaskRequest.type, addNewTaskSaga)
}