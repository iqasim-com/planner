/* eslint-disable jsx-a11y/anchor-is-valid */
import {Field, Form, Formik} from 'formik'
import React, {FC, useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../../../../../../../../_metronic/helpers'
import FileUploading from '../../../requestForInformations/requestForInformation/components/formElements/fileUploading'
import {SubmittalProps} from '../../../../../../../../../redux/projectBoard/Coordination/Submittal/submittalModels'
import {addFieldData, addNewResponse, addNewStackholder, addNewSubmittalDocument, addOptionalStackholderCard, addResponseCard, addStackholderCard, removeResponseCard, removeStackholder, removeSubmittalDocument} from '../../../../../../../../../redux/projectBoard/Coordination/Submittal/submittalSlice'
import {useAppDispatch, useAppSelector} from '../../../../../../../../../../../../../setup/store'

const Overview: FC = () => {
  const dispatch = useAppDispatch()
  const submittalData = useAppSelector((state) => state.submittal)
  const [userStamp, setUserStamp] = useState<string>('/media/placeholder/placeholder-image.png')
  const [companyLogo, setCompanyLogo] = useState<string>('/media/placeholder/placeholder-image.png')

  /**
   * Function for setting important document state in store
   * @param e any
   */
  const setDocuments = (e: any) => {
    e.preventDefault()
    dispatch(
      addNewSubmittalDocument({
        id: Date.now(),
        name: e.target.files[0].name,
        path: e.target.files[0].webkitRelativePath,
      })
    )
  }

  /**
   * Function for updating store values for RFIs
   * @param field keyof RequestForInformationProps
   * @param value any
   */
  const handleFormFieldChange = (field: keyof SubmittalProps, value: any) => {
    dispatch(addFieldData({[field]: value} as SubmittalProps))
  }

  const onSubmitSubmittals = (values: any, actions: any) => {
    console.log('Form Values', values)
    console.log('Form Action', actions)
  }

  return (
    <div>
      <Formik
        onSubmit={(values, actions) => onSubmitSubmittals(values, actions)}
        initialValues={{name: 'mq'}}
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
            <div className='bg-gray-100 py-20'>
              <div className='container-fluid px-lg-20'>
                <div className='row mb-12'>
                  <div className='col-lg-8'>
                    <Field
                      type='text'
                      placeholder='Company Name'
                      className='form-control mb-3'
                      name='companyName'
                      value={submittalData.companyName}
                      onChange={(e: any) => handleFormFieldChange('companyName', e.target.value)}
                    />
                    <Field
                      type='text'
                      className='form-control mb-3'
                      placeholder='Address'
                      name='companyAddress'
                      value={submittalData.companyAddress}
                      onChange={(e: any) => handleFormFieldChange('companyAddress', e.target.value)}
                    />
                    <Field
                      type='text'
                      placeholder='Contact'
                      className='form-control mb-3'
                      name='companyContact'
                      value={submittalData.companyContact}
                      onChange={(e: any) => handleFormFieldChange('companyContact', e.target.value)}
                    />
                    <Field
                      type='text'
                      placeholder='Email'
                      className='form-control mb-3'
                      name='companyEmail'
                      value={submittalData.companyEmail}
                      onChange={(e: any) => handleFormFieldChange('companyEmail', e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 d-flex justify-content-center align-items-center position-relative'>
                    <Field
                      type='file'
                      onChange={(event: any) => {
                        setCompanyLogo(URL.createObjectURL(event.target.files[0]))
                        setFieldValue('companyLogoUrl', companyLogo)
                      }}
                      name='companyLogo'
                      className='position-absolute w-100 h-100 opacity-0 cursor-pointer'
                    />
                    <img
                      src={companyLogo}
                      width='100%'
                      className='border border-dashed border-4 p-2'
                      alt='Company Logo'
                    />
                  </div>
                </div>

                <div className='row mb-12'>
                  <div className='col-lg-4 mb-4'>
                    <Field
                      type='text'
                      className='form-control'
                      required
                      placeholder='Project Name'
                      name='projectName'
                      id='projectName'
                      value={submittalData.projectName}
                      onChange={(e: any) => handleFormFieldChange('projectName', e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 mb-4'>
                    <Field
                      type='text'
                      className='form-control'
                      required
                      placeholder='Project ID'
                      name='projectID'
                      id='projectID'
                      value={submittalData.projectID}
                      onChange={(e: any) => handleFormFieldChange('projectID', e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 mb-4'>
                    <Field
                      type='text'
                      className='form-control'
                      required
                      placeholder='Issuer'
                      name='issuer'
                      id='issuer'
                      value={submittalData.issuer}
                      onChange={(e: any) => handleFormFieldChange('issuer', e.target.value)}
                    />
                  </div>

                  <div className='col-lg-4 mb-4'>
                    <Field
                      type='text'
                      className='form-control'
                      placeholder='Job Title'
                      required
                      name='jobTitle'
                      id='jobTitle'
                      value={submittalData.jobTitle}
                      onChange={(e: any) => handleFormFieldChange('jobTitle', e.target.value)}
                    />
                  </div>

                  <div className='col-lg-4 mb-4'>
                    <Field
                      type='date'
                      className='form-control'
                      required
                      placeholder='Date of submission'
                      name='dateOfSubmission'
                      id='dateOfSubmission'
                      value={submittalData.dateOfSubmission}
                      onChange={(e: any) =>
                        handleFormFieldChange('dateOfSubmission', e.target.value)
                      }
                    />
                  </div>
                  <div className='col-lg-4 mb-4'>
                    <Field
                      type='date'
                      placeholder='Due date'
                      className='form-control'
                      required
                      name='dueDate'
                      id='dueDate'
                      value={submittalData.dueDate}
                      onChange={(e: any) => handleFormFieldChange('dueDate', e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 mb-4'>
                    <Field
                      type='text'
                      className='form-control'
                      required
                      placeholder='Submittal ID'
                      name='submittalID'
                      id='submittalID'
                      value={submittalData.submittalID}
                      onChange={(e: any) => handleFormFieldChange('submittalID', e.target.value)}
                    />
                  </div>
                </div>
                <div className='row mb-12'>
                  <div className='col-lg-12'>
                    <h2 className='mb-8 text-muted required'>
                      Stakeholders Information{' '}
                      <button
                        onClick={(e) => dispatch(addStackholderCard({
                          id: Date.now(),
                          SubmittalAssignee: '',
                          SubmittalCompanyName: '',
                          SubmittalJobTitle: '',
                          SubmittalEmail: '',
                          SubmittalPhone: ''
                        }))}
                        className='btn btn-primary'
                      >
                        <i className='fa fa-plus'></i>Add Stackholder
                      </button>
                    </h2>
                  </div>
                  {submittalData.stackHolderInformation.map((stackholder, index) => (
                    <div className='col-lg-6 mb-4' key={index}>
                      <div className='card shadow-sm'>
                        <div className='card-header'>
                          <h3 className='card-title'>{index + 1}</h3>
                          <div className='card-toolbar'>
                            <button
                              onClick={(e) => {
                                if (
                                  window.confirm(
                                    `Are you sure you want to delete? This operation can't be undo`
                                  )
                                ) {
                                  dispatch(removeStackholder(stackholder.id))
                                } else {
                                  return
                                }
                              }}
                              type='button'
                              className='btn btn-sm btn-light'
                            >
                              <i className='fa fa-trash'></i>
                            </button>
                          </div>
                        </div>
                        <div className='card-body'>
                          <Field
                            type='text'
                            placeholder='Assignee'
                            name='SubmittalAssignee'
                            className='form-control mb-3'
                            value={submittalData.stackHolderInformation[index].SubmittalAssignee}
                            onChange={(e: any) =>
                              dispatch(
                                addNewStackholder({
                                  id: stackholder.id,
                                  value: e.target.value,
                                  key: 'SubmittalAssignee'
                                })
                              )
                            }
                          />
                          <Field
                            type='text'
                            placeholder='Company Name'
                            name='SubmittalCompanyName'
                            className='form-control mb-3'
                            value={submittalData.stackHolderInformation[index].SubmittalCompanyName}
                            onChange={(e: any) =>
                              dispatch(
                                addNewStackholder({
                                  id: stackholder.id,
                                  value: e.target.value,
                                  key: 'SubmittalCompanyName'
                                })
                              )
                            }
                          />
                          <Field
                            type='text'
                            placeholder='Job Title'
                            name='SubmittalJobTitle'
                            className='form-control mb-3'
                            value={submittalData.stackHolderInformation[index].SubmittalJobTitle}
                            onChange={(e: any) =>
                              dispatch(
                                addNewStackholder({
                                  id: stackholder.id,
                                  value: e.target.value,
                                  key: 'SubmittalJobTitle'
                                })
                              )
                            }
                          />
                          <Field
                            type='text'
                            placeholder='Email'
                            name='SubmittalEmail'
                            className='form-control mb-3'
                            value={submittalData.stackHolderInformation[index].SubmittalEmail}
                            onChange={(e: any) =>
                              dispatch(
                                addNewStackholder({
                                  id: stackholder.id,
                                  value: e.target.value,
                                  key: 'SubmittalEmail'
                                })
                              )
                            }
                          />
                          <Field
                            type='text'
                            placeholder='Phone'
                            name='SubmittalPhone'
                            className='form-control mb-3'
                            value={submittalData.stackHolderInformation[index].SubmittalPhone}
                            onChange={(e: any) =>
                              dispatch(
                                addNewStackholder({
                                  id: stackholder.id,
                                  value: e.target.value,
                                  key: 'SubmittalPhone'
                                })
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='row mb-12'>
                  <div className='col-lg-12'>
                    <h2 className='mb-8 text-muted required'>
                      Other Stackholders (only for visibility reason){' '}
                      <button
                        onClick={(e) => dispatch(addOptionalStackholderCard({
                          id: Date.now(),
                          SubmittalAssignee: '',
                          SubmittalCompanyName: '',
                          SubmittalJobTitle: '',
                          SubmittalEmail: '',
                          SubmittalPhone: ''
                        }))}
                        className='btn btn-primary'
                      >
                        <i className='fa fa-plus'></i>Add Other Stackholder
                      </button>
                    </h2>
                  </div>
                  {submittalData.optionalStackHolderInformation.map((optionalStackholder, index) => (
                    <div className='col-lg-6 mb-4' key={index}>
                      <div className='card shadow-sm'>
                        <div className='card-header'>
                          <h3 className='card-title'>{index + 1}</h3>
                          <div className='card-toolbar'>
                            <button
                              onClick={(e) => {
                                if (
                                  window.confirm(
                                    `Are you sure you want to delete? This operation can't be undo`
                                  )
                                ) {
                                  dispatch(removeStackholder(optionalStackholder.id))
                                } else {
                                  return
                                }
                              }}
                              type='button'
                              className='btn btn-sm btn-light'
                            >
                              <i className='fa fa-trash'></i>
                            </button>
                          </div>
                        </div>
                        <div className='card-body'>
                          <Field
                            type='text'
                            placeholder='Assignee'
                            name='SubmittalAssignee'
                            className='form-control mb-3'
                            value={submittalData.optionalStackHolderInformation[index].SubmittalAssignee}
                            onChange={(e: any) =>
                              dispatch(
                                addNewStackholder({
                                  id: optionalStackholder.id,
                                  value: e.target.value,
                                  key: 'SubmittalAssignee'
                                })
                              )
                            }
                          />
                          <Field
                            type='text'
                            placeholder='Company Name'
                            name='SubmittalCompanyName'
                            className='form-control mb-3'
                            value={submittalData.optionalStackHolderInformation[index].SubmittalCompanyName}
                            onChange={(e: any) =>
                              dispatch(
                                addNewStackholder({
                                  id: optionalStackholder.id,
                                  value: e.target.value,
                                  key: 'SubmittalCompanyName'
                                })
                              )
                            }
                          />
                          <Field
                            type='text'
                            placeholder='Job Title'
                            name='SubmittalJobTitle'
                            className='form-control mb-3'
                            value={submittalData.optionalStackHolderInformation[index].SubmittalJobTitle}
                            onChange={(e: any) =>
                              dispatch(
                                addNewStackholder({
                                  id: optionalStackholder.id,
                                  value: e.target.value,
                                  key: 'SubmittalJobTitle'
                                })
                              )
                            }
                          />
                          <Field
                            type='text'
                            placeholder='Email'
                            name='SubmittalEmail'
                            className='form-control mb-3'
                            value={submittalData.optionalStackHolderInformation[index].SubmittalEmail}
                            onChange={(e: any) =>
                              dispatch(
                                addNewStackholder({
                                  id: optionalStackholder.id,
                                  value: e.target.value,
                                  key: 'SubmittalEmail'
                                })
                              )
                            }
                          />
                          <Field
                            type='text'
                            placeholder='Phone'
                            name='SubmittalPhone'
                            className='form-control mb-3'
                            value={submittalData.optionalStackHolderInformation[index].SubmittalPhone}
                            onChange={(e: any) =>
                              dispatch(
                                addNewStackholder({
                                  id: optionalStackholder.id,
                                  value: e.target.value,
                                  key: 'SubmittalPhone'
                                })
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='row'>
                  <div className='col-lg-4 mb-4'>
                    <Field
                      component='select'
                      className='form-control'
                      required
                      placeholder='Submittal ID'
                      name='submittalCategory'
                      id='submittalCategory'
                      value={submittalData.submittalCategory}
                      onChange={(e: any) =>
                        handleFormFieldChange('submittalCategory', e.target.value)
                      }
                    >
                      <option value='none'>Choose Category</option>
                      <option value='shopDrawing'>Shop Drawing</option>
                      <option value='productData'>Product Data</option>
                      <option value='requestForInformation'>Request for information</option>
                      <option value='compFormQualityRec'>COMP. FORM / QUALITY REC</option>
                      <option value='qualitySystemDoc'>Quality System DOC</option>
                      <option value='other'>Other</option>
                    </Field>
                  </div>
                  <div className='col-lg-4 mb-4'>
                    <Field
                      type='text'
                      className='form-control'
                      required
                      placeholder='Title'
                      name='submittalTitle'
                      id='submittalTitle'
                      value={submittalData.submittalTitle}
                      onChange={(e: any) => handleFormFieldChange('submittalTitle', e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 mb-4'>
                    <Field
                      type='text'
                      className='form-control'
                      required
                      placeholder='Spec No'
                      name='submittalSpecNo'
                      id='submittalSpecNo'
                      value={submittalData.submittalSpecNo}
                      onChange={(e: any) =>
                        handleFormFieldChange('submittalSpecNo', e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className='row mb-12'>
                  <div className='col-lg-12'>
                    <textarea
                      className='form-control'
                      name='submittalDescription'
                      placeholder='Submittal Description'
                      rows={6}
                      value={submittalData.submittalDescription}
                      onChange={(e: any) =>
                        handleFormFieldChange('submittalDescription', e.target.value)
                      }
                    ></textarea>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-12'>
                    <h2 className='mb-8 text-muted required'>
                      Important Documents{' '}
                      <button className='btn btn-sm btn-primary position-relative'>
                        <input
                          type='file'
                          className='position-absolute w-100 opacity-0 cursor-pointer'
                          onChange={(e) => setDocuments(e)}
                        />
                        <i className='fa fa-plus'></i> Add Document
                      </button>
                    </h2>
                  </div>
                </div>
                <div className='row'>
                  {submittalData.importantDocuments.length ? (
                    submittalData.importantDocuments.map((doc, index) => {
                      return (
                        <div className='col-lg-6 mb-4' key={index}>
                          <FileUploading
                            doc={doc}
                            index={index}
                            removeDocument={() => dispatch(removeSubmittalDocument(doc.id))}
                          />
                        </div>
                      )
                    })
                  ) : (
                    <p className='text-danger'>Add important documents</p>
                  )}
                </div>

                <hr className='my-12' />

                <div className='row'>
                  <div className='col-lg-12'>
                    <h2 className='mb-8 text-muted required'>
                      Responses
                      <button
                        className='btn btn-sm btn-primary ms-3'
                        onClick={(e) => dispatch(addResponseCard({
                          id: Date.now(),
                          responseStatus: '',
                          submittalResponse: '',
                          st_assignee: '',
                          st_jobTitle: '',
                          st_email: '',
                          st_phone: '',
                          st_date: '',
                          st_signature: '',
                          comments: ''
                        }))}
                      >
                        <i className='fa fa-plus'></i> Add Responses
                      </button>
                    </h2>
                  </div>
                </div>

                <div className='row mb-12 border py-3 border-dashed border-3'>
                  {submittalData.responses.map((res, index) => (
                    <div className='col-lg-12 mb-6' key={index}>
                      <div className='card shadow-sm'>
                        <div className='card-header'>
                          <h3 className='card-title'>{index + 1}</h3>
                          <div className='card-toolbar'>
                            <button
                              type='button'
                              className='btn btn-sm btn-danger'
                              onClick={(e) => {
                                if (
                                  window.confirm(
                                    `Are you sure you want to delete? This operation can't be undo`
                                  )
                                ) {
                                  dispatch(removeResponseCard(res.id))
                                } else {
                                  return
                                }
                              }}
                            >
                              <i className='fa fa-trash'></i>
                            </button>
                          </div>
                        </div>
                        <div className='card-body'>
                          <div className='row'>
                            <div className='col-lg-3 mb-4'>
                              <Field
                                name='responseStatus'
                                component='select'
                                className='form-control form-select mb-4'
                                id='responseStatus'
                                value={submittalData.responses[index].responseStatus}
                                onChange={(e: any) =>
                                  dispatch(
                                    addNewResponse({
                                      id: res.id,
                                      value: e.target.value,
                                      key: 'responseStatus',
                                    })
                                  )
                                }
                              >
                                <option value='none'>Select status</option>
                                <option value='in-progress'>In-progress</option>
                                <option value='pending'>Pending</option>
                                <option value='completed'>Completed</option>
                              </Field>
                            </div>
                            <div className='col-lg-9 mb-4'>
                              <textarea
                                name='submittalResponse'
                                className='form-control'
                                rows={6}
                                value={submittalData.responses[index].submittalResponse}
                                onChange={(e: any) =>
                                  dispatch(
                                    addNewResponse({
                                      id: res.id,
                                      value: e.target.value,
                                      key: 'submittalResponse',
                                    })
                                  )
                                }
                              ></textarea>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-4'>
                              <Field
                                type='text'
                                placeholder='Assignee'
                                className='form-control mb-4'
                                required
                                name='st_assignee'
                                id='st_assignee'
                                value={submittalData.responses[index].st_assignee}
                                onChange={(e: any) =>
                                  dispatch(
                                    addNewResponse({
                                      id: res.id,
                                      value: e.target.value,
                                      key: 'st_assignee',
                                    })
                                  )
                                }
                              />
                              <Field
                                type='text'
                                placeholder='Job Title'
                                className='form-control mb-4'
                                required
                                name='st_jobTitle'
                                id='st_jobTitle'
                                value={submittalData.responses[index].st_jobTitle}
                                onChange={(e: any) =>
                                  dispatch(
                                    addNewResponse({
                                      id: res.id,
                                      value: e.target.value,
                                      key: 'st_jobTitle',
                                    })
                                  )
                                }
                              />
                              <Field
                                type='text'
                                placeholder='Email'
                                className='form-control mb-4'
                                required
                                name='st_email'
                                id='st_email'
                                value={submittalData.responses[index].st_email}
                                onChange={(e: any) =>
                                  dispatch(
                                    addNewResponse({
                                      id: res.id,
                                      value: e.target.value,
                                      key: 'st_email',
                                    })
                                  )
                                }
                              />
                            </div>
                            <div className='col-lg-4'>
                              <Field
                                type='text'
                                placeholder='Phone'
                                className='form-control mb-4'
                                required
                                name='st_phone'
                                id='st_phone'
                                value={submittalData.responses[index].st_phone}
                                onChange={(e: any) =>
                                  dispatch(
                                    addNewResponse({
                                      id: res.id,
                                      value: e.target.value,
                                      key: 'st_phone',
                                    })
                                  )
                                }
                              />
                              <Field
                                type='date'
                                placeholder='Date'
                                className='form-control mb-4'
                                required
                                name='st_date'
                                id='st_date'
                                value={submittalData.responses[index].st_date}
                                onChange={(e: any) =>
                                  dispatch(
                                    addNewResponse({
                                      id: res.id,
                                      value: e.target.value,
                                      key: 'st_date',
                                    })
                                  )
                                }
                              />
                              <Field
                                type='text'
                                placeholder='Signature'
                                className='form-control mb-4'
                                required
                                name='st_signature'
                                id='st_signature'
                                value={submittalData.responses[index].st_signature}
                                onChange={(e: any) =>
                                  dispatch(
                                    addNewResponse({
                                      id: res.id,
                                      value: e.target.value,
                                      key: 'st_signature',
                                    })
                                  )
                                }
                              />
                            </div>
                            <div className='col-lg-4 d-flex justify-content-center align-items-center position-relative'>
                              <Field
                                type='file'
                                onChange={(event: any) => {
                                  setUserStamp(URL.createObjectURL(event.target.files[0]))
                                  setFieldValue('userStampUrl', userStamp)
                                }}
                                name='userStamp'
                                className='position-absolute w-100 h-100 opacity-0 cursor-pointer'
                              />
                              <img
                                src={userStamp}
                                width='100%'
                                className='border border-dashed border-4 p-2'
                                alt='User stamp'
                              />
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-12'>
                              <textarea
                                className='form-control'
                                name='comments'
                                placeholder='Comment'
                                rows={7}
                                value={submittalData.responses[index].comments}
                                onChange={(e: any) =>
                                  dispatch(
                                    addNewResponse({
                                      id: res.id,
                                      value: e.target.value,
                                      key: 'comments',
                                    })
                                  )
                                }
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='row'>
                  <div className='col-lg-12'>
                    <h2 className='text-white text-center mb-8'>DISCLAIMER</h2>
                    <textarea
                      name='disclaimer'
                      className='form-control'
                      rows={6}
                      value={submittalData.disclaimer}
                      onChange={(e: any) =>
                        handleFormFieldChange('disclaimer', e.target.value)
                      }
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export {Overview}
