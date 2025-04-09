/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'
import PublicHeader from './components/Header'

type Props = {}

const Home: FC<Props> = () => {
  return (
    <div className='mb-0' id='home'>
      {/* begin::Wrapper */}
      <div
        className='bgi-no-repeat bg-dark bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg'
      >
        <PublicHeader />
        {/* begin::Landing hero */}
        <div className="d-flex align-items-center justify-content-between h-100">
          <div className="text-muted w-50 px-lg-20">
            <h1 className='display-2 text-primary'>Event Work Flow</h1>
            <p className='mb-8 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, neque! Aliquid totam a sint commodi voluptatem voluptatum odit placeat, hic magnam perferendis accusantium beatae eius, ex esse ipsam et nam.</p>
            <button className='btn btn-outline btn-outline-primary btn-hover-scale'><i className='fa fa-rocket'></i> Explore More</button>
          </div>
          <div className='text-end w-50'>
            <img src={toAbsoluteUrl('/media/custom/ewf.png')} width={'100%'} alt="" />
          </div>
        </div>
        {/* end::Landing hero */}

        {/* begin::Landing hero */}
        <div className="d-flex justify-content-center py-20 bg-primary">
          <div className="text-muted px-lg-20">
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iusto ad officiis quis placeat enim neque quos id adipisci expedita!</h3>
          </div>
        </div>
        {/* end::Landing hero */}

        <div className="d-flex align-items-center justify-content-between h-100 py-12">
          <div className='text-end w-50 h-800px d-flex align-items-center justify-content-center'>
            <img src={toAbsoluteUrl('/media/misc/auth-screens.png')} width={'100%'} alt="" />
          </div>
          <div className="text-muted w-50 px-lg-20">
            <h1 className='display-2 text-primary'>Everything in one place</h1>
            <p className='mb-8 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, neque! Aliquid totam a sint commodi voluptatem voluptatum odit placeat, hic magnam perferendis accusantium beatae eius, ex esse ipsam et nam.</p>
            <button className='btn btn-outline btn-outline-primary btn-hover-scale'><i className='fa fa-rocket'></i> Explore More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Home }
