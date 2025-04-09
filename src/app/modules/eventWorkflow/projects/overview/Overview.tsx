import React, { FC, useEffect, useState } from 'react'
import { CreateProjectModal } from './components/project/components/modals/create-project-stepper/CreateProjectModal'
import { ToProjectCard } from './components/project/components/cards/ToProjectCard'
import { useAppDispatch, useAppSelector } from '../../../../../setup/store'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'
import { Link } from 'react-router-dom'
import useApiHook from '../../../hooks/useApiHook'
import { createClientForProject, GET_PROJECTS } from '../../../auth/core/_requests'
import AlertNotification from '../../../../../_metronic/helpers/components/alerts/alert-notification'
import { useMutation } from 'react-query'
import { closeClientModal } from './components/project/components/cards/modalslice'

const Overview: FC = () => {
  const { isSubmit, projects } = useAppSelector(state => state.createProject)
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize] = useState(6) // Items per page
  const [showCreateProjectModal, setShowCreateProjectModal] = useState<boolean>(false)
  const [apiData, loading, fetchData] = useApiHook(`${GET_PROJECTS}?pageNumber=${pageNumber}&pageSize=${pageSize}`)
  const [totalCount, setTotalCount] = useState<number>(0)
  const dispatch = useAppDispatch()
  // Corrected totalPages calculation
  const totalPages = Math.ceil(totalCount / pageSize)

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber)
  }

  useEffect(() => {
    getXPagination()
  }, [apiData])

  const getXPagination = () => {
    if (apiData.headers) {
      let count = JSON.parse(apiData.headers['x-pagination'])
      setTotalCount(count.TotalCount)
    }
  }

  const { mutate, isLoading } = useMutation(createClientForProject, {
    onSuccess: data => {
      fetchData()
      dispatch(closeClientModal({ modalId: data.data.projectId }))
    },
    onError: error => {
      console.error(error)
      alert('User already exists!')
    }
  })

  const createClient = (values: any, projectId: string) => {
    const clientData = {
      cellPhone: values.cellPhone,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      role: values.role
    }
    mutate({ projectId, payload: clientData })
  }

  return (
    <>
      {isSubmit && <AlertNotification pathToNewlyProject={projects[0]?.projectId} title='Project has been created successfully' icon='fa fa-bell fa-2xl text-success' backgroundColor='bg-light-success' />}
      <div className='d-flex flex-wrap flex-stack mb-6 align-items-center justify-space-between'>
        <div className='me-4'>
          <input type="search" className='form-control' placeholder='Search' />
        </div>
        <div>
          <a
            href='#'
            className='btn btn-outline btn-outline-success btn-sm'
            onClick={() => setShowCreateProjectModal(true)}
          >
            <i className='fa fa-plus-circle'></i> Create Project
          </a>

          <Link to={'/projects/settings'}>
            <button className='btn btn-outline btn-outline-success btn-sm ms-3'>
              <i className='fa fa-gear'></i>
            </button>
          </Link>
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-12'>
        {apiData?.data?.projects?.length ? (
          apiData?.data?.projects?.map((res: any, index: number) => (
            <div className='col-md-6 col-xl-4' key={index}>
              <ToProjectCard
                title={res.name}
                data={res}
                clientHandler={createClient}
                isLoading={isLoading}
              />
            </div>
          ))
        ) : (
          isLoading ? (
            <h1 className='text-center'>Loading...</h1>
          ) : (
            <div className='col-lg-12 text-center'>
              <img
                src={toAbsoluteUrl('/media/illustrations/sketchy-1/17.png')}
                alt='New project placeholder vector'
                className='mw-400px mb-8'
              />
              <h1 className='display-3 text-muted'>Create New Project!</h1>
            </div>
          )
        )}
      </div>

      {totalPages > 1 && (
        <div className='mb-6'>
          <ul className="pagination">
            <li className={`page-item`}>
              <button className="btn btn-link btn-sm me-8" disabled={pageNumber === 1} onClick={() => handlePageChange(pageNumber - 1)}>
                <i className='fa fa-arrow-left'></i>
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${pageNumber === index + 1 ? 'active' : ''}`}>
                <button className="page-link rounded rounded-circle" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li className={`page-item`}>
              <button className="btn btn-sm btn-link ms-8" disabled={pageNumber === totalPages} onClick={() => handlePageChange(pageNumber + 1)}>
                <i className='fa fa-arrow-right'></i>
              </button>
            </li>
          </ul>
        </div>
      )}

      <CreateProjectModal
        show={showCreateProjectModal}
        handleClose={() => setShowCreateProjectModal(false)}
      />
    </>
  )
}

export { Overview }
