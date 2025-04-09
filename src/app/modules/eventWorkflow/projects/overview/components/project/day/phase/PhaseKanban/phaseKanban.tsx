// KanbanBoard.tsx
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { addNewTaskGroupStart, fetchTaskGroupsStart, setModalClose, setModalOpen, updatePageSize, updateTaskGroupStatusStart } from '../../../../../../../../../../_metronic/partials/layout/taskGroupCreation-drawer/taskGroupSlice';
import { useAppDispatch, useAppSelector } from '../../../../../../../../../../setup/store';
import { useParams } from 'react-router-dom';
import TaskDataCard from './Components/TaskDataCard/TaskDataCard';
import { TaskGroupCreationDrawer } from '../../../../../../../../../../_metronic/partials/layout/taskGroupCreation-drawer/TaskGroupCreationDrawer';
import { ActivityDrawer } from '../../../../../../../../../../_metronic/partials';

const columns: any = {
  Pending: 1,
  ReOpened: 2,
  Completed: 3,
};

const KanbanBoard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { taskGroups, loading, error, isOpen, pageNumber, pageSize } = useAppSelector((state) => state.taskGroup);
  const { projectId, eventDateId, phaseId, workspaceId } = useParams()

  const [taskGroupId, setTaskGroupId] = useState<any>();

  const taskGroupCreation = (taskGroupData: any) => {
    let formData = {
      name: taskGroupData.name,
      description: taskGroupData.description,
      priority: taskGroupData.priority,
      status: taskGroupData.status,
      deadline: taskGroupData.deadline
    }
    dispatch(addNewTaskGroupStart({ projectId, eventDateId, phaseId, workspaceId, formData }))
  }

  useEffect(() => {
    dispatch(fetchTaskGroupsStart({ projectId, eventDateId, phaseId, workspaceId, pageNumber, pageSize }))
  }, [dispatch, projectId, eventDateId, phaseId, workspaceId, pageNumber, pageSize])

  const handleDragEnd = (result: any) => {
    const { destination, source, draggableId } = result

    if (!destination || destination.droppableId === source.droppableId) {
      return
    }

    const taskGroupId = draggableId
    const updatedStatus = columns[destination.droppableId]

    const taskGroup = taskGroups.find((tg) => tg.taskGroupId === taskGroupId)

    if (taskGroup) {
      const updatedTaskGroup = {
        ...taskGroup,
        status: {
          ...taskGroup.status,
          value: updatedStatus,
          name: destination.droppableId,
        },
      };

      // Dispatch update status
      dispatch(
        updateTaskGroupStatusStart({
          projectId,
          eventDateId,
          phaseId,
          workspaceId,
          taskGroupId,
          payload: updatedTaskGroup
        })
      )
    }
  }

  return (
    <>
      <div className="row">
        {loading && <p>Loading...</p>}
        <DragDropContext onDragEnd={handleDragEnd}>
          {Object.keys(columns).map((status) => (
            <Droppable droppableId={status} key={status}>
              {(provided: any) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className='col-lg-4 border border-1 p-0'
                >
                  <div className="d-flex mb-3 justify-content-between align-items-center p-3 border border-bottom-1 border-top-0 border-left-0 border-right-0">
                    <h1 className='mb-0'>{status && status}</h1>
                    <button onClick={() => dispatch(setModalOpen())} className='btn btn-sm btn-outline btn-outline-primary'><i className='fa fa-plus'></i></button>
                  </div>
                  {taskGroups
                    .filter((tg) => tg?.status?.name === status)
                    .map((taskGroup, index) => {
                      return (
                        <Draggable
                          key={taskGroup.taskGroupId}
                          draggableId={taskGroup.taskGroupId}
                          index={index}
                        >
                          {(provided: any) => (
                            <div className="px-3 mb-3">
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className='p-3 card border'
                                onClick={() => setTaskGroupId({taskGroupId: taskGroup.taskGroupId, name: taskGroup.name})}
                              >
                                <TaskDataCard data={taskGroup} icon="fa fa-tasks text-success" />
                              </div>
                            </div>
                          )}
                        </Draggable>
                      )
                    })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
        {taskGroups.length > 5 && <div>
          <button onClick={() => dispatch(updatePageSize(6))} className='btn btn-link link-primary'>Load more...</button>
        </div>}
      </div>

      <TaskGroupCreationDrawer
        handleSubmit={taskGroupCreation}
        show={isOpen}
        handleClose={() => dispatch(setModalClose())}
      />

      <ActivityDrawer taskGroupId={taskGroupId} />
    </>
  );
};

export default KanbanBoard;
