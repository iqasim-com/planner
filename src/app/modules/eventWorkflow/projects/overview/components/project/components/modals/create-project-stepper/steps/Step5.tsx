/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { KTSVG } from '../../../../../../../../../../../_metronic/helpers'
import { Field, FieldArray } from 'formik'
import ProjectInnerModal from './components/modal'
import PhoneInput from 'react-phone-input-2'
import { v1 as uuidv1 } from 'uuid';
import useCategoryHook from '../../../../../../../../../hooks/useCategoryHook'

const businessVerticals = [
  { value: '1 ', name: 'Event Planner ' },
  { value: '2', name: 'Photographer' },
  { value: '3', name: 'Videographer' },
  { value: '4', name: 'DJ' },
  { value: '5', name: 'Makeup Artist' },
  { value: '6', name: 'Hair Stylist' },
  { value: '7', name: 'Transportation' },
  { value: '8', name: 'Cake Artist' },
  { value: '9', name: 'Florist' },
  { value: '10', name: 'MC' },
  { value: '11', name: 'Officiant' },
  { value: '12 ', name: 'Venue Associate' },
  { value: '13', name: 'Other' }
]

const Step5 = ({ values, hasError, sfv }: any) => {
  const [showCreateProjectModal, setShowCreateProjectModal] = useState<boolean>(false)
  const [memberId, setMemberId] = useState<string>('');
  const [search, setSearch] = useState<string>()
  const [setBusinessVerticals] = useCategoryHook({options: businessVerticals})

  const onSearch = (e: any) => {
    setSearch(e.target.value)
  }

  const handleClose = () => {
    if (showCreateProjectModal) setShowCreateProjectModal(false)
  }

  return (
    <div className='pb-5' data-kt-stepper-element='content'>
      <div className='w-100'>
        <div className='fv-row mb-10'>
          <h3>Vendors</h3>
          <p className='text-muted'>Add vendors to your project for each day.</p>
          <div>
            {values.eventDates.map((field: any, index: number) => (
              <div key={field.id} className='border border-dashed border-2 p-3 mb-3'>
                {/* Render other fields in eventDate */}
                <FieldArray name={`eventDates[${index}].teamMembers`}>
                  {({ push: pushTeamMember, remove: removeTeamMember }) => (
                    <>
                      <div className="mb-3 pt-6">
                        <div className='d-flex justify-content-between'>
                          <p>Add vendors for Date {index + 1}</p>
                          <button
                            className='rounded-circle bg-white border border-1 border-info px-4 bg-hover-info text-hover-white'
                            type='button'
                            onClick={() =>
                              pushTeamMember({ id: uuidv1(), firstName: '', middleName: '', lastName: '', email: '', cellPhone: '', role: {name: '', value: 0} })
                            }
                          >
                            <i className='fa fa-add'></i>
                          </button>
                        </div>
                        <div>
                          <span className="badge badge-secondary me-3">Start Date: {values.eventDates[index].date}</span> <span className="badge badge-secondary">Start Time: {values.eventDates[index].startTime}</span>
                        </div>
                      </div>
                      {field.teamMembers.map((member: any, mIndex: number) => (
                        <div className='border border-1 mb-3' id={`kt_accordion_${mIndex}`} key={member.id}>
                          <div
                            className='d-flex justify-content-between align-items-center px-3'
                          >
                            <div
                              className='fs-4 fw-bold me-3 d-flex flex-wrap cursor-pointer py-2'
                            >
                              <span className='badge badge-info m-1'><i className='fa fa-user text-white me-2'></i>{field?.teamMembers[mIndex]?.firstName} {field?.teamMembers[mIndex]?.lastName}</span>
                              <span className='badge badge-info m-1'><i className='fa fa-phone text-white me-2'></i>{field?.teamMembers[mIndex]?.cellPhone}</span>
                              <span className='badge badge-info m-1'><i className='fa fa-circle-user text-white me-2'></i>{field?.teamMembers[mIndex]?.role.name}</span>
                            </div>
                            <div className='d-flex'>
                              <button
                                className='rounded-circle me-3 bg-transparent border border-1 border-info p-2 px-3 bg-hover-info text-hover-white'
                                type='button'
                                onClick={() => {
                                  setMemberId(member.id)
                                  setShowCreateProjectModal(true)
                                }}
                              >
                                <i className='fa fa-pencil text-info'></i>
                              </button>
                              {field.teamMembers.length > 0 && (
                                <button
                                  className='rounded-circle bg-transparent border border-1 border-danger p-2 px-3 bg-hover-danger text-hover-white'
                                  type='button'
                                  onClick={() => {
                                    if (window.confirm(`Are you sure you want to delete ${field?.teamMembers[mIndex]?.firstName} ${field?.teamMembers[mIndex]?.lastName} ?`)) {
                                      return removeTeamMember(mIndex)
                                    }
                                  }}
                                >
                                  <i className='fa fa-trash text-danger'></i>
                                </button>
                              )}
                            </div>
                          </div>
                          {memberId === member.id && <ProjectInnerModal id={member.id} show={showCreateProjectModal}
                            handleClose={() => setShowCreateProjectModal(false)}>
                            <div className='shadow mx-12 mt-12 border border-1'>
                              <div className='modal-header mb-8'>
                                <h2>Add Vendor</h2>
                                {/* begin::Close */}
                                <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
                                  <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
                                </div>
                                {/* end::Close */}
                              </div>
                              <div className='modal-body'>
                                <div className='row mb-10'>
                                  <div className="col-lg-6">
                                    <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                      <span>First Name</span>
                                      <i
                                        className='fas fa-exclamation-circle ms-2 fs-7'
                                        data-bs-toggle='tooltip'
                                        title='Enter First Name'
                                      ></i>
                                    </label>
                                    <Field
                                      type='text'
                                      className='form-control form-control-lg form-control-solid'
                                      name={`eventDates[${index}].teamMembers[${mIndex}].firstName`}
                                    />
                                  </div>
                                  <div className="col-lg-6">
                                    <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                      <span>Last Name</span>
                                      <i
                                        className='fas fa-exclamation-circle ms-2 fs-7'
                                        data-bs-toggle='tooltip'
                                        title='Enter Last Name'
                                      ></i>
                                    </label>
                                    <Field
                                      type='text'
                                      className='form-control form-control-lg form-control-solid'
                                      name={`eventDates[${index}].teamMembers[${mIndex}].lastName`}
                                    />
                                  </div>
                                </div>

                                <div className='row mb-10'>
                                  <div className="col-lg-6">
                                    <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                      <span>Email</span>
                                      <i
                                        className='fas fa-exclamation-circle ms-2 fs-7'
                                        data-bs-toggle='tooltip'
                                        title='Enter Email Address'
                                      ></i>
                                    </label>
                                    <Field
                                      type='text'
                                      className='form-control form-control-lg form-control-solid'
                                      name={`eventDates[${index}].teamMembers[${mIndex}].email`}
                                    />
                                  </div>
                                  <div className="col-lg-6">
                                    <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                      <span>Cell Phone</span>
                                      <i
                                        className='fas fa-exclamation-circle ms-2 fs-7'
                                        data-bs-toggle='tooltip'
                                        title='Enter Contact Number'
                                      ></i>
                                    </label>
                                    {/* <Field
                                          type='text'
                                          className='form-control form-control-lg form-control-solid'
                                          name={`eventDates[${index}].teamMembers[${mIndex}].contact`}
                                        /> */}
                                    <PhoneInput
                                      inputProps={{
                                        name: `eventDates[${index}].teamMembers[${mIndex}].cellPhone`,
                                        required: true,
                                        autoFocus: true
                                      }}
                                      country={'us'}
                                      inputClass='form-control'
                                      disableDropdown={true}
                                      disableCountryCode={false}
                                      inputStyle={{
                                        height: 'auto',
                                        width: '100%',
                                        background: 'transparent',
                                        borderColor: 'inherit',
                                        lineHeight: 'unset',
                                      }}
                                      dropdownClass='bg-light text-primary'
                                      value={member.cellPhone !== '' ? member.cellPhone : null}
                                      onChange={(val: any) => {
                                        sfv(`eventDates[${index}].teamMembers[${mIndex}].cellPhone`, val)
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className='row mb-10'>
                                  <div className="col-lg-6">
                                    <label className='form-label'>Business Verticals</label>
                                    <Field
                                      className='form-control form-control-lg form-control-solid'
                                      name={`eventDates[${index}].teamMembers[${mIndex}].role`}
                                      component='select'
                                      onChange={(e: any) => {
                                        setBusinessVerticals(e, `eventDates[${index}].teamMembers[${mIndex}].role`)
                                      }}
                                      value={values.eventDates[index].teamMembers[mIndex].role.value}
                                    >
                                      <option value='none'>None</option>
                                      {businessVerticals.map((ver) => (
                                        <option key={ver.value} value={ver.value}>
                                          {ver.name}
                                        </option>
                                      ))}
                                    </Field>
                                  </div>
                                </div>
                                <div>
                                  <button onClick={handleClose} className="btn btn-outline btn-outline-success"><i className='fa fa-plus text-success'></i> Add vendor</button>
                                </div>
                              </div>
                            </div>
                          </ProjectInnerModal>}
                          {/* {hasError && <p className='text-danger'>All fields are mandatory</p>} */}
                        </div>
                      ))}
                    </>
                  )}
                </FieldArray>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step5 }
