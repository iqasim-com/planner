/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../../../../../../../../_metronic/helpers'
import ProjectInnerModal from './components/modal'
import moment from 'moment'

const Step6 = ({ values }: any) => {
  const [previewDetailsModal, setPreviewDetailsModal] = useState<boolean>(false)

  const handleClose = () => {
    if (previewDetailsModal) setPreviewDetailsModal(false)
  }

  return (
    <>
      <div data-kt-stepper-element='content'>
        <div className='w-100 text-center'>
          <div className="d-flex justify-content-between align-items-center">
            {/* begin::Heading */}
            <h1 className='fw-bold text-dark m-0'>Almost Done!</h1>
            {/* end::Heading */}
            <button type='button' onClick={() => setPreviewDetailsModal(true)} className="btn btn-sm btn-info"><i className='fa fa-eye'></i> Preview</button>
          </div>

          {/* begin::Illustration */}
          <div className='text-center px-4 py-15'>
            <img
              src={toAbsoluteUrl('/media/illustrations/sketchy-1/1.png')}
              alt=''
              className='mw-100 mh-300px'
            />
          </div>

          <ProjectInnerModal id={'previewDetails'} show={previewDetailsModal}
            handleClose={() => setPreviewDetailsModal(false)}>
            <div className='shadow mx-12 mt-12 border border-1'>
              <div className='modal-header bg-success p-3'>
                <div>
                  <h2>Preview Details</h2>
                </div>
                {/* begin::Close */}
                <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
                </div>
                {/* end::Close */}
              </div>
              <div className='modal-body'>
                {/* <div className="row">
                  <div className="col-lg-12">
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, enim.</p>
                  </div>
                </div> */}
                <div className='row'>
                  <div className="col-lg-6">
                    <div className='mb-8'>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-transparent d-flex justify-content-between"><h3>Project Name:</h3> {values.name}</li>
                        <li className="list-group-item bg-transparent d-flex justify-content-between"><h3>Project Category:</h3> {values.category.name}</li>
                      </ul>
                    </div>
                    <div>
                      <h1 className='text-success mb-6'>Clients</h1>
                      {values.clients.map((client: any, index: number) => (
                        <>
                          <div className='d-flex align-items-center mb-7'>
                            {/* begin::Avatar */}
                            <div className='symbol symbol-50px me-5'>
                              <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} className='' alt='' />
                            </div>
                            {/* end::Avatar */}
                            {/* begin::Text */}
                            <div className='flex-grow-1 d-flex justify-content-between'>
                              <div>
                                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                                  {`${client.firstName} ${client.lastName}`}
                                </a>
                                <span className='text-muted d-block fw-semibold'><i className='fa fa-phone'></i> {client.contact}</span>
                              </div>
                              <div>
                                <span className='badge badge-info'>{client.role.name}</span>
                                <p>{client.email}</p>
                              </div>
                            </div>
                            {/* end::Text */}
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  {/* <div className="col-lg-6 border border-1">
                    <>COST</>
                  </div> */}
                </div>
                <div className="separator my-10"></div>
                <div className="row">
                  {values.eventDates.map((days: any, index: number) => (
                    <div className="col-lg-6">
                      <div className='d-flex justify-content-between align-items-center'>
                        <h1><i className='fa fa-calendar fa-1x text-success'></i> Date {index + 1} </h1>
                        <span className='badge badge-info'>{moment(days.date).format("MMMM D, YYYY")}</span>
                      </div>
                      <div className="border border-1 mb-3">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item bg-transparent d-flex justify-content-between"><h5 className='text-success'>Start/End Time</h5> {moment(days.startTime, "HH:mm").format("h:mm A") + ' -- ' + moment(days.endTime, "HH:mm").format("h:mm A")}</li>
                          <li className="list-group-item bg-transparent d-flex justify-content-between"><h5>Target Budget ({days.currencyCode.name}):</h5> {days.targetTotalBudget}</li>
                          <li className="list-group-item bg-transparent d-flex justify-content-between"><h5>Project Category:</h5> {values.category.name}</li>
                          <li className="list-group-item bg-transparent d-flex justify-content-between"><h5>Adult Guests:</h5> {days.adultGuestCount}</li>
                          <li className="list-group-item bg-transparent d-flex justify-content-between"><h5>Child Guests:</h5> {days.childGuestCount}</li>
                          <li className="list-group-item bg-transparent d-flex justify-content-between"><h5 className='text-success'>Duration:</h5> {days.duration}</li>
                          <li className="list-group-item bg-transparent d-flex justify-content-between"><h5>Guests:</h5> {days.guestCount}</li>
                          <li className="list-group-item bg-transparent d-flex justify-content-between"><h5>Vendor Guests:</h5> {days.vendorGuestCount}</li>
                        </ul>

                        <div className='p-3'>
                          {days.eventLocation.hasBookedVenue && <h3 className='text-success mb-6'>Location</h3>}
                          {days.eventLocation.hasBookedVenue && <div className="notice d-flex justify-content-between mb-4 rounded border-primary border border-dashed p-6">
                            <div>
                              <h4>Complete Address</h4>
                              <div className='mw-300px text-muted'>
                                <div>
                                  {`${days.eventLocation.venueName}, ${days.eventLocation.state}, ${days.eventLocation.state}, ${days.eventLocation.line2}`}
                                </div>
                              </div>
                            </div>
                          </div>}
                        </div>

                        <div className='p-3'>
                          <h3 className='text-success mb-6'>Team Members</h3>
                          {days.teamMembers.map((teamMember: any, index: number) => (
                            <>
                              <div className='d-flex align-items-center mb-7'>
                                {/* begin::Avatar */}
                                <div className='symbol symbol-50px me-5'>
                                  <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} className='' alt='' />
                                </div>
                                {/* end::Avatar */}
                                {/* begin::Text */}
                                <div className='flex-grow-1 d-flex justify-content-between'>
                                  <div>
                                    <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                                      {`${teamMember.firstName} ${teamMember.lastName}`}
                                    </a>
                                    <span className='text-muted d-block fw-semibold'><i className='fa fa-phone'></i> {teamMember.contact}</span>
                                  </div>
                                  <div>
                                    Role: <span className="badge badge-info">{teamMember.role.name}</span>
                                  </div>
                                </div>
                                {/* end::Text */}
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ProjectInnerModal>
          {/* end::Illustration */}
        </div>
      </div>
    </>
  )
}

export { Step6 }