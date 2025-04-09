/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type ClientInfoProps = {
  color?: string
  role?: string
  company?: string
  departmentScope?: string
  avatar?: string
  online?: boolean
  firstName: string
  lastName: string
  type?: string
  email: string
  contact: string
  stylesClasses?: string
}

const ClientInfoCard: FC<ClientInfoProps> = ({
  color = '',
  role,
  company,
  departmentScope,
  avatar = '',
  online = false,
  firstName,
  lastName,
  type,
  email,
  contact,
  stylesClasses,
}) => {
  return (
    <div className={`${stylesClasses} card`}>
      <div className='card-body d-flex flex-center flex-column p-9'>
        <div className='mb-5'>
          <div className='symbol symbol-75px symbol-circle'>
            {color ? (
              <span className={`symbol-label bg-light-${color} text-${color} fs-5 fw-bolder`}>
                {firstName + lastName}
              </span>
            ) : (
              <img alt='Client avatar' src={toAbsoluteUrl(avatar)} />
            )}
            {online && (
              <div className='symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3'></div>
            )}
          </div>
        </div>

        <a href='#' className='fs-4 text-gray-800 text-hover-primary fw-bolder mb-0'>
          {`${firstName} ${lastName}`}
        </a>

        {type ? <div className='fw-bold text-gray-400 mb-6'>{type}</div> : <div className='fw-bold text-gray-400 mb-6'>{role} { company ? company + '-' + departmentScope : '' }</div>}

        <div className='d-flex flex-center flex-wrap mb-5'>
          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3'>
            <div className='fs-6 text-center'>
              <i className='fa fa-envelope'></i>
            </div>
            <div className='fw-bold text-gray-400'>{email}</div>
          </div>

          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3'>
            <div className='fs-6 text-center'>
              <i className='fa fa-phone'></i>
            </div>
            <div className='fw-bold text-gray-400'>{contact}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ClientInfoCard}
