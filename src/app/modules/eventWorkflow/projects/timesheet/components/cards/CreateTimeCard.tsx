import React, {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../../_metronic/helpers'


type Props = {
  className: string
}


const CreateTimeCard: FC<Props> = ({className}) => {
    return (
        <div className={`card ${className}`}>
            <div className='card-header d-flex border-0 pt-5'>
                <div className=''>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>Timesheet</span>
                        <span className='text-muted mt-1 fw-bold fs-7'>Dec 13, 2021 - Dec 19, 2021</span>
                        <span className='text-muted mt-1 fw-bold fs-7'>Associate: Paul Meriser</span>
                    </h3>
                </div>

                <div className=''>
                    <a
                        href='#'
                        className='btn btn-primary btn-sm'
                        data-bs-toggle='modal'
                        data-bs-target='#kt_modal_create_project'
                    >
                        New Task
                    </a>
                </div>
            </div>

            <div className='card-body py-3'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                    {/* begin::Table */}
                        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                            {/* begin::Table head */}
                                <thead>
                                    <tr className='fw-bolder text-muted'>
                                        <th className='w-75px'>Actions</th>
                                        <th className='min-w-100px'>Project ID</th>
                                        <th className='min-w-250px'>Project Name</th>
                                        <th className='min-w-150px'>Hours Type</th>
                                        <th className='min-w-70px'>
                                            Mon<span className='text-muted mt-1 fw-bold fs-7'> 12/21</span>
                                        </th>
                                        <th className='min-w-70px'>
                                            Tue <span className='text-muted mt-1 fw-bold fs-7'> 14/21</span>
                                        </th>
                                        <th className='min-w-70px'>
                                            Wed <span className='text-muted mt-1 fw-bold fs-7'> 15/21</span>
                                        </th>
                                        <th className='min-w-70px'>
                                            Thu <span className='text-muted mt-1 fw-bold fs-7'> 16/21</span>
                                        </th>
                                        <th className='min-w-70px'>
                                            Fri <span className='text-muted mt-1 fw-bold fs-7'> 17/21</span>
                                        </th>
                                        <th className='min-w-70px'>
                                            Sat <span className='text-muted mt-1 fw-bold fs-7'> 18/21</span>
                                        </th>
                                        <th className='min-w-70px'>
                                            Sun <span className='text-muted mt-1 fw-bold fs-7'> 19/21</span>
                                        </th>
                                        <th className='min-w-150px'>Total Hours</th>
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
                                            <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                        </a>
                                        <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                            <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                            56037-XDER
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                            John Doe & Jane Doe Wedding
                                        </a>
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        Normal Time                                        
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        8                                        
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        8                                       
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        8                                      
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        12                                        
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        8                                        
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                                                               
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                                                              
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        44                                        
                                    </td>
                                </tr>

                                <tr>
                                    <td>
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
                                            56037-XDER
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                            John Doe & Jane Doe Wedding
                                        </a>
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        Paid Over Time                                        
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        2                                        
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        2                                       
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        1                                      
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        3                                        
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        1                                       
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                                                               
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                                                              
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        9                                        
                                    </td>
                                </tr>

                                {/* Beginning of row calculating the total of hours for each cell. */}
                                <tr>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                                                              
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        10                                        
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        10                                       
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        9                                      
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        15                                        
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        9                                       
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                                                               
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                                                              
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>                                         
                                        53                                       
                                    </td>
                                </tr>
                                {/* End of row Calculating the total of hours for each cell. */}
                            </tbody>
                            {/* end::Table body */}
                        </table>
                    {/* end::Table */}
                </div>
                {/* end::Table container */}
            </div>

            <div className='card-footer d-flex justify-content-end py-3'>
                <button className='btn btn-white btn-active-light-primary me-2'>Discard</button>
                
                <button className='btn btn-white btn-active-light-primary me-2'>
                    Save
                </button>

                <button className='btn btn-primary'>
                    Submit
                </button>
            </div>

        </div>
    )
}

export {CreateTimeCard}
