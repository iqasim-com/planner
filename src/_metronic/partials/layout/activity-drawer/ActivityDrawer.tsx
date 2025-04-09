import React from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'
import { Item1 } from '../../content/activity/Item1'
import { SubTaskCreationDrawer } from '../subTaskCreation-drawer/SubTaskCreationDrawer'
import { useAppDispatch, useAppSelector } from '../../../../setup/store'
import { openModal } from '../../../../app/modules/eventWorkflow/projects/overview/components/project/day/phase/PhaseKanban/taskSlice'

const ActivityDrawer = (taskGroupId: any) => {
  const { tasks, isLoading, error }: any = useAppSelector((state) => state.tasks)
  const dispatch = useAppDispatch()
  return (
    <>
      <div
        id='kt_activities'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='activities'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_activities_toggle'
        data-kt-drawer-close='#kt_activities_close'
      >
        <div className='card shadow-none rounded-0 w-100'>
          <div className='card-header' id='kt_activities_header'>
            <h3 className='card-title fw-bolder text-dark'>
              <p className='me-3 my-0'><i className="fa fa-xl fa-tasks text-success me-2" aria-hidden="true"></i> Tasks of <span className="text-primary">{taskGroupId?.taskGroupId?.name}</span></p>
              <button className="btn btn-sm btn-outline btn-outline-primary" onClick={() => dispatch(openModal())} id='ewf_subTask_modal_toggle'>
                <i className='fa fa-plus'></i>
              </button>
            </h3>

            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                id='kt_activities_close'
              >
                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
              </button>
            </div>
          </div>
          <div className='card-body position-relative' id='kt_activities_body'>
            <div
              id='kt_activities_scroll'
              className='position-relative me-n5 pe-5'
              data-kt-scroll='true'
              data-kt-scroll-height='auto'
              data-kt-scroll-wrappers='#kt_activities_body'
              data-kt-scroll-dependencies='#kt_activities_header, #kt_activities_footer'
              data-kt-scroll-offset='5px'
            >
              <div className='timeline'>

                {tasks?.tasks && tasks?.tasks?.length > 0 ? (
                  <div className='timeline-item'>
                    <div className='timeline-line w-40px'></div>

                    <div className='timeline-icon symbol symbol-circle symbol-40px me-4'>
                      <div className='symbol-label bg-light'>
                        <KTSVG
                          path='/media/icons/duotune/communication/com003.svg'
                          className='svg-icon-2 svg-icon-gray-500'
                        />
                      </div>
                    </div>

                    <div className='timeline-content mb-10 mt-n1'>
                      <div className='pe-3 mb-5 d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fs-5 fw-bold mb-2'>
                            There {tasks.tasks.length > 1 ? 'are' : 'is'} <span className='badge badge-primary'>{tasks.tasks.length || 0}</span> new tasks
                          </div>

                          {/* <div className='d-flex align-items-center mt-1 fs-6'>
                            <div className='text-muted me-2 fs-7'>Created At: {moment(tasks.createdAt).format('YYYY-DD-MM')}</div>
                            <span className="badge badge-danger ms-3">Deadline: {moment(data.data.deadline).format('YYYY-DD-MM')}</span>
                          </div> */}
                        </div>
                      </div>

                      <div className="py-5">
                        <table className="table table-row-dashed table-row-gray-300 gy-3">
                          <thead>
                            <tr>
                              <td className="fw-bold">Task Name</td>
                              <td className="fw-bold">Priority</td>
                              <td className="fw-bold">Assignees</td>
                              <td className="fw-bold">Status</td>
                              <td className="fw-bold">Action</td>
                            </tr>
                          </thead>
                          <tbody>
                            {tasks?.tasks.map((task: any, index: number) => (
                              <Item1 key={index} data={task} id={taskGroupId.taskGroupId} assignees={task.assignees} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={toAbsoluteUrl('/media/illustrations/sketchy-1/17.png')}
                      alt='New project placeholder vector'
                      className='mw-400px mb-8'
                    />
                    <h1 className='display-3 text-muted'>{isLoading ? 'Loading...' : 'No tasks found!'}</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubTaskCreationDrawer taskGroupId={taskGroupId.taskGroupId} />
    </>
  )
}

export { ActivityDrawer }
