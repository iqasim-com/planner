import React from "react"
import { useAppDispatch } from "../../../../../../../../../../../../../../setup/store"
import { addNewRequiredVisitor, removeVisitor } from "../../../../../../../../../../redux/projectBoard/Coordination/SiteVisits/siteVisitsSlice"
import { Field } from "formik"

export interface NewSiteVisitorsProps {
  index: number,
  visitor: any,
  onRemove: () => void
}

const NewSiteVisitor = ({index, visitor, onRemove}: NewSiteVisitorsProps) => {
  const dispatch = useAppDispatch()
  return (
    <>
      <div className='card border mb-3 p-0'>
        <div className='p-5 bg-gray-200 fw-bolder d-flex align-items-center d-flex justify-content-between'>
          <div>
            <p className='mb-0'>Visitor {index + 1}</p>
          </div>
          <button
            className='bg-transparent border-0'
            onClick={() => {
              if (window.confirm(`Are you sure you want to delete? This operation can't be undo`)) {
                onRemove()
              } else {
                return
              }
            }}
          >
            <i className='fa fa-trash text-danger'></i>
          </button>
        </div>

        <div className='card-body p-5'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> First Name</label>
              <Field
                className='form-control'
                type='text'
                name='firstName'
                value={visitor.firstName}
                onChange={(e: any) =>
                  dispatch(
                    addNewRequiredVisitor({
                      id: visitor.id,
                      value: e.target.value,
                      key: 'firstName',
                    })
                  )
                }
              />
            </div>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Last Name</label>
              <Field
                className='form-control'
                type='text'
                name='lastName'
                value={visitor.lastName}
                onChange={(e: any) =>
                  dispatch(
                    addNewRequiredVisitor({
                      id: visitor.id,
                      value: e.target.value,
                      key: 'lastName',
                    })
                  )
                }
              />
            </div>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Job Title</label>
              <Field
                className='form-control'
                type='text'
                name='jobTitle'
                value={visitor.jobTitle}
                onChange={(e: any) =>
                  dispatch(
                    addNewRequiredVisitor({
                      id: visitor.id,
                      value: e.target.value,
                      key: 'jobTitle',
                    })
                  )
                }
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Email</label>
              <Field
                className='form-control'
                type='text'
                name='email'
                value={visitor.email}
                onChange={(e: any) =>
                  dispatch(
                    addNewRequiredVisitor({
                      id: visitor.id,
                      value: e.target.value,
                      key: 'email',
                    })
                  )
                }
              />
            </div>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Company</label>
              <Field
                className='form-control'
                type='text'
                name='company'
                value={visitor.company}
                onChange={(e: any) =>
                  dispatch(
                    addNewRequiredVisitor({
                      id: visitor.id,
                      value: e.target.value,
                      key: 'company',
                    })
                  )
                }
              />
            </div>
            <div className='col-lg-4 mb-3'>
              <label className='text-muted mb-2 required fw-bold'> Attendance</label>
              <Field
                component='select'
                className='form-control'
                name='attendance'
                value={visitor.attendance}
                onChange={(e: any) =>
                  dispatch(
                    addNewRequiredVisitor({
                      id: visitor.id,
                      value: e.target.value,
                      key: 'attendance',
                    })
                  )
                }
              >
                <option value='none'>None</option>
                <option value='tentative'>Tentative</option>
                <option value='present'>Present</option>
                <option value='absent'>Absent</option>
                <option value='rejected'>Rejected</option>
              </Field>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewSiteVisitor