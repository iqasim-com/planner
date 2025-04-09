/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useRef} from 'react'
import {createPortal} from 'react-dom'
import {Modal} from 'react-bootstrap'
import {
  CreateTaskProps,
  defaultCreateAppData,
  ICreateAppData,
  initialTaskValues,
  taskFormValidationSchema,
} from './IAppModels'
import {StepperComponent} from '../../../../../../../../../../_metronic/assets/ts/components'
import {KTSVG} from '../../../../../../../../../../_metronic/helpers'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step5} from './steps/Step5'
import {Form, Formik} from 'formik'

const modalsRoot = document.getElementById('root-modals') || document.body

const CreateTaskModal = ({show, handleClose, callback, loading}: CreateTaskProps) => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [data, setData] = useState<ICreateAppData>(defaultCreateAppData)
  const [hasError, setHasError] = useState(false)


  /**
   * This code defines a function named loadStepper which creates a new instance of
   * the StepperComponent class and sets it as the current property of a stepper object.
   * The stepper object is expected to have a current property that will store the
   * StepperComponent instance. The createInstance method of the StepperComponent class
   * takes an HTMLDivElement as an argument, which is obtained from a stepperRef object.
   * The as HTMLDivElement syntax is a type assertion that tells TypeScript that the stepperRef.current
   * value is an HTMLDivElement.
   */
  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  /**
   * Updates data with the provided partial fields and sets the new state of data
   * @param fieldsToUpdate - Partial fields of ICreateAppData
   */
  const updateData = (fieldsToUpdate: Partial<ICreateAppData>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }

  // TODO: Need to refector
  const checkAppBasic = (values: any): boolean => {
    if (
      !values.deadline ||
      !values.taskTitle ||
      !values.taskDescription ||
      !values.taskStartDate ||
      !values.taskCompletionDate ||
      !values.taskPhase
    ) {
      return false
    }
    return true
  }

  /**
   * This code defines a function named prevStep that contains a single if statement.
   * The function checks if stepper.current is falsy. If it is falsy, the function returns nothing.
   * Otherwise, the function calls the goPrev method on the current object of the stepper object,
   * which presumably moves the stepper to the previous step (in some UI).
   * @returns
   */
  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    stepper.current.goPrev()
  }

  // TODO: Need to refector
  const nextStep = (values: any) => {
    setHasError(false)
    if (!stepper.current) {
      return
    }
    if (stepper.current.getCurrentStepIndex() === 1) {
      if (!checkAppBasic(values)) {
        setHasError(true)
        return
      }
    }

    stepper.current.goNext()
  }

  return createPortal(
    <Modal
      id='kt_modal_create_app'
      tabIndex={-1}
      aria-hidden='true'
      dialogClassName='modal-dialog modal-dialog-centered mw-1000px'
      show={show}
      onHide={handleClose}
      onEntered={loadStepper}
    >
      <div className='modal-header'>
        <h2>
          <i className='fa fa-calendar-plus fa-1x text-primary'></i> Create Task
        </h2>
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
          id='kt_modal_create_app_stepper'
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
                    <h3 className='stepper-title'>Details</h3>
                    <div className='stepper-desc'>Basic task information</div>
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
                  {/* begin::Icon*/}

                  {/* begin::Label*/}
                  <div className='stepper-label'>
                    <h3 className='stepper-title'>Assignees</h3>

                    <div className='stepper-desc'>Task Assignees</div>
                  </div>
                  {/* begin::Label*/}
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
                    <h3 className='stepper-title'>Reviewers</h3>

                    <div className='stepper-desc'>Task Manager on site</div>
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
                    <h3 className='stepper-title'>Completed</h3>

                    <div className='stepper-desc'>Review and Submit</div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}
              </div>
              {/* end::Step 5*/}
            </div>
            {/* end::Nav*/}
          </div>
          {/* begin::Aside*/}

          {/*begin::Content */}
          <div className='flex-row-fluid py-lg-5 px-lg-15'>
            {/*begin::Form */}
            <Formik
              initialValues={initialTaskValues}
              validationSchema={taskFormValidationSchema}
              onSubmit={(values, actions) => callback(values)}
            >
              {({isSubmitting, isValid, errors, touched, values, setFieldValue}) => (
                <Form id='kt_modal_create_app_form'>
                  <Step1 data={data} updateData={updateData} />
                  <Step2 data={data} updateData={updateData} />
                  <Step3 data={data} updateData={updateData} />
                  <Step4 data={data} updateData={updateData} />
                  <Step5 />

                  {/*begin::Actions */}
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
                      >
                        {!isSubmitting && (
                          <>
                            <span className='indicator-label'>Create Task</span>{' '}
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
                        type='button'
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
                  {/*end::Actions */}
                </Form>
              )}
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

export default CreateTaskModal
