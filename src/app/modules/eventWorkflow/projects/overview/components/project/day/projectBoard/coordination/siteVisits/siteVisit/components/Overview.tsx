import React, {FC, useState} from 'react'
import ImageUpload from './ImageUpload/ImageUpload'
import {Field, FieldArray, Form, Formik} from 'formik'
import {SiteVisitsProps} from '../../../../../../../../../redux/projectBoard/Coordination/SiteVisits/siteVisitsModel'
import {useAppDispatch, useAppSelector} from '../../../../../../../../../../../../../setup/store'
import {
  addNewSiteVisitDocument,
  addOptionalVisitors,
  addRequiredVisitors,
  addSiteVisitsFieldData,
  removeSiteVisitDocument,
  removeVisitor,
} from '../../../../../../../../../redux/projectBoard/Coordination/SiteVisits/siteVisitsSlice'
import FileUploading from '../../../requestForInformations/requestForInformation/components/formElements/fileUploading'
import NewSiteVisitor from './siteVisitor/siteVisitor'

const Overview: FC = () => {
  const dispatch = useAppDispatch()
  const siteVisitsData = useAppSelector((state) => state.siteVisits)

  /**
   * Function for updating store values for RFIs
   * @param field keyof RequestForInformationProps
   * @param value any
   */
  const handleFormFieldChange = (field: keyof SiteVisitsProps, value: any) => {
    dispatch(addSiteVisitsFieldData({[field]: value} as SiteVisitsProps))
  }

  /**
   * Function for setting important document state in store
   * @param e any
   */
  const setDocuments = (e: any) => {
    e.preventDefault()
    dispatch(
      addNewSiteVisitDocument({
        id: Date.now(),
        name: e.target.files[0].name,
        path: e.target.files[0].webkitRelativePath,
      })
    )
  }

  /**
   * Function for submitting meeting minutes
   * TODO: Will add proper implementation later
   * @param e
   */
  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log('SiteVisits Data', siteVisitsData)
  }

  return (
    <>
      <div>
        <Formik
          initialValues={{requiredVisitors: [], optionalVisitors: []}}
          onSubmit={(values) => console.log('Site Visits', values)}
        >
          {({values, setFieldValue}) => (
            <Form>
              <div className='d-flex flex-wrap flex-stack mb-6 justify-content-end'>
                <div className='d-flex flex-wrap my-2 me-4'>
                  <button className='btn btn-sm btn-success' type='submit'>
                    <i className='fa fa-database'></i> Save
                  </button>
                </div>
                <div className='d-flex flex-wrap my-2 me-4'>
                  <button className='btn btn-sm btn-primary' type='submit'>
                    <i className='fa fa-envelope-open'></i> Publish
                  </button>
                </div>
              </div>

              <div className='bg-gray-100 py-20 px-lg-20'>
                <div className='container-fluid'>
                  <div className='row mb-12'>
                    <div className='col-lg-8'>
                      <Field
                        type='text'
                        placeholder='Company Name'
                        className='form-control mb-3'
                        name='companyName'
                        value={siteVisitsData.companyName}
                        onChange={(e: any) => handleFormFieldChange('companyName', e.target.value)}
                      />
                      <Field
                        type='text'
                        className='form-control mb-3'
                        placeholder='Address'
                        name='companyAddress'
                        value={siteVisitsData.companyAddress}
                        onChange={(e: any) =>
                          handleFormFieldChange('companyAddress', e.target.value)
                        }
                      />
                      <Field
                        type='text'
                        placeholder='Contact'
                        className='form-control mb-3'
                        name='companyContact'
                        value={siteVisitsData.companyContact}
                        onChange={(e: any) =>
                          handleFormFieldChange('companyContact', e.target.value)
                        }
                      />
                      <Field
                        type='text'
                        placeholder='Email'
                        className='form-control mb-3'
                        name='companyEmail'
                        value={siteVisitsData.companyEmail}
                        onChange={(e: any) => handleFormFieldChange('companyEmail', e.target.value)}
                      />
                    </div>
                    <div className='col-lg-4 d-flex justify-content-center align-items-center position-relative'>
                      <Field
                        type='file'
                        onChange={(event: any) =>
                          handleFormFieldChange('companyLogo', event.target.value)
                        }
                        name='companyLogo'
                        className='position-absolute w-100 h-100 opacity-0 cursor-pointer'
                      />
                      <img
                        src={siteVisitsData.companyLogo}
                        width='100%'
                        className='border border-dashed border-4 p-2'
                        alt='Company Logo'
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-4 mb-4'>
                      <Field
                        type='text'
                        className='form-control'
                        id='projectName'
                        name='projectName'
                        placeholder='Project Name'
                        value={siteVisitsData.projectName}
                        onChange={(e: any) => handleFormFieldChange('projectName', e.target.value)}
                      />
                    </div>
                    <div className='col-lg-4 mb-4'>
                      <Field
                        type='text'
                        className='form-control'
                        id='projectNumber'
                        name='projectNumber'
                        placeholder='Project Number'
                        value={siteVisitsData.projectNumber}
                        onChange={(e: any) =>
                          handleFormFieldChange('projectNumber', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-lg-4 mb-4'>
                      <Field
                        type='text'
                        className='form-control'
                        id='objective'
                        name='objective'
                        placeholder='Objective'
                        value={siteVisitsData.objective}
                        onChange={(e: any) => handleFormFieldChange('objective', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <hr className='mb-12' />
                <div className='container-fluid mb-12'>
                  <div className='row'>
                    <div className='col-lg-4 mb-4'>
                      <Field
                        className='form-control'
                        name='siteVisitOrganizer'
                        id='siteVisitOrganizer'
                        placeholder='Organizer'
                        value={siteVisitsData.siteVisitOrganizer}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitOrganizer', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-lg-4 mb-4'>
                      <Field
                        className='form-control'
                        name='siteVisitJobTitle'
                        id='siteVisitJobTitle'
                        placeholder='Job Title'
                        value={siteVisitsData.siteVisitJobTitle}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitJobTitle', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-lg-4 mb-4'>
                      <Field
                        className='form-control'
                        name='siteVisitCompany'
                        id='siteVisitCompany'
                        placeholder='Company'
                        value={siteVisitsData.siteVisitCompany}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitCompany', e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className='container-fluid bg-gray-100 py-6 border'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <h2 className='mb-8 text-muted required'>Required Visitors</h2>
                    </div>
                  </div>
                  <div className='row'>
                    <FieldArray
                      name='requiredVisitors'
                      render={({remove, push}) => (
                        <>
                          {siteVisitsData.requiredVisitors.length ? (
                            siteVisitsData.requiredVisitors.map((visitor, index) => (
                              <>
                                <NewSiteVisitor key={index} index={index} visitor={visitor} onRemove={() => dispatch(removeVisitor(visitor.id))} />
                              </>
                            ))
                          ) : (
                            <p className='text-danger'>Add required participants</p>
                          )}
                          <div className='col-lg-6'>
                            <button
                              type='button'
                              className='btn btn-sm btn-primary'
                              onClick={() => {
                                dispatch(
                                  addRequiredVisitors({
                                    id: Date.now(), // Will change later
                                    firstName: '',
                                    lastName: '',
                                    jobTitle: '',
                                    email: '',
                                    company: '',
                                    attendance: '',
                                  })
                                )
                              }}
                            >
                              <i className='fa fa-plus'></i> Add Visitor
                            </button>
                          </div>
                        </>
                      )}
                    />
                  </div>
                </div>

                <div className='container-fluid bg-gray-100 py-6 mb-12 border'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <h2 className='fw-bold text-muted mb-8'>Optional Visitors</h2>
                    </div>
                  </div>
                  <div className='row'>
                    <FieldArray
                      name='optionalVisitors'
                      render={({remove, push}) => (
                        <>
                          {siteVisitsData.optionalVisitors.length ? (
                            siteVisitsData.optionalVisitors.map((visitor, index) => (
                              <>
                                <NewSiteVisitor key={index} index={index} visitor={visitor} onRemove={() => dispatch(removeVisitor(visitor.id))} />
                              </>
                            ))
                          ) : (
                            <p className='text-danger'>Add required participants</p>
                          )}
                          <div className='col-lg-6'>
                            <button
                              type='button'
                              className='btn btn-sm btn-primary'
                              onClick={() => {
                                dispatch(
                                  addOptionalVisitors({
                                    id: Date.now(), // Will change later
                                    firstName: '',
                                    lastName: '',
                                    jobTitle: '',
                                    email: '',
                                    company: '',
                                    attendance: '',
                                  })
                                )
                              }}
                            >
                              <i className='fa fa-plus'></i> Add Visitor
                            </button>
                          </div>
                        </>
                      )}
                    />
                  </div>
                </div>

                <div className='container-fluid mb-12'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <h2 className='mb-8 text-muted required'>Site Visit Info</h2>
                    </div>
                    <div className='col-lg-6 mb-4'>
                      <Field
                        className='form-control'
                        name='siteVisitAddress'
                        id='siteVisitAddress'
                        placeholder='Site Address'
                        value={siteVisitsData.siteVisitAddress}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitAddress', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-lg-6 mb-4'>
                      <Field
                        className='form-control'
                        name='siteVisitPhone'
                        id='siteVisitPhone'
                        placeholder='Site Phone'
                        value={siteVisitsData.siteVisitPhone}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitPhone', e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-4 mb-4'>
                      <Field
                        className='form-control'
                        name='siteVisitsGuideName'
                        id='siteVisitsGuideName'
                        placeholder='Guide Name'
                        value={siteVisitsData.siteVisitsGuideName}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitsGuideName', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-lg-4 mb-4'>
                      <Field
                        className='form-control'
                        name='siteVisitsGuideContact'
                        id='siteVisitsGuideContact'
                        placeholder='Guide Contact'
                        value={siteVisitsData.siteVisitsGuideContact}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitsGuideContact', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-lg-4 mb-4'>
                      <Field
                        className='form-control'
                        name='siteVisitsGuideEmail'
                        id='siteVisitsGuideEmail'
                        placeholder='Guide Email'
                        value={siteVisitsData.siteVisitsGuideEmail}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitsGuideEmail', e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className='container-fluid border py-6 mb-12'>
                  <div className='row'>
                    {siteVisitsData.importantDocuments.length ? (
                      siteVisitsData.importantDocuments.map((doc, index) => {
                        return (
                          <div className='col-lg-6 mb-4' key={index}>
                            <FileUploading
                              doc={doc}
                              index={index}
                              removeDocument={() => dispatch(removeSiteVisitDocument(doc.id))}
                            />
                          </div>
                        )
                      })
                    ) : (
                      <p className='text-danger'>Add important documents</p>
                    )}
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <button className='btn btn-sm btn-primary position-relative'>
                        <input
                          type='file'
                          className='position-absolute w-100 opacity-0 cursor-pointer'
                          onChange={(e) => setDocuments(e)}
                        />
                        <i className='fa fa-plus'></i> Add Document
                      </button>
                    </div>
                  </div>
                </div>
                <div className='container-fluid mb-12'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <h2 className='mb-8 text-muted required'>Observations</h2>
                    </div>
                    <div className='col-lg-6 mb-6'>
                      <Field
                        className='form-control'
                        name='reporterFullName'
                        id='reporterFullName'
                        placeholder='Reporter Full Name'
                        value={siteVisitsData.reporterFullName}
                        onChange={(e: any) =>
                          handleFormFieldChange('reporterFullName', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-lg-6 mb-6'>
                      <Field
                        className='form-control'
                        name='previousActionPoint'
                        id='previousActionPoint'
                        placeholder='Previous Action Point'
                        value={siteVisitsData.previousActionPoint}
                        onChange={(e: any) =>
                          handleFormFieldChange('previousActionPoint', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-lg-12 mb-6'>
                      <textarea
                        className='form-control'
                        rows={6}
                        id='currentCondition'
                        name='currentCondition'
                        placeholder='Current Condition'
                        value={siteVisitsData.currentCondition}
                        onChange={(e: any) =>
                          handleFormFieldChange('currentCondition', e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <h2 className='mb-8 text-muted'>Pictures</h2>
                    </div>
                  </div>
                </div>
                <ImageUpload />
                <div className='container-fluid'>
                  <div className='row mb-12'>
                    <div className='col-lg-6 mb-4'>
                      <Field
                        type='text'
                        className='form-control'
                        name='siteVisitsVideoLink'
                        id='siteVisitsVideoLink'
                        placeholder='Video Link'
                        value={siteVisitsData.siteVisitsVideoLink}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitsVideoLink', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-lg-6 mb-4'>
                      <Field
                        type='text'
                        className='form-control'
                        name='siteVisitsNextStep'
                        id='siteVisitsNextStep'
                        placeholder='Next Step'
                        value={siteVisitsData.siteVisitsNextStep}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitsNextStep', e.target.value)
                        }
                        f
                      />
                    </div>
                    <div className='col-lg-6 mb-4'>
                      <Field
                        type='text'
                        className='form-control'
                        name='siteVisitsAssignee'
                        id='siteVisitsAssignee'
                        placeholder='Assignee'
                        value={siteVisitsData.siteVisitsAssignee}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitsAssignee', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-lg-6 mb-4'>
                      <Field
                        type='date'
                        className='form-control'
                        name='siteVisitsDueDate'
                        id='siteVisitsDueDate'
                        placeholder='Due Date'
                        value={siteVisitsData.siteVisitsDueDate}
                        onChange={(e: any) =>
                          handleFormFieldChange('siteVisitsDueDate', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-lg-4 mb-4 col-sm-12'>
                      <Field
                        id='inputState'
                        component='select'
                        name='selectStatus'
                        className='form-control form-control-solid-bg cursor-pointer bg-gray-200i'
                        value={siteVisitsData.selectStatus}
                        onChange={(e: any) => handleFormFieldChange('selectStatus', e.target.value)}
                      >
                        <option>Select Status</option>
                        <option>Open</option>
                        <option>In-progress</option>
                        <option>Pending</option>
                        <option>Completed</option>
                      </Field>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <h2 className='text-white text-center mb-8'>DISCLAIMER</h2>
                      <textarea
                        name='disclaimer'
                        className='form-control'
                        value={siteVisitsData.disclaimer}
                        onChange={(e: any) => handleFormFieldChange('disclaimer', e.target.value)}
                        rows={6}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export {Overview}
