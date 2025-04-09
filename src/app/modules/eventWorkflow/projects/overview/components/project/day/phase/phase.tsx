import React, { FC, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useApiHook from '../../../../../../../hooks/useApiHook'
import { GET_PROJECTS, PROJECTS } from '../../../../../../../auth/core/_requests'
import { KTSVG, toAbsoluteUrl } from '../../../../../../../../../_metronic/helpers'
import Status from '../../../../../../../../../_metronic/helpers/components/status/status'
import moment from 'moment'
import { Form, Formik } from 'formik'
import { api } from '../../../../../../../../../setup/axios/api'
import { PhaseCreationForm } from './phaseCreationForm'
import { initialValues, validationSchema } from './PhasesModel'
import { useAppDispatch, useAppSelector } from '../../../../../../../../../setup/store'
import { RootState } from '../../../../../../../../../setup/rootReducer'
import EWFModal from '../../../../../../../../../_metronic/partials/modals/modal/modal'
import { closeModalAction } from '../../../../../redux/globalSlices/genericModal'

const ProjectPhases: FC = () => {
  const [loading, setLoading] = useState(false)
  const { eventDateId, projectId } = useParams()
  const dispatch = useAppDispatch()

  const isOpen = useAppSelector((state: RootState) => {
    const modalState = state.genericModal.phaseCreationModal;
    return modalState ?? false; // Fallback if undefined to avoid modal hanging
  })

  const [apiData, isLoading, refetch] = useApiHook(
    `${GET_PROJECTS}${projectId}/event-dates/${eventDateId}/phases`
  )

  const formatDate = (date: string) => {
    return moment(date).format('MMMM D, YYYY')
  }

  const handleSubmit = (values: any) => {
    setLoading(true)
    const formValues = {
      name: values.name,
      status: values.status,
      startDate: values.startDate,
      dueDate: values.dueDate
    }
    try {
      api.post(`${PROJECTS}/${projectId}/event-dates/${eventDateId}/phases`, { phase: formValues })
        .then(res => {
          setLoading(false)
          refetch()
          dispatch(closeModalAction('phaseCreationModal'))
        })
    } catch (error) {
      throw new Error('Unable to create new phase')
    }
  }

  return (
    <>
      <div className='row g-6 g-xl-9'>
        {apiData?.data?.phases?.length > 0 ? (
          apiData?.data?.phases?.map((phase: any, index: number) => {
            return (
              <div className='col-md-6 col-xl-4' key={phase.phaseId}>
                <Link to={`/projects/project/days/day/phase/${projectId}/event-date/${eventDateId}/phase/${phase.phaseId}/workspace`}>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='me-5 bg-light-success border border-dotted border-3 rounder rounded-circle w-50px h-50px d-flex justify-content-center align-items-center'>
                      <h1 className='m-0'>{index + 1}</h1>
                    </div>
                    <div className="card mb-4 shadow-sm me-3 w-75 bg-hover-light-secondary">
                      <div className="card-header justify-content-between align-items-center d-flex">
                        <h5 className="card-title text-primary mb-0">{phase.name}</h5>
                        <Status status={phase.status.name} />
                      </div>
                      <div className="card-body pt-5 text-primary">
                        <div className="d-flex justify-content-between">
                          <p className="mb-0">Start Date</p>
                          <p>{formatDate(phase.startDate)}</p>
                        </div>
                        <div className="separator separator-dashed my-3"></div>
                        <div className="d-flex justify-content-between">
                          <span className="text-primary fw-semibold fs-6 me-2">Comments</span>
                          <span>{phase?.comments?.length}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="text-primary fw-semibold fs-6 me-2">Workspaces</span>
                          <span>{phase?.workspaces?.length}</span>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="d-flex justify-content-between">
                          <p className="mb-0 text-danger">Due Date</p>
                          <p className='text-danger'>{formatDate(phase.dueDate)}</p>
                        </div>
                      </div>
                    </div>
                    {index < apiData?.data?.phases.length - 1 && <div>
                      <i className="text-muted fa fa-arrow-right fa-4x"></i>
                    </div>}
                  </div>
                </Link>
              </div>
            )
          })
        ) : (
          isLoading ? (
            <h1 className='text-center'>Loading...</h1>
          ) : (
            <div className='col-lg-12 text-center'>
              <img
                src={toAbsoluteUrl('/media/illustrations/sketchy-1/15.png')}
                alt='New project placeholder vector'
                className='mw-400px mb-8'
              />
              <h1 className='display-3 text-muted'>Create New Phase</h1>
            </div>
          )
        )}
      </div>

      <EWFModal
        show={isOpen}
        classes='mw-900px'
        modalTitle='Create New Phase'
        modalId='phaseCreationModal'
        handleClose={() => dispatch(closeModalAction('phaseCreationModal'))}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue, isValid, values, isSubmitting }) => (
            <Form>
              <div className="mb-6">
                <PhaseCreationForm setFieldValue={setFieldValue} values={values} touched={touched} errors={errors} />
              </div>
              <button
                type='submit'
                className='btn btn-outline btn-outline-success'
                data-kt-stepper-action='submit'
                disabled={!isValid || isSubmitting}
              >
                {!isSubmitting && (
                  <>
                    <span className='indicator-label'> <i className="fa fa-plus"></i> Create Phase</span>{' '}
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr064.svg'
                      className='svg-icon-3 ms-2 me-0'
                    />
                  </>
                )}
                {loading && (
                  <span>
                    Please wait...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
            </Form>
          )}
        </Formik>
      </EWFModal>
    </>
  )
}

export default ProjectPhases
