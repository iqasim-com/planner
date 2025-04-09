/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useRef, useState} from 'react'
import {Formik, Form, FormikValues, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

// interface ICreateEvent {
//     title: string
//     description: string
//     location: string
//     allDayCheckbox: boolean
//     startDate: string
//     startTime: string 
//     startPeriod: string
//     endDate: string
//     endTime: string
//     endPeriod: string
// }

// const events: ICreateEvent = {
//     title: '',
//     description: '',
//     location: '',
//     allDayCheckbox: false,
//     startDate: '',
//     startTime: '',
//     startPeriod: '',
//     endDate: '',
//     endTime: '',
//     endPeriod: '',
// }


type Props = {
    isShown: boolean
    hide: () => void
}


const CreateEvent:  FC<Props> = ({isShown, hide}) => {
    //const [events] = useState<ICreateEvent>(events)

    const displayBlock = {display: 'block'}
    const displayNone = {display: 'none'}

    const showHideModal = isShown ? displayBlock : displayNone

    return (
        <div className='modal fade' aria-hidden='true' style={showHideModal}>
            <div className='modal-dialog modal-dialog-centered mw-900px'>
                <div className='modal-content'>
                    <div className='model-header'>
                        <h2>Create Event</h2>
                    </div>

                    <div className='modal-body py-lg-10 px-lg-10'>
                        <Form className='form'>
                            <div className='fv-row mb-10'>
                                <label className='d-flex algin-items-center fs-5 fw-bold mb-2'>
                                    <span className='required'>Event Name</span>
                                    <i 
                                        className='fas fa-exclamation-circle fs-5 fw-bold mb-2'
                                        data-bs-toggle='tooltip'
                                        title='Specify the name of your event'
                                    ></i>
                                </label>

                                <Field
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    name='eventName'
                                    placeholder=''
                                />
                                <div className='fv-plugins-message-container invalid-feedback'>
                                    <ErrorMessage name='eventName' />
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {CreateEvent}