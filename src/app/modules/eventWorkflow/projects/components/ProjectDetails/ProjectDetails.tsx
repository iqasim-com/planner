import React from 'react'
import {useLocation} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import useApiHook from '../../../../hooks/useApiHook'
import {GET_PROJECTS} from '../../../../auth/core/_requests'
import moment from 'moment'
import {Accordion, ToastContainer} from 'react-bootstrap'
import {openClientModal} from '../../overview/components/project/components/cards/modalslice'

import {useAppDispatch, useAppSelector} from '../../../../../../setup/store'
import CreateNewClientModal from '../../../members/clients/components/modals/create-new-client/CreateNewClient'

const ProjectDetails = () => {
  const {state}: any = useLocation()
  const [apiData, isLoading, fetchData] = useApiHook(`${GET_PROJECTS}${state.projectId}`)
  const isModalOpen = useAppSelector(state => state.createClientModal.openModals[apiData?.data?.project?.projectId])

  const dispatch = useAppDispatch()

  const handleSuccess = () => {
    console.log('refetch')
    fetchData()

    return (
      <ToastContainer
        position="top-start"
        draggable
      />
    )
  }

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='mb-8'>
            <h1>{apiData?.data.project.name}</h1>
            <p className='text-muted'>{apiData?.data.project.category?.name}</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='d-flex align-items-center mb-4'>
          <h1 className='text-success me-4'>Event Dates</h1>
          <button className='btn btn-outline btn-outline-light btn-sm'>
            <i className='fa fa-plus text-success'></i>
          </button>
        </div>
      </div>
      <div className='row g-4'>
        {apiData.data.project.eventDates.map((days: any, index: number) => (
          <div className='col-lg-12' key={index}>
            <Accordion defaultActiveKey='0'>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Date {index + 1}</Accordion.Header>
                <Accordion.Body>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item d-flex justify-content-between bg-transparent'>
                      <strong>Date:</strong>
                      <span>{moment(days.date).format('MMMM D, YYYY')}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between bg-transparent'>
                      <strong>Start/End Time:</strong>
                      <span>
                        {moment(days.startTime, 'HH:mm').format('h:mm A')} -{' '}
                        {moment(days.endTime, 'HH:mm').format('h:mm A')}
                      </span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between bg-transparent'>
                      <strong>Duration:</strong>
                      <span>{days.duration} hrs</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between bg-transparent'>
                      <strong>Target Budget ({days.currencyCode.name}):</strong>
                      <span>{days.targetTotalBudget}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between bg-transparent'>
                      <strong>Project Category:</strong>
                      <span>{apiData.data.project.category.name}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between bg-transparent'>
                      <strong>Adult Guests:</strong>
                      <span>{days.adultGuestCount}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between bg-transparent'>
                      <strong>Child Guests:</strong>
                      <span>{days.childGuestCount}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between bg-transparent'>
                      <strong>Vendor Guests:</strong>
                      <span>{days.vendorGuestCount}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between bg-transparent'>
                      <strong>Total Guests:</strong>
                      <span>
                        {days.adultGuestCount + days.childGuestCount + days.vendorGuestCount}
                      </span>
                    </li>
                  </ul>

                  {days.eventLocation.hasBookedVenue && (
                    <div className='mt-4'>
                      <h6 className='text-success'>Location</h6>
                      <div className='border rounded border-primary p-4'>
                        <p className='text-muted'>
                          {`${days.eventLocation.venueName}, ${days.eventLocation.state}, ${days.eventLocation.line2}`}
                        </p>
                      </div>
                    </div>
                  )}

                  {days.teamMembers.length > 0 && (
                    <div className='mt-4'>
                      <h6 className='text-success'>Team Members</h6>
                      {days.teamMembers.map((teamMember: any, index: number) => (
                        <div className='d-flex align-items-center mb-3' key={index}>
                          <div className='me-3'>
                            <img
                              src={toAbsoluteUrl('/media/avatars/300-6.jpg')}
                              alt=''
                              className='rounded-circle'
                              width='40'
                              height='40'
                            />
                          </div>
                          <div className='flex-grow-1'>
                            <strong>{`${teamMember.firstName} ${teamMember.lastName}`}</strong>
                            <p className='mb-0 text-muted'>
                              <i className='fa fa-phone me-1'></i>
                              {teamMember.contact}
                            </p>
                          </div>
                          <span className='badge bg-info'>{teamMember.role.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        ))}
      </div>

      <div className='separator my-6'></div>
      <div className='row mb-8'>
        <div className='d-flex mb-6 align-items-center'>
          <h1 className='text-success mb-0 me-4'>Clients</h1>
          <button className='btn btn-outline btn-sm btn-outline-light' onClick={() => {
            console.log('apiData', isModalOpen)
            if (apiData?.data.project.projectId) dispatch(openClientModal({ modalId: apiData?.data.project.projectId }));
          }}>
            <i className='fa fa-plus text-success'></i>
          </button>
        </div>
        {apiData?.data?.project?.clients?.map((client: any, index: number) => (
          <>
            <div className='col-md-4 mb-4' key={index}>
              <div className='card text-center'>
                {/* Avatar */}
                <div className='card-body'>
                  <div className='mb-3'>
                    <img
                      src={toAbsoluteUrl('/media/avatars/300-6.jpg')}
                      alt={`${client.firstName} ${client.lastName}`}
                      className='rounded-circle'
                      width={80}
                      height={80}
                    />
                  </div>
                  {/* Client Info */}
                  <h5 className='card-title mb-1'>
                    <a href='#' className='text-dark fw-bold text-hover-primary'>
                      {client.firstName} {client.lastName}
                    </a>
                  </h5>
                  <span className='badge bg-warning mb-2'>{client.role.name}</span>
                  {/* Contact Info */}
                  <div className='mt-3'>
                    <table className='table table-striped'>
                      <tbody>
                        <tr>
                          <th>
                            <i className='fa fa-phone me-2'></i> Phone
                          </th>
                          <td>{client.cellPhone}</td>
                        </tr>
                        <tr>
                          <th>
                            <i className='fa fa-envelope me-2'></i> Email
                          </th>
                          <td>{client.email}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <CreateNewClientModal data={apiData.data.project} onSuccess={handleSuccess} />
    </div>
  )
}

export default ProjectDetails
