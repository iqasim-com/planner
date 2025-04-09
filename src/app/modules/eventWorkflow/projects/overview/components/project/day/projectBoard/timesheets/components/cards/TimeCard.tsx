/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../../../../../../../_metronic/helpers'

type Props = {
  className: string
}

const TimeCard: FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-100px'>Actions</th>
                <th className='min-w-90px'>Starting Period</th>
                <th className='min-w-90px'>Ending Period</th>
                <th className='min-w-150px'>Creator</th>
                <th className='min-w-90px'>Created At</th>
                <th className='min-w-150px'>Approver</th>
                <th className='min-w-100px'>Total Hours</th>
              </tr>
            </thead>
            {/* end::Table head */}

            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>12/20/2021</td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>12/24/2021</td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>Jane Doe</td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>
                  12/24/2021
                  <span className='text-muted fw-bold text-muted d-block fs-7'>5:00PM</span>
                </td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>Ashley Clarke</td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>40</td>
              </tr>

              <tr>
                <td>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                    12/20/2021
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                    12/24/2021
                  </a>
                </td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>John Doe</td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>
                  12/24/2021
                  <span className='text-muted fw-bold text-muted d-block fs-7'>5:00PM</span>
                </td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>Ashley Clarke</td>
                <td className='text-dark fw-bolder text-hover-primary fs-6'>40</td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
    </div>
  )
}

export {TimeCard}
