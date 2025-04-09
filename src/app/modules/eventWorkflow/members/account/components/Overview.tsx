/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import {
  ChartsWidget1,
  TablesWidget1,
  ListsWidget5,
  TablesWidget5,
} from '../../../../../../_metronic/partials/widgets'
import { useAppSelector } from '../../../../../../setup/store'
import moment from 'moment'

const Overview: FC = () => {
  const userData: any = useAppSelector((state) => state.auth.currentUser)

  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profile Details</h3>
          </div>

          <Link to='/members/account/settings' className='btn btn-primary align-self-center'>
            Edit Profile
          </Link>
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Full Name</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>
                {' '}
                {userData.firstName}{' '}
                {userData.middleName !== '' ? userData.middleName : null}{' '}
                {userData.lastName}
              </span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Personal Phone
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Phone number must be active'
              ></i>
            </label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{userData.personalTelephones}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Personal Address
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Phone number must be active'
              ></i>
            </label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{userData.personalAddresses}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Profile Creation
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Phone number must be active'
              ></i>
            </label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder text-primary fs-6 me-2'>{moment(userData.created).format('MMMM Do, YYYY')}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Communication</label>

            <div className='col-lg-8 d-flex'>
              <div className='form-check form-check-custom form-check-solid mb-3 me-8'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  checked={userData.communication.emailEnabled}
                  id='flexCheckDefault'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  Email
                </label>
              </div>

              <div className='form-check form-check-custom form-check-solid mb-3 me-8'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  checked={userData.communication.callEnabled}
                  id='flexCheckDefault'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  Call
                </label>
              </div>

              <div className='form-check form-check-custom form-check-solid mb-3 me-8'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  checked={userData.communication.textEnabled}
                  id='flexCheckDefault'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  Text
                </label>
              </div>

              <div className='form-check form-check-custom form-check-solid mb-3 me-8'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  checked={userData.communication.mailEnabled}
                  id='flexCheckDefault'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  mail
                </label>
              </div>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Allow Marketing</label>

            <div className='col-lg-8'>
              <div className='form-check form-check-custom form-check-solid mb-3'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  checked={userData.allowMarketing}
                  id='flexCheckDefault'
                />
              </div>
            </div>
          </div>

          <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
            <KTSVG
              path='icons/duotune/general/gen044.svg'
              className='svg-icon-2tx svg-icon-warning me-4'
            />
            <div className='d-flex flex-stack flex-grow-1'>
              <div className='fw-bold'>
                <h4 className='text-gray-800 fw-bolder'>We need your attention!</h4>
                <div className='fs-6 text-gray-600'>
                  Your payment was declined. To start using tools, please
                  <Link className='fw-bolder' to='/crafted/account/settings'>
                    {' '}
                    Add Payment Method
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ChartsWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div>
    </>
  )
}

export default Overview
