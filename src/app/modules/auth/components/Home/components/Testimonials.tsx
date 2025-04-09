/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'

type Props = {}

const Testimonials: FC<Props> = () => {
  return (
    <div className='mt-20 position-relative z-index-2'>
      {/* begin::Container */}
      <div className='container'>
        {/* begin::Heading */}
        <div className='text-center mb-17'>
          {/* begin::Title */}
          <h3
            className='fs-2hx text-dark mb-5'
            id='clients'
            data-kt-scroll-offset='{default: 125, lg: 150}'
          >
            What Our Clients Say
          </h3>
          {/* end::Title */}
          {/* begin::Description */}
          <div className='fs-5 text-muted fw-bold'>
            Save thousands to millions of bucks by using single tool
            <br />
            for different amazing and great useful admin
          </div>
          {/* end::Description */}
        </div>
        {/* end::Heading */}
        {/* begin::Row */}
        <div className='row g-lg-10 mb-10 mb-lg-20'>
          {/* begin::Col */}
          <div className='col-lg-4'>
            {/* begin::Testimonial */}
            <div className='d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0'>
              {/* begin::Wrapper */}
              <div className='mb-7'>
                {/* begin::Rating */}
                <div className='rating mb-6'>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                </div>
                {/* end::Rating */}
                {/* begin::Title */}
                <div className='fs-2 fw-bolder text-dark mb-3'>
                  This is by far the cleanest template
                  <br />
                  and the most well structured
                </div>
                {/* end::Title */}
                {/* begin::Feedback */}
                <div className='text-gray-500 fw-bold fs-4'>
                  The most well thought out design theme I have ever used. The codes are up to
                  tandard. The css styles are very clean. In fact the cleanest and the most up to
                  standard I have ever seen.
                </div>
                {/* end::Feedback */}
              </div>
              {/* end::Wrapper */}
              {/* begin::Author */}
              <div className='d-flex align-items-center'>
                {/* begin::Avatar */}
                <div className='symbol symbol-circle symbol-50px me-5'>
                  <img src={toAbsoluteUrl('/media/avatars/300-3.jpg')} className='' alt='' />
                </div>
                {/* end::Avatar */}
                {/* begin::Name */}
                <div className='flex-grow-1'>
                  <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                    Paul Miles
                  </a>
                  <span className='text-muted d-block fw-bold'>Development Lead</span>
                </div>
                {/* end::Name */}
              </div>
              {/* end::Author */}
            </div>
            {/* end::Testimonial */}
          </div>
          {/* end::Col */}
          {/* begin::Col */}
          <div className='col-lg-4'>
            {/* begin::Testimonial */}
            <div className='d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0'>
              {/* begin::Wrapper */}
              <div className='mb-7'>
                {/* begin::Rating */}
                <div className='rating mb-6'>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                </div>
                {/* end::Rating */}
                {/* begin::Title */}
                <div className='fs-2 fw-bolder text-dark mb-3'>
                  This is by far the cleanest template
                  <br />
                  and the most well structured
                </div>
                {/* end::Title */}
                {/* begin::Feedback */}
                <div className='text-gray-500 fw-bold fs-4'>
                  The most well thought out design theme I have ever used. The codes are up to
                  tandard. The css styles are very clean. In fact the cleanest and the most up to
                  standard I have ever seen.
                </div>
                {/* end::Feedback */}
              </div>
              {/* end::Wrapper */}
              {/* begin::Author */}
              <div className='d-flex align-items-center'>
                {/* begin::Avatar */}
                <div className='symbol symbol-circle symbol-50px me-5'>
                  <img src={toAbsoluteUrl('/media/avatars/300-2.jpg')} className='' alt='' />
                </div>
                {/* end::Avatar */}
                {/* begin::Name */}
                <div className='flex-grow-1'>
                  <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                    Janya Clebert
                  </a>
                  <span className='text-muted d-block fw-bold'>Development Lead</span>
                </div>
                {/* end::Name */}
              </div>
              {/* end::Author */}
            </div>
            {/* end::Testimonial */}
          </div>
          {/* end::Col */}
          {/* begin::Col */}
          <div className='col-lg-4'>
            {/* begin::Testimonial */}
            <div className='d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0'>
              {/* begin::Wrapper */}
              <div className='mb-7'>
                {/* begin::Rating */}
                <div className='rating mb-6'>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                  <div className='rating-label me-2 checked'>
                    <i className='bi bi-star-fill fs-5'></i>
                  </div>
                </div>
                {/* end::Rating */}
                {/* begin::Title */}
                <div className='fs-2 fw-bolder text-dark mb-3'>
                  This is by far the cleanest template
                  <br />
                  and the most well structured
                </div>
                {/* end::Title */}
                {/* begin::Feedback */}
                <div className='text-gray-500 fw-bold fs-4'>
                  The most well thought out design theme I have ever used. The codes are up to
                  tandard. The css styles are very clean. In fact the cleanest and the most up to
                  standard I have ever seen.
                </div>
                {/* end::Feedback */}
              </div>
              {/* end::Wrapper */}
              {/* begin::Author */}
              <div className='d-flex align-items-center'>
                {/* begin::Avatar */}
                <div className='symbol symbol-circle symbol-50px me-5'>
                  <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} className='' alt='' />
                </div>
                {/* end::Avatar */}
                {/* begin::Name */}
                <div className='flex-grow-1'>
                  <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                    Steave Brown
                  </a>
                  <span className='text-muted d-block fw-bold'>Development Lead</span>
                </div>
                {/* end::Name */}
              </div>
              {/* end::Author */}
            </div>
            {/* end::Testimonial */}
          </div>
          {/* end::Col */}
        </div>
        {/* end::Row */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Testimonials}
