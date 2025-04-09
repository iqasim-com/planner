// React imports
import React, {FC, useState} from 'react'
// Third party imports
import {Field, FieldArray, Form, Formik} from 'formik'
// Component imports
import {toAbsoluteUrl} from '../../../../../../../../../../../../../_metronic/helpers'
import Discussions from './formElements/discussions'
import Participant from './formElements/participants'
import PreviousActionItems from './formElements/prevActionPoints'
import {initialMeetingMinuesValues} from '../MeetingMinuteModel'
import {useAppDispatch, useAppSelector} from '../../../../../../../../../../../../../setup/store'
import {
  addAgenda,
  addAgendaItem,
  addDiscussion,
  addNewDocument,
  addOptionalParticipants,
  addPreviouseAction,
  addRequiredParticipants,
  deleteAgenda,
  deleteDiscussion,
  deleteDocument,
  deletePreviousActionPoint,
  updateFormField,
} from '../../../../../../../../../redux/projectBoard/Coordination/MeetingMinutes/meetingMinutesSlice'
import { MeetingMinutesProps } from '../../../../../../../../../redux/projectBoard/Coordination/MeetingMinutes/meetingMinutesModels'

const Overview: FC = () => {
  const dispatch = useAppDispatch()
  const formData = useAppSelector((state) => state.meetingMins)
  const requiredParticipants = useAppSelector((state) => state.meetingMins.requiredParticipants)
  const optionalParticipants = useAppSelector((state) => state.meetingMins.optionalParticipants)
  const importantDocuments = useAppSelector((state) => state.meetingMins.importantDoc)
  const agendas = useAppSelector((state) => state.meetingMins.agenda)
  const previousActionPoints = useAppSelector((state) => state.meetingMins.prevActionPoints)
  const discussion = useAppSelector((state) => state.meetingMins.discussions)
  const companyLogo = useAppSelector((state) => state.meetingMins.companyLogo)

  /**
   * Function for submitting meeting minutes
   * TODO: Will add proper implementation later
   * @param e
   */
  const onSubmitMeetingMinutes = (values: any, actions: any) => {
    console.log('FORM DATA', formData)
  }

  const handleFieldChange = (field: keyof MeetingMinutesProps, value: string) => {
    if (field === 'agenda') {
      dispatch(
        addAgenda({
          id: Date.now(),
          description: value,
        })
      )
    } else {
      dispatch(updateFormField({field, value}))
    }
  }

  /**
   * Function for setting important document state in store
   * @param e any
   */
  const setDocuments = (e: any) => {
    e.preventDefault()
    dispatch(
      addNewDocument({
        id: Date.now(),
        name: e.target.files[0].name,
        path: e.target.files[0].webkitRelativePath,
      })
    )
  }

  return (
    <>
      <Formik
        onSubmit={(values, actions) => onSubmitMeetingMinutes(values, actions)}
        initialValues={initialMeetingMinuesValues}
      >
        {({values, setFieldValue}) => (
          <Form>
            <>
              {/* begin::Add Publish and Edit buttons */}
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
              {/* end::Add Publish and Edit buttons */}
              <div className='card mb-5 p-0 mb-xl-10' id='kt_project_coordination_meeting_minute'>
                {/* begin::Header */}
                <div className='card-header bg-gray-100 px-0'>
                  <div className='container-fluid bg-gray-100 px-lg-20 py-12'>
                    <div className='row'>
                      <div className='col-lg-8 ps-lg-0'>
                        <Field
                          type='text'
                          placeholder='Company Name'
                          className='form-control mb-3'
                          name='companyName'
                          value={formData.companyName}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('companyName', e.target.value)
                          }
                        />
                        <Field
                          type='text'
                          className='form-control mb-3'
                          placeholder='Address'
                          name='companyAddress'
                          value={formData.companyAddress}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('companyAddress', e.target.value)
                          }
                        />
                        <Field
                          type='text'
                          placeholder='Contact'
                          className='form-control mb-3'
                          name='companyContact'
                          value={formData.companyContact}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('companyContact', e.target.value)
                          }
                        />
                        <Field
                          type='text'
                          placeholder='Email'
                          className='form-control mb-3'
                          name='companyEmail'
                          value={formData.companyEmail}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('companyEmail', e.target.value)
                          }
                        />
                      </div>
                      <div className='col-lg-4 d-flex justify-content-center align-items-center position-relative'>
                        <Field
                          type='file'
                          onChange={(event: any) => {
                            handleFieldChange('companyLogo', event.target.files[0])
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
                  </div>
                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className='card-body p-lg-20'>
                  {/* begin::MeetingMinute Header */}
                  <div className=''>
                    {/* Header start */}
                    <div className='form-group row mb-3'>
                      <label
                        htmlFor='subject'
                        className='col-sm-2 col-form-label text-muted fw-bold'
                      >
                        Subject
                      </label>
                      <div className='col-sm-10'>
                        <Field
                          type='text'
                          className='form-control'
                          id='subject'
                          name='subject'
                          value={formData.subject}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('subject', e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className='form-group row mb-3'>
                      <label
                        htmlFor='projectName'
                        className='col-sm-2 col-form-label text-muted fw-bold'
                      >
                        Project Name
                      </label>
                      <div className='col-sm-10'>
                        <Field
                          type='text'
                          className='form-control'
                          id='projectName'
                          name='projectName'
                          value={formData.projectName}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('projectName', e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className='form-group row mb-3'>
                      <label
                        htmlFor='projectNumber'
                        className='col-sm-2 col-form-label text-muted fw-bold'
                      >
                        Project Number
                      </label>
                      <div className='col-sm-10'>
                        <Field
                          type='text'
                          className='form-control'
                          id='projectNumber'
                          name='projectNumber'
                          value={formData.projectNumber}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('projectNumber', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <hr className='my-12 text-muted' />
                  {/* Header End */}

                  <div className='container-fluid p-3 bg-gray-100 rounded mb-4'>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <label className='text-muted mb-2 fw-bold'>
                          <i className='fa fa-calendar'></i> Date
                        </label>
                        <Field
                          className='form-control'
                          type='date'
                          name='date'
                          value={formData.date}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('date', e.target.value)
                          }
                        />
                      </div>
                      <div className='col-lg-4'>
                        <label className='text-muted mb-2 fw-bold'>
                          <i className='fa fa-calendar'></i> Scheduled Start Time
                        </label>
                        <Field
                          className='form-control'
                          name='scheduledStartTime'
                          type='time'
                          value={formData.scheduledStartTime}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('scheduledStartTime', e.target.value)
                          }
                        />
                      </div>
                      <div className='col-lg-4'>
                        <label className='text-muted mb-2 fw-bold'>
                          <i className='fa fa-calendar'></i> Scheduled End Time
                        </label>
                        <Field
                          className='form-control'
                          type='time'
                          name='scheduledEndTime'
                          value={formData.scheduledEndTime}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('scheduledEndTime', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className='container-fluid p-3 bg-gray-100 rounded mb-4'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <label className='text-muted mb-2 fw-bold'>
                          <i className='fa fa-clock'></i> Actual Start Time
                        </label>
                        <Field
                          className='form-control'
                          name='actualStartTime'
                          type='time'
                          value={formData.actualStartTime}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('actualStartTime', e.target.value)
                          }
                        />
                      </div>
                      <div className='col-lg-6'>
                        <label className='text-muted mb-2 fw-bold'>
                          <i className='fa fa-clock'></i> Actual End Time
                        </label>
                        <Field
                          className='form-control'
                          name='actualEndTime'
                          type='time'
                          value={formData.actualEndTime}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('actualEndTime', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className='container-fluid p-3 bg-gray-100 rounded mb-4'>
                    <div className='row'>
                      <div className='col-lg-3'>
                        <label className='text-muted mb-2 d-flex align-items-center fw-bold'>
                          Mode of Communication
                        </label>
                        {/* const communicationMode = ['Call', 'Virtual', 'Text', 'WhatsApp', 'In-Person'] */}
                        <Field
                          id='modeOfCommunication'
                          className='form-control cursor-pointer bg-gray-100'
                          name='modeOfCommunication'
                          component='select'
                          value={formData.modeOfCommunication}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('modeOfCommunication', e.target.value)
                          }
                        >
                          <option value='call'>Call</option>
                          <option value='virtual'>Virtual</option>
                          <option value='text'>Text</option>
                          <option value='whatsapp'>Whatsapp</option>
                          <option value='in-person'>In Person</option>
                        </Field>
                      </div>
                      <div className='col-lg-9'>
                        <label className='text-muted mb-2 d-flex align-items-center fw-bold'>
                          Meeting URL
                        </label>
                        <Field
                          className='form-control'
                          type='text'
                          name='meetingUrl'
                          value={formData.meetingUrl}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('meetingUrl', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className='container-fluid p-3 bg-gray-100 rounded mb-4'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        {/* <label className='text-muted fw-bold'>
                        <i className='fa fa-map-marker text-primary mb-2'></i> Location
                      </label> */}
                        <label className='text-muted mb-2 required fw-bold'>
                          <i className='fa fa-map-marker text-primary me-1'></i> Location
                        </label>
                        <Field
                          className='form-control'
                          type='text'
                          name='location'
                          value={formData.location}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('location', e.target.value)
                          }
                        />
                      </div>
                      <div className='col-lg-6'>
                        <label className='text-muted mb-2 required fw-bold'> Room</label>
                        <Field
                          className='form-control'
                          type='text'
                          name='room'
                          value={formData.room}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('room', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className='container-fluid p-3 bg-gray-100 rounded mb-12'>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <label className='text-muted mb-2 required fw-bold'> Organizer</label>
                        <Field
                          className='form-control'
                          type='text'
                          name='organizer'
                          value={formData.organizer}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('organizer', e.target.value)
                          }
                        />
                      </div>
                      <div className='col-lg-4'>
                        <label className='text-muted mb-2 required fw-bold'> Job Title</label>
                        <Field
                          className='form-control'
                          type='text'
                          name='jobTitle'
                          value={formData.jobTitle}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('jobTitle', e.target.value)
                          }
                        />
                      </div>
                      <div className='col-lg-4'>
                        <label className='text-muted mb-2 required fw-bold'> Company</label>
                        <Field
                          className='form-control'
                          type='text'
                          name='company'
                          value={formData.company}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleFieldChange('company', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className='mb-12'>
                    <h2 className='mb-8 text-muted required'>Required Participants</h2>
                    <div className='container-fluid bg-gray-100 p-3 border'>
                      <div className='row'>
                        <FieldArray
                          name='requiredParticipants'
                          render={({remove}) => (
                            <>
                              {requiredParticipants.length ? (
                                requiredParticipants.map((participant, index) => (
                                  <div className='col-lg-12' key={index}>
                                    <Participant
                                      index={index}
                                      changeEvent={handleFieldChange}
                                      participantData={participant}
                                      name='requiredParticipants'
                                    />
                                  </div>
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
                                      addRequiredParticipants({
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
                                  <i className='fa fa-plus'></i> Add Participant
                                </button>
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='mb-12'>
                    <h2 className='fw-bold text-muted mb-8'>Optional Participants</h2>
                    <div className='container-fluid bg-gray-100 p-3 border'>
                      <div className='row'>
                        <FieldArray
                          name='optionalParticipants'
                          render={({remove, push}) => (
                            <>
                              {optionalParticipants.map((participant, index) => (
                                <div className='col-lg-12' key={index}>
                                  <Participant
                                    index={index}
                                    changeEvent={handleFieldChange}
                                    participantData={participant}
                                    name='optionalParticipants'
                                  />
                                </div>
                              ))}
                              <div className='col-lg-6'>
                                <button
                                  type='button'
                                  className='btn btn-sm btn-primary'
                                  onClick={() =>
                                    dispatch(
                                      addOptionalParticipants({
                                        id: Date.now(), // Will change later
                                        firstName: '',
                                        lastName: '',
                                        jobTitle: '',
                                        email: '',
                                        company: '',
                                        attendance: '',
                                      })
                                    )
                                  }
                                >
                                  <i className='fa fa-plus'></i> Add Participant
                                </button>
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='mb-12'>
                    <h2 className='fw-bold text-muted mb-8'>Important Documents</h2>
                    <div className='container-fluid bg-gray-100 p-3 border'>
                      <div className='row'>
                        {importantDocuments.length ? (
                          importantDocuments.map((res, index) => {
                            return (
                              <div className='col-lg-6 col-12 mb-4' key={res.id}>
                                <div className='card bg-gray-100 card-bordered'>
                                  <div className='card-header'>
                                    <h3 className='card-title'>{index + 1}</h3>
                                    <div className='card-toolbar'>
                                      <button
                                        type='button'
                                        onClick={(e) => {
                                          if (
                                            window.confirm(
                                              `Are you sure you want to delete? This operation can't be undo`
                                            )
                                          ) {
                                            dispatch(deleteDocument(res.id))
                                          } else {
                                            return
                                          }
                                        }}
                                        className='border-0 bg-transparent text-danger'
                                      >
                                        <i className='fa fa-close text-danger'></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className='card-body p-0'>
                                    <table className='table gy-7 gs-7'>
                                      <tbody>
                                        <tr>
                                          <th>Name</th>
                                          <td>{res.name}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
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
                  </div>

                  <div className='mb-12'>
                    <h2 className='fw-bold text-center text-muted mb-8'>AGENDA</h2>
                    <div className='container-fluid bg-gray-100 p-3 border'>
                      <div className='row'>
                        <FieldArray
                          name='agenda'
                          render={({remove, push}) => (
                            <>
                              {agendas.map((agenda, index) => (
                                <div className='col-lg-6 col-12 mb-4' key={index}>
                                  <div className='card bg-gray-100 card-bordered'>
                                    <div className='card-header'>
                                      <h3 className='card-title'>Agenda Item {index + 1}</h3>
                                      <div className='card-toolbar'>
                                        <button
                                          type='button'
                                          onClick={(e) => {
                                            if (
                                              window.confirm(
                                                `Are you sure you want to delete? This operation can't be undo`
                                              )
                                            ) {
                                              dispatch(deleteAgenda(agenda.id))
                                            } else {
                                              return
                                            }
                                          }}
                                          className='border-0 bg-transparent text-danger'
                                        >
                                          <i className='fa fa-close text-danger'></i>
                                        </button>
                                      </div>
                                    </div>
                                    <div className='card-body p-0'>
                                      <table className='table gy-7 gs-7'>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <textarea
                                                className='form-control'
                                                name='agendaItem'
                                                onChange={(e) =>
                                                  dispatch(
                                                    addAgendaItem({
                                                      id: agenda.id,
                                                      description: e.target.value,
                                                    })
                                                  )
                                                }
                                                value={agenda.description}
                                                id='agendaItem'
                                                rows={4}
                                              ></textarea>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              <div className='col-lg-12'>
                                <button
                                  type='button'
                                  className='btn btn-sm btn-primary'
                                  onClick={() =>
                                    dispatch(addAgenda({id: Date.now(), description: ''}))
                                  }
                                >
                                  <i className='fa fa-plus'></i> Add Agenda
                                </button>
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='mb-12'>
                    <h2 className='fw-bold text-center text-muted mb-8'>PREVIOUS ACTION POINTS</h2>
                    <div className='container-fluid bg-gray-100 p-3 border'>
                      <div className='row'>
                        <div className='col-lg-12'>
                          {previousActionPoints.length ? (
                            previousActionPoints.map((res, index) => (
                              <PreviousActionItems
                                removePrevActionItem={(e: any) => {
                                  if (
                                    window.confirm(
                                      `Are you sure you want to delete? This operation can't be undo`
                                    )
                                  ) {
                                    dispatch(deletePreviousActionPoint(res.id))
                                  } else {
                                    return
                                  }
                                }}
                                index={index}
                                data={res}
                                key={index}
                              />
                            ))
                          ) : (
                            <p className='text-danger'>Add Previous Action Points</p>
                          )}
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-12'>
                          <button
                            className='btn btn-sm btn-primary'
                            onClick={() =>
                              dispatch(
                                addPreviouseAction({
                                  id: Date.now(),
                                  fullName: '',
                                  company: '',
                                  assigneeCompany: '',
                                  dueDate: '',
                                  status: '',
                                  actionPoints: '',
                                })
                              )
                            }
                          >
                            <i className='fa fa-plus'></i> Add Action Points
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='mb-20'>
                    <h2 className='fw-bold text-center text-muted mb-8'>DISCUSSION</h2>
                    <div className='container-fluid bg-gray-100 p-3 border'>
                      <div className='row'>
                        <div className='col-lg-12'>
                          {discussion.length ? (
                            discussion.map((res, index) => (
                              <Discussions
                                removeDiscussion={(e: any) => {
                                  if (
                                    window.confirm(
                                      `Are you sure you want to delete? This operation can't be undo`
                                    )
                                  ) {
                                    dispatch(deleteDiscussion(res.id))
                                  } else {
                                    return
                                  }
                                }}
                                index={index}
                                data={res}
                                key={index}
                              />
                            ))
                          ) : (
                            <p className='text-danger'>Add Discussion</p>
                          )}
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-12'>
                          <button
                            className='btn btn-sm btn-primary'
                            onClick={(e) => dispatch(addDiscussion({
                              id: 0,
                              company: '',
                              dueDate: '',
                              status: '',
                              agendaItem: '',
                              notes: '',
                              nextStep: '',
                              assigneeCompany: '',
                              assignees: [{
                                id: Date.now(),
                                name: ''
                              }],
                              deadline: '',
                              description: ''
                            }))}
                          >
                            <i className='fa fa-plus'></i> Add Discussion
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className='text-primary'>PRIVATE NOTES</h2>
                    <textarea
                      className='form-control'
                      name='privateNotes'
                      id='privateNotes'
                      value={formData.privateNotes}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        handleFieldChange('privateNotes', e.target.value)
                      }
                      rows={6}
                    ></textarea>
                  </div>
                </div>
                {/* end::Body */}
              </div>
            </>
          </Form>
        )}
      </Formik>
    </>
  )
}

export {Overview}
