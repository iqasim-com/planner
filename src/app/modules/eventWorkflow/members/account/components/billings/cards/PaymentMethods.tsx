import React, {FC, useState} from 'react'
import {NewPaymentCard} from '../modals/NewPaymentCard'

type Props = {}

interface NewCardProps {
  id: number
  card_name: string
  card_save: string
  cardIcon: string
  card_number: string
  card_expiry_month: string
  card_expiry_year: string
  card_cvv: string
}

const PaymentMethods: FC<Props> = () => {
  const [showAddNewCardModal, setShowAddNewCardModal] = useState<boolean>(false)
  const toggleAddNewCardModal = () => setShowAddNewCardModal((prevState) => !prevState)
  const [paymentCards, setPaymentCards] = useState<NewCardProps[]>([])

  /**
   * Function for handling new card, getting all the fields from form
   * Added little delay after adding card
   * TODO: API integration
   * @param event
   */
  const handleNewCard = (event: any) => {
    event.preventDefault()
    const formData: any = new FormData(event.currentTarget)
    let newCardValues: any = {}
    formData.forEach((value: string, key: string) => (newCardValues[key] = value))

    setTimeout(() => {
      setPaymentCards([...paymentCards, newCardValues])
      toggleAddNewCardModal()
    }, 100)
  }

  /**
   * Function for removing specific card
   * TODO: Will integrate APIs
   * @param cardID number
   */
  const deletePaymentMethod = (cardID: number) => {
    if(window.confirm('Are you sure you want to delete this payment method? This action cannot be undo')) {
      paymentCards.splice(cardID, 1)
      return setTimeout(() => {
        setPaymentCards([...paymentCards])
      }, 100)
    }
    setPaymentCards([...paymentCards])
  }

  /**
   * Function for encrypting card number, displaying (*) for card numbers
   * @param cardNumber
   * @returns cardLength
   */
  const encryptCardNumber = (cardNumber: string) => {
    let hideNum = []
    for (let i = 0; i <= cardNumber.length; i++) {
      if (i < cardNumber.length - 4) {
        hideNum.push('*')
      } else {
        hideNum.push(cardNumber[i])
      }
    }
    return hideNum.join('')
  }

  return (
    <div className='card mb-5 mb-xl-10'>
      {/* begin::Card header */}
      <div className='card-header card-header-stretch pb-0'>
        {/* begin::Title */}
        <div className='card-title'>
          <h3 className='m-0'>Payment Methods</h3>
        </div>
        {/* end::Title */}
        {/* begin::Toolbar */}
        <div className='card-toolbar m-0'>
          {/* begin::Tab nav */}
          <ul className='nav nav-stretch nav-line-tabs border-transparent' role='tablist'>
            {/* begin::Tab item */}
            <li className='nav-item' role='presentation'>
              <a
                id='kt_billing_creditcard_tab'
                className='nav-link fs-5 fw-bolder me-5 active'
                data-bs-toggle='tab'
                role='tab'
                href='#kt_billing_creditcard'
              >
                Credit / Debit Card
              </a>
            </li>
            {/* end::Tab item */}
            {/* begin::Tab item */}
            <li className='nav-item' role='presentation'>
              <a
                id='kt_billing_paypal_tab'
                className='nav-link fs-5 fw-bolder'
                data-bs-toggle='tab'
                role='tab'
                href='#kt_billing_paypal'
              >
                Paypal
              </a>
            </li>
            {/* end::Tab item */}
          </ul>
          {/* end::Tab nav */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Card header */}
      {/* begin::Tab content */}
      <div id='kt_billing_payment_tab_content' className='card-body tab-content'>
        {/* begin::Tab panel */}
        <div id='kt_billing_creditcard' className='tab-pane fade show active' role='tabpanel'>
          {/* begin::Title */}
          <h3 className='mb-5'>
            {paymentCards.length ? 'My Cards' : 'Please add payment methods'}
          </h3>
          {/* end::Title */}
          {/* begin::Row */}
          <div className='row gx-9 gy-6'>
            {/* begin::Col */}
            {paymentCards.map((res, index) => {
              return (
                <div className='col-xl-6' key={index}>
                  {/* begin::Card */}
                  <div className='card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6'>
                    {/* begin::Info */}
                    <div className='d-flex flex-column py-2'>
                      {/* begin::Owner */}
                      <div className='d-flex align-items-center fs-4 fw-bolder mb-5'>
                        {res.card_name}
                        <span className='badge badge-light-success fs-7 ms-2'>
                          {res.card_save === 'on' ? 'Primary' : null}
                        </span>
                      </div>
                      {/* end::Owner */}
                      {/* begin::Wrapper */}
                      <div className='d-flex align-items-center'>
                        {/* begin::Icon */}
                        <img src='assets/media/svg/card-logos/visa.svg' alt='' className='me-4' />
                        {/* end::Icon */}
                        {/* begin::Details */}
                        <div>
                          <div className='fs-4 fw-bolder'>{encryptCardNumber(res.card_number)}</div>
                          <div className='fs-6 fw-bold text-gray-400'>
                            Card expires at {`${res.card_expiry_month}/${res.card_expiry_year}`}
                          </div>
                        </div>
                        {/* end::Details */}
                      </div>
                      {/* end::Wrapper */}
                    </div>
                    {/* end::Info */}
                    {/* begin::Actions */}
                    <div className='d-flex align-items-center py-2'>
                      <button
                        type='reset'
                        className='btn btn-sm btn-light btn-active-light-primary me-3'
                        onClick={() => deletePaymentMethod(index)}
                      >
                        Delete
                      </button>
                      <button
                        className='btn btn-sm btn-light btn-active-light-primary'
                        data-bs-toggle='modal'
                        data-bs-target='#kt_modal_new_card'
                        onClick={toggleAddNewCardModal}
                      >
                        Edit
                      </button>
                    </div>
                    {/* end::Actions */}
                  </div>
                  {/* end::Card */}
                </div>
              )
            })}
            {/* end::Col */}
            {/* begin::Col */}
            <div className={paymentCards.length ? 'col-xl-6' : 'col-xl-12'}>
              {/* begin::Notice */}
              <div className='notice d-flex bg-light-primary rounded border-primary border border-dashed h-lg-100 p-6'>
                {/* begin::Wrapper */}
                <div className='d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap'>
                  {/* begin::Content */}
                  <div className='mb-3 mb-md-0 fw-bold'>
                    <h4 className='text-gray-900 fw-bolder'>Important Note!</h4>
                    <div className='fs-6 text-gray-700 pe-7'>
                      Please carefully read
                      <a href='#' className='fw-bolder me-1'>
                        {' '}
                        Crucien Terms
                      </a>
                      adding your new payment card
                    </div>
                  </div>
                  {/* end::Content */}
                  {/* begin::Action */}
                  <a
                    href='#'
                    className='btn btn-primary px-6 align-self-center text-nowrap'
                    data-bs-toggle='modal'
                    data-bs-target='#kt_modal_new_card'
                    onClick={toggleAddNewCardModal}
                  >
                    Add Card
                  </a>
                  {/* end::Action */}
                </div>
                {/* end::Wrapper */}
              </div>
              {/* end::Notice */}
            </div>
            {/* end::Col */}

            <NewPaymentCard
              show={showAddNewCardModal}
              handleNewPaymentMethod={(event: any) => handleNewCard(event)}
              handleClose={toggleAddNewCardModal}
            />
          </div>
          {/* end::Row */}
        </div>
        {/* end::Tab panel */}
        {/* begin::Tab panel */}
        <div
          id='kt_billing_paypal'
          className='tab-pane fade'
          role='tabpanel'
          aria-labelledby='kt_billing_paypal_tab'
        >
          {/* begin::Title */}
          <h3 className='mb-5'>My Paypal</h3>
          {/* end::Title */}
          {/* begin::Description */}
          <div className='text-gray-600 fs-6 fw-bold mb-5'>
            To use PayPal as your payment method, you will need to make pre-payments each month
            before your bill is due.
          </div>
          {/* end::Description */}
          {/* begin::Form */}
          <form className='form'>
            {/* begin::Input group */}
            <div className='mb-7 mw-350px'>
              <select
                name='timezone'
                data-control='select2'
                data-placeholder='Select an option'
                data-hide-search='true'
                className='form-select form-select-solid form-select-lg fw-bold fs-6 text-gray-700'
              >
                <option>Select an option</option>
                <option value='25'>US $25.00</option>
                <option value='50'>US $50.00</option>
                <option value='100'>US $100.00</option>
                <option value='125'>US $125.00</option>
                <option value='150'>US $150.00</option>
              </select>
            </div>
            {/* end::Input group */}
            <button type='submit' className='btn btn-primary'>
              Pay with Paypal
            </button>
          </form>
          {/* end::Form */}
        </div>
        {/* end::Tab panel */}
      </div>
      {/* end::Tab content */}
    </div>
  )
}

export {PaymentMethods}
