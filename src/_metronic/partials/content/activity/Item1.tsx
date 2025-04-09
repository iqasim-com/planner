/* eslint-disable jsx-a11y/anchor-is-valid */
import { setStatus, toAbsoluteUrl } from '../../../helpers'
import { Link, useParams } from 'react-router-dom'
import AssignModal from '../../modals/AssigneeModal/AssignModal'
import { useAppSelector } from '../../../../setup/store'

const Item1 = ({ data, id, assignees }: any) => {
  const { projectId, eventDateId, phaseId, workspaceId } = useParams()
  const { loading } = useAppSelector(state => state.assignee)

  return (
    <>
      <tr className='border'>
        <td className='text-center'><p className='fs-5 m-0 text-dark text-hover-primary fw-bold'>
          {data?.name}
        </p></td>
        <td><div className='pe-2'>
          <span className={`badge badge-${setStatus(data?.priority.name)}`}>{data?.priority.name}</span>
        </div></td>
        <td>
          <div className='symbol-group symbol-hover d-flex justify-content-between align-items-center'>
            <div>
              {assignees.length > 0 ? assignees.map((assignee: any) => (
                <>
                  {loading ? <i className='fa fa-spin fa-spinner text-info'></i> :
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='img' title={`${assignee.firstName} ${assignee.lastName}`} />
                    </div>
                  }
                </>
              )) : <p className='text-danger m-0'>No Assignees</p>}
            </div>
            <AssignModal taskGroupId={id} taskId={data.taskId} assignees={assignees} />
          </div>
        </td>
        <td>
          <div className='pe-2'>
            <span className={`badge badge-${setStatus(data?.status.name)}`}>{data?.status.name}</span>
          </div>
        </td>
        <td>
          <Link to={`/projects/project/days/day/${projectId}/event-date/${eventDateId}/phase/${phaseId}/workspace/${workspaceId}/task-groups/${id?.taskGroupId}/tasks/${data.taskId}`}>
            <button className='btn btn-sm btn-outline-primary btn-outline'>
              <i className='fa fa-eye'></i>
            </button>
          </Link>
        </td>
      </tr>
    </>
  )
}

export { Item1 }
