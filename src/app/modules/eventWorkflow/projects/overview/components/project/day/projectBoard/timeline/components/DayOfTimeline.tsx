/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {KTSVG} from '../../../../../../../../../../../_metronic/helpers'
import {Dropdown1} from '../../../../../../../../../../../_metronic/partials'
import {TaskCard} from './task/cards/TaskCard'
import {IconUserModel} from './task/ProfileModels'
import {CreateTaskModal} from './task/modals/CreateTaskModal'

type Props = {
  className: string
}

const DayOfTimeline: React.FC<Props> = ({className}) => {
  const [showTaskCreatorModal, setShowTaskCreatorModal] = useState<boolean>(false)

  const toggleCreateTaskModal = () => setShowTaskCreatorModal((prevState) => !prevState)

  return (
    // <div className={`card ${className}`}>
    //   {/* begin::Header */}
    //   <div className='card-header align-items-center border-0 mt-4'>
    //     <div className='card-title d-flex align-items-center'>
    //       {/* begin::Svg Icon | path: icons/duotune/general/gen014.svg */}
    //       <span className='svg-icon svg-icon-1 svg-icon-primary me-3 lh-0'>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           width='24'
    //           height='24'
    //           viewBox='0 0 24 24'
    //           fill='none'
    //         >
    //           <path
    //             opacity='0.3'
    //             d='M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z'
    //             fill='black'
    //           />
    //           <path
    //             d='M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z'
    //             fill='black'
    //           />
    //           <path
    //             d='M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z'
    //             fill='black'
    //           />
    //         </svg>
    //       </span>
    //       {/* end::Svg Icon */}
    //       <h3 className='fw-bolder m-0 text-gray-800'>
    //         <span className='fw-bolder mb-2 text-dark'>Jan 23, 2021</span>
    //         <span className='text-muted fw-bold fs-7'> 8 Action Items</span>
    //       </h3>
    //     </div>

    //     <div
    //       className='card-toolbar'
    //       data-bs-toggle='tooltip'
    //       data-bs-placement='top'
    //       data-bs-trigger='hover'
    //       title='Click to add a task'
    //     >
    //       <a
    //         href='#'
    //         className='btn btn-sm btn-light-primary'
    //         // data-bs-toggle='modal'
    //         // data-bs-target='#kt_modal_invite_friends'
    //         onClick={toggleCreateTaskModal}
    //       >
    //         <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
    //         New Task
    //       </a>
    //     </div>
    //   </div>
    //   {/* end::Header */}
    //   {/* begin::Body */}
    //   <div className='card-body pt-5'>
    //     {/* begin::Timeline */}
    //     <div className='timeline-label'>
    //       {/* begin::Item */}
    //       <div className='timeline-item'>
    //         {/* begin::Label */}
    //         <div className='timeline-label fw-bolder text-gray-800 fs-6'>08:42</div>
    //         {/* end::Label */}
    //         {/* begin::Badge */}
    //         <div className='timeline-badge'>
    //           <i className='fa fa-genderless text-warning fs-1'></i>
    //         </div>
    //         {/* end::Badge */}
    //         {/* begin::Text */}
    //         <div className='fw-mormal timeline-content text-muted ps-3'>
    //           Outlines keep you honest. And keep structure
    //           <TaskCard
    //             icon='/media/svg/brand-logos/figma-1.svg'
    //             badgeColor='success'
    //             status='Completed'
    //             statusColor='success'
    //             title='Atica Banking'
    //             description='CRM App application to HR efficiency'
    //             date='Mar 14, 2021'
    //             budget='$605,100.00'
    //             progress={100}
    //             users={users3}
    //           />
    //         </div>
    //         {/* end::Text */}
    //       </div>
    //       {/* end::Item */}
    //       {/* begin::Item */}
    //       <div className='timeline-item'>
    //         {/* begin::Label */}
    //         <div className='timeline-label fw-bolder text-gray-800 fs-6'>10:00</div>
    //         {/* end::Label */}
    //         {/* begin::Badge */}
    //         <div className='timeline-badge'>
    //           <i className='fa fa-genderless text-success fs-1'></i>
    //         </div>
    //         {/* end::Badge */}
    //         {/* begin::Content */}
    //         <div className='timeline-content d-flex'>
    //           <span className='fw-bolder text-gray-800 ps-6'>AEOL meeting</span>
    //           <TaskCard
    //             icon='/media/svg/brand-logos/figma-1.svg'
    //             badgeColor='success'
    //             status='Completed'
    //             statusColor='success'
    //             title='Atica Banking'
    //             description='CRM App application to HR efficiency'
    //             date='Mar 14, 2021'
    //             budget='$605,100.00'
    //             progress={100}
    //             users={users3}
    //           />
    //         </div>
    //         {/* end::Content */}
    //       </div>
    //       {/* end::Item */}
    //       {/* begin::Item */}
    //       <div className='timeline-item'>
    //         {/* begin::Label */}
    //         <div className='timeline-label fw-bolder text-gray-800 fs-6'>14:37</div>
    //         {/* end::Label */}
    //         {/* begin::Badge */}
    //         <div className='timeline-badge'>
    //           <i className='fa fa-genderless text-danger fs-1'></i>
    //         </div>
    //         {/* end::Badge */}
    //         {/* begin::Desc */}
    //         <div className='timeline-content fw-bolder text-gray-800 ps-3'>
    //           Make deposit
    //           <a href='#' className='text-primary'>
    //             USD 700
    //           </a>
    //           . to ESL
    //           <TaskCard
    //             icon='/media/svg/brand-logos/figma-1.svg'
    //             badgeColor='success'
    //             status='Completed'
    //             statusColor='success'
    //             title='Atica Banking'
    //             description='CRM App application to HR efficiency'
    //             date='Mar 14, 2021'
    //             budget='$605,100.00'
    //             progress={100}
    //             users={users3}
    //           />
    //         </div>
    //         {/* end::Desc */}
    //       </div>
    //       {/* end::Item */}
    //       {/* begin::Item */}
    //       <div className='timeline-item'>
    //         {/* begin::Label */}
    //         <div className='timeline-label fw-bolder text-gray-800 fs-6'>16:50</div>
    //         {/* end::Label */}
    //         {/* begin::Badge */}
    //         <div className='timeline-badge'>
    //           <i className='fa fa-genderless text-primary fs-1'></i>
    //         </div>
    //         {/* end::Badge */}
    //         {/* begin::Text */}
    //         <div className='timeline-content fw-mormal text-muted ps-3'>
    //           Indulging in poorly driving and keep structure keep great
    //           <TaskCard
    //             icon='/media/svg/brand-logos/figma-1.svg'
    //             badgeColor='success'
    //             status='Completed'
    //             statusColor='success'
    //             title='Atica Banking'
    //             description='CRM App application to HR efficiency'
    //             date='Mar 14, 2021'
    //             budget='$605,100.00'
    //             progress={100}
    //             users={users3}
    //           />
    //         </div>
    //         {/* end::Text */}
    //       </div>
    //       {/* end::Item */}
    //       {/* begin::Item */}
    //       <div className='timeline-item'>
    //         {/* begin::Label */}
    //         <div className='timeline-label fw-bolder text-gray-800 fs-6'>21:03</div>
    //         {/* end::Label */}
    //         {/* begin::Badge */}
    //         <div className='timeline-badge'>
    //           <i className='fa fa-genderless text-danger fs-1'></i>
    //         </div>
    //         {/* end::Badge */}
    //         {/* begin::Desc */}
    //         <div className='timeline-content fw-bold text-gray-800 ps-3'>
    //           New order placed
    //           <a href='#' className='text-primary'>
    //             #XF-2356
    //           </a>
    //           .
    //           <TaskCard
    //             icon='/media/svg/brand-logos/figma-1.svg'
    //             badgeColor='success'
    //             status='Completed'
    //             statusColor='success'
    //             title='Atica Banking'
    //             description='CRM App application to HR efficiency'
    //             date='Mar 14, 2021'
    //             budget='$605,100.00'
    //             progress={100}
    //             users={users3}
    //           />
    //         </div>
    //         {/* end::Desc */}
    //       </div>
    //       {/* end::Item */}
    //       {/* begin::Item */}
    //       <div className='timeline-item'>
    //         {/* begin::Label */}
    //         <div className='timeline-label fw-bolder text-gray-800 fs-6'>16:50</div>
    //         {/* end::Label */}
    //         {/* begin::Badge */}
    //         <div className='timeline-badge'>
    //           <i className='fa fa-genderless text-primary fs-1'></i>
    //         </div>
    //         {/* end::Badge */}
    //         {/* begin::Text */}
    //         <div className='timeline-content fw-mormal text-muted ps-3'>
    //           Indulging in poorly driving and keep structure keep great
    //           <TaskCard
    //             icon='/media/svg/brand-logos/figma-1.svg'
    //             badgeColor='success'
    //             status='Completed'
    //             statusColor='success'
    //             title='Atica Banking'
    //             description='CRM App application to HR efficiency'
    //             date='Mar 14, 2021'
    //             budget='$605,100.00'
    //             progress={100}
    //             users={users3}
    //           />
    //         </div>
    //         {/* end::Text */}
    //       </div>
    //       {/* end::Item */}
    //       {/* begin::Item */}
    //       <div className='timeline-item'>
    //         {/* begin::Label */}
    //         <div className='timeline-label fw-bolder text-gray-800 fs-6'>21:03</div>
    //         {/* end::Label */}
    //         {/* begin::Badge */}
    //         <div className='timeline-badge'>
    //           <i className='fa fa-genderless text-danger fs-1'></i>
    //         </div>
    //         {/* end::Badge */}
    //         {/* begin::Desc */}
    //         <div className='timeline-content fw-bold text-gray-800 ps-3'>
    //           New order placed
    //           <a href='#' className='text-primary'>
    //             #XF-2356
    //           </a>
    //           .
    //           <TaskCard
    //             icon='/media/svg/brand-logos/figma-1.svg'
    //             badgeColor='success'
    //             status='Completed'
    //             statusColor='success'
    //             title='Atica Banking'
    //             description='CRM App application to HR efficiency'
    //             date='Mar 14, 2021'
    //             budget='$605,100.00'
    //             progress={100}
    //             users={users3}
    //           />
    //         </div>
    //         {/* end::Desc */}
    //       </div>
    //       {/* end::Item */}
    //       {/* begin::Item */}
    //       <div className='timeline-item'>
    //         {/* begin::Label */}
    //         <div className='timeline-label fw-bolder text-gray-800 fs-6'>10:30</div>
    //         {/* end::Label */}
    //         {/* begin::Badge */}
    //         <div className='timeline-badge'>
    //           <i className='fa fa-genderless text-success fs-1'></i>
    //         </div>
    //         {/* end::Badge */}
    //         {/* begin::Text */}
    //         <div className='timeline-content fw-mormal text-muted ps-3'>
    //           Finance KPI Mobile app launch preparion meeting
    //           <TaskCard
    //             icon='/media/svg/brand-logos/figma-1.svg'
    //             badgeColor='success'
    //             status='Completed'
    //             statusColor='success'
    //             title='Atica Banking'
    //             description='CRM App application to HR efficiency'
    //             date='Mar 14, 2021'
    //             budget='$605,100.00'
    //             progress={100}
    //             users={users3}
    //           />
    //         </div>
    //         {/* end::Text */}
    //       </div>
    //       {/* end::Item */}
    //     </div>
    //     {/* end::Timeline */}
    //   </div>
    //   {/* end: Card Body */}
    //   <CreateTaskModal show={showTaskCreatorModal} handleClose={toggleCreateTaskModal} />
    // </div>
    <>
      hello
    </>
  )
}

