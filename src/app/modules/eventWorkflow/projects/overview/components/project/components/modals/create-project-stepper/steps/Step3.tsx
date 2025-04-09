/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { KTSVG } from '../../../../../../../../../../../_metronic/helpers'
import { StepProps } from '../IProjectModel'
import { Field, FieldArray } from 'formik'
import ProjectInnerModal from './components/modal'

const Step3 = ({ values, onChange, hasError }: any) => {
  const [locationId, setLocationId] = useState<string>('');
  const [showCreateProjectModal, setShowCreateProjectModal] = useState<boolean>(false)

  const handleModalClose = () => {
    if (showCreateProjectModal) setShowCreateProjectModal(false)
  }

  return (
    <div className='pb-5' data-kt-stepper-element='content'>
      <div className='w-100'>
        {values.eventDates.map((field: any, index: number) => (
          <div key={field.eventDateId}>
            <div className='fv-row mb-10 d-flex justify-content-between align-items-center'>
              <h4>Have you already booked a venue for Date {index + 1}?</h4>
              <div className='form-check form-switch form-check-custom form-check-solid'>
                <Field
                  className='form-check-input cursor-pointer'
                  name={`eventDates[${index}].eventLocation.hasBookedVenue`}
                  onChange={onChange}
                  type='checkbox'
                />
              </div>
            </div>
            {values.eventDates[index]?.eventLocation.hasBookedVenue && (
              <>
                <div className="notice d-flex justify-content-between mb-4 rounded border-primary border border-dashed p-6">
                  <div>
                    <h4>Complete Address</h4>
                    <div className='mw-300px text-muted'>
                      <div>
                        {`${values.eventDates[index]?.eventLocation.venueName}, ${values.eventDates[index]?.eventLocation.state}, ${values.eventDates[index]?.eventLocation.state}, ${values.eventDates[index]?.eventLocation.line2}`}
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href='#'
                      className='btn btn-info btn-sm'
                      onClick={() => {
                        setLocationId(values.eventDates[index].eventDateId)
                        setShowCreateProjectModal(true)
                      }}
                    >
                      Change
                    </a>
                  </div>
                </div>
                {locationId === field.eventDateId && <ProjectInnerModal id={locationId} show={showCreateProjectModal}
                  handleClose={() => setShowCreateProjectModal(false)}>
                  <div className='shadow mx-12 mt-12 border border-1'>
                    <div className='modal-header mb-8'>
                      <h2><i className='fa fa-map-marker-alt fa-1x text-info'></i> Add location details</h2>
                      {/* begin::Close */}
                      <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleModalClose}>
                        <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
                      </div>
                      {/* end::Close */}
                    </div>
                    <div className="modal-body">
                      <div className='fv-row mb-10 row'>
                        <div className="col-lg-4 col-sm-12 col-md-12">
                          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                            <span>Name of the Venue</span>
                            <i
                              className='fas fa-exclamation-circle ms-2 fs-7'
                              data-bs-toggle='tooltip'
                              title='Enter the Venue name'
                            ></i>
                          </label>
                          <Field
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            name={`eventDates[${index}].eventLocation.venueName`}
                          />
                          {/* {values.checkVenueBooking[index].isVenueBooked && !values.checkVenueBooking[index].venueName && hasError && (
                            <div className='fv-plugins-message-container'>
                              <div data-field={values.checkVenueBooking[index].venueName} data-validator='notEmpty' className='fv-help-block'>
                                Venue name is required
                              </div>
                            </div>
                          )} */}
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-12">
                          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                            <span>Country</span>
                            <i
                              className='fas fa-exclamation-circle ms-2 fs-7'
                              data-bs-toggle='tooltip'
                              title='Add country name'
                            ></i>
                          </label>
                          <Field
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            name={`eventDates[${index}].eventLocation.country`}
                          />
                          {/* {values.checkVenueBooking[index].isVenueBooked && !values.checkVenueBooking[index].venueName && hasError && (
                            <div className='fv-plugins-message-container'>
                              <div data-field={values.checkVenueBooking[index].venueName} data-validator='notEmpty' className='fv-help-block'>
                                Venue name is required
                              </div>
                            </div>
                          )} */}
                        </div>

                        <div className="col-lg-4 col-sm-12 col-md-12">
                          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                            <span>City</span>
                            <i
                              className='fas fa-exclamation-circle ms-2 fs-7'
                              data-bs-toggle='tooltip'
                              title='Add city name'
                            ></i>
                          </label>
                          <Field
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            name={`eventDates[${index}].eventLocation.city`}
                          />
                          {/* {values.checkVenueBooking[index].isVenueBooked && !values.checkVenueBooking[index].venueName && hasError && (
                            <div className='fv-plugins-message-container'>
                              <div data-field={values.checkVenueBooking[index].venueName} data-validator='notEmpty' className='fv-help-block'>
                                Venue name is required
                              </div>
                            </div>
                          )} */}
                        </div>
                      </div>
                      <div className='fv-row mb-10 row'>
                        <div className="col-lg-4 col-sm-12 col-md-12">
                          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                            <span>State</span>
                            <i
                              className='fas fa-exclamation-circle ms-2 fs-7'
                              data-bs-toggle='tooltip'
                              title='Add state'
                            ></i>
                          </label>
                          <Field
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            name={`eventDates[${index}].eventLocation.state`}
                          />
                          {/* {values.checkVenueBooking[index].isVenueBooked && !values.checkVenueBooking[index].venueName && hasError && (
                            <div className='fv-plugins-message-container'>
                              <div data-field={values.checkVenueBooking[index].venueName} data-validator='notEmpty' className='fv-help-block'>
                                Venue name is required
                              </div>
                            </div>
                          )} */}
                        </div>
                      </div>
                      <div className='fv-row mb-10 row'>
                        <div className="col-lg-6 col-sm-12 col-md-12">
                          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                            <span>Street</span>
                            <i
                              className='fas fa-exclamation-circle ms-2 fs-7'
                              data-bs-toggle='tooltip'
                              title='Add street number'
                            ></i>
                          </label>
                          <Field
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            name={`eventDates[${index}].eventLocation.street`}
                          />
                          {/* {values.checkVenueBooking[index].isVenueBooked && !values.checkVenueBooking[index].venueName && hasError && (
                            <div className='fv-plugins-message-container'>
                              <div data-field={values.checkVenueBooking[index].venueName} data-validator='notEmpty' className='fv-help-block'>
                                Venue name is required
                              </div>
                            </div>
                          )} */}
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-12">
                          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                            <span>Line 2</span>
                            <i
                              className='fas fa-exclamation-circle ms-2 fs-7'
                              data-bs-toggle='tooltip'
                              title='Enter the Venue address'
                            ></i>
                          </label>
                          <Field
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            name={`eventDates[${index}].eventLocation.line2`}
                          />
                          {/* {values.checkVenueBooking[index].isVenueBooked && !values.checkVenueBooking[index].venueAddress && hasError && (
                                <div className='fv-plugins-message-container'>
                                  <div data-field={values.checkVenueBooking[index].venueAddress} data-validator='notEmpty' className='fv-help-block'>
                                    Venue Address is required
                                  </div>
                                </div>
                              )} */}
                        </div>
                      </div>
                      <div>
                        <button onClick={handleModalClose} className="btn btn-info"><i className='fa fa-plus'></i> Save</button>
                      </div>
                    </div>
                  </div>
                </ProjectInnerModal>}
              </>
            )}
          </div>
        ))}
        {/*begin::Form Group */}
      </div>
    </div>
  )
}

export { Step3 }
