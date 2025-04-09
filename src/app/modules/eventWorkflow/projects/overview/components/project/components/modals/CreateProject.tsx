/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState, useRef, useEffect} from 'react'
// import {Modal} from 'react-bootstrap-v5'
import {StepperComponent} from '../../../../../../../../../_metronic/assets/ts/components'
import {KTSVG, toAbsoluteUrl} from '../../../../../../../../../_metronic/helpers'
import {Formik, Form, FormikValues, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
//import {defaultCreateProjectData, ICreateProjectData} from './IProjectModels'

interface ICreateProject {
    projectName: string
    projectTemplateName: string
    projectType: string
    eventDate: string
    guestCount: string
    budget: string 
    country: string 
    city: string 
    state: string 
    projectTime: string 
    duration: string
    primaryLanguage: string
    secondaryLanguage: string
}

// const inits: ICreateProject = {
//     projectName: '', 
//     projectTemplateName: 'Wedding template', 
//     projectType: 'Wedding',
//     eventDate: '06/09/2022',
//     guestCount: '150',
//     budget: '25,000',
//     country: 'USA', 
//     city: 'Brooklyn',
//     state: 'NY', 
//     time: '7:00PM',
//     duration: '12 Hrs'
// }

const createProjectSchema = [
    Yup.object({
        projectName: Yup.string().required().label('Project Name'),
        category: Yup.string().required().label('Project Category'),
        projectTemplateName: Yup.string().required().label('Project Template Name'),
    }),
    Yup.object({
        eventDate: Yup.string().required().label('Date'),
        guestCount: Yup.string().required().label('Guess Count'),
        budget: Yup.string().required().label('Budget'),
        country: Yup.string().required().label('Country'),
        city: Yup.string().required().label('City'),
        Sate: Yup.string().required().label('State'),
        projectTime: Yup.string().required().label('Time'),
        duration: Yup.string().required().label('Duration'),
        primaryLanguage: Yup.string().required().label('Primary Language'),
        secondaryLanguage: Yup.string().required().label('Secondary Language'),
    })
]

type Props = {
    show: boolean
    handleClose: () => void
}

interface ICreateAccount {
    appName: string
    category: string
    framework: string
    dbName: string
    dbType: string
    nameOnCard: string
    cardNumber: string
    cardExpiryMonth: string
    cardExpiryYear: string
    cardCvv: string
    saveCard: string
  }
  
  const inits: ICreateAccount = {
    appName: '',
    category: '1',
    framework: '1',
    dbName: '',
    dbType: '1',
    nameOnCard: 'Max Doe',
    cardNumber: '4111 1111 1111 1111',
    cardExpiryMonth: '1',
    cardExpiryYear: '2025',
    cardCvv: '123',
    saveCard: '1',
  }
  
  const createAppSchema = [
    Yup.object({
      appName: Yup.string().required().label('App name'),
      category: Yup.string().required().label('Category'),
    }),
    Yup.object({
      framework: Yup.string().required().label('Framework'),
    }),
    Yup.object({
      dbName: Yup.string().required().label('Database name'),
      dbType: Yup.string().required().label('Database engine'),
    }),
    Yup.object({
      nameOnCard: Yup.string().required().label('Name'),
      cardNumber: Yup.string().required().label('Card Number'),
      cardExpiryMonth: Yup.string().required().label('Expiration Month'),
      cardExpiryYear: Yup.string().required().label('Expiration Year'),
      cardCvv: Yup.string().required().label('CVV'),
    }),
  ]
  
  const CreateProject: FC<Props> = ({show, handleClose}) => {
    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const [currentSchema, setCurrentSchema] = useState(createAppSchema[0])
    const [initValues] = useState<ICreateAccount>(inits)
  
    const loadStepper = () => {
      stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    }
  
    const prevStep = () => {
      if (!stepper.current) {
        return
      }
  
      stepper.current.goPrev()
  
      setCurrentSchema(createAppSchema[stepper.current.currentStepIndex - 1])
    }
  
    const submitStep = (values: ICreateAccount, actions: FormikValues) => {
      if (!stepper.current) {
        return
      }
  
      setCurrentSchema(createAppSchema[stepper.current.currentStepIndex])
  
      if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
        stepper.current.goNext()
      } else {
        stepper.current.goto(1)
        actions.resetForm()
      }
    }
  
    useEffect(() => {
      if (!stepperRef.current) {
        return
      }
  
      loadStepper()
    }, [stepperRef])
  
    return (
      <div className='modal fade' id='kt_modal_create_project' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered mw-900px'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h2>Create Project</h2>
  
              <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
              </div>
            </div>
  
            <div className='modal-body py-lg-10 px-lg-10'>
              <div
                ref={stepperRef}
                className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
                id='kt_modal_create_project_stepper'
              >
                <div className='d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px'>
                  <div className='stepper-nav ps-lg-10'>
                    <div className='stepper-item current' data-kt-stepper-element='nav'>
                      <div className='stepper-line w-40px'></div>
  
                      <div className='stepper-icon w-40px h-40px'>
                        <i className='stepper-check fas fa-check'></i>
                        <span className='stepper-number'>1</span>
                      </div>
  
                      <div className='stepper-label'>
                        <h3 className='stepper-title'>Category</h3>
  
                        <div className='stepper-desc'>Name your Pproject</div>
                        <div className='stepper-desc'>Select your Project Category</div>
                      </div>
                    </div>
  
                    <div className='stepper-item' data-kt-stepper-element='nav'>
                      <div className='stepper-line w-40px'></div>
  
                      <div className='stepper-icon w-40px h-40px'>
                        <i className='stepper-check fas fa-check'></i>
                        <span className='stepper-number'>2</span>
                      </div>
  
                      <div className='stepper-label'>
                        <h3 className='stepper-title'>Details</h3>
  
                        <div className='stepper-desc'>Enter your project details</div>
                      </div>
                    </div>
  
                    <div className='stepper-item' data-kt-stepper-element='nav'>
                      <div className='stepper-line w-40px'></div>
  
                      <div className='stepper-icon w-40px h-40px'>
                        <i className='stepper-check fas fa-check'></i>
                        <span className='stepper-number'>3</span>
                      </div>
  
                      <div className='stepper-label'>
                        <h3 className='stepper-title'>Location</h3>
  
                        <div className='stepper-desc'>Enter desired location</div>
                      </div>
                    </div>
  
                    <div className='stepper-item' data-kt-stepper-element='nav'>
                      <div className='stepper-line w-40px'></div>
  
                      <div className='stepper-icon w-40px h-40px'>
                        <i className='stepper-check fas fa-check'></i>
                        <span className='stepper-number'>4</span>
                      </div>
  
                      <div className='stepper-label'>
                        <h3 className='stepper-title'>Couple</h3>
  
                        <div className='stepper-desc'>Enter personnel information of the couple</div>
                      </div>
                    </div>
  
                    <div className='stepper-item' data-kt-stepper-element='nav'>
                      <div className='stepper-line w-40px'></div>
  
                      <div className='stepper-icon w-40px h-40px'>
                        <i className='stepper-check fas fa-check'></i>
                        <span className='stepper-number'>5</span>
                      </div>
  
                      <div className='stepper-label'>
                        <h3 className='stepper-title'>Complete</h3>
  
                        <div className='stepper-desc'>Review and Submit</div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className='flex-row-fluid py-lg-5 px-lg-15'>
                  <Formik
                    validationSchema={currentSchema}
                    initialValues={initValues}
                    onSubmit={submitStep}
                  >
                    {() => (
                      <Form className='form' noValidate id='kt_modal_create_project_form'>
                           {/* begin::Step 1 */}
                            <div className='current' data-kt-stepper-element='content'>
                                <div className='w-100'>
                                    <div className='fv-row mb-10'>
                                        {/* begin::Heading */}
                                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                            <span className='required'>Project Name</span>
                                            <i
                                            className='fas fa-exclamation-circle ms-2 fs-7'
                                            data-bs-toggle='tooltip'
                                            title='Specify your unique project name'
                                            ></i>
                                        </label>
                                        {/* end::Heading */}
        
                                        {/* begin::Form Group */}
                                        <Field
                                            type='text'
                                            className='form-control form-control-lg form-control-solid'
                                            name='projectName'
                                            placeholder=''
                                        />
                                        <div className='fv-plugins-message-container invalid-feedback'>
                                            <ErrorMessage name='projectName' />
                                        </div>
                                        {/* end::Form Group */}
                                    </div>
                                
                                    <div className='fv-row mb-10'>
                                        {/* begin::Heading */}
                                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                            <span className='required'>Project Category</span>
                                            <i
                                                className='fas fa-exclamation-circle ms-2 fs-7'
                                                data-bs-toggle='tooltip'
                                                title='Select your project category'
                                            ></i>
                                        </label>
                                        {/* end::Heading */}

                                        {/* begin::Form Group */}
                                        <Field 
                                            as='select'
                                            name='projectType'                                                        
                                        >
                                            <option value=''>Select a Project Type</option>
                                            <option value='wedding'>Wedding</option>
                                            <option value='corporateEvent'>Corporate</option>
                                            <option value='religious'>Religious</option>
                                        </Field>
                                        <div className='fv-plugins-message-container invalid-feedback'>
                                            <ErrorMessage name='projectType' />
                                        </div>
                                        {/* end::Form Group */}
                                    </div>                            

                                    <div className='fv-row mb-10'>
                                        {/* begin::Heading */}
                                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                            <span className='required'>Project Template</span>
                                            <i
                                                className='fas fa-exclamation-circle ms-2 fs-7'
                                                data-bs-toggle='tooltip'
                                                title='Select your project template'
                                            ></i>
                                        </label>
                                        {/* end::Heading */}

                                        {/* begin::Form Group */}
                                        <Field 
                                            as='select'
                                            name='projectTemplateName'                                                        
                                        >
                                            <option value=''>Select a Project Template</option>
                                            <option value='wedding'>Wedding</option>
                                            <option value='corporateEvent'>Corporate</option>
                                            <option value='religious'>Religious</option>
                                        </Field>
                                        <div className='fv-plugins-message-container invalid-feedback'>
                                            <ErrorMessage name='projectTemplateName' />
                                        </div>
                                        {/* end::Form Group */}
                                    </div>
                                </div>
                            </div>
                            {/* end::Step 1 */}
  
                            {/* begin::Step 2 */}
                            <div data-kt-stepper-element='content'>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='fv-row mb-10'>
                                            {/* begin::Heading */}
                                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                                <span className='required'>Event date</span>
                                                <i
                                                className='fas fa-exclamation-circle ms-2 fs-7'
                                                data-bs-toggle='tooltip'
                                                title='Specify your event date'
                                                ></i>
                                            </label>
                                            {/* end::Heading */}
            
                                            {/* begin::Form Group */}
                                            <Field
                                                type='date'
                                                className='form-control form-control-lg form-control-solid'
                                                name='eventDate'
                                                placeholder=''
                                            />
                                            <div className='fv-plugins-message-container invalid-feedback'>
                                                <ErrorMessage name='eventDate' />
                                            </div>
                                            {/* end::Form Group */}
                                        </div>

                                        <div className='fv-row mb-10'>
                                            {/* begin::Heading */}
                                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                                <span className='required'>Event Scheduled Time</span>
                                                <i
                                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                                    data-bs-toggle='tooltip'
                                                    title='Specify your event time'
                                                ></i>
                                            </label>
                                            {/* end::Heading */}
            
                                            {/* begin::Form Group */}
                                            <Field
                                                type='time'
                                                className='form-control form-control-lg form-control-solid'
                                                name='eventTime'
                                                placeholder='projectTime'
                                            />
                                            <div className='fv-plugins-message-container invalid-feedback'>
                                                <ErrorMessage name='projectTime' />
                                            </div>
                                            {/* end::Form Group */}
                                        </div>
                                    </div>

                                    <div className='fv-row mb-10'>
                                        {/* begin::Heading */}
                                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                            <span className='required'>Event Duration</span>
                                            <i
                                                className='fas fa-exclamation-circle ms-2 fs-7'
                                                data-bs-toggle='tooltip'
                                                title='Specify your event time'
                                            ></i>
                                        </label>
                                        {/* end::Heading */}
        
                                        {/* begin::Form Group */}
                                        <Field
                                            type='number'
                                            className='form-control form-control-lg form-control-solid'
                                            name='duration'
                                            placeholder='12'
                                        />
                                        <div className='fv-plugins-message-container invalid-feedback'>
                                            <ErrorMessage name='duration' />
                                        </div>
                                        {/* end::Form Group */}
                                    </div>                              

                                    <div className='row'>
                                        <div className='col'>
                                            {/* begin::Heading */}
                                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                                <span className='required'>Guest Count</span>
                                                <i
                                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                                    data-bs-toggle='tooltip'
                                                    title='Enter the Event guest count'
                                                ></i>
                                            </label>
                                            {/* end::Heading */}

                                            {/* begin::Form Group */}
                                            <Field
                                                type='number'
                                                className='form-control form-control-lg form-control-solid'
                                                name='guestCount'
                                                placeholder=''
                                            />
                                            <div className='fv-plugins-message-container invalid-feedback'>
                                                <ErrorMessage name='guestCount' />
                                            </div>
                                            {/* end::Form Group */}
                                        </div>                            

                                        <div className='col'>
                                            {/* begin::Heading */}
                                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                                <span className='required'>Budget</span>
                                                <i
                                                    className='fas fa-exclamation-circle ms-2 fs-7'
                                                    data-bs-toggle='tooltip'
                                                    title='Enter your event budget'
                                                ></i>
                                            </label>
                                            {/* end::Heading */}

                                            {/* begin::Form Group */}
                                            <Field
                                                type='text'
                                                className='form-control form-control-lg form-control-solid'
                                                name='budget'
                                                placeholder=''
                                            />
                                            <div className='fv-plugins-message-container invalid-feedback'>
                                                <ErrorMessage name='budget' />
                                            </div>
                                            {/* end::Form Group */}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            {/* end::Step 2 */}
    
                            {/* begin::Step 3 */}
                            <div data-kt-stepper-element='content'>
                                <div className='w-100'>
                                    <div className='row'>
                                        <div className='col'>
                                            {/* begin::Heading */}
                                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                                <span className='required'>City</span>
                                                <i
                                                className='fas fa-exclamation-circle ms-2 fs-7'
                                                data-bs-toggle='tooltip'
                                                title='Specify your event city'
                                                ></i>
                                            </label>
                                            {/* end::Heading */}
            
                                            {/* begin::Form Group */}
                                            <Field
                                                type='text'
                                                className='form-control form-control-lg form-control-solid'
                                                name='city'
                                                placeholder=''
                                            />
                                            <div className='fv-plugins-message-container invalid-feedback'>
                                                <ErrorMessage name='city' />
                                            </div>
                                            {/* end::Form Group */}
                                        </div>
            
                                        <div className='col mb-10'>
                                            {/* begin::Heading */}
                                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                                <span className='required'>State</span>
                                                <i
                                                className='fas fa-exclamation-circle ms-2 fs-7'
                                                data-bs-toggle='tooltip'
                                                title='Specify your project state'
                                                ></i>
                                            </label>
                                            {/* end::Heading */}
            
                                            {/* begin::Form Group */}
                                            <Field
                                                type='text'
                                                className='form-control form-control-lg form-control-solid'
                                                name='state'
                                                placeholder=''
                                            />
                                            <div className='fv-plugins-message-container invalid-feedback'>
                                                <ErrorMessage name='state' />
                                            </div>
                                            {/* end::Form Group */}
                                        </div>
                                    </div>

                                    <div className='fv-row mb-10'>
                                        {/* begin::Heading */}
                                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                            <span className='required'>Country</span>
                                            <i
                                            className='fas fa-exclamation-circle ms-2 fs-7'
                                            data-bs-toggle='tooltip'
                                            title='Specify your project country'
                                            ></i>
                                        </label>
                                        {/* end::Heading */}
        
                                        {/* begin::Form Group */}
                                        <Field
                                            type='text'
                                            className='form-control form-control-lg form-control-solid'
                                            name='country'
                                            placeholder=''
                                        />
                                        <div className='fv-plugins-message-container invalid-feedback'>
                                            <ErrorMessage name='country' />
                                        </div>
                                        {/* end::Form Group */}
                                    </div>

                                    <div className='row'>
                                        <div className='col'>
                                            {/* begin::Heading */}
                                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                                <span className='required'>Primary Language</span>
                                                <i
                                                className='fas fa-exclamation-circle ms-2 fs-7'
                                                data-bs-toggle='tooltip'
                                                title='Specify your primary language'
                                                ></i>
                                            </label>
                                            {/* end::Heading */}
            
                                            {/* begin::Form Group */}
                                            <Field
                                                type='text'
                                                className='form-control form-control-lg form-control-solid'
                                                name='primaryLanguage'
                                                placeholder=''
                                            />
                                            <div className='fv-plugins-message-container invalid-feedback'>
                                                <ErrorMessage name='primaryLanguage' />
                                            </div>
                                            {/* end::Form Group */}
                                        </div>

                                        <div className='col mb-10'>
                                            {/* begin::Heading */}
                                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                                                <span className='required'>Secondary Language</span>
                                                <i
                                                className='fas fa-exclamation-circle ms-2 fs-7'
                                                data-bs-toggle='tooltip'
                                                title='Specify your secondary language'
                                                ></i>
                                            </label>
                                            {/* end::Heading */}
            
                                            {/* begin::Form Group */}
                                            <Field
                                                type='text'
                                                className='form-control form-control-lg form-control-solid'
                                                name='secondaryLanguage'
                                                placeholder=''
                                            />
                                            <div className='fv-plugins-message-container invalid-feedback'>
                                                <ErrorMessage name='secondaryLanguage' />
                                            </div>
                                            {/* end::Form Group */}
                                        </div>
                                    </div>                                 
                                   
                                </div>
                            </div>
                            {/* end::Step 3 */}
    
                            {/* begin::Step 4 */}
                            <div data-kt-stepper-element='content'>
                                <div className='w-100'>
                                    <div className='pb-10 pb-lg-15'>
                                    <h2 className='fw-bolder text-dark'>Billing Details</h2>
        
                                    <div className='text-gray-400 fw-bold fs-6'>
                                        If you need more info, please check out
                                        <a href='#' className='text-primary fw-bolder'>
                                        Help Page
                                        </a>
                                        .
                                    </div>
                                    </div>
                                    <div className='d-flex flex-column mb-7 fv-row'>
                                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                                        <span className='required'>Name On Card</span>
                                        <i
                                        className='fas fa-exclamation-circle ms-2 fs-7'
                                        data-bs-toggle='tooltip'
                                        title="Specify a card holder's name"
                                        ></i>
                                    </label>
        
                                    <Field
                                        type='text'
                                        className='form-control form-control-solid'
                                        placeholder=''
                                        name='nameOnCard'
                                    />
                                    <div className='fv-plugins-message-container invalid-feedback'>
                                        <ErrorMessage name='nameOnCard' />
                                    </div>
                                    </div>
                                    <div className='d-flex flex-column mb-7 fv-row'>
                                    <label className='required fs-6 fw-bold form-label mb-2'>
                                        Card Number
                                    </label>
        
                                    <div className='position-relative'>
                                        <Field
                                        type='text'
                                        className='form-control form-control-solid'
                                        placeholder='Enter card number'
                                        name='cardNumber'
                                        />
                                        <div className='fv-plugins-message-container invalid-feedback'>
                                        <ErrorMessage name='cardNumber' />
                                        </div>
        
                                        <div className='position-absolute translate-middle-y top-50 end-0 me-5'>
                                        <img
                                            src={toAbsoluteUrl('/media/svg/card-logos/visa.svg')}
                                            alt=''
                                            className='h-25px'
                                        />
                                        <img
                                            src={toAbsoluteUrl('/media/svg/card-logos/mastercard.svg')}
                                            alt=''
                                            className='h-25px'
                                        />
                                        <img
                                            src={toAbsoluteUrl('/media/svg/card-logos/american-express.svg')}
                                            alt=''
                                            className='h-25px'
                                        />
                                        </div>
                                    </div>
                                    </div>
                                    <div className='row mb-10'>
                                    <div className='col-md-8 fv-row'>
                                        <label className='required fs-6 fw-bold form-label mb-2'>
                                        Expiration Date
                                        </label>
        
                                        <div className='row fv-row'>
                                        <div className='col-6'>
                                            <Field
                                            as='select'
                                            name='cardExpiryMonth'
                                            className='form-select form-select-solid'
                                            >
                                            <option></option>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                            <option value='8'>8</option>
                                            <option value='9'>9</option>
                                            <option value='10'>10</option>
                                            <option value='11'>11</option>
                                            <option value='12'>12</option>
                                            </Field>
                                            <div className='fv-plugins-message-container invalid-feedback'>
                                            <ErrorMessage name='cardExpiryMonth' />
                                            </div>
                                        </div>
        
                                        <div className='col-6'>
                                            <Field
                                            as='select'
                                            name='cardExpiryYear'
                                            className='form-select form-select-solid'
                                            >
                                            <option></option>
                                            <option value='2021'>2021</option>
                                            <option value='2022'>2022</option>
                                            <option value='2023'>2023</option>
                                            <option value='2024'>2024</option>
                                            <option value='2025'>2025</option>
                                            <option value='2026'>2026</option>
                                            <option value='2027'>2027</option>
                                            <option value='2028'>2028</option>
                                            <option value='2029'>2029</option>
                                            <option value='2030'>2030</option>
                                            <option value='2031'>2031</option>
                                            </Field>
                                            <div className='fv-plugins-message-container invalid-feedback'>
                                            <ErrorMessage name='cardExpiryYear' />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
        
                                    <div className='col-md-4 fv-row'>
                                        <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                                        <span className='required'>CVV</span>
                                        <i
                                            className='fas fa-exclamation-circle ms-2 fs-7'
                                            data-bs-toggle='tooltip'
                                            title='Enter a card CVV code'
                                        ></i>
                                        </label>
        
                                        <div className='position-relative'>
                                        <Field
                                            type='text'
                                            className='form-control form-control-solid'
                                            placeholder='CVV'
                                            name='cardCvv'
                                        />
                                        <div className='fv-plugins-message-container invalid-feedback'>
                                            <ErrorMessage name='cardCvv' />
                                        </div>
        
                                        <div className='position-absolute translate-middle-y top-50 end-0 me-3'>
                                            <KTSVG
                                            path='/media/icons/duotune/finance/fin002.svg'
                                            className='svg-icon-2hx'
                                            />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='d-flex flex-stack'>
                                    <div className='me-5'>
                                        <label className='fs-6 fw-bold form-label'>
                                        Save Card for further billing?
                                        </label>
                                        <div className='fs-7 fw-bold text-gray-400'>
                                        If you need more info, please check budget planning
                                        </div>
                                    </div>
        
                                    <label className='form-check form-switch form-check-custom form-check-solid'>
                                        <Field className='form-check-input' type='checkbox' />
                                        <span className='form-check-label fw-bold text-gray-400'>
                                        Save Card
                                        </span>
                                    </label>
                                    </div>
                                </div>
                            </div>
                            {/* end::Step 4 */}
    
                            {/* begin::Step 5 */}
                            <div data-kt-stepper-element='content'>
                            <div className='w-100 text-center'>
                                <h1 className='fw-bolder text-dark mb-3'>Release!</h1>
    
                                <div className='text-muted fw-bold fs-3'>
                                Submit your app to kickstart your project.
                                </div>
    
                                <div className='text-center px-4 py-15'>
                                <img
                                    src={toAbsoluteUrl('/media/illustrations/sketchy-1/9.png')}
                                    alt=''
                                    className='w-100 mh-300px'
                                />
                                </div>
                            </div>
                            </div>
                            {/* end::Step 5 */}
    
                            {/* begin::Actions 6 */}
                            <div className='d-flex flex-stack pt-10'>
                                <div className='me-2'>
                                    <button
                                    onClick={prevStep}
                                    type='button'
                                    className='btn btn-lg btn-light-primary me-3'
                                    data-kt-stepper-action='previous'
                                    >
                                    <KTSVG
                                        path='/media/icons/duotune/arrows/arr063.svg'
                                        className='svg-icon-4 me-1'
                                    />
                                    Back
                                    </button>
                                </div>
        
                                <div>
                                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                                    <span className='indicator-label'>
                                        {stepper.current?.currentStepIndex !==
                                        stepper.current?.totatStepsNumber! - 1 && 'Continue'}
                                        {stepper.current?.currentStepIndex ===
                                        stepper.current?.totatStepsNumber! - 1 && 'Submit'}
                                        <KTSVG
                                        path='/media/icons/duotune/arrows/arr064.svg'
                                        className='svg-icon-3 ms-2 me-0'
                                        />
                                    </span>
                                    </button>
                                </div>
                            </div>
                            {/* end::Actions 6 */}
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export {CreateProject}
  