export {DayOfTimeline}

const users1: Array<IconUserModel> = [
  {name: 'Emma Smith', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/300-2.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users2 = [
  {name: 'Alan Warden', initials: 'A', color: 'warning'},
  {name: 'Brian Cox', avatar: '/media/avatars/300-4.jpg'},
]

const users3 = [
  {name: 'Mad Masy', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Cris Willson', avatar: '/media/avatars/300-2.jpg'},
  {name: 'Mike Garcie', initials: 'M', color: 'info'},
]

const users4 = [
  {name: 'Nich Warden', initials: 'N', color: 'warning'},
  {name: 'Rob Otto', initials: 'R', color: 'success'},
]

const users5 = [
  {name: 'Francis Mitcham', avatar: '/media/avatars/300-5.jpg'},
  {name: 'Michelle Swanston', avatar: '/media/avatars/300-13.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users6 = [
  {name: 'Emma Smith', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/300-2.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users7 = [
  {name: 'Meloday Macy', avatar: '/media/avatars/300-3.jpg'},
  {name: 'Rabbin Watterman', initials: 'S', color: 'success'},
]

const users8 = [
  {name: 'Emma Smith', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/300-2.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

const users9 = [
  {name: 'Meloday Macy', avatar: '/media/avatars/300-3.jpg'},
  {name: 'Rabbin Watterman', initials: 'S', color: 'danger'},
]
