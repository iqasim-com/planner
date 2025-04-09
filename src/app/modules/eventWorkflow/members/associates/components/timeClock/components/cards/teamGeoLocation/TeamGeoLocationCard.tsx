/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {KTSVG} from '../../../../../../../../../../_metronic/helpers'
import {Dropdown1} from './Dropdowns/Dropdown1'

type Props = {
  className: string
}

const TeamGeoLocationCard: FC<Props> = ({className}) => {
  const categories = ['Team', 'Paul Merisier', 'Ashley Merisier', 'Janet Clarke']
  const [categorySelectOption, setCategorySelectOption] = useState(categories[0])

  return (
    <div className={`card min-h-500px ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 p-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>
            <KTSVG path='/media/icons/duotune/communication/com006.svg' className='svg-icon-2' />
            {'  '}
            Geo-Location
          </span>
          {/* <span className='text-muted fw-semibold fs-7'>Pending 10 tasks</span> */}
        </h3>

        <div className='d-flex flex-wrap my-2 mb-5'>
          <div>
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
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body h-100 py-3'>
        <div className='w-100'>
          {/* TODO: Have to implement Google Maps API */}
          <iframe
            className='gmap_iframe w-100'
            frameBorder='0'
            scrolling='no'
            marginHeight={0}
            marginWidth={0}
            height='400'
            src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          ></iframe>
        </div>
      </div>

      {/* end::::Body */}
    </div>
  )
}

export {TeamGeoLocationCard}
