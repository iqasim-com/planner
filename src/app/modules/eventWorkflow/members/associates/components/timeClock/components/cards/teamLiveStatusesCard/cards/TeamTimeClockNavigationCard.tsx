/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Link, useLocation} from 'react-router-dom'

const TeamTimeClockNavigationCard: FC = () => {
  const location = useLocation()

  return (
    <div className='d-flex align-items-center overflow-auto h-55px'>
      <ul className='nav nav-stretch nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-5 ` +
              (location.pathname === '/time-clock/clocked-in' && 'active')
            }
            to='/time-clock/clocked-in'
          >
            {'4 '} Clocked In
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-5 ` +
              (location.pathname === '/time-clock/clocked-out' && 'active')
            }
            to='/time-clock/clocked-out'
          >
            {'2 '} Clocked Out
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-5 ` +
              (location.pathname === '/time-clock/meal-break' && 'active')
            }
            to='/time-clock/meal-break'
          >
            {'1 '} Meal Break
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-5 ` +
              (location.pathname === '/time-clock/rest-break' && 'active')
            }
            to='/time-clock/rest-break'
          >
            {'0 '} Rest Break
          </Link>
        </li>
      </ul>
    </div>
  )
}

export {TeamTimeClockNavigationCard}
