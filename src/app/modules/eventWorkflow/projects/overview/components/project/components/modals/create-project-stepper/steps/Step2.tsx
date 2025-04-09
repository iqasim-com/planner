import React, { useEffect, useState } from 'react'
import { Field, FieldArray } from 'formik'
import ProjectInnerModal from './components/modal'
import { KTSVG } from '../../../../../../../../../../../_metronic/helpers'
import moment from 'moment'
import { v1 as uuidv1 } from 'uuid'
import useCategoryHook from '../../../../../../../../../hooks/useCategoryHook'
import DatePicker from 'react-datepicker'

const currencies = [
  { name: 'USD', value: 1 },
  { name: 'PKR', value: 2 }
]

const eventDateCategories = [
  { name: 'Wedding', value: 1 },
  { name: 'Category 2', value: 2 }
]

const Step2 = ({ values, setFieldValue }: any) => {
  const [daysId, setDaysId] = useState<string>('');
  const [showCreateProjectModal, setShowCreateProjectModal] = useState<boolean>(false)
  const [minDate, setMinDate] = useState<string>()
  const [categorySelection] = useCategoryHook({ options: currencies })
  const [eventDateCategory] = useCategoryHook({ options: eventDateCategories })

  const handleClose = () => {
    if (showCreateProjectModal) setShowCreateProjectModal(false)
  }

  const minDateSet = () => {
    let date = moment().format('YYYY-MM-DD');
    setMinDate(date)
  }

  const checkValidation = () => {
    if (!values.eventDates.every((day: any) =>
      day.date && day.startTime && day.duration && day.eventDateCategory && day.targetTotalBudget && day.currencyCode.value
    )) {
      return true
    }
  }

  useEffect(() => {
    values.eventDates.forEach((date: any, index: number) => {
      if (date.eventDateId === daysId) {
        setFieldValue(`eventDates[${index}].guestCount`, date.adultGuestCount)
      }
    })
  }, [values.eventDates, daysId])

  useEffect(() => {
    minDateSet()
    const newDaysFields: number[] = []
    for (let i = 0; i < values.howManyDays; i++) {
      if (i < 4) {
        newDaysFields.push(i)
      }
    }
  }, [values.howManyDays, minDateSet])

  const countGuests = (field: any) => {
    const totalGuestCount =
      (parseInt(field.adultGuestCount) || 0) +
      (parseInt(field.childGuestCount) || 0) +
      (parseInt(field.vendorGuestCount) || 0)
    return totalGuestCount
  }

  const findDiffInStartAndEndTime = (startTime: any, endTime: any) => {
    // Ensure both startTime and endTime are in the same format
    const start = moment(startTime, "hh:mm:ss A")
    debugger

    // Add seconds to the endTime if they are missing
    const end = moment(endTime.length === 5 ? `${endTime}:00` : endTime, "hh:mm:ss A")

    // If the end time is before the start time (i.e., end time is after midnight), add 1 day
    if (end.isBefore(start)) {
      end.add(1, 'day')
    }

    // Calculate the difference in hours and minutes
    const hours = end.diff(start, 'hours')
    const minutes = end.diff(start, 'minutes') % 60  // Get the remainder after hours

    // Format the result as "H:mm"
    const diff = `${hours}.${minutes < 10 ? '0' : ''}${minutes}`
    return diff
  }

  return (
    <div className='pb-5' data-kt-stepper-element='content'>
      <div className='w-100'>
        <div>
          <div className='fv-row mb-10'>
            <h3>How many days?</h3>
            <p className='text-primary'>You can add max 5 days</p>
          </div>
          <FieldArray name='eventDates'>
            {({ push, remove }) => (
              <>
                {values.eventDates.map((field: any, index: number) => (
                  <div className='accordion' id={`kt_accordion_${index}`} key={field.eventDateId}>
                    <div className='accordion-item mb-3'>
                      <h2
                        className='accordion-header d-flex align-items-center justify-content-between'
                        id='kt_accordion_1_header_1'
                      >
                        <button
                          className='accordion-button fs-4 fw-bold'
                          type='button'
                          aria-expanded='false'
                          onClick={() => {
                            setDaysId(field.eventDateId)
                            setShowCreateProjectModal(true)
                          }}
                          aria-controls='kt_accordion_1_body_1'
                        >
                          {values.eventDates.length > 0 ? values.eventDates.map((eventDate: any, ind: number) => {
                            if (ind === index) {
                              return (
                                <>
                                  <span className='badge badge-info me-2'>Date: {eventDate.date}</span>
                                  <span className='badge badge-info'>Start Time: {eventDate.startTime}</span>
                                </>
                              )
                            }
                          }) : 'Date'}
                        </button>
                        {index === values.eventDates.length - 1 && index <= 3 && (
                          <button
                            className='btn btn-sm btn-primary me-2'
                            type='button'
                            id='kt_modal_create_project_inner_modal'
                            onClick={() => {
                              push({
                                eventDateId: uuidv1(),
                                date: '',
                                startTime: '',
                                endTimne: '',
                                duration: '',
                                adultGuestCount: 0,
                                childGuestCount: 0,
                                vendorGuestCount: 0,
                                targetTotalBudget: '',
                                currencyCode: {
                                  name: '',
                                  value: 0,
                                },
                                eventLocation: {
                                  hasBookedVenue: false,
                                  venueName: '',
                                  street: '',
                                  line2: '',
                                  city: '',
                                  state: '',
                                  country: '',
                                },
                                eventDateCategory: {
                                  name: '',
                                  value: 0,
                                },
                                guests: [],
                                teamMembers: [],
                                vendors: [],
                                guestCount: ''
                              })
                            }
                            }
                          >
                            <i className='fa fa-add'></i>
                          </button>
                        )}
                        {values.eventDates.length > 1 && (
                          <button
                            className='btn btn-danger me-2'
                            type='button'
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete the date?')) {
                                return remove(index)
                              }
                            }}
                          >
                            <i className='fa fa-trash'></i>
                          </button>
                        )}
                      </h2>
                      {daysId === field.eventDateId && <ProjectInnerModal id={field.eventDateId} show={showCreateProjectModal}
                        handleClose={() => setShowCreateProjectModal(false)}>
                        <div className='shadow mx-12 mt-12 border border-1'>
                          <div className='modal-header mb-8'>
                            <h2>Add Day Details</h2>
                            {/* begin::Close */}
                            <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
                              <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
                            </div>
                            {/* end::Close */}
                          </div>
                          <div className="modal-body">
                            <div className='fv-row mb-10 row'>
                              <div className="col-lg-4 col-sm-12 col-md-12">
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span className='required'>Date</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter the event date'
                                  ></i>
                                </label>
                                {/* <Field
                                  type='date'
                                  min={minDate}
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].date`}
                                /> */}
                                <DatePicker
                                  minDate={new Date()}
                                  // excludeDates={
                                  //   index > 0 && values.eventDates[0].date // Exclude date from the first object for subsequent DatePickers
                                  //     ? [new Date(moment(values.eventDates[0].date, 'DD-MM-YYYY').toISOString())]
                                  //     : []
                                  // }
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].date`}
                                  placeholderText='Select Date'
                                  value={values.eventDates[index].date}
                                  onChange={(date: any) => setFieldValue(`eventDates[${index}].date`, moment(date).format('YYYY-MM-DD'))} />
                              </div>
                              <div className='col-lg-4 col-sm-12 col-md-12'>
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span className='required'>Start Time</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter the event start time'
                                  ></i>
                                </label>
                                {/* <Field
                                  type='time'
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].startTime`}
                                  onChange={(e: any) => {
                                    setFieldValue(`eventDates[${index}].startTime`, e.target.value + ':00')
                                  }}
                                /> */}
                                <DatePicker
                                  onChange={(date: any) => {
                                    setFieldValue(`eventDates[${index}].startTime`, moment(date).format('hh:mm:ss'))
                                    console.log('time', date)
                                  }}
                                  name={`eventDates[${index}].startTime`}
                                  showTimeSelect
                                  minDate={new Date()}
                                  className='form-control form-control-lg form-control-solid border'
                                  value={values.eventDates[index].startTime}
                                  showTimeSelectOnly
                                  timeIntervals={15}
                                  placeholderText='Select Start Time'
                                  timeCaption="Time"
                                  dateFormat="hh:mm:ss"
                                />
                              </div>
                              <div className='col-lg-4 col-sm-12 col-md-12'>
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span className='required'>End Time</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter the event end time'
                                  ></i>
                                </label>
                                {/* <Field
                                  type='time'
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].endTimne`}
                                  onChange={(e: any) => {
                                    setFieldValue(`eventDates[${index}].endTimne`, e.target.value)
                                    setFieldValue(`eventDates[${index}].duration`, findDiffInStartAndEndTime(field.startTime, e.target.value))
                                  }}
                                /> */}
                                <DatePicker
                                  onChange={(time: any) => {
                                    setFieldValue(`eventDates[${index}].endTimne`, moment(time).format('h:mm'))
                                    setFieldValue(`eventDates[${index}].duration`, findDiffInStartAndEndTime(field.startTime, moment(time).format('h:mm')))
                                  }}
                                  name={`eventDates[${index}].endTimne`}
                                  showTimeSelect
                                  minDate={new Date()}
                                  className='form-control form-control-lg form-control-solid border'
                                  value={values.eventDates[index].endTimne}
                                  showTimeSelectOnly
                                  timeIntervals={15}
                                  placeholderText='Select End Time'
                                  timeCaption="Time"
                                  dateFormat="h:mm"
                                />
                              </div>
                            </div>

                            {/*begin::Form Group */}
                            <div className='fv-row mb-10 row'>
                              <div className='col-lg-3 col-sm-12 col-md-12'>
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span className='required'>Event Duration</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Add Event duration in hours'
                                  ></i>
                                </label>
                                <Field
                                  type='number'
                                  placeholder='Event Duration'
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].duration`}
                                />
                              </div>
                              <div className='col-lg-3 col-sm-12 col-md-12'>
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span>Guest Count</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter the guest count'
                                  ></i>
                                </label>
                                <Field
                                  type='number'
                                  value={countGuests(field)}
                                  readOnly
                                  placeholder='Guest count'
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].guestCount`}
                                />
                              </div>
                            </div>
                            {/*begin::Form Group */}
                            <div className='fv-row mb-10 row'>
                              <div className='col-lg-6 col-sm-12 col-md-12'>
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span>Adult Guest Count</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Adult Guest Count'
                                  ></i>
                                </label>
                                <Field
                                  type='number'
                                  min={0}
                                  placeholder='Adult Guest Count'
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].adultGuestCount`}
                                />
                              </div>
                              <div className='col-lg-6 col-sm-12 col-md-12'>
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span>Child Guest Count</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter Child Guest Count'
                                  ></i>
                                </label>
                                <Field
                                  type='number'
                                  min={0}
                                  placeholder='Child Guest count'
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].childGuestCount`}
                                />
                              </div>
                            </div>
                            {/*end::Form Group */}

                            <div className='fv-row mb-10 row'>
                              <div className='col-lg-6 col-sm-12 col-md-12'>
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span>Vendor Guest Count</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter Vendor Guest Count'
                                  ></i>
                                </label>
                                <Field
                                  type='text'
                                  placeholder='Enter Vendor Guest Count'
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].vendorGuestCount`}
                                />
                              </div>
                              <div className='col-lg-6 col-sm-12 col-md-12'>
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span className='required'>Event Date Category</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter Event Category'
                                  ></i>
                                </label>
                                <Field
                                  type='text'
                                  component='select'
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].eventDateCategory`}
                                  onChange={(e: any) => {
                                    eventDateCategory(e, `eventDates[${index}].eventDateCategory`)
                                  }}
                                  value={values.eventDates[index].eventDateCategory.value}
                                >
                                  <option value='none'>Choose Category</option>
                                  {eventDateCategories.map(obj => {
                                    return (
                                      <option key={obj.value} value={obj.value}>
                                        {obj.name}
                                      </option>
                                    )
                                  })}
                                </Field>
                              </div>
                            </div>

                            {/*begin::Form Group */}
                            <div className='fv-row mb-10 row'>
                              <div className="col-lg-6 col-sm-12 col-md-12">
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span>Target Total Budget</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter the project budget'
                                  ></i>
                                </label>
                                <Field
                                  type='number'
                                  placeholder='$12000'
                                  min='0'
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].targetTotalBudget`}
                                />
                              </div>
                              <div className="col-lg-6 col-sm-12 col-md-12">
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span className='required'>Currency</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Select the currency'
                                  ></i>
                                </label>
                                <Field
                                  type='text'
                                  component='select'
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`eventDates[${index}].currencyCode`}
                                  onChange={(e: any) => {
                                    categorySelection(e, `eventDates[${index}].currencyCode`)
                                  }}
                                  value={values.eventDates[index].currencyCode.value}
                                >
                                  <option value='none'>Choose Currency</option>
                                  {currencies.map(obj => {
                                    return (
                                      <option key={obj.value} value={obj.value}>
                                        {obj.name}
                                      </option>
                                    )
                                  })}
                                </Field>
                              </div>
                            </div>
                            <div>
                              <button disabled={checkValidation()} onClick={handleClose} className="btn btn-outline btn-outline-success"><i className='fa fa-plus'></i> Save</button>
                            </div>
                          </div>
                        </div>
                      </ProjectInnerModal>}
                    </div>
                  </div>
                ))}
              </>
            )}
          </FieldArray>
          {values.eventDates.length <= 1 ? <p className='text-muted'><i className='fa fa-info-circle'></i> You must add at least a date.</p> : ''}
        </div>
      </div>
    </div>
  )
}

export { Step2 }
