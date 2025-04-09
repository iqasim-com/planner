/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {IconUserModel} from '../ProfileModels'
import {UsersList} from '../UserList'
import {toAbsoluteUrl} from '../../../../../../../../../../../../_metronic/helpers'

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

const ToMeetingMinute: FC<any> = ({
  logoPath,
  isLogo,
  logoPosition,
  projectName,
  projectNumber,
  location,
  startDate,
  users = undefined,
}) => {
  /**
   * Function for setting logo position based on position
   * Position could be right | center
   * @param position {string}
   * @returns logoPosition
   */
  const setLogoPosition = (position: string) => {
    let finalPosition: string = ''
    switch (position) {
      case 'center':
        finalPosition = 'justify-content-center'
        break
      case 'right':
        finalPosition = 'justify-content-end'
        break
      default:
        break
    }

    return finalPosition
  }

  return (
    <Link
      to='/projects/PIM/project/overview/days/day/coordination/meeting-minutes/overview'
      className='card border border-2 border-gray-100 bg-gray-100'
    >
      {isLogo && (
        <div className={`card-header border-0 pt-9 ${setLogoPosition(logoPosition)} `}>
          <img src={toAbsoluteUrl(logoPath)} width='60' alt='card2' className='p-3' />

          {/* <div className='card-toolbar'>
          <span className={`badge badge-light-${badgeColor} fw-bolder me-auto px-4 py-3`}>
            {status}
          </span>
        </div> */}
        </div>
      )}

      <div className='card-body p-9'>
        <div className='fs-3 fw-bolder text-dark mb-5'>
          {projectName} <span className='badge badge-info'>{projectNumber}</span>
        </div>

        <div className='d-flex flex-wrap mb-5'>
          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>
            <div className='fs-6 text-gray-800 fw-bolder'>{startDate}</div>
            <div className='fw-bold text-gray-400'>
              <i className='fa fa-calendar'></i> Start Date
            </div>
          </div>

          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3'>
            <div className='fs-6 text-gray-800 fw-bolder'>{location}</div>
            <div className='fw-bold text-gray-400'>
              <i className='fa fa-map-marker'></i> Location
            </div>
          </div>
        </div>
        <hr />
        <UsersList users={users} />
      </div>
    </Link>
  )
}

export {ToMeetingMinute}
