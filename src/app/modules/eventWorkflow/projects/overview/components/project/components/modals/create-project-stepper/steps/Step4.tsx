/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { KTSVG } from '../../../../../../../../../../../_metronic/helpers'
import { StepProps } from '../IProjectModel'
import { Field, FieldArray } from 'formik'
import ProjectInnerModal from './components/modal'
import PhoneInput from 'react-phone-input-2'
import { v1 as uuidv1 } from 'uuid'
import useCategoryHook from '../../../../../../../../../hooks/useCategoryHook'

const clientTypes = [
  { name: 'Groom', value: 1 },
  { name: 'Bride', value: 2 },
  { name: 'Best Man', value: 3 },
  { name: 'Maid of Honor', value: 4 },
  { name: 'Guest', value: 5 },
  { name: 'Officiant', value: 6 }
]

const Step4 = ({ values, hasError, sfv }: any) => {
  const [clients, setClients] = useState<any[]>([''])
  const [clientId, setClientId] = useState<string>('');
  const [search, setSearch] = useState<string>()
  const [showCreateProjectModal, setShowCreateProjectModal] = useState<boolean>(false)
  const [setClientType] = useCategoryHook({ options: clientTypes })

  const onSearch = (e: any) => {
    setSearch(e.target.value)
  }

  const handleClose = () => {
    if (showCreateProjectModal) setShowCreateProjectModal(false)
  }

  const handleRemoveFields = (index: number) => {
    const values = [...clients]
    values.splice(index, 1)
    setClients(values)
  }

  const handleAddFields = () => {
    setClients([...clients, ''])
  }

  console.log(values)

  const checkValidation = () => {
    if (!values.clients.every((client: any) =>
      client.firstName && client.lastName && client.email && client.cellPhone && client.role.name
    )) {
      return true
    }
  }

  const checkProjectCategory = (category: string, clientTypes: any[]) => {
    // Return filtered client types based on category
    return clientTypes.map((client) => {
      if (category !== 'Wedding') {
        // Only return clients that are not Groom or Bride for non-Wedding categories
        if (client.name !== 'Groom' && client.name !== 'Bride') {
          return (
            <option key={client.value} value={client.value}>
              {client.name}
            </option>
          )
        }
      } else {
        // Return all client types for 'Wedding'
        return (
          <option key={client.value} value={client.value}>
            {client.name}
          </option>
        )
      }
      return null; // Important to return null for the invalid conditions
    });
  };

  return (
    <div className='pb-5' data-kt-stepper-element='content'>
      <div className='w-100'>
        <div className='fv-row mb-4'>
          <h2 className='me-3'><i className='fa fa-users fa-1x text-info'></i> Clients</h2>
          <p className='text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit vitae blanditiis itaque numquam, quaerat minima nesciunt soluta dignissimos doloribus assumenda.</p>
        </div>

        <FieldArray name='clients'>
          {({ push, remove }) => (
            <>
              {values.clients.map((field: any, index: number) => (
                <div key={field.id}>
                  <div className='accordion' id={`kt_accordion_${index}`}>
                    <div className='accordion-item mb-3'>
                      <h2
                        className='accordion-header d-flex justify-content-center align-items-center'
                        id='kt_accordion_1_header_1'
                      >
                        <button
                          className='accordion-button fs-4 fw-bold collapsed me-3'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target={`#kt_accordion_1_body_${index}`}
                          aria-expanded='false'
                          aria-controls='kt_accordion_1_body_1'
                          onClick={() => {
                            setClientId(field.id)
                            setShowCreateProjectModal(true)
                          }}
                        >
                          <small><span className='me-3'>Client:</span> <span className='badge badge-info me-3'> {field.firstName + ' ' + field.lastName}</span></small>
                          <small><span className='me-3'>Role:</span> <span className='badge badge-info'> {field.role.name}</span></small>
                        </button>
                        {index === values.clients.length - 1 && (
                          <button
                            className='btn btn-primary btn-sm me-2'
                            type='button'
                            onClick={() =>
                              push({
                                id: uuidv1(),
                                firstName: '',
                                lastName: '',
                                middleName: '',
                                email: '',
                                cellPhone: '',
                                role: {
                                  name: '',
                                  value: 0
                                }
                              })
                            }
                          >
                            <i className='fa fa-add'></i>
                          </button>
                        )}
                        {values.clients.length > 1 && (
                          <button
                            className='btn btn-danger btn-sm me-2'
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
                      {clientId === field.id && <ProjectInnerModal id={field.id} show={showCreateProjectModal}
                        handleClose={() => setShowCreateProjectModal(false)}>
                        <div className='shadow mx-12 mt-12 border border-1'>
                          <div className='modal-header mb-8'>
                            <h2>Add New Client</h2>
                            {/* begin::Close */}
                            <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
                              <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
                            </div>
                            {/* end::Close */}
                          </div>
                          <div className='modal-body'>
                            <div className='row mb-10'>
                              <div className="col-lg-4">
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span className='required'>First Name</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter First Name'
                                  ></i>
                                </label>
                                <Field
                                  type='text'
                                  className='form-control form-control-lg form-control-solid'
                                  name={`clients[${index}].firstName`}
                                />
                              </div>
                              <div className="col-lg-4">
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span>Middle Name</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter Middle Name'
                                  ></i>
                                </label>
                                <Field
                                  type='text'
                                  className='form-control form-control-lg form-control-solid'
                                  name={`clients[${index}].middleName`}
                                />
                              </div>
                              <div className="col-lg-4">
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span className='required'>Last Name</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter Last Name'
                                  ></i>
                                </label>
                                <Field
                                  type='text'
                                  className='form-control form-control-lg form-control-solid'
                                  name={`clients[${index}].lastName`}
                                />
                              </div>
                            </div>

                            <div className='row mb-10'>
                              <div className="col-lg-6">
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span className='required'>Client Email</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter Email Address'
                                  ></i>
                                </label>
                                <Field
                                  type='text'
                                  className='form-control form-control-lg form-control-solid'
                                  name={`clients[${index}].email`}
                                />
                              </div>
                              <div className="col-lg-6">
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span className='required'>Client Contact</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter Contact Number'
                                  ></i>
                                </label>
                                <PhoneInput
                                  inputProps={{
                                    name: `clients[${index}].cellPhone`,
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
                                  value={field.cellPhone !== '' ? field.cellPhone : null}
                                  onChange={(val: any) => {
                                    sfv(`clients[${index}].cellPhone`, val)
                                  }}
                                />
                              </div>
                            </div>

                            {/* Will display if type is client */}
                            <div className='row mb-10'>
                              <div className="col-lg-6">
                                <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                                  <span className='required'>Client Role</span>
                                  <i
                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                    data-bs-toggle='tooltip'
                                    title='Enter Role'
                                  ></i>
                                </label>
                                <Field
                                  type='text'
                                  component='select'
                                  className='form-control form-control-lg form-control-solid border'
                                  name={`clients[${index}].role`}
                                  onChange={(e: any) => {
                                    setClientType(e, `clients[${index}].role`)
                                  }}
                                  value={values.clients[index].role.value}
                                >
                                  <option value="none">Choose role</option>
                                  {checkProjectCategory(values.category.name, clientTypes)}
                                </Field>
                              </div>
                            </div>
                            <div className='card-footer'>
                              <button onClick={handleClose} className="btn btn-outline btn-outline-success"><i className='fa fa-plus'></i> Add Client</button>
                            </div>
                            {/*end::Form Group */}
                          </div>
                        </div>
                      </ProjectInnerModal>}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </FieldArray>
        {hasError && <p className='text-danger'>All fields are mandatory</p>}
      </div>
    </div>
  )
}

export { Step4 }
