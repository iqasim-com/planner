/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { ToEventDay } from './cards/ToEventDay'
import { toAbsoluteUrl } from '../../../../../../../../../_metronic/helpers'
import { useLocation, useParams } from 'react-router-dom'
import useApiHook from '../../../../../../../hooks/useApiHook'
import { GET_PROJECTS } from '../../../../../../../auth/core/_requests'

const Overview: FC = () => {
  const {projectId} = useParams()
  const [apiData, isLoading] = useApiHook(`${GET_PROJECTS}${projectId}`)

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Dates <button className='btn'><i className='fa fa-plus text-success'></i></button>
        </h3>
      </div>

      <div className='row g-6 g-xl-9'>
        {apiData?.data?.project?.eventDates?.length > 0 ? (
          apiData?.data?.project?.eventDates?.map((day: any) => (
            <div className='col-md-6 col-xl-4' key={day.eventDateId}>
              <ToEventDay
                projectId={projectId}
                data={day}
              />
            </div>
          ))
        ) : (
          isLoading ? <h1 className='text-center'>Loading...</h1> : <div className='col-lg-12 text-center'>
            <img
              src={toAbsoluteUrl('/media/illustrations/sketchy-1/2.png')}
              alt='New project placeholder vector'
              className='mw-400px mb-8'
            />
            <h1 className='display-3 text-muted'>Add your event days</h1>
          </div>
        )}
      </div>
    </>
  )
}

export { Overview }
