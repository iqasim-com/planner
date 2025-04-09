import React, {FC, useState} from 'react'
import {PlanningTimeline} from './components/PlanningTimeline'
import {DayOfTimeline} from './components/DayOfTimeline'
import {TemplatesTimeline} from './components/TemplatesTimeline'
import EWFModal from '../../../../../../../../../../_metronic/partials/modals/modal/modal'
import EWFDatePicker from '../../../../../../../../../../_metronic/helpers/components/date-picker/date-picker'
import { useAppDispatch, useAppSelector } from '../../../../../../../../../../setup/store'
import { onCreate } from '../../../../../../redux/projectBoard/Timeline/timelineSlice'

const Timeline: FC = () => {
  const categories = ['Planning', 'Day-of', 'Templates']
  const timeline = useAppSelector((state) => state.timeline.timelines);
  const [categorySelectOption, setCategorySelectOption] = useState(categories[0])
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const [onLoading, setOnLoading] = useState(false)
  const dispatch = useAppDispatch();

  const addNewTimelineDates = (values: any) => {
    setOnLoading(true)
    let newTimelineData = {
      id: values.id,
      timelineDate: values.datePicker,
      tasks: []
    }
    setTimeout(() => {
      dispatch(onCreate(newTimelineData))
      setShowCreateAppModal(false)
      setOnLoading(false)
    }, 500)
  }

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Timelines <i className='badge badge-primary'>{timeline.length}</i>
          <span className='fs-6 text-gray-400 fw-bold ms-1'> {categorySelectOption}</span>
        </h3>

        <div className='d-flex flex-wrap my-2'>
          <div className='me-4'>
            <select
              name='status'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-sm form-select-white w-125px'
              defaultValue='Active'
              value={categorySelectOption}
              onChange={(e) => setCategorySelectOption(e.target.value)}
            >
              {categories.map((obj) => (
                <option key={obj} value={obj}>
                  {obj}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              className='btn btn-primary btn-sm'
              onClick={() => setShowCreateAppModal(true)}
              data-bs-toggle='modal'
              data-bs-target='#ewf_modal_create_timeline'
              title='Create new timeline'
            >
              <i className='fa fa-plus'></i> Create Timeline
            </button>
          </div>
        </div>
      </div>

      {/* <TimelineWidget className='card-xxl-stretch' /> */}
      {categorySelectOption === 'Planning' && timeline.length > 0 ? (
        <PlanningTimeline timelines={timeline} className='card-xxl-stretch' />
      ) : (
        <div className='text-center h-25 d-flex flex-column justify-content-center align-items-center'>
          <h1>
            <i className='fa fa-calendar-times fa-1x text-primary'></i> No Timeline
          </h1>
          <p className='text-muted'>Create timeline to create tasks</p>
        </div>
      )}

      {categorySelectOption === 'Day-of' && <DayOfTimeline className='card-xxl-stretch' />}

      {categorySelectOption === 'Templates' && <TemplatesTimeline className='card-xxl-stretch' />}

      <EWFModal
        modalTitle='Create new Timeline'
        show={showCreateAppModal}
        modalId='ewf_modal_create_timeline'
        handleClose={() => setShowCreateAppModal(false)}
      >
        <EWFDatePicker callback={addNewTimelineDates} loading={onLoading} />
      </EWFModal>
      {/* end::Row */}
    </>
  )
}

export {Timeline}
