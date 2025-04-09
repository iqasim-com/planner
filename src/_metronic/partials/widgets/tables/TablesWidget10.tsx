/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../setup/store'

type Props = {
  className: string
}

const TablesWidget10: React.FC<Props> = ({ className }) => {
  const projects = useAppSelector((state) => state.createProject.projects)
  console.log(projects)
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Most Recent Projects</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <Link to={'/projects/overview'}>
            <a
              href='#'
              className='btn btn-sm btn-light-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
            >
              <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
              New Project
            </a>
          </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className={`card-body py-3 ${projects.length < 1 ? 'd-flex justify-content-center align-items-center': ''}`}>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          {projects.length > 0 ? <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='w-25px'>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value='1'
                        data-kt-check='true'
                        data-kt-check-target='.widget-9-check'
                      />
                    </div>
                  </th>
                  <th className='min-w-150px'>Project Name</th>
                  <th className='min-w-140px'>Category</th>
                  <th className='min-w-120px'>Status</th>
                  <th className='min-w-100px text-end'>Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {projects?.map((res) => (
                  <tr key={res.projectId}>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-6 m-0'>
                            {res.name}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className='text-muted fw-bold d-block fs-6 m-0'>
                        {res.category.name}
                      </p>
                    </td>
                    <td className='text-end'>
                      <div className='d-flex flex-column w-100 me-2'>
                        <div className='d-flex flex-stack mb-2'>
                          <span className='text-muted me-2 fs-7 fw-semibold'>50%</span>
                        </div>
                        <div className='progress h-6px w-100'>
                          <div
                            className='progress-bar bg-primary'
                            role='progressbar'
                            style={{ width: '50%' }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-end flex-shrink-0'>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <i className="fa fa-eye"></i>
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-light-danger btn-active-color-light btn-sm'
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div> : <div className="min-h-200px d-flex justify-content-center flex-column align-items-center">
            <h1 className="mb-6">No Projects found</h1>
          </div>}
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { TablesWidget10 }
