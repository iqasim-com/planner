/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState} from 'react'
import {IconUserModel} from '../ProfileModels'
import {UsersList} from '../UsersList'
import {KTSVG} from '../../../../../../../../../../../../../_metronic/helpers'
import {TaskCreatorForm} from './TaskCreatorForm'
import {useAppDispatch} from '../../../../../../../../../../../../../setup/store'
import {onDeleteTask} from '../../../../../../../../../redux/projectBoard/Timeline/timelineSlice'
import CreateTaskModal from '../../../../../components/create-task-stepper/CreateTaskModal'

type Props = {
  data: any
  progress: number
  statusColor: string
  users?: Array<IconUserModel>
}

const TaskCard: FC<Props> = ({data, progress, statusColor, users = undefined}) => {
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false)
  const toggleTaskCreatorForm = () => setShowTaskForm((prevState) => !prevState)
  const dispatch = useAppDispatch()

  const onTaskUpdate = () => {
    console.log('Updated tasks')
  }

  return (
    <>
      {/* begin::Card */}
      {!showTaskForm && (
        <div className='card mb-5 mb-xl-10'>
          <div id='' className='collapse show'>
            <div className='card-body p-9'>
              <div className='fs-3 fw-bolder text-dark'>{data.taskTitle}</div>

              <p className='text-gray-400 fw-bold fs-5 mt-1 mb-7'>{data.taskDescription}</p>

              <div className='d-flex flex-wrap mb-5'>
                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>
                  <div className='fs-6 text-gray-800 fw-bolder'>{data.taskStartDate}</div>
                  <div className='fw-bold text-gray-400'>Started</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>
                  <div className='fs-6 text-gray-800 fw-bolder'>{data.taskCompletionDate}</div>
                  <div className='fw-bold text-gray-400'>Completion Date</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>
                  <div className='fs-6 text-gray-800 fw-bolder'>{data.taskPhase}</div>
                  <div className='fw-bold text-gray-400'>Phase</div>
                </div>
              </div>

              {/* <UsersList users={users} /> */}
              <div className='d-flex flex-wrap mb-5'>
                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>
                  <div className='mb-2'>
                    <UsersList users={users} />
                  </div>
                  <div className='fw-bold text-gray-400'>Creator</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>
                  <div className='mb-2'>
                    <UsersList users={users} />
                  </div>
                  <div className='fw-bold text-gray-400'>Assignees</div>
                </div>

                <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>
                  <div className='mb-2'>
                    <UsersList users={users} />
                  </div>
                  <div className='fw-bold text-gray-400'>Viewers</div>
                </div>
              </div>
              <div className='mb-3'>
                <p>Task Progress</p>
              </div>
              <div
                className='h-4px w-100 bg-light mb-5'
                data-bs-toggle='tooltip'
                title='This project completed'
              >
                <div
                  className={`bg-${statusColor} rounded h-4px`}
                  role='progressbar'
                  style={{width: `${progress}%`}}
                ></div>
              </div>
            </div>
            <div className='card-footer'>
              <div
                className='card-toolbar'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                data-bs-trigger='hover'
                title='Click to update this task'
              >
                <button className='btn btn-sm btn-light-primary' onClick={toggleTaskCreatorForm}>
                  <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                  Update Task
                </button>

                <button
                  onClick={() => {
                    if (
                      window.confirm(`Are you sure you want to remove? This operation can't be undo`)
                    ) {
                      dispatch(onDeleteTask({timelineId: data.timelineId, taskId: data.taskId}))
                    } else {
                      return
                    }
                  }}
                  className='btn btn-light-danger btn-sm ms-lg-4'
                >
                  <i className='fa fa-trash'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* end::Card */}
      <CreateTaskModal
        show={showTaskForm}
        callback={onTaskUpdate}
        loading={false}
        handleClose={() => setShowTaskForm(false)}
      />

      {/* begin::Form */}
      {/* {showTaskForm && <TaskCreatorForm onSendingToParent={setShowTaskForm} />} */}
      {/* end::Form */}
    </>
  )
}

export {TaskCard}
