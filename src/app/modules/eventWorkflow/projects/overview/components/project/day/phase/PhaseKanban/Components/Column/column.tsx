import React from 'react'
import Task from '../task'
import { Droppable } from 'react-beautiful-dnd'

const Column = ({ column, tasks }: any) => {
  return (
    <>
      <div className='border p-6'>
        <div className='mb-4 bg-gray-100 text-center py-5'>
          <h3 className='m-0'>{column.title}</h3>
        </div>
        <Droppable droppableId={column.id}>
          {(provided: any) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task: any, index: number) => {
                return <Task key={task.id} task={task} index={index} column={column} />
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  )
}

export default Column
