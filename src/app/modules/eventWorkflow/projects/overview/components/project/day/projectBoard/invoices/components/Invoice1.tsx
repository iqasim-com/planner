import React, {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../../../../../../_metronic/helpers'
import {Modal} from 'react-bootstrap'
import {useFormik} from 'formik'
import * as Yup from 'yup'

type Props = {
  show: boolean
  handleClose: () => void
}

const Invoice1: FC<Props> = ({show, handleClose}) => {
  const [data, setData] = useState('')
  // const updatedData

  const [loading, setLoading] = useState(false)

  return (
    <Modal
      className='fade'
      role='dialog'
      aria-hidden='true'
      aria-labelledby='contained-modal-title-vcenter'
      dialogClassName='modal-dialog-centered mw-1000px h-auto'
      show={show}
      centered
    >
      <Modal.Header>
        <Modal.Title>Invoice</Modal.Title>
        <div className='btn btn-icon btn-sm btn-light-primary ms-2' onClick={handleClose}>
          <KTSVG className='svg-icon-2' path='/media/icons/duotune/arrows/arr061.svg' />
        </div>
      </Modal.Header>

      <div className='d-flex flex-column' id='kt_project_invoice_modal'>
        <form>
          <Modal.Body>
            <div className='card'>
              {/* begin::Body */}
              <div className='card-body p-lg-20'>
                {/* begin::Layout  */}
                <div className='d-flex flex-column flex-xl-row'>
                  {/* begin::Content */}
                  <div className='flex-lg-row-fluid me-xl-18 mb-10 mb-xl-0'>
                    {/* begin::Invoice 2 content */}
                    <div className='mt-n1'>
                      {/* begin::Top */}
                      <div className='d-flex flex-stack pb-10'>
                        {/* begin::Logo */}
                        <a href='#'>
                          <img alt='Logo' src='assets/media/svg/brand-logos/code-lab.svg' />
                        </a>
                        {/* end::Logo */}
                        {/* begin::Action */}
                        <a href='#' className='btn btn-sm btn-success'>
                          Pay Now
                        </a>
                        {/* end::Action */}
                      </div>
                      {/* end::Top */}
                      {/* begin::Wrapper */}
                      <div className='m-0'>
                        {/* begin::Label */}
                        <div className='fw-bolder fs-3 text-gray-800 mb-8'>Invoice #34782</div>
                        {/* end::Label */}
                        {/* begin::Row */}
                        <div className='row g-5 mb-11'>
                          {/* end::Col */}
                          <div className='col-sm-6'>
                            {/* end::Label */}
                            <div className='fw-bold fs-7 text-gray-600 mb-1'>Issue Date:</div>
                            {/* end::Label */}
                            {/* end::Col */}
                            <div className='fw-bolder fs-6 text-gray-800'>12 Apr 2021</div>
                            {/* end::Col */}
                          </div>
                          {/* end::Col */}
                          {/* end::Col */}
                          <div className='col-sm-6'>
                            {/* end::Label */}
                            <div className='fw-bold fs-7 text-gray-600 mb-1'>Due Date:</div>
                            {/* end::Label */}
                            {/* end::Info */}
                            <div className='fw-bolder fs-6 text-gray-800 d-flex align-items-center flex-wrap'>
                              <span className='pe-2'>02 May 2021</span>
                              <span className='fs-7 text-danger d-flex align-items-center'>
                                <span className='bullet bullet-dot bg-danger me-2'></span>Due in 7
                                days
                              </span>
                            </div>
                            {/* end::Info */}
                          </div>
                          {/* end::Col */}
                        </div>
                        {/* end::Row */}
                        {/* begin::Row */}
                        <div className='row g-5 mb-12'>
                          {/* end::Col */}
                          <div className='col-sm-6'>
                            {/* end::Label */}
                            <div className='fw-bold fs-7 text-gray-600 mb-1'>Issue For:</div>
                            {/* end::Label */}
                            {/* end::Text */}
                            <div className='fw-bolder fs-6 text-gray-800'>KeenThemes Inc.</div>
                            {/* end::Text */}
                            {/* end::Description */}
                            <div className='fw-bold fs-7 text-gray-600'>
                              8692 Wild Rose Drive
                              <br />
                              Livonia, MI 48150
                            </div>
                            {/* end::Description */}
                          </div>
                          {/* end::Col */}
                          {/* end::Col */}
                          <div className='col-sm-6'>
                            {/* end::Label */}
                            <div className='fw-bold fs-7 text-gray-600 mb-1'>Issued By:</div>
                            {/* end::Label */}
                            {/* end::Text */}
                            <div className='fw-bolder fs-6 text-gray-800'>CodeLab Inc.</div>
                            {/* end::Text */}
                            {/* end::Description */}
                            <div className='fw-bold fs-7 text-gray-600'>
                              9858 South 53rd Ave.
                              <br />
                              Matthews, NC 28104
                            </div>
                            {/* end::Description */}
                          </div>
                          {/* end::Col */}
                        </div>
                        {/* end::Row */}
                        {/* begin::Content */}
                        <div className='flex-grow-1'>
                          {/* begin::Table */}
                          <div className='table-responsive border-bottom mb-9'>
                            <table className='table mb-3'>
                              <thead>
                                <tr className='border-bottom fs-6 fw-bolder text-muted'>
                                  <th className='min-w-175px pb-2'>Description</th>
                                  <th className='min-w-70px text-end pb-2'>Hours</th>
                                  <th className='min-w-80px text-end pb-2'>Rate</th>
                                  <th className='min-w-100px text-end pb-2'>Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className='fw-bolder text-gray-700 fs-5 text-end'>
                                  <td className='d-flex align-items-center pt-6'>
                                    <i className='fa fa-genderless text-danger fs-2 me-2'></i>
                                    Creative Design
                                  </td>
                                  <td className='pt-6'>80</td>
                                  <td className='pt-6'>$40.00</td>
                                  <td className='pt-6 text-dark fw-boldest'>$3200.00</td>
                                </tr>
                                <tr className='fw-bolder text-gray-700 fs-5 text-end'>
                                  <td className='d-flex align-items-center'>
                                    <i className='fa fa-genderless text-success fs-2 me-2'></i>Logo
                                    Design
                                  </td>
                                  <td>120</td>
                                  <td>$40.00</td>
                                  <td className='fs-5 text-dark fw-boldest'>$4800.00</td>
                                </tr>
                                <tr className='fw-bolder text-gray-700 fs-5 text-end'>
                                  <td className='d-flex align-items-center'>
                                    <i className='fa fa-genderless text-primary fs-2 me-2'></i>Web
                                    Development
                                  </td>
                                  <td>210</td>
                                  <td>$60.00</td>
                                  <td className='fs-5 text-dark fw-boldest'>$12600.00</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* end::Table */}
                          {/* begin::Container */}
                          <div className='d-flex justify-content-end'>
                            {/* begin::Section */}
                            <div className='mw-300px'>
                              {/* begin::Item */}
                              <div className='d-flex flex-stack mb-3'>
                                {/* begin::Accountname */}
                                <div className='fw-bold pe-10 text-gray-600 fs-7'>Subtotal:</div>
                                {/* end::Accountname */}
                                {/* begin::Label */}
                                <div className='text-end fw-bolder fs-6 text-gray-800'>
                                  $ 20,600.00
                                </div>
                                {/* end::Label */}
                              </div>
                              {/* end::Item */}
                              {/* begin::Item */}
                              <div className='d-flex flex-stack mb-3'>
                                {/* begin::Accountname */}
                                <div className='fw-bold pe-10 text-gray-600 fs-7'>VAT 0%</div>
                                {/* end::Accountname */}
                                {/* begin::Label */}
                                <div className='text-end fw-bolder fs-6 text-gray-800'>0.00</div>
                                {/* end::Label */}
                              </div>
                              {/* end::Item */}
                              {/* begin::Item */}
                              <div className='d-flex flex-stack mb-3'>
                                {/* begin::Accountnumber */}
                                <div className='fw-bold pe-10 text-gray-600 fs-7'>
                                  Subtotal + VAT
                                </div>
                                {/* end::Accountnumber */}
                                {/* begin::Number */}
                                <div className='text-end fw-bolder fs-6 text-gray-800'>
                                  $ 20,600.00
                                </div>
                                {/* end::Number */}
                              </div>
                              {/* end::Item */}
                              {/* begin::Item */}
                              <div className='d-flex flex-stack'>
                                {/* begin::Code */}
                                <div className='fw-bold pe-10 text-gray-600 fs-7'>Total</div>
                                {/* end::Code */}
                                {/* begin::Label */}
                                <div className='text-end fw-bolder fs-6 text-gray-800'>
                                  $ 20,600.00
                                </div>
                                {/* end::Label */}
                              </div>
                              {/* end::Item */}
                            </div>
                            {/* end::Section */}
                          </div>
                          {/* end::Container */}
                        </div>
                        {/* end::Content */}
                      </div>
                      {/* end::Wrapper */}
                    </div>
                    {/* end::Invoice 2 content */}
                  </div>
                  {/* end::Content */}
                  {/* begin::Sidebar */}
                  <div className='m-0'>
                    {/* begin::Invoice 2 sidebar */}
                    <div className='d-print-none border border-dashed border-gray-300 card-rounded h-lg-100 min-w-md-350px p-9 bg-lighten'>
                      {/* begin::Labels */}
                      <div className='mb-8'>
                        <span className='badge badge-light-success me-2'>Approved</span>
                        <span className='badge badge-light-warning'>Pending Payment</span>
                      </div>
                      {/* end::Labels */}
                      {/* begin::Title */}
                      <h6 className='mb-8 fw-boldest text-gray-600 text-hover-primary'>
                        PAYMENT DETAILS
                      </h6>
                      {/* end::Title */}
                      {/* begin::Item */}
                      <div className='mb-6'>
                        <div className='fw-bold text-gray-600 fs-7'>Paypal:</div>
                        <div className='fw-bolder text-gray-800 fs-6'>codelabpay@codelab.co</div>
                      </div>
                      {/* end::Item */}
                      {/* begin::Item */}
                      <div className='mb-6'>
                        <div className='fw-bold text-gray-600 fs-7'>Account:</div>
                        <div className='fw-bolder text-gray-800 fs-6'>
                          Nl24IBAN34553477847370033
                          <br />
                          AMB NLANBZTC
                        </div>
                      </div>
                      {/* end::Item */}
                      {/* begin::Item */}
                      <div className='mb-15'>
                        <div className='fw-bold text-gray-600 fs-7'>Payment Term:</div>
                        <div className='fw-bolder fs-6 text-gray-800 d-flex align-items-center'>
                          14 days
                          <span className='fs-7 text-danger d-flex align-items-center'>
                            <span className='bullet bullet-dot bg-danger mx-2'></span>Due in 7 days
                          </span>
                        </div>
                      </div>
                      {/* end::Item */}
                      {/* begin::Title */}
                      <h6 className='mb-8 fw-boldest text-gray-600 text-hover-primary'>
                        PROJECT OVERVIEW
                      </h6>
                      {/* end::Title */}
                      {/* begin::Item */}
                      <div className='mb-6'>
                        <div className='fw-bold text-gray-600 fs-7'>Project Name</div>
                        <div className='fw-bolder fs-6 text-gray-800'>
                          SaaS App Quickstarter
                          <a href='#' className='link-primary ps-1'>
                            View Project
                          </a>
                        </div>
                      </div>
                      {/* end::Item */}
                      {/* begin::Item */}
                      <div className='mb-6'>
                        <div className='fw-bold text-gray-600 fs-7'>Completed By:</div>
                        <div className='fw-bolder text-gray-800 fs-6'>Mr. Dewonte Paul</div>
                      </div>
                      {/* end::Item */}
                      {/* begin::Item */}
                      <div className='m-0'>
                        <div className='fw-bold text-gray-600 fs-7'>Time Spent:</div>
                        <div className='fw-bolder fs-6 text-gray-800 d-flex align-items-center'>
                          230 Hours
                          <span className='fs-7 text-success d-flex align-items-center'>
                            <span className='bullet bullet-dot bg-success mx-2'></span>35$/h Rate
                          </span>
                        </div>
                      </div>
                      {/* end::Item */}
                    </div>
                    {/* end::Invoice 2 sidebar */}
                  </div>
                  {/* end::Sidebar */}
                </div>
                {/* end::Layout */}
              </div>
              {/* end::Body */}
            </div>
          </Modal.Body>
        </form>
      </div>
    </Modal>
  )
}

export {Invoice1}
