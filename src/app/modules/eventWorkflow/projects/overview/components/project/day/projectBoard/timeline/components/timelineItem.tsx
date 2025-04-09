import React, {useEffect, useState} from 'react'
import {TaskCard} from './task/cards/TaskCard'
import { useAppSelector } from '../../../../../../../../../../../setup/store'

interface User {
  // Define the properties for a User object
  name: string
  avatar: string
  initials?: undefined
  color?: undefined
}

interface TimeLineItemsProps {
  data: any,
  id: string,
  icon: string
  badgeColor: string
  status: string
  statusColor: string
  title: string
  description: string
  date: string
  phase: string,
  budget: string
  progress: number
  users: User[]
}

const TimelineItem: React.FC<TimeLineItemsProps> = ({
  data,
  id,
  icon,
  badgeColor,
  status,
  statusColor,
  title,
  description,
  date,
  phase,
  budget,
  progress,
  users,
}) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const timeline = useAppSelector((state) => state.timeline.timelines)

  console.log('TIMELINE IS HERE NOW', data)

  useEffect(() => {
    setCurrentTime(new Date())
  }, [])

  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  // Convert from 24-hour to 12-hour format
  const twelveHour = hours % 12 || 12

  const setColorBasedOnStats = (status: string) => {
    switch(status) {
      case 'done':
        return 'badge-light-success'
      case 'in-progress':
        return 'badge-light-primary'
      default:
        return 'badge-light-warning'
    }
  }

  return (
    <div className='timeline-item'>
      {/* begin::Label */}
      <div className='timeline-label fw-bolder text-gray-800 fs-6'>{`${twelveHour}:${minutes
        .toString()
        .padStart(2, '0')} ${ampm}`}</div>
      {/* end::Label */}
      {/* begin::Badge */}
      <div className='timeline-badge'>
        <i className='fa fa-genderless text-warning fs-1'></i>
      </div>
      {/* end::Badge */}
      {/* begin::Text */}
      <div className='fw-mormal timeline-content text-muted ps-3'>
        <div className='card-toolbar ms-3'>
          <span className={`badge ${setColorBasedOnStats(data.taskStatus)} text-capitalize fw-bolder me-auto px-4 py-3`}>
            {data.taskStatus}
          </span>
        </div>
        <TaskCard
          data={data}
          progress={progress}
          statusColor={status}
          users={users}
        />
      </div>
      {/* end::Text */}
    </div>
  )
}

export default TimelineItem
