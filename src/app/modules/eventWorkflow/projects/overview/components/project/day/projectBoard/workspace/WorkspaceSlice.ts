import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WorkspaceProps {
  title: string;
  phaseName: string,
  author: string;
  timeCreated: string;
  deadline: string;
  tags: string;
  tasks?: any[];
}

interface Workspace {
  workspace: WorkspaceProps[];
}

const initialState: any = {
  workspace: [],
};

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    loadWorkspaceRequest: (state, action: PayloadAction<any>) => {},
    loadWorkspaceSuccess: (state, action: PayloadAction<any>) => {
      state.workspace.push(action.payload)
    },
    addWorkspace: (state, action: PayloadAction<WorkspaceProps>) => {
      console.log('payload', action.payload)
      state.workspace.push(action.payload)
    },
    removeWorkspace: (state, action: PayloadAction<number>) => {
      state.workspace.splice(action.payload, 1)
    },
    updateWorkspace: (state, action: PayloadAction<{ index: number; taskGroup: WorkspaceProps }>) => {
      state.workspace[action.payload.index] = action.payload.taskGroup
    },
  },
});

export const {
  loadWorkspaceRequest,
  loadWorkspaceSuccess,
  addWorkspace,
  removeWorkspace,
  updateWorkspace
} = workspaceSlice.actions

export default workspaceSlice.reducer
