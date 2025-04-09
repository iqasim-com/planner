/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../../../../../../../_metronic/helpers'
import CreateNewClientModal from '../../../../../../members/clients/components/modals/create-new-client/CreateNewClient'

type Props = {
  title: string
  data?: any,
  clientHandler: (val: any, projectId: string) => void,
  isLoading?: boolean
}

const ToProjectCard = ({
  title,
  data,
  clientHandler,
  isLoading
}: Props) => {

  return (
    <div className="card">
      <div className='card-header border-0'>
        {/* begin::Title */}
        <h3 className='card-title m-0 align-items-center'>
          <Link to={'/projects/projectDetails'} state={{ projectId: data.projectId }}>
            <i className="fa fa-xl me-4 text-light-primary text-hover-primary fa-eye"></i>
          </Link>
          <span className='card-label fw-bold fs-5 text-success'>{title}</span>
        </h3>
      </div>

      <div className={`card border border-2 border-gray-300`}>
        <Link to={`/projects/project/days/${data.projectId}`} state={{ projectID: data.projectId }}>
          <div className='card-body p-3 bg-hover-light-secondary'>
            <div className='d-flex align-items-center'>
              <h6 className='text-success me-3 mb-0'>Category</h6>
              <span className="badge badge-info">{data.category.name}</span>
            </div>
            <hr />
            <div className='d-flex flex-wrap'>
              {data?.eventDates?.map((day: any, index: number) => (
                <div
                  className='border border-gray-300 border-dashed rounded py-3 px-4 me-3 mb-3'
                  key={day.id}
                >
                  <span className='badge badge-info mb-2'>Date {index + 1}</span>
                  <div className='fs-6 text-gray-800 fw-bolder'>{day.date}</div>
                  <div className='fw-bold text-gray-400'>Event Date</div>
                </div>
              ))}
            </div>
          </div>
        </Link>
        <div className="card-footer p-3">
          <div className='d-flex align-items-center'>
            <div className='text-dark me-2 fw-bold'>Clients</div>
            <div className='d-flex align-items-center'>
              <div className='symbol-group symbol-hover d-flex justify-content-between align-items-center'>
                <div>
                  {data.clients.map((client: any, index: number) => (
                    <div className='symbol symbol-circle symbol-25px'>
                      <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='img' title={`${client.firstName} ${client.lastName}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreateNewClientModal data={data} />
    </div>
  )
}

export { ToProjectCard }