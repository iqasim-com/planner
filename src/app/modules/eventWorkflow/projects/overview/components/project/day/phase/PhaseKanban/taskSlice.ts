import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TasksState {
  tasks: any[] // TODO: Will update later
  isLoading: boolean
  error: string | null
  isOpen?: boolean
}

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  error: null,
  isOpen: false
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchTasksRequest: (
      state,
      _action: PayloadAction<{
        projectId: string;
        eventDateId: string;
        phaseId: string;
        workspaceId: string;
        taskGroupId: string;
        pageNumber: number;
        pageSize: number;
      }>
    ) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchTasksSuccess: (state, action: PayloadAction<any[]>) => {
      state.tasks = action.payload;
      console.log('Tasks fetch', state.tasks)
      state.isLoading = false;
    },
    fetchTasksFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    addNewTaskRequest: (state, action: PayloadAction<any>) => {
      state.isLoading = true
    },
    addNewTaskSuccess: (state, action: PayloadAction<any>) => {
      // state.tasks.push(action.payload)
      state.isLoading = false
    },
    addNewTaskFailure: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    }
  },
});

export const {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  openModal,
  closeModal,
  addNewTaskRequest,
  addNewTaskSuccess,
  addNewTaskFailure
} = tasksSlice.actions;

export default tasksSlice.reducer;
