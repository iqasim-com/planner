import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({ column, task, index }: any) => {
  console.log(column)
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: any, snapshot: any) => (
        <div
          className={`card mb-3 ${snapshot.isDragging ? 'bg-info' : ''} ${column.id === 'column-3' ? 'bg-light-success' : ''}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onDrag={snapshot.isDragging}
        >
          <div className='card-body'>{task.content}</div>
        </div>
      )}
    </Draggable>
  )
}

export default Task
