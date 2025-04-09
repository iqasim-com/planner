import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TaskBasicInformation {
  taskId?: string;
  timelineId?: string,
  deadline?: string;
  taskTitle?: string;
  taskSubTitle?: string;
  taskDescription?: string;
  taskStartDate?: string;
  taskCompletionDate?: string;
  taskPhase?: string;
  taskStatus?: string;
  selectTaskAssignee: any[];
  selectTaskReviewer: any[];
}

interface RemoveTaskFromTimeline {
  timelineId: string, 
  taskId: string
}

interface CreateTimelineTask {
  timelineId: string, 
  task: TaskBasicInformation
}

export interface TimelineData {
  id: string;
  timelineDate?: string;
  tasks: TaskBasicInformation[];
}

interface TimelineState {
  timelines: TimelineData[];
}

const initialState: TimelineState = {
  timelines: []
};

export const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    onCreate: (state, action: PayloadAction<TimelineData>) => {
      state.timelines.push(action.payload);
    },
    onDelete: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.timelines.findIndex((timeline) => timeline.id === id);
      if (index !== -1) {
        state.timelines.splice(index, 1);
      }
    },
    onUpdate: (state, action: PayloadAction<TimelineData>) => {
      const updatedTimeline = action.payload;
      const index = state.timelines.findIndex((timeline) => timeline.id === updatedTimeline.id);
      if (index !== -1) {
        state.timelines[index] = updatedTimeline;
      }
    },
    onCreateTask: (state, action: PayloadAction<CreateTimelineTask>) => {
      const { timelineId, task } = action.payload;
      const timelineIndex = state.timelines.findIndex((timeline) => timeline.id === timelineId);
      if (timelineIndex !== -1) {
        state.timelines[timelineIndex].tasks.push(task);
      }
    },
    onDeleteTask: (state, action: PayloadAction<RemoveTaskFromTimeline>) => {
      const { timelineId, taskId } = action.payload;
      const timelineIndex = state.timelines.findIndex((timeline) => timeline.id === timelineId);
      if (timelineIndex !== -1) {
        const taskIndex = state.timelines[timelineIndex].tasks.findIndex((task) => task.taskId === taskId);
        if (taskIndex !== -1) {
          state.timelines[timelineIndex].tasks.splice(taskIndex, 1);
        }
      }
    }
  },
});

export const { onCreate, onDelete, onUpdate, onCreateTask, onDeleteTask } = timelineSlice.actions;

export default timelineSlice.reducer;
