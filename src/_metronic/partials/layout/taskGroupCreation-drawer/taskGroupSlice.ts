// taskGroupsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TaskGroup {
  taskGroupId: string;
  name: string
  status: {
    name: string
    value: number
  }
  // other fields...
}

interface TaskGroupState {
  taskGroups: TaskGroup[]
  loading: boolean
  error?: any
  isOpen: boolean // For modal
  pageNumber: number,
  pageSize: number
}

const initialState: TaskGroupState = {
  taskGroups: [],
  loading: false,
  error: null,
  isOpen: false,
  pageNumber: 1,
  pageSize: 6
}

const taskGroupsSlice = createSlice({
  name: 'taskGroups',
  initialState,
  reducers: {
    updatePageSize(state, action: PayloadAction<any>) {
      state.pageSize += action.payload
    },
    fetchTaskGroupsStart(state, action) {
      state.loading = true
    },
    fetchTaskGroupsSuccess(state, action: PayloadAction<TaskGroup[]>) {
      state.taskGroups = action.payload
      state.loading = false
    },
    fetchTaskGroupsFail(state) {
      state.loading = false
    },
    updateTaskGroupStatusStart(state, action) {
      state.loading = true
    },
    updateTaskGroupStatusSuccess(state, action: PayloadAction<TaskGroup>) {
      const index = state.taskGroups.findIndex(
        (task) => task.taskGroupId === action.payload.taskGroupId
      );
      if (index !== -1) {
        state.taskGroups[index] = action.payload;
      }
      state.loading = false
    },
    updateTaskGroupStatusFail(state) {
      state.loading = false
    },
    // Add new task group reducer
    addNewTaskGroupStart(state, action) {
      // state.error = null
      state.loading = true
    },
    addNewTaskGroupSuccess(state, action: PayloadAction<TaskGroup>) {
      state.taskGroups.push(action.payload)
      state.loading = false
      // state.error = null
    },
    addNewTaskGroupFail(state, action) {
      state.loading = false
      state.error = action.payload
    },
    setErrorNull(state) {
      state.error = null
    },
    setModalOpen(state) {
      state.isOpen = true
    },
    setModalClose(state) {
      state.isOpen = false
    }
  }
})

export const {
  updatePageSize,
  fetchTaskGroupsStart,
  fetchTaskGroupsSuccess,
  fetchTaskGroupsFail,
  updateTaskGroupStatusStart,
  updateTaskGroupStatusSuccess,
  updateTaskGroupStatusFail,
  addNewTaskGroupFail,
  addNewTaskGroupStart,
  addNewTaskGroupSuccess,
  setErrorNull,
  setModalOpen,
  setModalClose
} = taskGroupsSlice.actions

export default taskGroupsSlice.reducer
