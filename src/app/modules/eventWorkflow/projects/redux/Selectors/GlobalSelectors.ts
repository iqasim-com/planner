import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../../../../../setup/rootReducer"

// Selector function to get all projects from the store state
export const selectAllProjects = (state: RootState) => state.createProject.projects
export const taskgroups = (state: RootState) => state.taskGroup.taskGroups

// Selector function to get a project by its ID
export const selectProjectById = (projectId: string) => {
  return createSelector(
    [selectAllProjects],
    (projects) => {
      // Find the project with the given ID
      return projects.find((project: any) => project.id === projectId)
    }
  )
}

export const getProjectEventDates = createSelector(
  [selectAllProjects],
  (projects) => {
    return projects.map((project, index) => ({
      title: project.name,
      date: project.eventDates[index]?.date
    }))
  }
)

// Selector to get tasks by a specific taskGroupId
export const getAllTasksByTaskGroupId = (taskGroupId: any) => {
  return createSelector(
    [taskgroups],
    (taskGroups) => {
      // Find the task group with the matching taskGroupId
      const taskGroup: any = taskGroups.find((tg: any) => tg.taskGroupId === taskGroupId.taskGroupId);
      // Return the tasks if taskGroup is found, otherwise return an empty array
      return taskGroup ? taskGroup.tasks : [];
    }
  );
};