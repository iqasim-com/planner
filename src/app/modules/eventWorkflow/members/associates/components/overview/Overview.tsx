/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'

import {Card6} from '../../../../../../../_metronic/partials/content/cards/Card6'
import {CreateAssociateModal} from '../modals/create-associate-stepper/CreateAssociateModal'
import {ToAssociate} from './components/cards/ToAssociate'

const Overview: FC = () => {
  const categories = ['Current', 'Past']

  const [categorySelectOption, setCategorySelectOption] = useState(categories[0])
  const [showCreateAssociateModal, setShowCreateAssociateModal] = useState<boolean>(false)

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          {categorySelectOption} Associates
          <span className='fs-6 text-gray-400 fw-bold ms-1'>(59)</span>
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
            className='btn btn-sm btn-primary cursor-pointer'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_associate'
            onClick={() => setShowCreateAssociateModal(true)}
          >
            New Associate
          </a>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            avatar='/media/avatars/300-1.jpg'
            name='Emma Smith'
            job='Art Director'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            color='danger'
            name='Melody Macy'
            job='Marketing Analytic'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            avatar='/media/avatars/300-2.jpg'
            name='Max Smith'
            job='Software Enginer'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            avatar='/media/avatars/300-4.jpg'
            name='Sean Bean'
            job='Web Developer'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            avatar='/media/avatars/300-15.jpg'
            name='Brian Cox'
            job='UI/UX Designer'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            color='warning'
            name='Mikaela Collins'
            job='Head Of Marketing'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            avatar='/media/avatars/300-8.jpg'
            name='Francis Mitcham'
            job='Software Arcitect'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            color='danger'
            name='Olivia Wild'
            job='System Admin'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            color='primary'
            name='Neil Owen'
            job='Account Manager'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            avatar='/media/avatars/300-6.jpg'
            name='Dan Wilson'
            job='Web Desinger'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            color='danger'
            name='Emma Bold'
            job='Corporate Finance'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ToAssociate
            avatar='/media/avatars/300-7.jpg'
            name='Ana Crown'
            job='Customer Relationship'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>

      <CreateAssociateModal
        show={showCreateAssociateModal}
        handleClose={() => setShowCreateAssociateModal(false)}
      />
    </>
  )
}

export {Overview}
