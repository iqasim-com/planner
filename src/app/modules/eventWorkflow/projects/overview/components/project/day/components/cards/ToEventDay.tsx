/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IconUserModel } from '../../DaysModels'
import { UsersList } from './UserList'
import { toAbsoluteUrl } from '../../../../../../../../../../_metronic/helpers'
import { useAppDispatch, useAppSelector } from '../../../../../../../../../../setup/store'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
// import {removeEventDay} from '../../../../../../redux/projectBoard/createProjectSlice'

type Props = {
  icon: string
  badgeColor: string
  status: string
  statusColor: string
  title: string
  description: string
  date: string
  budget: string
  progress: number
  users?: Array<IconUserModel>
}

const ToEventDay: FC<any> = ({
  data,
  projectId
}) => {
  return (
    <div className='card border border-2 border-gray-300 bg-hover-light-secondary'>
      <Link to={`/projects/project/days/day/${projectId}/event-dates/${data.eventDateId}/phase`} state={{ eventDateId: data.eventDateId, projectId }}>
        <div className="card-header d-flex justify-content-between align-items-center p-3">
          <div>
            <span className="badge badge-info">{data?.eventDateCategory?.name}</span>
          </div>
          <div>
            <p className="m-0 text-dark"><i className="text-success fa fa-calendar-check me-2"></i>{data.date}</p>
          </div>
        </div>
        <div className='card-body p-4'>
          <div className='d-flex justify-content-between align-items-center mb-4'>
            <div>
              <i className='fa fa-6x text-success fa-calendar-check'></i>
              {/* <p>Budget</p>
            <h1 className='display-3'>{data.targetTotalBudget}</h1> */}
            </div>
            <div className='w-75'>
              <div className="d-flex text-muted justify-content-between mb-3 align-items-center border border-bottom-dotted border-0 border-bottom-1 py-2">
                <p className="m-0"><i className='fa fa-clock text-primary'></i> Start Time</p>
                <p className="m-0">{data.startTime}</p>
              </div>
              <div className="d-flex text-danger justify-content-between mb-3 align-items-center border border-bottom-dotted border-0 border-bottom-1 py-2">
                <p className="m-0"><i className='fa fa-clock text-danger'></i> End Time</p>
                <p className="m-0">{data.endTime}</p>
              </div>
              <div className="d-flex text-muted justify-content-between mb-3 align-items-center border border-bottom-dotted border-0 border-bottom-1 py-2">
                <p className="m-0">Guest Count</p>
                <p className="m-0">{data?.childGuestCount + data?.adultGuestCount + data?.vendorGuestCount}</p>
              </div>
            </div>
          </div>
          <p className='text-dark'><i className='fa fa-money-check text-success'></i> Budget</p>
          <div className='d-flex'>
            <h1 className="display-5 text-success me-2">{data.currencyCode.name}</h1>
            <h1 className="display-5 text-success">{data.targetTotalBudget}</h1>
          </div>

          {/* <div className='d-flex justify-content-between'>
            <div>
              <b><i className='fa fa-wallet'></i> Currency:</b> <span className='text-uppercase'>{data.currencyCode.name}</span>
            </div>
            <div>
              {data.projectBudget && <><b>Project Budget:</b> <span>{data.projectBudget}</span></>}
            </div>
          </div> */}
        </div>
        <div className="card-footer">
          <span className="me-3 badge badge-info">Phases {data.phases.length}</span>
          <span className="me-3 badge badge-info">Team Members {data.teamMembers.length}</span>
          <span className="me-3 badge badge-info">Vendors {data.vendors.length}</span>
        </div>
      </Link>
    </div>
  )
}

export { ToEventDay }
