import { ErrorMessage, Field } from "formik";
import React, { FC } from "react";
import useCategoryHook from "../../../../../../../hooks/useCategoryHook";
import { PhaseCreationFormProps, statusOptions } from "./PhasesModel";
import DatePicker from "react-datepicker";
import moment from "moment";

const PhaseCreationForm: FC<PhaseCreationFormProps> = ({ values, touched, errors, setFieldValue }) => {
  const [statusSelection] = useCategoryHook({ options: statusOptions })
  return (
    <>
      <p className="text-muted w-xl-50 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt molestias officia cupiditate voluptatem neque?</p>

      <div className="row">
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Phase Name</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter Phase Name'
            ></i>
          </label>
          <Field
            type='text'
            placeholder='Phase Name'
            className='form-control form-control-lg form-control-solid'
            name='name'
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-danger mt-2"
          />
        </div>

        <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Status</span>
          </label>

          <Field
            type='text'
            component='select'
            className='form-control form-control-lg form-control-solid'
            name='status'
            value={values.status.value}
            onChange={(e: any) => {
              statusSelection(e, 'status')
            }}
          >
            {statusOptions?.map(obj => {
              return (
                <option key={obj.value} value={obj.value}>
                  {obj.name}
                </option>
              )
            })}
          </Field>
        </div>
      </div >

      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Start Date</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter Phase Start Date'
            ></i>
          </label>
          {/* <Field
            type='date'
            placeholder='Start Date'
            className='form-control form-control-lg form-control-solid'
            name='startDate'
          /> */}
          <DatePicker
            onChange={(date: any) => {
              setFieldValue('startDate', moment(date).format('YYYY-MM-DD'))
            }}
            name={`startDate`}
            placeholderText="Select Start Date"
            minDate={new Date()}
            className='form-control form-control-lg form-control-solid border'
            value={values.startDate}
          />
          <ErrorMessage
            name="startDate"
            component="div"
            className="text-danger mt-2"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Due Date</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter Due Date'
            ></i>
          </label>
          {/* <Field
            type='date'
            placeholder='Due Date'
            className='form-control form-control-lg form-control-solid'
            name='dueDate'
          /> */}
          <DatePicker
            onChange={(date: any) => {
              setFieldValue('dueDate', moment(date).format('YYYY-MM-DD'));
            }}
            name={`dueDate`}
            placeholderText="Select Due Date"
            minDate={new Date()} // The earliest selectable date is today
            maxDate={values.startDate ? moment(values.startDate).subtract(1, 'days').toDate() : null} // Convert Moment to Date
            className="form-control form-control-lg form-control-solid border"
            value={values.dueDate}
          />
          <ErrorMessage
            name="dueDate"
            component="div"
            className="text-danger mt-2"
          />
        </div>
      </div>
    </>
  )
}

export { PhaseCreationForm }