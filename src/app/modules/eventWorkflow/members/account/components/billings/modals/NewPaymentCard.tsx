import React, {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../../../_metronic/helpers'
import {Modal} from 'react-bootstrap'
import {useFormik} from 'formik'
import * as Yup from 'yup'

type Props = {
  show: boolean
  handleClose: () => void,
  handleNewPaymentMethod: (event: any) => void,
}

const NewPaymentCard: FC<Props> = ({show, handleClose, handleNewPaymentMethod}) => {
  const [data, setData] = useState('')
  // const updatedData

  const [loading, setLoading] = useState(false)

  return (
    <Modal
      className='fade'
      role='dialog'
      aria-hidden='true'
      aria-labelledby='contained-modal-title-vcenter'
      dialogClassName='modal-dialog modal-dialog-centered mw-650px'
      show={show}
    >
      <Modal.Header>
        <Modal.Title>Add New Card</Modal.Title>
        <div className='btn btn-icon btn-sm btn-light-primary ms-2' onClick={handleClose}>
          <KTSVG className='svg-icon-2' path='/media/icons/duotune/arrows/arr061.svg' />
        </div>
      </Modal.Header>

      <div>
        <form onSubmit={handleNewPaymentMethod}>
          <Modal.Body className='scroll-y mx-5 mx-xl-15 my-7'>
            {/* begin::Input group */}
            <div className='d-flex flex-column mb-7 fv-row'>
              {/* begin::Label */}
              <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                <span className='required'>Name On Card</span>
                <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title="Specify a card holder's name"
                ></i>
              </label>
              {/* end::Label */}
              <input
                type='text'
                className='form-control form-control-solid'
                placeholder='Name'
                name='card_name'
              />
            </div>
            {/* end::Input group */}
            {/* begin::Input group */}
            <div className='d-flex flex-column mb-7 fv-row'>
              {/* begin::Label */}
              <label className='required fs-6 fw-bold form-label mb-2'>Card Number</label>
              {/* end::Label */}
              {/* begin::Input wrapper */}
              <div className='position-relative'>
                {/* begin::Input */}
                <input
                  type='text'
                  className='form-control form-control-solid'
                  placeholder='Enter card number'
                  name='card_number'
                />
                {/* end::Input */}
                {/* begin::Card logos */}
                <div className='position-absolute translate-middle-y top-50 end-0 me-5'>
                  <img src='assets/media/svg/card-logos/visa.svg' alt='' className='h-25px' />
                  <img src='assets/media/svg/card-logos/mastercard.svg' alt='' className='h-25px' />
                  <img
                    src='assets/media/svg/card-logos/american-express.svg'
                    alt=''
                    className='h-25px'
                  />
                </div>
                {/* end::Card logos */}
              </div>
              {/* end::Input wrapper */}
            </div>
            {/* end::Input group */}
            {/* begin::Input group */}
            <div className='row mb-10'>
              {/* begin::Col */}
              <div className='col-md-8 fv-row'>
                {/* begin::Label */}
                <label className='required fs-6 fw-bold form-label mb-2'>Expiration Date</label>
                {/* end::Label */}
                {/* begin::Row */}
                <div className='row fv-row'>
                  {/* begin::Col */}
                  <div className='col-6'>
                    <select
                      name='card_expiry_month'
                      className='form-select form-select-solid'
                      data-control='select2'
                      data-hide-search='true'
                      data-placeholder='Month'
                    >
                      <option></option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>11</option>
                      <option value='12'>12</option>
                    </select>
                  </div>
                  {/* end::Col */}
                  {/* begin::Col */}
                  <div className='col-6'>
                    <select
                      name='card_expiry_year'
                      className='form-select form-select-solid'
                      data-control='select2'
                      data-hide-search='true'
                      data-placeholder='Year'
                    >
                      <option></option>
                      <option value='2021'>2021</option>
                      <option value='2022'>2022</option>
                      <option value='2023'>2023</option>
                      <option value='2024'>2024</option>
                      <option value='2025'>2025</option>
                      <option value='2026'>2026</option>
                      <option value='2027'>2027</option>
                      <option value='2028'>2028</option>
                      <option value='2029'>2029</option>
                      <option value='2030'>2030</option>
                      <option value='2031'>2031</option>
                      <option value='2031'>2032</option>
                      <option value='2031'>2033</option>
                      <option value='2031'>2034</option>
                      <option value='2031'>2035</option>
                      <option value='2031'>2036</option>
                      <option value='2031'>2037</option>
                      <option value='2031'>2038</option>
                      <option value='2031'>2039</option>
                      <option value='2031'>2040</option>
                    </select>
                  </div>
                  {/* end::Col */}
                </div>
                {/* end::Row */}
              </div>
              {/* end::Col */}
              {/* begin::Col */}
              <div className='col-md-4 fv-row'>
                {/* begin::Label */}
                <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                  <span className='required'>CVV</span>
                  <i
                    className='fas fa-exclamation-circle ms-2 fs-7'
                    data-bs-toggle='tooltip'
                    title='Enter a card CVV code'
                  ></i>
                </label>
                {/* end::Label */}
                {/* begin::Input wrapper */}
                <div className='position-relative'>
                  {/* begin::Input */}
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    minLength={3}
                    maxLength={4}
                    placeholder='CVV'
                    name='card_cvv'
                  />
                  {/* end::Input */}
                  {/* begin::CVV icon */}
                  <div className='position-absolute translate-middle-y top-50 end-0 me-3'>
                    {/* begin::Svg Icon | path: icons/duotune/finance/fin002.svg */}
                    <span className='svg-icon svg-icon-2hx'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <path d='M22 7H2V11H22V7Z' fill='black' />
                        <path
                          opacity='0.3'
                          d='M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z'
                          fill='black'
                        />
                      </svg>
                    </span>
                    {/* end::Svg Icon */}
                  </div>
                  {/* end::CVV icon */}
                </div>
                {/* end::Input wrapper */}
              </div>
              {/* end::Col */}
            </div>
            {/* end::Input group */}
            {/* begin::Input group */}
            <div className='d-flex flex-stack'>
              {/* begin::Label */}
              <div className='me-5'>
                <label className='fs-6 fw-bold form-label'>Save Card for further billing?</label>
                <div className='fs-7 fw-bold text-muted'>
                  If you need more info, please check budget planning
                </div>
              </div>
              {/* end::Label */}
              {/* begin::Switch */}
              <label className='form-check form-switch form-check-custom form-check-solid'>
                <input className='form-check-input' name='card_save' type='checkbox' />
                <span className='form-check-label fw-bold text-muted'>Save Card</span>
              </label>
              {/* end::Switch */}
            </div>
            {/* end::Input group */}
            {/* begin::Actions */}
            <div className='text-center pt-15'>
              <button
                type='reset'
                id='kt_modal_new_card_cancel'
                className='btn btn-light me-3'
                onClick={handleClose}
              >
                Discard
              </button>
              <button type='submit' id='kt_modal_new_card_submit' className='btn btn-primary'>
                <span className='indicator-label'>Submit</span>
                <span className='indicator-progress'>
                  Please wait...
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              </button>
            </div>
            {/* end::Actions */}
          </Modal.Body>
        </form>
      </div>
    </Modal>
  )
}

export {NewPaymentCard}
