/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {Link, Navigate, Outlet, Route, Routes, useLocation} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../../../../../../../../_metronic/helpers'
import {PageLink, PageTitle} from '../../../../../../../../../../_metronic/layout/core'
import {Nav} from 'react-bootstrap'
import {ClockedInCard} from './cards/ClockedInCard'
import {ClockedOutCard} from './cards/ClockedOutCard'
import {MealBreakcard} from './cards/MealBreakCard'
import {RestBreakCard} from './cards/RestBreakCard'
import {TeamTimeClockNavigationCard} from './cards/TeamTimeClockNavigationCard'
import {Dropdown1} from './Dropdowns/Dropdown1'
import {CardWidget} from './cards/CardWidget'
import {number} from 'yup/lib/locale'
import {parse} from 'node:path/win32'

type Props = {
  className: string
}

const TeamLiveStatusesCard: FC<Props> = ({className}) => {
  const categories = ['Team', 'Paul Merisier', 'Ashley Merisier', 'Janet Clarke']
  const [categorySelectOption, setCategorySelectOption] = useState(categories[0])

  // const timeClockFeatures = ['Clocked In', 'Clocked Out', 'Meal Break', 'Rest Break']
  const timeClockFeatures = [
    {
      id: 1,
      href: '#clockedIn',
      type: 'Clocked In',
    },
    {
      id: 2,
      href: '#clockedOut',
      type: 'Clocked Out',
    },
    {
      id: 3,
      href: '#mealBreak',
      type: 'Meal Break',
    },
    {
      id: 4,
      href: '#restBreak',
      type: 'Rest Break',
    },
  ]
  const [active, setActive] = useState(0)

  const selectLiveStatus = (e: any) => {
    setCategorySelectOption(e.target.value)
  }

  return (
    <div className={`card min-h-500px ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>
            <KTSVG path='/media/icons/duotune/communication/com006.svg' className='svg-icon-2' />
            {'  '}
            Live Status
          </span>
          {/* <span className='text-muted fw-semibold fs-7'>Pending 10 tasks</span> */}
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
              onChange={selectLiveStatus}
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
        <CardWidget className='h-md-50 mb-5 mb-xl-10' />

        {/* begin::Separator */}
        <div className='separator mb-4'></div>
        {/* end::Separator */}

        <ul className='nav nav-tabs nav-line-tabs mb-5 fs-6'>
          {timeClockFeatures.map((res) => {
            return (
              <li className='nav-item' key={res.id}>
                <a className='nav-link' data-bs-toggle='tab' href={res.href}>
                  {res.type}
                </a>
              </li>
            )
          })}
        </ul>

        <div className='tab-content' id='myTabContent'>
          <div className='tab-pane fade active show' id='clockedIn' role='tabpanel'>
            <table className='table table-row-dashed table-row-gray-300 gy-7'>
              <thead>
                <tr className='fw-bolder fs-6 text-gray-800'>
                  <th>Name</th>
                  <th>Clock In time</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {categorySelectOption === 'Team' ? (
                  categories.map((res, index) => {
                    return (
                      <tr key={index}>
                        <td>{res}</td>
                        <td>Wed 06:03PM</td>
                        <td>
                          <a href='#'>Location</a>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td>{categorySelectOption}</td>
                    <td>Friday 01:03PM</td>
                    <td>
                      <a href='#'>Location</a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className='tab-pane fade' id='clockedOut' role='tabpanel'>
            clocked Out
          </div>
          <div className='tab-pane fade' id='mealBreak' role='tabpanel'>
            meal break
          </div>
          <div className='tab-pane fade' id='restBreak' role='tabpanel'>
            Rest Break
          </div>
        </div>
        {/* begin::Separator */}
        {/* <div className='separator mb-4'></div> */}
        {/* end::Separator */}
        {/* <ClockedInCard /> */}
      </div>
      {/* end::::Body */}
    </div>
  )
}

export {TeamLiveStatusesCard}
