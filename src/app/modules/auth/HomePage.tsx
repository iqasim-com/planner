/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect} from 'react'
import {Home} from './components/Home/Home'
import {HowItWorks} from './components/Home/components/HowItWorks'
import {Achievements} from './components/Home/components/Achievements'
import {Products} from './components/Home/components/Products'
import {Pricings} from './components/Home/components/Pricings'
import {Testimonials} from './components/Home/components/Testimonials'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {initOnLoad} from 'apexcharts'
import PublicFooter from './components/Home/components/Footer'
import PublicContact from './components/Home/components/Contact'

type Props = {}

const HomePage: FC<Props> = () => {
  const modifiedBodyTag = () => {
    const body = document.getElementById('kt_body')
    // Add new attribute
    body?.setAttribute('data-bs-spy', 'scroll')
    body?.setAttribute('data-bs-target', '#kt_landing_menu')
    body?.setAttribute('data-bs-offset', '200')

    // Update attribute
  }

  window.onload = function () {
    const body = document.getElementById('kt_body')
    // Add new attribute
    body?.setAttribute('data-bs-spy', 'scroll')
    body?.setAttribute('data-bs-target', '#kt_landing_menu')
    body?.setAttribute('data-bs-offset', '200')

    // Update attribute
  }

  return (
    <>
      <Home />
      {/* <HowItWorks />*/}
      {/* <Achievements /> */}
      {/* <Products /> */}
      <Pricings />
      <Testimonials />
      <PublicContact />
      <PublicFooter />
    </>
  )
}

export {HomePage}
