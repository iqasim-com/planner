/* eslint-disable jsx-a11y/anchor-is-valid */
import {Field, Form, Formik} from 'formik'
import React, {FC, useState} from 'react'
import {requestForInformationInitialValues} from '../RequestForInformationModel'
import FileUploading from './formElements/fileUploading'
import {
  addNewDocumentElements,
  addNewReference,
  addNewRequestReference,
  addNewResponse,
  addNewRfiDocument,
  addRequestForInformationFormFields,
  deleteReference,
  deleteRfiDocument,
  removeReferenceDocumentElements,
  removeRequestReference,
  removeRequestReferenceDocumentElements,
  removeResponse,
} from '../../../../../../../../../redux/projectBoard/Coordination/RequestForInformation/requestForInformationSlice'
import {useAppDispatch, useAppSelector} from '../../../../../../../../../../../../../setup/store'
import { FormFieldProps, RequestForInformationProps } from '../../../../../../../../../redux/projectBoard/Coordination/RequestForInformation/requestForInformationModels'

const Overview: FC = () => {
  const dispatch = useAppDispatch()
  const rfiStoreData = useAppSelector((state) => state.requestForInformation)
  const [companyLogo, setCompanyLogo] = useState<string>('/media/placeholder/placeholder-image.png')
  const [userStamp, setUserStamp] = useState<string>('/media/placeholder/placeholder-image.png')
  const [responderStamp, setResponderStamp] = useState<string>(
    '/media/placeholder/placeholder-image.png'
  )

  const inputFileStyles = {
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    cursor: 'pointer'
  }

  const onSubmitMeetingMinutes = (values: any, actions: any) => {
    console.log('Form Values', values)
  }

  /**
   * Function for updating store values for RFIs
   * @param field keyof RequestForInformationProps
   * @param value any
   */
  const handleFormFieldChange = (field: keyof RequestForInformationProps, value: any) => {
    dispatch(addRequestForInformationFormFields({[field]: value} as FormFieldProps))
  }

  /**
   * Function for setting important document state in store
   * @param e any
   */
  const setDocuments = (e: any) => {
    e.preventDefault()
    dispatch(
      addNewRfiDocument({
        id: Date.now(),
        name: e.target.files[0].name,
        path: e.target.files[0].webkitRelativePath,
      })
    )
  }

  /**
   * Function for adding new reference document
   * TODO: will optimise this
   * @param id number
   * @param e any
   * @param key string
   */
  const addNewReferenceDocument = (id: number, e: any, key: string, isReference: boolean) => {
    dispatch(
      addNewDocumentElements({
        id: id,
        value: {
          id: Date.now(),
          name: e.target.files[0].name,
          path: e.target.files[0].webkitRelativePath,
        },
        key,
        isReference,
      })
    )
  }

  return (
    <>
      <Formik
        onSubmit={(values, actions) => onSubmitMeetingMinutes(values, actions)}
        initialValues={requestForInformationInitialValues}
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
                      value={rfiStoreData.companyName}
                      onChange={(e: any) => handleFormFieldChange('companyName', e.target.value)}
                    />
                    <Field
                      type='text'
                      className='form-control mb-3'
                      placeholder='Address'
                      name='companyAddress'
                      value={rfiStoreData.companyAddress}
                      onChange={(e: any) => handleFormFieldChange('companyAddress', e.target.value)}
                    />
                    <Field
                      type='text'
                      placeholder='Contact'
                      className='form-control mb-3'
                      name='companyContact'
                      value={rfiStoreData.companyContact}
                      onChange={(e: any) => handleFormFieldChange('companyContact', e.target.value)}
                    />
                    <Field
                      type='text'
                      placeholder='Email'
                      className='form-control mb-3'
                      name='companyEmail'
                      value={rfiStoreData.companyEmail}
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
                <div className='row mb-6'>
                  <div className='col-lg-12'>
                    <h1>Request for information</h1>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-4'>
                    <label htmlFor='dateOfRequest'></label>
                    <Field
                      type='text'
                      placeholder='Project Name'
                      name='projectName'
                      className='form-control mb-6'
                      value={rfiStoreData.projectName}
                      onChange={(e: any) => handleFormFieldChange('projectName', e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label htmlFor='dateOfRequest'></label>
                    <Field
                      type='text'
                      placeholder='Project ID'
                      name='projectID'
                      className='form-control mb-6'
                      value={rfiStoreData.projectID}
                      onChange={(e: any) => handleFormFieldChange('projectID', e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4'>
                    <label htmlFor='dateOfRequest'>Date of Request</label>
                    <Field
                      type='date'
                      placeholder='Date of Request'
                      name='dateOfRequest'
                      className='form-control mb-6 bg-light'
                      value={rfiStoreData.dateOfRequest}
                      onChange={(e: any) => handleFormFieldChange('dateOfRequest', e.target.value)}
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='col-lg-4'>
                    <Field
                      type='text'
                      placeholder='Project Location'
                      name='projectLocation'
                      className='form-control mb-6'
                      value={rfiStoreData.projectLocation}
                      onChange={(e: any) =>
                        handleFormFieldChange('projectLocation', e.target.value)
                      }
                    />
                  </div>
                  <div className='col-lg-4'>
                    <Field
                      type='text'
                      placeholder='Request By'
                      name='requestBy'
                      className='form-control mb-6'
                      value={rfiStoreData.requestBy}
                      onChange={(e: any) => handleFormFieldChange('requestBy', e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4'>
                    <Field
                      type='text'
                      placeholder='RFI NO'
                      name='RFINO'
                      className='form-control mb-6'
                      value={rfiStoreData.RFINO}
                      onChange={(e: any) => handleFormFieldChange('RFINO', e.target.value)}
                    />
                  </div>
                </div>

                <div className='row mb-4'>
                  <div className='col-lg-3'>
                    <label htmlFor='responseDueDate'>Response Due Date</label>
                    <Field
                      type='date'
                      id='responseDueDate'
                      placeholder='Response due date'
                      name='responseDueDate'
                      className='form-control mb-6 bg-light'
                      value={rfiStoreData.responseDueDate}
                      onChange={(e: any) =>
                        handleFormFieldChange('responseDueDate', e.target.value)
                      }
                    />
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
                <div className='row'>
                  {rfiStoreData.importantDoc.length ? (
                    rfiStoreData.importantDoc.map((doc, index) => {
                      return (
                        <div className='col-lg-6 mb-4' key={index}>
                          <FileUploading
                            doc={doc}
                            index={index}
                            removeDocument={() => dispatch(deleteRfiDocument(doc.id))}
                          />
                        </div>
                      )
                    })
                  ) : (
                    <p className='text-danger'>Add important documents</p>
                  )}
                </div>
                <hr className='mb-12' />
                <div className='row mb-6'>
                  <div className='col-lg-12'>
                    <h2>Reference Document</h2>
                  </div>
                </div>
                <div className='row border border-3 border-dashed mb-4'>
                  {rfiStoreData.referenceDoc.map((rfiDoc, rfind) => (
                    <>
                      <div className='col-lg-12 py-3' key={rfind}>
                        <div className='d-flex p-3 mb-2 align-items-center bg-gray-200 justify-content-between'>
                          <h3 className='card-title'>
                            <span className='badge badge-primary'>{rfind + 1}</span>
                          </h3>
                          <button
                            className='btn btn-danger btn-sm'
                            onClick={(e) => {
                              if (
                                window.confirm(
                                  `Are you sure you want to delete? This operation can't be undo`
                                )
                              ) {
                                dispatch(deleteReference(rfiDoc.id))
                              } else {
                                return
                              }
                            }}
                          >
                            <i className='fa fa-trash'></i>
                          </button>
                        </div>
                        <textarea
                          name='rfiOverview'
                          className='form-control mb-4'
                          placeholder='Request for information overview'
                          value={rfiStoreData.referenceDoc[rfind].rfiOverview}
                          onChange={(e) =>
                            dispatch(
                              addNewDocumentElements({
                                id: rfiDoc.id,
                                value: e.target.value,
                                key: 'rfiOverview',
                                isReference: true,
                              })
                            )
                          }
                          rows={6}
                        ></textarea>

                        <button className='btn btn-sm btn-primary position-relative cursor-pointer'>
                          <input
                            type='file'
                            style={inputFileStyles}
                            className='position-absolute opacity-0 input-group-text'
                            onChange={(e: any) =>
                              addNewReferenceDocument(rfiDoc.id, e, 'document', true)
                            }
                          />
                          <i className='fa fa-upload'></i> Attach reference Documents
                        </button>
                      </div>

                      {rfiDoc.documents.length ? (
                        rfiDoc.documents.map((doc, index) => {
                          return (
                            <div className='col-lg-6 mb-6' key={index}>
                              <FileUploading
                                doc={doc}
                                index={index}
                                removeDocument={() =>
                                  dispatch(
                                    removeReferenceDocumentElements({
                                      refElementId: doc.id,
                                      referenceIndex: rfind,
                                    })
                                  )
                                }
                              />
                            </div>
                          )
                        })
                      ) : (
                        <p className='text-danger'>Add reference documents</p>
                      )}

                      <div className='col-lg-12'>
                        <div className='table-responsive'>
                          <table className='table table-rounded table-row-bordered border gy-7 gs-7 mb-12'>
                            <thead className='bg-gray-200 text-center fw-bold'>
                              <tr>
                                <th colSpan={3}>Change in Cost</th>
                                <th colSpan={3}>Change in Time</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <Field
                                    type='checkbox'
                                    name='changeInCost'
                                    checked={rfiStoreData.referenceDoc[rfind].changeInCost}
                                    className='form-check-input'
                                    onChange={(e: any) =>
                                      dispatch(
                                        addNewDocumentElements({
                                          id: rfiDoc.id,
                                          value: !rfiStoreData.referenceDoc[rfind].changeInCost,
                                          key: 'changeInCost',
                                          isReference: true,
                                        })
                                      )
                                    }
                                  />
                                </td>
                                <td className='bg-gray-400i' colSpan={2}>
                                  NO CHANGE
                                </td>
                                <td>
                                  <Field
                                    type='checkbox'
                                    name='changeInTime'
                                    className='form-check-input'
                                    checked={rfiStoreData.referenceDoc[rfind].changeInTime}
                                    onChange={(e: any) =>
                                      dispatch(
                                        addNewDocumentElements({
                                          id: rfiDoc.id,
                                          value: !rfiStoreData.referenceDoc[rfind].changeInTime,
                                          key: 'changeInTime',
                                          isReference: true,
                                        })
                                      )
                                    }
                                  />
                                </td>
                                <td className='bg-gray-400i' colSpan={2}>
                                  NO CHANGE
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Field
                                    type='checkbox'
                                    name='increaseInCost'
                                    className='form-check-input'
                                    disabled={rfiStoreData.referenceDoc[rfind].changeInCost}
                                    checked={rfiStoreData.referenceDoc[rfind].increaseInCost}
                                    onChange={(e: any) =>
                                      dispatch(
                                        addNewDocumentElements({
                                          id: rfiDoc.id,
                                          value: !rfiStoreData.referenceDoc[rfind].increaseInCost,
                                          key: 'increaseInCost',
                                          isReference: true,
                                        })
                                      )
                                    }
                                  />
                                </td>
                                <td>INCREASE IN COST</td>
                                <td>
                                  <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                      <Field
                                        component='select'
                                        name='selectCurrencyForIncreaseCost'
                                        className='form-select'
                                        disabled={rfiStoreData.referenceDoc[rfind].changeInCost}
                                        onChange={(e: any) =>
                                          dispatch(
                                            addNewDocumentElements({
                                              id: rfiDoc.id,
                                              value: e.target.value,
                                              key: 'selectCurrencyForIncreaseCost',
                                              isReference: true,
                                            })
                                          )
                                        }
                                      >
                                        <option value='none'>Currency</option>
                                        <option value='usd'>USD</option>
                                        <option value='pkr'>PKR</option>
                                      </Field>
                                    </div>
                                    <Field
                                      type='text'
                                      name='increaseCurrency'
                                      className='form-control'
                                      aria-label='Text input with dropdown button'
                                      value={rfiStoreData.referenceDoc[rfind].increaseCurrency}
                                      disabled={rfiStoreData.referenceDoc[rfind].changeInCost}
                                      onChange={(e: any) =>
                                        dispatch(
                                          addNewDocumentElements({
                                            id: rfiDoc.id,
                                            value: e.target.value,
                                            key: 'increaseCurrency',
                                            isReference: true,
                                          })
                                        )
                                      }
                                    />
                                  </div>
                                </td>
                                <td>
                                  <Field
                                    type='checkbox'
                                    name='increaseInTime'
                                    className='form-check-input'
                                    disabled={rfiStoreData.referenceDoc[rfind].changeInTime}
                                    checked={rfiStoreData.referenceDoc[rfind].increaseInTime}
                                    onChange={(e: any) =>
                                      dispatch(
                                        addNewDocumentElements({
                                          id: rfiDoc.id,
                                          value: !rfiStoreData.referenceDoc[rfind].increaseInTime,
                                          key: 'increaseInTime',
                                          isReference: true,
                                        })
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  INCREASE IN TIME <span className='float-end'># of Days =</span>
                                </td>
                                <td>
                                  <Field
                                    type='number'
                                    name='increaseInTimeOfDays'
                                    className='border border-1 form-control input-sm'
                                    min={1}
                                    value={rfiStoreData.referenceDoc[rfind].increaseInTimeOfDays}
                                    disabled={rfiStoreData.referenceDoc[rfind].changeInTime}
                                    onChange={(e: any) =>
                                      dispatch(
                                        addNewDocumentElements({
                                          id: rfiDoc.id,
                                          value: e.target.value,
                                          key: 'increaseInTimeOfDays',
                                          isReference: true,
                                        })
                                      )
                                    }
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Field
                                    type='checkbox'
                                    name='decreaseInCost'
                                    className='form-check-input'
                                    disabled={rfiStoreData.referenceDoc[rfind].changeInCost}
                                    checked={rfiStoreData.referenceDoc[rfind].decreaseInCost}
                                    onChange={(e: any) =>
                                      dispatch(
                                        addNewDocumentElements({
                                          id: rfiDoc.id,
                                          value: !rfiStoreData.referenceDoc[rfind].decreaseInCost,
                                          key: 'decreaseInCost',
                                          isReference: true,
                                        })
                                      )
                                    }
                                  />
                                </td>
                                <td>DECREASE IN COST</td>
                                <td>
                                  <div className='input-group mb-3'>
                                    <div className='input-group-prepend'>
                                      <Field
                                        component='select'
                                        name='selectCurrencyForDecreaseCost'
                                        className='form-select'
                                        disabled={rfiStoreData.referenceDoc[rfind].changeInCost}
                                        onChange={(e: any) =>
                                          dispatch(
                                            addNewDocumentElements({
                                              id: rfiDoc.id,
                                              value: e.target.value,
                                              key: 'selectCurrencyForDecreaseCost',
                                              isReference: true,
                                            })
                                          )
                                        }
                                      >
                                        <option value='none'>Currency</option>
                                        <option value='usd'>USD</option>
                                        <option value='pkr'>PKR</option>
                                      </Field>
                                    </div>
                                    <Field
                                      type='text'
                                      className='form-control'
                                      name='decreaseCurrency'
                                      aria-label='Text input with dropdown button'
                                      value={rfiStoreData.referenceDoc[rfind].decreaseCurrency}
                                      disabled={rfiStoreData.referenceDoc[rfind].changeInCost}
                                      onChange={(e: any) =>
                                        dispatch(
                                          addNewDocumentElements({
                                            id: rfiDoc.id,
                                            value: e.target.value,
                                            key: 'decreaseCurrency',
                                            isReference: true,
                                          })
                                        )
                                      }
                                    />
                                  </div>
                                </td>
                                <td>
                                  <Field
                                    type='checkbox'
                                    name='decreaseInTime'
                                    className='form-check-input'
                                    disabled={rfiStoreData.referenceDoc[rfind].changeInTime}
                                    checked={rfiStoreData.referenceDoc[rfind].decreaseInTime}
                                    onChange={(e: any) =>
                                      dispatch(
                                        addNewDocumentElements({
                                          id: rfiDoc.id,
                                          value: !rfiStoreData.referenceDoc[rfind].decreaseInTime,
                                          key: 'decreaseInTime',
                                          isReference: true,
                                        })
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  DECREASE IN TIME <span className='float-end'># of Days =</span>
                                </td>
                                <td>
                                  <Field
                                    type='number'
                                    name='decreaseInTimeOfDays'
                                    className='border border-1 form-control input-sm'
                                    min={1}
                                    value={rfiStoreData.referenceDoc[rfind].decreaseInTimeOfDays}
                                    disabled={rfiStoreData.referenceDoc[rfind].changeInTime}
                                    onChange={(e: any) =>
                                      dispatch(
                                        addNewDocumentElements({
                                          id: rfiDoc.id,
                                          value: e.target.value,
                                          key: 'decreaseInTimeOfDays',
                                          isReference: true,
                                        })
                                      )
                                    }
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className='row mb-6'>
                  <div className='col-lg-12'>
                    <div className='mb-4'>
                      <button
                        className='btn btn-sm btn-primary'
                        onClick={(e) =>
                          dispatch(
                            addNewReference({
                              id: Date.now(),
                              rfiOverview: '',
                              documents: [],
                              changeInCost: false,
                              changeInTime: false,
                              increaseInCost: '',
                              selectCurrencyForIncreaseCost: '',
                              increaseCurrency: '',
                              increaseInTime: '',
                              increaseInTimeOfDays: '',
                              decreaseInCost: '',
                              selectCurrencyForDecreaseCost: '',
                              decreaseCurrency: '',
                              decreaseInTime: '',
                              decreaseInTimeOfDays: '',
                            })
                          )
                        }
                      >
                        <i className='fa fa-plus'></i> Add New Reference
                      </button>
                    </div>
                  </div>
                </div>

                <div className='row mb-6'>
                  <div className='col-lg-12'>
                    <h2>Request Reference Document</h2>
                  </div>
                </div>

                <div className='row border border-3 border-dashed mb-4'>
                  {rfiStoreData.requestReferenceDocuments.map((data, docInd) => (
                    <>
                      <div className='col-lg-12 py-3' key={docInd}>
                        <div className='d-flex p-3 mb-2 align-items-center bg-gray-200 justify-content-between'>
                          <h3 className='card-title'>
                            <span className='badge badge-primary'>{docInd + 1}</span> Request
                            Reference Document
                          </h3>
                          <button
                            className='btn btn-danger btn-sm'
                            onClick={(e) => {
                              if (
                                window.confirm(
                                  `Are you sure you want to delete? This operation can't be undo`
                                )
                              ) {
                                dispatch(removeRequestReference(data.id))
                              } else {
                                return
                              }
                            }}
                          >
                            <i className='fa fa-trash'></i>
                          </button>
                        </div>
                        <textarea
                          name='rfiOverview'
                          className='form-control mb-4'
                          rows={6}
                          value={rfiStoreData.requestReferenceDocuments[docInd].rfiOverview}
                          onChange={(e) =>
                            dispatch(
                              addNewDocumentElements({
                                id: data.id,
                                value: e.target.value,
                                key: 'rfiOverview',
                                isReference: false,
                              })
                            )
                          }
                        ></textarea>

                        <button className='btn btn-sm btn-primary position-relative cursor-pointer mb-4'>
                          <input
                            type='file'
                            style={inputFileStyles}
                            className='position-absolute opacity-0 input-group-text'
                            onChange={(e: any) =>
                              addNewReferenceDocument(data.id, e, 'document', false)
                            }
                          />
                          <i className='fa fa-upload'></i> Attach Documents
                        </button>
                      </div>

                      {data.documents.length ? (
                        data.documents.map((doc, index) => {
                          return (
                            <div className='col-lg-6 mb-6' key={index}>
                              <FileUploading
                                doc={doc}
                                index={index}
                                removeDocument={() =>
                                  dispatch(
                                    removeRequestReferenceDocumentElements({
                                      refElementId: doc.id,
                                      referenceIndex: docInd,
                                    })
                                  )
                                }
                              />
                            </div>
                          )
                        })
                      ) : (
                        <p className='text-danger'>Add reference documents</p>
                      )}
                    </>
                  ))}
                </div>
                <div className='row mb-6'>
                  <div className='col-lg-12'>
                    <div className='mb-4'>
                      <button
                        className='btn btn-sm btn-primary'
                        onClick={(e) =>
                          dispatch(
                            addNewRequestReference({
                              id: Date.now(),
                              rfiOverview: '',
                              documents: [],
                            })
                          )
                        }
                      >
                        <i className='fa fa-plus'></i> Add New Request reference
                      </button>
                    </div>
                  </div>
                </div>

                <hr className='my-12' />

                <div className='row mb-10'>
                  <div className='col-lg-4'>
                    <Field
                      type='text'
                      placeholder='Assign to'
                      name='rfiAssignTo'
                      className='form-control mb-6'
                      value={rfiStoreData.rfiAssignTo}
                      onChange={(e: any) => handleFormFieldChange('rfiAssignTo', e.target.value)}
                    />
                    <Field
                      type='text'
                      placeholder='Viewers'
                      name='rfiViewers'
                      className='form-control mb-6'
                      value={rfiStoreData.rfiViewers}
                      onChange={(e: any) => handleFormFieldChange('rfiViewers', e.target.value)}
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
                <div className='row border py-3 mb-6'>
                  {rfiStoreData.requestForInformationResponses.map((data, index) => (
                    <>
                      <div className='col-lg-12 mb-4' key={index}>
                        <div className='card'>
                          <div className='card-header bg-gray-200i'>
                            <h3 className='card-title'>Response</h3>
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
                                    dispatch(removeResponse(data.id))
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
                            <textarea
                              className='form-control'
                              placeholder='Response'
                              name='rfiResponse'
                              rows={6}
                              value={rfiStoreData.requestForInformationResponses[index].rfiResponse}
                              onChange={(e: any) =>
                                dispatch(
                                  addNewDocumentElements({
                                    id: data.id,
                                    value: e.target.value,
                                    key: 'rfiResponse'
                                  })
                                )
                              }
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-4 mb-4'>
                        <Field
                          type='text'
                          placeholder='Request By'
                          name='requestBy'
                          className='form-control mb-6'
                          value={rfiStoreData.requestForInformationResponses[index].requestBy}
                          onChange={(e: any) =>
                            dispatch(
                              addNewDocumentElements({
                                id: data.id,
                                value: e.target.value,
                                key: 'requestBy'
                              })
                            )
                          }
                        />
                        <Field
                          type='text'
                          placeholder='Job title'
                          name='responderJobTitle'
                          className='form-control mb-6'
                          value={rfiStoreData.requestForInformationResponses[index].responderJobTitle}
                          onChange={(e: any) =>
                            dispatch(
                              addNewDocumentElements({
                                id: data.id,
                                value: e.target.value,
                                key: 'responderJobTitle'
                              })
                            )
                          }
                        />
                        <Field
                          type='date'
                          placeholder='Due date'
                          name='responseDueDate'
                          className='form-control mb-6'
                          value={rfiStoreData.requestForInformationResponses[index].responseDueDate}
                          onChange={(e: any) =>
                            dispatch(
                              addNewDocumentElements({
                                id: data.id,
                                value: e.target.value,
                                key: 'responseDueDate'
                              })
                            )
                          }
                        />
                      </div>
                      <div className='col-lg-4 mb-4'>
                        <Field
                          type='text'
                          placeholder='Signature'
                          name='rfiSignature'
                          className='form-control mb-6'
                          value={rfiStoreData.requestForInformationResponses[index].rfiSignature}
                          onChange={(e: any) =>
                            dispatch(
                              addNewDocumentElements({
                                id: data.id,
                                value: e.target.value,
                                key: 'rfiSignature'
                              })
                            )
                          }
                        />
                        <Field
                          type='text'
                          placeholder='Company Name'
                          name='responderCompanyName'
                          className='form-control mb-6'
                          value={rfiStoreData.requestForInformationResponses[index].responderCompanyName}
                          onChange={(e: any) =>
                            dispatch(
                              addNewDocumentElements({
                                id: data.id,
                                value: e.target.value,
                                key: 'responderCompanyName'
                              })
                            )
                          }
                        />
                      </div>
                      <div className='col-lg-4 mb-4 d-flex justify-content-center align-items-center position-relative'>
                        <Field
                          type='file'
                          onChange={(event: any) => {
                            setResponderStamp(URL.createObjectURL(event.target.files[0]))
                            setFieldValue('responderStampUrl', responderStamp)
                          }}
                          name='responderStamp'
                          className='position-absolute w-100 h-100 opacity-0 cursor-pointer'
                        />
                        <img
                          src={responderStamp}
                          width='100%'
                          className='border border-dashed border-4 p-2'
                          alt='User stamp'
                        />
                      </div>
                    </>
                  ))}
                </div>
                <div className='row mb-6'>
                  <div className='col-lg-12'>
                    <div className='mb-4'>
                      <button
                        className='btn btn-sm btn-primary'
                        onClick={(e) =>
                          dispatch(
                            addNewResponse({
                              id: Date.now(),
                              rfiResponse: '',
                              requestBy: '',
                              responderJobTitle: '',
                              responseDueDate: '',
                              rfiSignature: '',
                              responderCompanyName: '',
                              responderStamp: '',
                            })
                          )
                        }
                      >
                        <i className='fa fa-plus'></i> Add new response
                      </button>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-12'>
                    <h2 className='text-white text-center mb-8'>DISCLAIMER</h2>
                    <textarea
                      className='form-control'
                      name='rfiDisclaimer'
                      rows={6}
                      value={rfiStoreData.rfiDisclaimer}
                      onChange={(e: any) => handleFormFieldChange('rfiDisclaimer', e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export {Overview}
