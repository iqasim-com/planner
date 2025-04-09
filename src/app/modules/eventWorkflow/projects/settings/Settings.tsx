import React, { useEffect, useState } from "react"
import { KTSVG, toAbsoluteUrl } from "../../../../../_metronic/helpers"
import { useAppDispatch, useAppSelector } from "../../../../../setup/store"
import { Link } from "react-router-dom"
import { removeProject } from "../redux/projectBoard/createProjectSlice"

const ProjectSettings = () => {
  const dispatch = useAppDispatch()
  const projects = useAppSelector((state) => state.createProject.projects)


  const deleteProject = (id: any) => {
    if (window.confirm('Are you sure you want to delete this billing address? This action cannot be undo')) {
      dispatch(removeProject(id))
    }
  }

  return (
    <>
      <div className="card">
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'><i className="fa fa-gear fa-xl text-success"></i> Settings</span>
          </h3>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body py-3'>
          {/* begin::Table container */}
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
                  <th className='min-w-150px'>Authors</th>
                  <th className='min-w-140px'>Project Name / Category</th>
                  <th className='min-w-120px'>Days</th>
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
                        <div className='symbol symbol-45px me-5'>
                          <img src={toAbsoluteUrl('/media/avatars/300-14.jpg')} alt='' />
                        </div>
                        <div className='d-flex justify-content-start flex-column'>
                          <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                            Ana Simmons
                          </a>
                          <span className='text-muted fw-semibold text-muted d-block fs-7'>
                            {res.category.name}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {res.name}
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        {res.category.name}
                      </span>
                    </td>
                    <td className='text-end'>
                      <div className='d-flex flex-column w-100 me-2'>
                        <div className='d-flex flex-stack mb-2'>
                          <span className='text-muted me-2 fs-7 fw-semibold'>{res.eventDates.length}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-end flex-shrink-0'>
                        <button
                          className='btn btn-icon btn-light-primary me-1 btn-active-color-light btn-sm'
                        >
                          <i className="fa fa-pencil"></i>
                        </button>
                        <Link to='/projects/PIM/project/overview/days' state={{ projectID: res.projectId }}>
                          <button
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          >
                            <i className="fa fa-eye"></i>
                          </button>
                        </Link>
                        <button
                          className='btn btn-icon btn-light-danger btn-active-color-light btn-sm' onClick={() => deleteProject(res.projectId)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
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
            <Link to={'/projects/overview'}>
              <button className="btn btn-light-primary">
                Create New Project
              </button>
            </Link>
          </div>}
          {/* end::Table container */}
        </div>
      </div>
    </>
  )
}

export default ProjectSettings