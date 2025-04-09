/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'

type Props = {}

const Products: FC<Props> = () => {
  return (
    <div className='mb-lg-n15 position-relative z-index-2'>
      {/* begin::Container */}
      <div className='container'>
        {/* begin::Card */}
        <div className='card' style={{filter: 'drop-shadow(0px 0px 40px rgba(68, 81, 96, 0.08))'}}>
          {/* begin::Card body */}
          <div className='card-body p-lg-20'>
            {/* begin::Heading */}
            <div className='text-center mb-5 mb-lg-10'>
              {/* begin::Title */}
              <h3
                className='fs-2hx text-dark mb-5'
                id='portfolio'
                data-kt-scroll-offset='{default: 100, lg: 150}'
              >
                Our Projects
              </h3>
              {/* end::Title */}
            </div>
            {/* end::Heading */}
            {/* begin::Tabs wrapper */}
            <div className='d-flex flex-center mb-5 mb-lg-15'>
              {/* begin::Tabs */}
              <ul className='nav border-transparent flex-center fs-5 fw-bold'>
                <li className='nav-item'>
                  <a
                    className='nav-link text-gray-500 text-active-primary px-3 px-lg-6 active'
                    href='#'
                    data-bs-toggle='tab'
                    data-bs-target='#kt_landing_projects_latest'
                  >
                    Latest
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link text-gray-500 text-active-primary px-3 px-lg-6'
                    href='#'
                    data-bs-toggle='tab'
                    data-bs-target='#kt_landing_projects_web_design'
                  >
                    Web Design
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link text-gray-500 text-active-primary px-3 px-lg-6'
                    href='#'
                    data-bs-toggle='tab'
                    data-bs-target='#kt_landing_projects_mobile_apps'
                  >
                    Mobile Apps
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link text-gray-500 text-active-primary px-3 px-lg-6'
                    href='#'
                    data-bs-toggle='tab'
                    data-bs-target='#kt_landing_projects_development'
                  >
                    Development
                  </a>
                </li>
              </ul>
              {/* end::Tabs */}
            </div>
            {/* end::Tabs wrapper */}
            {/* begin::Tabs content */}
            <div className='tab-content'>
              {/* begin::Tab pane */}
              <div className='tab-pane fade show active' id='kt_landing_projects_latest'>
                {/* begin::Row */}
                <div className='row g-10'>
                  {/* begin::Col */}
                  <div className='col-lg-6'>
                    {/* begin::Item */}
                    <a
                      className='d-block card-rounded overlay h-lg-100'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x600/img-23.jpg'
                    >
                      {/* begin::Image */}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px'
                        style={{backgroundImage: "url('assets/media/stock/600x600/img-23.jpg')"}}
                      ></div>
                      {/* end::Image */}
                      {/* begin::Action */}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                      {/* end::Action */}
                    </a>
                    {/* end::Item */}
                  </div>
                  {/* end::Col */}
                  {/* begin::Col */}
                  <div className='col-lg-6'>
                    {/* begin::Row */}
                    <div className='row g-10 mb-10'>
                      {/* begin::Col */}
                      <div className='col-lg-6'>
                        {/* begin::Item */}
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-22.jpg'
                        >
                          {/* begin::Image */}
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: "url('assets/media/stock/600x600/img-22.jpg')",
                            }}
                          ></div>
                          {/* end::Image */}
                          {/* begin::Action */}
                          <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                          {/* end::Action */}
                        </a>
                        {/* end::Item */}
                      </div>
                      {/* end::Col */}
                      {/* begin::Col */}
                      <div className='col-lg-6'>
                        {/* begin::Item */}
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-21.jpg'
                        >
                          {/* begin::Image */}
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: "url('assets/media/stock/600x600/img-21.jpg')",
                            }}
                          ></div>
                          {/* end::Image */}
                          {/* begin::Action */}
                          <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                          {/* end::Action */}
                        </a>
                        {/* end::Item */}
                      </div>
                      {/* end::Col */}
                    </div>
                    {/* end::Row */}
                    {/* begin::Item */}
                    <a
                      className='d-block card-rounded overlay'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x400/img-20.jpg'
                    >
                      {/* begin::Image */}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                        style={{backgroundImage: "url('assets/media/stock/600x600/img-20.jpg')"}}
                      ></div>
                      {/* end::Image */}
                      {/* begin::Action */}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                      {/* end::Action */}
                    </a>
                    {/* end::Item */}
                  </div>
                  {/* end::Col */}
                </div>
                {/* end::Row */}
              </div>
              {/* end::Tab pane */}
              {/* begin::Tab pane */}
              <div className='tab-pane fade' id='kt_landing_projects_web_design'>
                {/* begin::Row */}
                <div className='row g-10'>
                  {/* begin::Col */}
                  <div className='col-lg-6'>
                    {/* begin::Item */}
                    <a
                      className='d-block card-rounded overlay h-lg-100'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x600/img-11.jpg'
                    >
                      {/* begin::Image */}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px'
                        style={{backgroundImage: "url('assets/media/stock/600x600/img-11.jpg')"}}
                      ></div>
                      {/* end::Image */}
                      {/* begin::Action */}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                      {/* end::Action */}
                    </a>
                    {/* end::Item */}
                  </div>
                  {/* end::Col */}
                  {/* begin::Col */}
                  <div className='col-lg-6'>
                    {/* begin::Row */}
                    <div className='row g-10 mb-10'>
                      {/* begin::Col */}
                      <div className='col-lg-6'>
                        {/* begin::Item */}
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-12.jpg'
                        >
                          {/* begin::Image */}
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: "url('assets/media/stock/600x600/img-12.jpg')",
                            }}
                          ></div>
                          {/* end::Image */}
                          {/* begin::Action */}
                          <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                          {/* end::Action */}
                        </a>
                        {/* end::Item */}
                      </div>
                      {/* end::Col */}
                      {/* begin::Col */}
                      <div className='col-lg-6'>
                        {/* begin::Item */}
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-21.jpg'
                        >
                          {/* begin::Image */}
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: "url('assets/media/stock/600x600/img-21.jpg')",
                            }}
                          ></div>
                          {/* end::Image */}
                          {/* begin::Action */}
                          <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                          {/* end::Action */}
                        </a>
                        {/* end::Item */}
                      </div>
                      {/* end::Col */}
                    </div>
                    {/* end::Row */}
                    {/* begin::Item */}
                    <a
                      className='d-block card-rounded overlay'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x400/img-20.jpg'
                    >
                      {/* begin::Image */}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                        style={{backgroundImage: "url('assets/media/stock/600x600/img-20.jpg')"}}
                      ></div>
                      {/* end::Image */}
                      {/* begin::Action */}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                      {/* end::Action */}
                    </a>
                    {/* end::Item */}
                  </div>
                  {/* end::Col */}
                </div>
                {/* end::Row */}
              </div>
              {/* end::Tab pane */}
              {/* begin::Tab pane */}
              <div className='tab-pane fade' id='kt_landing_projects_mobile_apps'>
                {/* begin::Row */}
                <div className='row g-10'>
                  {/* begin::Col */}
                  <div className='col-lg-6'>
                    {/* begin::Row */}
                    <div className='row g-10 mb-10'>
                      {/* begin::Col */}
                      <div className='col-lg-6'>
                        {/* begin::Item */}
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-16.jpg'
                        >
                          {/* begin::Image */}
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: "url('assets/media/stock/600x600/img-16.jpg')",
                            }}
                          ></div>
                          {/* end::Image */}
                          {/* begin::Action */}
                          <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                          {/* end::Action */}
                        </a>
                        {/* end::Item */}
                      </div>
                      {/* end::Col */}
                      {/* begin::Col */}
                      <div className='col-lg-6'>
                        {/* begin::Item */}
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-12.jpg'
                        >
                          {/* begin::Image */}
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: "url('assets/media/stock/600x600/img-12.jpg')",
                            }}
                          ></div>
                          {/* end::Image */}
                          {/* begin::Action */}
                          <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                          {/* end::Action */}
                        </a>
                        {/* end::Item */}
                      </div>
                      {/* end::Col */}
                    </div>
                    {/* end::Row */}
                    {/* begin::Item */}
                    <a
                      className='d-block card-rounded overlay'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x400/img-15.jpg'
                    >
                      {/* begin::Image */}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                        style={{backgroundImage: "url('assets/media/stock/600x600/img-15.jpg')"}}
                      ></div>
                      {/* end::Image */}
                      {/* begin::Action */}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                      {/* end::Action */}
                    </a>
                    {/* end::Item */}
                  </div>
                  {/* end::Col */}
                  {/* begin::Col */}
                  <div className='col-lg-6'>
                    {/* begin::Item */}
                    <a
                      className='d-block card-rounded overlay h-lg-100'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x600/img-23.jpg'
                    >
                      {/* begin::Image */}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px'
                        style={{backgroundImage: "url('assets/media/stock/600x600/img-23.jpg')"}}
                      ></div>
                      {/* end::Image */}
                      {/* begin::Action */}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                      {/* end::Action */}
                    </a>
                    {/* end::Item */}
                  </div>
                  {/* end::Col */}
                </div>
                {/* end::Row */}
              </div>
              {/* end::Tab pane */}
              {/* begin::Tab pane */}
              <div className='tab-pane fade' id='kt_landing_projects_development'>
                {/* begin::Row */}
                <div className='row g-10'>
                  {/* begin::Col */}
                  <div className='col-lg-6'>
                    {/* begin::Item */}
                    <a
                      className='d-block card-rounded overlay h-lg-100'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x600/img-15.jpg'
                    >
                      {/* begin::Image */}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px'
                        style={{backgroundImage: "url('assets/media/stock/600x600/img-15.jpg')"}}
                      ></div>
                      {/* end::Image */}
                      {/* begin::Action */}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                      {/* end::Action */}
                    </a>
                    {/* end::Item */}
                  </div>
                  {/* end::Col */}
                  {/* begin::Col */}
                  <div className='col-lg-6'>
                    {/* begin::Row */}
                    <div className='row g-10 mb-10'>
                      {/* begin::Col */}
                      <div className='col-lg-6'>
                        {/* begin::Item */}
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-22.jpg'
                        >
                          {/* begin::Image */}
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: "url('assets/media/stock/600x600/img-22.jpg')",
                            }}
                          ></div>
                          {/* end::Image */}
                          {/* begin::Action */}
                          <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                          {/* end::Action */}
                        </a>
                        {/* end::Item */}
                      </div>
                      {/* end::Col */}
                      {/* begin::Col */}
                      <div className='col-lg-6'>
                        {/* begin::Item */}
                        <a
                          className='d-block card-rounded overlay'
                          data-fslightbox='lightbox-projects'
                          href='assets/media/stock/600x600/img-21.jpg'
                        >
                          {/* begin::Image */}
                          <div
                            className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                            style={{
                              backgroundImage: "url('assets/media/stock/600x600/img-21.jpg')",
                            }}
                          ></div>
                          {/* end::Image */}
                          {/* begin::Action */}
                          <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                            <i className='bi bi-eye-fill fs-3x text-white'></i>
                          </div>
                          {/* end::Action */}
                        </a>
                        {/* end::Item */}
                      </div>
                      {/* end::Col */}
                    </div>
                    {/* end::Row */}
                    {/* begin::Item */}
                    <a
                      className='d-block card-rounded overlay'
                      data-fslightbox='lightbox-projects'
                      href='assets/media/stock/600x400/img-14.jpg'
                    >
                      {/* begin::Image */}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px'
                        style={{backgroundImage: "url('assets/media/stock/600x600/img-14.jpg')"}}
                      ></div>
                      {/* end::Image */}
                      {/* begin::Action */}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-3x text-white'></i>
                      </div>
                      {/* end::Action */}
                    </a>
                    {/* end::Item */}
                  </div>
                  {/* end::Col */}
                </div>
                {/* end::Row */}
              </div>
              {/* end::Tab pane */}
            </div>
            {/* end::Tabs content */}
          </div>
          {/* end::Card body */}
        </div>
        {/* end::Card */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Products}
