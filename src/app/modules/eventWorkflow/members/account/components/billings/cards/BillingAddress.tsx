import React, {FC, useState} from 'react'
import {NewAddress} from '../modals/NewAddress'

type Props = {}

// TODO: Should be in separate file
interface NewBillingAddress {
    id: number,
    firstName: string,
    lastName: string,
    country: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    postcode: string,
    saveBillingAddress: string
}

const BillingAddress: FC<Props> = () => {
  const [showAddNewAddressModal, setShowAddNewAddressModal] = useState<boolean>(false)

  const toggleAddNewAddressModal = () => setShowAddNewAddressModal((prevState) => !prevState)
  const [billingAddress, setBillingAddress] = useState<NewBillingAddress[]>([])

  /**
   * Function for handling new card, getting all the fields from form
   * Added little delay after adding card
   * TODO: API integration
   * @param event
   */
   const handleNewBillingAddress = (event: any) => {
    event.preventDefault()
    const formData: any = new FormData(event.currentTarget)
    let newBillingAddress: any = {}
    formData.forEach((value: string, key: string) => {
      newBillingAddress[key] = value
    })

    setTimeout(() => {
      setBillingAddress([...billingAddress, newBillingAddress])
      toggleAddNewAddressModal()
    }, 100)
  }

  /**
   * Function for removing specific card
   * TODO: Will integrate APIs
   * @param cardID number
   */
   const deleteBillingAddressById = (billingCardId: number) => {
    if(window.confirm('Are you sure you want to delete this billing address? This action cannot be undo')) {
      billingAddress.splice(billingCardId, 1)
      return setTimeout(() => {
        setBillingAddress([...billingAddress])
      }, 100)
    }
    setBillingAddress([...billingAddress])
  }

  return (
    <div className='card mb-5 mb-xl-10'>
      {/* begin::Card header */}
      <div className='card-header'>
        {/* begin::Title */}
        <div className='card-title'>
          <h3>Billing Address</h3>
        </div>
        {/* end::Title */}
      </div>
      {/* end::Card header */}
      {/* begin::Card body */}
      <div className='card-body'>
        {/* begin::Addresses */}
        <div className='row gx-9 gy-6'>
          {/* begin::Col */}
          {billingAddress.map((res, index) => {
            return (
              <div className='col-xl-6' key={index}>
                {/* begin::Address */}
                <div className='card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6'>
                  {/* begin::Details */}
                  <div className='d-flex flex-column py-2'>
                    <div className='d-flex align-items-center fs-5 fw-bolder mb-3'>
                      {`${res.firstName} ${res.lastName}`}
                        <span className='badge badge-light-success fs-7 ms-2'>
                          {res.saveBillingAddress === 'on' ? 'Primary' : null}
                        </span>
                      </div>
                    <div className='fs-6 fw-bold text-gray-600'>
                      {res.address1}
                      <br />
                      {res.address2}
                      <br />
                      {res.city}
                    </div>
                  </div>
                  {/* end::Details */}
                  {/* begin::Actions */}
                  <div className='d-flex align-items-center py-2'>
                    <button
                      type='reset'
                      className='btn btn-sm btn-light btn-active-light-primary me-3'
                      onClick={() => deleteBillingAddressById(index)}
                    >
                      Delete
                    </button>
                    <button
                      className='btn btn-sm btn-light btn-active-light-primary'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_new_address'
                    >
                      Edit
                    </button>
                  </div>
                  {/* end::Actions */}
                </div>
                {/* end::Address */}
              </div>
            )
          })}
          {/* end::Col */}
          {/* begin::Col */}
          <div className={billingAddress.length ? 'col-xl-6' : 'col-xl-12'}>
            {/* begin::Notice */}
            <div className='notice d-flex bg-light-primary rounded border-primary border border-dashed flex-stack h-xl-100 mb-10 p-6'>
              {/* begin::Wrapper */}
              <div className='d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap'>
                {/* begin::Content */}
                <div className='mb-3 mb-md-0 fw-bold'>
                  <h4 className='text-gray-900 fw-bolder'>This is a very important note!</h4>
                  <div className='fs-6 text-gray-700 pe-7'>
                    Writing headlines for blog posts is much science and probably cool audience
                  </div>
                </div>
                {/* end::Content */}
                {/* begin::Action */}
                <a
                  href='#'
                  className='btn btn-primary px-6 align-self-center text-nowrap'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_new_address'
                  onClick={toggleAddNewAddressModal}
                >
                  New Address
                </a>
                {/* end::Action */}
              </div>
              {/* end::Wrapper */}
            </div>
            {/* end::Notice */}
          </div>
          {/* end::Col */}

          <NewAddress show={showAddNewAddressModal} handleNewBillingAddress={handleNewBillingAddress} handleClose={toggleAddNewAddressModal} />
        </div>
        {/* end::Addresses */}
        {/* begin::Tax info */}
        <div className='mt-10'>
          <h3 className='mb-3'>Tax Location</h3>
          <div className='fw-bold text-gray-600 fs-6'>
            United States - 10% VAT
            <br />
            <a className='fw-bolder' href='#'>
              More Info
            </a>
          </div>
        </div>
        {/* end::Tax info */}
      </div>
      {/* end::Card body */}
    </div>
  )
}

export {BillingAddress}
