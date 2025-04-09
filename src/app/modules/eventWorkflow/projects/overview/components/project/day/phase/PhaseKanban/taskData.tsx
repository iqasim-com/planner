import React from 'react'
import TaskDataCard from './Components/TaskDataCard/TaskDataCard'

export const tasks = {
  'task-1': {
    id: 'task-1',
    content: <TaskDataCard icon="fa fa-dot-circle text-success" title="Event task details" ticketId="#1" />,
  },
  'task-2': {
    id: 'task-2',
    content: <TaskDataCard icon="fa fa-dot-circle text-success" title="Pre-wedding Events" ticketId="#2" />,
  },
  'task-3': {
    id: 'task-3',
    content: <TaskDataCard icon="fa fa-dot-circle text-success" title="Event Style and Theme" ticketId="#3" />,
  },
  'task-4': {
    id: 'task-4',
    content: <TaskDataCard icon="fa fa-dot-circle text-success" title="Event Attire" ticketId="#4" />,
  }
}

export const columns = {
  'column-1': {
    id: 'column-1',
    title: 'TO DO',
    taskIds: ['task-1', 'task-4', 'task-5'],
  },
  'column-2': {
    id: 'column-2',
    title: 'In Progress',
    taskIds: ['task-2'],
  },
  'column-3': {
    id: 'column-3',
    title: <span className='text-success'>Done</span>,
    taskIds: ['task-3'],
  },
}
