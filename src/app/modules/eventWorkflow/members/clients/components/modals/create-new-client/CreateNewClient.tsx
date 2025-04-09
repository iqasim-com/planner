import {createPortal} from 'react-dom'
import {Modal} from 'react-bootstrap'
import React, {useState} from 'react'
import {closeClientModal} from '../../../../../projects/overview/components/project/components/cards/modalslice'
import {KTSVG} from '../../../../../../../../_metronic/helpers'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import {
  initialCreateNewClientState,
  validationSchema,
} from '../../../../../projects/overview/components/project/components/cards/ToProjectModel'
import useCategoryHook from '../../../../../../hooks/useCategoryHook'
import PhoneInput from 'react-phone-input-2'
import {useAppDispatch, useAppSelector} from '../../../../../../../../setup/store'
import {createClientForProject} from '../../../../../../auth/core/_requests'
import {useMutation} from 'react-query'

const modalsRoot = document.getElementById('root-modals') || document.body

const clientTypes = [
  { name: 'Groom', value: 1 },
  { name: 'Bride', value: 2 },
  { name: 'Best Man', value: 3 },
  { name: 'Maid of Honor', value: 4 },
  { name: 'Guest', value: 5 },
  { name: 'Officiant', value: 6 }
]

const CreateNewClientModal = ({data, onSuccess }: any) => {
  const isModalOpen = useAppSelector((state) => state.createClientModal.openModals[data?.projectId] || false);
  const dispatch = useAppDispatch()

  const { mutate, isLoading } = useMutation(createClientForProject, {
    onSuccess: data => {
      dispatch(closeClientModal({ modalId: data.data.projectId }))
      onSuccess()
    },
    onError: error => {
      console.error(error)
      alert('User already exists!')
    }
  })

  const createClient = (values: any, projectId: string) => {
    const clientData = {
      cellPhone: values.cellPhone,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      role: values.role
    }
    mutate({ projectId, payload: clientData })
  }

  return createPortal(
    <Modal
      id='kt_modal_create_project_inner_modal'
      tabIndex={999}
      aria-hidden='true'
      dialogClassName='modal-dialog modal-dialog-centered mw-900px'
      show={isModalOpen}
    >
      <div className='shadow border border-1'>
        <div className='modal-header mb-8'>
          <h2><i className='fa fa-plus fa-xl text-success me-4'></i> Add New Client to <span className='badge badge-success badge-outline badge-lg'>{data?.name}</span></h2>
          {/* begin::Close */}
          <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={() => dispatch(closeClientModal({ modalId: data?.projectId }))}>
            <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
          </div>
          {/* end::Close */}
        </div>
        <div className='modal-body'>
          <Formik initialValues={initialCreateNewClientState} validationSchema={validationSchema} onSubmit={(values: any) => createClient(values, data?.projectId)}>
            {({ isSubmitting, values, setFieldValue }) => (
              <Form>
                <ClientForm values={values} setFieldValue={setFieldValue} />
                <button type='submit' className="btn btn-outline btn-outline-success"><i className='fa fa-plus'></i>
                  {!isSubmitting && (
                    <>
                      <span className='indicator-label'>Add Client</span>{' '}
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr064.svg'
                        className='svg-icon-3 ms-2 me-0'
                      />
                    </>
                  )}
                  {isLoading && (
                    <span>
                        Please wait...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                  )}
                </button>
              </Form>
            )}
          </Formik>
          {/*end::Form Group */}
        </div>
      </div>
    </Modal>,
    modalsRoot
  )
}

export default CreateNewClientModal

const ClientForm = ({ values, setFieldValue }: any) => {
  const [setClientType] = useCategoryHook({ options: clientTypes })

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
      return null
    })
  }

  return (
    <>
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
            name={`firstName`}
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-danger mt-2"
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
            name={`middleName`}
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
            name={`lastName`}
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-danger mt-2"
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
            name={`email`}
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-danger mt-2"
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
              name: `cellPhone`,
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
            value={values.cellPhone !== '' ? values.cellPhone : null}
            onChange={(val: any) => {
              setFieldValue(`cellPhone`, val)
            }}
          />
          <ErrorMessage
            name="cellPhone"
            component="div"
            className="text-danger mt-2"
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
            name={`role`}
            onChange={(e: any) => {
              setClientType(e, `role`)
            }}
            value={values?.role?.value}
          >
            <option value="none">Choose role</option>
            {checkProjectCategory(values?.category?.name, clientTypes)}
          </Field>
          <ErrorMessage
            name="role"
            component="div"
            className="text-danger mt-2"
          />
        </div>
      </div>
    </>
  )
}