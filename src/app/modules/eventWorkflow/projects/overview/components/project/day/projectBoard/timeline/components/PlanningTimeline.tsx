/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import TimelineItem from './timelineItem'
import CreateTaskModal from '../../../components/create-task-stepper/CreateTaskModal'
import {useAppDispatch} from '../../../../../../../../../../../setup/store'
import {
  onDelete,
  onCreateTask,
} from '../../../../../../../redux/projectBoard/Timeline/timelineSlice'
import {TaskBasicInformation} from '../../../components/create-task-stepper/IAppModels'

type Props = {
  className: string
  timelines: any[]
}

const PlanningTimeline: React.FC<Props> = ({className, timelines}) => {
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const [onLoading, setOnLoading] = useState(false)
  const [timelineId, setTimelineId] = useState<string>('')
  const dispatch = useAppDispatch()
  const [accordionStates, setAccordionStates] = useState<boolean[]>(timelines.map(() => false))

  // TODO: Will remove later
  const [users, setUsers] = useState([
    {name: 'Mad Masy', avatar: '/media/avatars/300-1.jpg'},
    {name: 'Mad Masy', avatar: '/media/avatars/300-1.jpg'},
  ])

  const onNewTimelineTaskCreation = (values: TaskBasicInformation) => {
    setOnLoading(true)
    setTimeout(() => {
      const data = {
        ...values,
        timelineId,
      }
      dispatch(onCreateTask({timelineId, task: data}))
      setOnLoading(false)
      setShowCreateAppModal(false)
    }, 1500)
  }

  const toggleAccordion = (index: number) => {
    console.log(index)
    setAccordionStates((prevStates) => {
      const newState = [...prevStates]
      newState[index] = !newState[index]
      return newState
    })
  }

  const createNewTask = (id: string) => {
    setTimelineId(id)
    setShowCreateAppModal(true)
  }

  return (
    <>
      {timelines.map((res, index) => (
        <div className={`card ${className} mb-12`}>
          {/* begin::Header */}
          <div
            className='card-header align-items-center border-0'
            role='button'
            data-bs-target={`#kt_project_planning_timeline_${index}`}
            aria-controls={`kt_project_planning_timeline_${index}`}
          >
            {/* begin::Title */}
            <div className='card-title d-flex align-items-center'>
              {/* begin::Svg Icon | path: icons/duotune/general/gen014.svg */}
              <i className='fa fa-calendar-alt text-primary fa-2x me-3'></i>
              {/* end::Svg Icon */}
              <h3 className='fw-bolder m-0 text-gray-800'>
                <span className='fw-bolder text-dark'>{res.timelineDate}</span>
                <span className='text-muted fw-bold fs-7 ms-2 badge badge-primary'>
                  {res.tasks.length} {res.tasks.length > 1 ? 'Tasks' : 'Task'}
                </span>
              </h3>
            </div>
            <div
              className='card-toolbar'
              data-bs-toggle='tooltip'
              data-bs-placement='top'
              data-bs-trigger='hover'
            >
              <button
                onClick={() => {
                  if (
                    window.confirm(`Are you sure you want to remove? This operation can't be undo`)
                  ) {
                    dispatch(onDelete(res.id))
                  } else {
                    return
                  }
                }}
                className='btn btn-light-danger btn-sm ms-lg-4 me-3'
              >
                <i className='fa fa-trash'></i>
              </button>

              <button
                className='btn btn-sm btn-light-primary cursor-pointer'
                id='kt_toolbar_primary_button'
                data-bs-toggle='modal'
                title='Create new task for team members'
                data-bs-target='#kt_modal_create_app'
                onClick={() => createNewTask(res.id)}
              >
                Create Task
              </button>
              <button
                disabled={!res.tasks.length}
                onClick={() => toggleAccordion(index)}
                className={`btn btn-light-primary ms-3 fa ${
                  accordionStates[index] ? 'fa-chevron-circle-up' : 'fa fa-chevron-circle-down'
                }`}
              ></button>
            </div>
            {/* end::Title */}
          </div>
          {/* end::Header */}
          {/* begin::Body */}
          {accordionStates[index] && (
            <div id={`kt_project_planning_timeline_${index}`} className='collape'>
              <div className='card-body pt-5'>
                {/* begin::Timeline */}
                <div className='timeline-label'>
                  {/* begin::Item */}
                  {res.tasks?.map((item: any) => (
                    <>
                      <TimelineItem
                        data={item}
                        id={item.taskId}
                        phase={item.taskPhase}
                        icon='/media/svg/brand-logos/figma-1.svg'
                        badgeColor='success'
                        status={item.taskStatus}
                        statusColor='warning'
                        title={item.taskTitle}
                        description={item.taskDescription}
                        date={item.taskStartDate}
                        budget='$605,100.00'
                        progress={20}
                        users={users}
                      />
                    </>
                  ))}
                </div>
                {/* end::Timeline */}
              </div>
            </div>
          )}
          {/* end: Card Body */}
        </div>
      ))}
      <CreateTaskModal
        show={showCreateAppModal}
        callback={onNewTimelineTaskCreation}
        loading={onLoading}
        handleClose={() => setShowCreateAppModal(false)}
      />
    </>
  )
}

export {PlanningTimeline}
