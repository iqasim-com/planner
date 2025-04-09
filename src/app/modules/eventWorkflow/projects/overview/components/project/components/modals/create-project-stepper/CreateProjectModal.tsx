/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Modal } from 'react-bootstrap'
import { initialProjectCreationState, ProjectCreationInitialstateProps } from './IProjectModel'
import { StepperComponent } from '../../../../../../../../../../_metronic/assets/ts/components'
import { KTSVG } from '../../../../../../../../../../_metronic/helpers/components/KTSVG'
import { Step1 } from './steps/Step1'
import { Step2 } from './steps/Step2'
import { Step3 } from './steps/Step3'
import { Step4 } from './steps/Step4'
import { Step5 } from './steps/Step5'
import { Step6 } from './steps/Step6'
import { Form, Formik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../../../../../../../../../setup/store'
import { api } from '../../../../../../../../../../setup/axios/api'
import { PROJECTS } from '../../../../../../../../auth/core/_requests'
import { addProject } from '../../../../../../redux/projectBoard/createProjectSlice'

type Props = {
  show: boolean
  handleClose: () => void
}

const modalsRoot = document.getElementById('root-modals') || document.body

const CreateProjectModal = ({ show, handleClose }: Props) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [hasError, setHasError] = useState(false)

  const status = useAppSelector(state => state.flagStatus.isStatus)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()
  }

  const nextStep = (values: any) => {
    setHasError(false)
    if (!stepper.current) {
      return
    }

    if (stepper.current.getCurrentStepIndex() === 1) {
      if (values.name === '' || values.category === '' || !status) {
        setHasError(true)
        return
      }
    }

    if (stepper.current.getCurrentStepIndex() === 2) {
      setHasError(false)
      if (!values.eventDates.every((day: any) =>
        day.date && day.startTime && day.duration && day.eventDateCategory && day.targetTotalBudget && day.currencyCode.value
      )) {
        setHasError(true);
        return;
      }
    }

    if (stepper.current.getCurrentStepIndex() === 4) {
      setHasError(false)
      if (!values.clients.every((client: any) =>
        client.firstName && client.lastName && client.email && client.cellPhone && client.role
      )) {
        setHasError(true);
        return;
      }
    }
    stepper.current.goNext()
  }

  const onCreatingNewProject = (values: ProjectCreationInitialstateProps, actions: any) => {
    setLoading(true)
    try {
      api.post(PROJECTS, {project: values}).then((res) => {
        setTimeout(() => {
          setLoading(false)
          handleClose()
          dispatch(addProject(res.data.project))
        }, 2000)
      })
    } catch (err) {
      console.error(err)
    }
  }

  return createPortal(
    <Modal
      id='kt_modal_create_project'
      tabIndex={-1}
      aria-hidden='true'
      dialogClassName='modal-dialog modal-dialog-centered mw-900px'
      show={show}
      onEntered={loadStepper}
    >
      <div className='modal-header'>
        <h2>Create Project</h2>

        {/* begin::Close */}
        <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
          <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
        </div>
        {/* end::Close */}
      </div>

      <div className='modal-body py-lg-10 px-lg-10'>
        {/*begin::Stepper */}
        <div
          ref={stepperRef}
          className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
          id='kt_modal_create_project_stepper'
        >
          {/* begin::Aside*/}
          <div className='d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px'>
            {/* begin::Nav*/}
            <div className='stepper-nav ps-lg-10'>
              {/* begin::Step 1*/}
              <div className='stepper-item current' data-kt-stepper-element='nav'>
                {/* begin::Wrapper*/}
                <div className='stepper-wrapper'>
                  {/* begin::Icon*/}
                  <div className='stepper-icon w-40px h-40px'>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number'>1</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className='stepper-label'>
                    <h3 className='stepper-title'>Category</h3>

                    <div className='stepper-desc'>Name your project category</div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className='stepper-line h-40px'></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 1*/}

              {/* begin::Step 2*/}
              <div className='stepper-item' data-kt-stepper-element='nav'>
                {/* begin::Wrapper*/}
                <div className='stepper-wrapper'>
                  {/* begin::Icon*/}
                  <div className='stepper-icon w-40px h-40px'>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number'>2</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className='stepper-label'>
                    <h3 className='stepper-title'>Details</h3>

                    <div className='stepper-desc'>Enter your project details</div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className='stepper-line h-40px'></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 2*/}

              {/* begin::Step 3*/}
              <div className='stepper-item' data-kt-stepper-element='nav'>
                {/* begin::Wrapper*/}
                <div className='stepper-wrapper'>
                  {/* begin::Icon*/}
                  <div className='stepper-icon w-40px h-40px'>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number'>3</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className='stepper-label'>
                    <h3 className='stepper-title'>Location</h3>

                    <div className='stepper-desc'>Enter desired location</div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className='stepper-line h-40px'></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 3*/}

              {/* begin::Step 4*/}
              <div className='stepper-item' data-kt-stepper-element='nav'>
                {/* begin::Wrapper*/}
                <div className='stepper-wrapper'>
                  {/* begin::Icon*/}
                  <div className='stepper-icon w-40px h-40px'>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number'>4</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className='stepper-label'>
                    <h3 className='stepper-title'>Clients</h3>

                    <div className='stepper-desc'>
                      Enter the personnel information of the clients
                    </div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className='stepper-line h-40px'></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 4*/}

              {/* begin::Step 5*/}
              <div className='stepper-item' data-kt-stepper-element='nav'>
                {/* begin::Wrapper*/}
                <div className='stepper-wrapper'>
                  {/* begin::Icon*/}
                  <div className='stepper-icon w-40px h-40px'>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number'>5</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className='stepper-label'>
                    <h3 className='stepper-title'>Vendors</h3>

                    <div className='stepper-desc'>Enter the Vendors working on the project</div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className='stepper-line h-40px'></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 5*/}

              {/* begin::Step 6*/}
              <div className='stepper-item' data-kt-stepper-element='nav'>
                {/* begin::Wrapper*/}
                <div className='stepper-wrapper'>
                  {/* begin::Icon*/}
                  <div className='stepper-icon w-40px h-40px'>
                    <i className='stepper-check fas fa-check'></i>
                    <span className='stepper-number'>6</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className='stepper-label'>
                    <h3 className='stepper-title'>Completed</h3>

                    <div className='stepper-desc'>Review and Submit</div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}
              </div>
              {/* end::Step 6*/}
            </div>
            {/* end::Nav*/}
          </div>
          {/* begin::Aside*/}

          {/*begin::Content */}
          <div className='flex-row-fluid py-lg-5 px-lg-15'>
            {/*begin::Form */}
            <Formik
              initialValues={initialProjectCreationState}
              // validationSchema={projectCreationValidationSchema}
              onSubmit={(values, actions) => onCreatingNewProject(values, actions)}
            >
              {({ isSubmitting, isValid, values, handleChange, setFieldValue }) => {
                console.log('Updated values', values)
                return (
                  <Form>
                    <Step1 values={values} onChange={handleChange} sfv={setFieldValue} hasError={hasError} />
                    <Step2 values={values} onChange={handleChange} setFieldValue={setFieldValue} hasError={hasError} />
                    <Step3 values={values} onChange={handleChange} hasError={hasError} />
                    <Step4 values={values} hasError={hasError} sfv={setFieldValue} />
                    <Step5 values={values} hasError={hasError} sfv={setFieldValue} />
                    <Step6 values={values} />
                    <div className='d-flex flex-stack pt-10'>
                      <div className='me-2'>
                        <button
                          type='button'
                          className='btn btn-lg btn-light-primary me-3'
                          data-kt-stepper-action='previous'
                          onClick={prevStep}
                        >
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr063.svg'
                            className='svg-icon-3 me-1'
                          />{' '}
                          Previous
                        </button>
                      </div>
                      <div>
                        <button
                          type='submit'
                          className='btn btn-lg btn-primary'
                          data-kt-stepper-action='submit'
                          disabled={!isValid || isSubmitting}
                        >
                          {!isSubmitting && (
                            <>
                              <span className='indicator-label'>Submit</span>{' '}
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

                        <button
                          type='submit'
                          className='btn btn-lg btn-primary'
                          data-kt-stepper-action='next'
                          onClick={() => nextStep(values)}
                        >
                          Next Step{' '}
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-1 me-0'
                          />
                        </button>
                      </div>
                    </div>
                  </Form>
                )
              }}
            </Formik>
            {/*end::Form */}
          </div>
          {/*end::Content */}
        </div>
        {/* end::Stepper */}
      </div>
    </Modal>,
    modalsRoot
  )
}

export { CreateProjectModal }
