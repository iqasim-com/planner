import React from "react";
import { TaskDropdownMenu } from "./Dropdown";
import { useAppDispatch, useAppSelector } from "../../../../../../../../../../../../setup/store";
import moment from "moment";
import { fetchTasksRequest } from "../../taskSlice";
import { useParams } from "react-router-dom";

const TaskDataCard = ({ icon, data }: any) => {
  const { firstName, lastName }: any = useAppSelector(state => state.auth.currentUser)
  const { projectId, eventDateId, phaseId, workspaceId } = useParams()
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <i className={icon}></i> Concept Phase
        </div>
        <button
          type='button'
          className='btn btn-sm btn-outline btn-outline-primary'>
          <i className="fa fa-pencil"></i>
        </button>
        <TaskDropdownMenu />
      </div>
      <hr />
      <h3 id='kt_activities_toggle' onClick={() => {
        if (projectId && eventDateId && phaseId && workspaceId) {
          dispatch(fetchTasksRequest({ projectId, eventDateId, phaseId, workspaceId, taskGroupId: data.taskGroupId, pageNumber: 1, pageSize: 10 }));
        }
      }} className="cursor-pointer text-hover-primary">{data.name}</h3>
      <p className="text-muted ellipsis-paragraph">{data.description}</p>
      <hr />
      <div className="d-flex justify-content-between">
        <div>
          Author: <span className="badge badge-primary">{`${firstName} ${lastName}`}</span>
        </div>
        <div>
          Deadline: <span className="badge badge-danger me-4">{data.deadline === null ? 'Not Defined' : moment(data.deadline).format('YYYY-MM-DD')}</span>
          Tasks: <span className="badge badge-success">{data.tasks.length}</span>
        </div>
      </div>
    </div>
  )
}

export default TaskDataCard