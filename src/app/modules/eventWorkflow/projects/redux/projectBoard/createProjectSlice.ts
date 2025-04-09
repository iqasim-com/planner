import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProjectCreationInitialstateProps } from '../../overview/components/project/components/modals/create-project-stepper/IProjectModel';

export interface ProjectState {
  projects: ProjectCreationInitialstateProps[];
  isProjectLoading: boolean;
  isSubmit: boolean;
}

export const initialProjectCreationState: ProjectState = {
  projects: [],
  isProjectLoading: false,
  isSubmit: false,
};

const createProjectSlice = createSlice({
  name: 'createProject',
  initialState: initialProjectCreationState,
  reducers: {
    getAllProjectsRequest: (state) => {
      state.isProjectLoading = true;
    },
    getAllProjectsSuccess: (state, action: PayloadAction<ProjectCreationInitialstateProps[]>) => {
      state.projects = action.payload;
      state.isProjectLoading = false;
    },
    requestAddProject: (state) => {
      state.isProjectLoading = true;
    },
    addProject: (state, action: PayloadAction<ProjectCreationInitialstateProps>) => {
      state.projects.push(action.payload);
      state.isProjectLoading = false;
      state.isSubmit = true;
    },
    updateProject: (state, action: PayloadAction<{ id: string; updatedProject: ProjectCreationInitialstateProps }>) => {
      const { id, updatedProject } = action.payload;
      const index = state.projects.findIndex((project) => project.projectId === id);
      if (index !== -1) {
        state.projects[index] = updatedProject;
      }
    },
    removeProject: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.projects = state.projects.filter((project) => project.projectId !== id);
    },
    resetSubmit: (state) => {
      state.isSubmit = false;
    },
  },
});

export const {
  getAllProjectsRequest,
  getAllProjectsSuccess,
  requestAddProject,
  addProject,
  updateProject,
  removeProject,
  resetSubmit,
} = createProjectSlice.actions;

export default createProjectSlice.reducer;
