import React, {FC, useState} from 'react'
import {SingleDayForecastCard} from './components/cards/SingleDayForecastCard'

const WeatherForecast: FC = () => {
  return (
    <>
      <form>
        <div className='d-flex justify-content-between'>
          <div className='row g-3'>
            <div className='col-auto'>
              <label htmlFor='cityOrZipcode' className='visually-hidden'>
                Password
              </label>
              <input
                type='text'
                className='form-control'
                id='cityOrZipcode'
                placeholder='City or Zipcode'
              />
            </div>
            <div className='col-auto'>
              <button type='submit' className='btn btn-primary mb-3'>
                Search
              </button>
            </div>
          </div>
          <div className='d-flex'>
            <div className='row g-3'>
              <div className='card-toolbar'>
                <ul className='nav'>
                  <li className='nav-item'>
                    <a
                      className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1'
                      data-bs-toggle='tab'
                      href='#kt_table_widget_5_tab_1'
                    >
                      Morning
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1'
                      data-bs-toggle='tab'
                      href='#kt_table_widget_5_tab_2'
                    >
                      Evening
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4'
                      data-bs-toggle='tab'
                      href='#kt_table_widget_5_tab_3'
                    >
                      Night
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='row g-3'>
              <div className='card-toolbar'>
                <ul className='nav'>
                  <li className='nav-item'>
                    <a
                      className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1'
                      data-bs-toggle='tab'
                      href='#kt_table_widget_5_tab_1'
                    >
                      Celsius
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1'
                      data-bs-toggle='tab'
                      href='#kt_table_widget_5_tab_2'
                    >
                      Farenheit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div>
        <br />
        <br />
      </div>

      <div className='card'>
        <div className='card-header border-0 p-3 px-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Weather Forecast</span>
            {/* <span className='text-muted mt-1 fw-bold fs-7'>More than 400 new products</span> */}
          </h3>
          <div className='card-toolbar'>
            <ul className='nav'>
              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1'
                  data-bs-toggle='tab'
                  href='#kt_table_widget_5_tab_1'
                >
                  Current Year
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1'
                  data-bs-toggle='tab'
                  href='#kt_table_widget_5_tab_2'
                >
                  Past Year 1
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4'
                  data-bs-toggle='tab'
                  href='#kt_table_widget_5_tab_3'
                >
                  Past Year 2
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4'
                  data-bs-toggle='tab'
                  href='#kt_table_widget_5_tab_3'
                >
                  Past Year 3
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4'
                  data-bs-toggle='tab'
                  href='#kt_table_widget_5_tab_3'
                >
                  Past Year 4
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4'
                  data-bs-toggle='tab'
                  href='#kt_table_widget_5_tab_3'
                >
                  Past Year 5
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <br />
        <br />
      </div>

      <div>
        <div className='row'>
          <div className='col-lg-3'>
            <SingleDayForecastCard day='Sat 11, 15:07' />
          </div>

          <div className='col-lg-3'>
            <SingleDayForecastCard day='Sun 11, 15:07' />
          </div>

          <div className='col-lg-3'>
            <SingleDayForecastCard day='Mon 11, 15:07' />
          </div>

          <div className='col-lg-3'>
            <SingleDayForecastCard day='Tues 11, 15:07' />
          </div>
        </div>

        <div>
          <br />
          <br />
        </div>

        <div className='row'>
          <div className='col-lg-3'>
            <SingleDayForecastCard day='Wed 11, 15:07' />
          </div>

          <div className='col-lg-3'>
            <SingleDayForecastCard day='Thur 11, 15:07' />
          </div>

          <div className='col-lg-3'>
            <SingleDayForecastCard day='Fri 11, 15:07' />
          </div>

          <div className='col-lg-3'>
            <SingleDayForecastCard day='Sat 11, 15:07' />
          </div>
        </div>
      </div>
    </>
  )
}

export {WeatherForecast}
