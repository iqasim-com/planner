import React, {FC, useState} from 'react'

import {InvoicesWidget} from './components/cards/InvoicesWidget'
import {CreateInvoice} from './components/CreateInvoice'

const Invoices: FC = () => {
  const categories = ['Paid', 'Approved', 'In Progress', 'Rejected']

  const [categorySelectOption, setCategorySelectOption] = useState(categories[0])
  const [showCreateInvoiceModal, setShowCreateInvoiceModal] = useState<boolean>(false)

  const toggleCreateInvoiceModal = () => setShowCreateInvoiceModal((prevState) => !prevState)

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Invoices
          <span className='fs-6 text-gray-400 fw-bold ms-1'>{categorySelectOption}</span>
        </h3>

        <div className='d-flex flex-wrap my-2'>
          <div className='me-4'>
            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-sm form-select-white w-125px'
              defaultValue='Active'
              value={categorySelectOption}
              onChange={(e) => setCategorySelectOption(e.target.value)}
            >
              {categories.map((obj) => (
                <option key={obj} value={obj}>
                  {obj}
                </option>
              ))}
            </select>
          </div>
          <a
            href='#'
            className='btn btn-primary btn-sm'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_invoices'
            onClick={toggleCreateInvoiceModal}
          >
            New Invoices
          </a>
        </div>
      </div>

      {/* Modal */}
      <CreateInvoice show={showCreateInvoiceModal} handleClose={toggleCreateInvoiceModal} />

      <InvoicesWidget className='mb-5 mb-xl-8' />
    </>
  )
}

export {Invoices}
