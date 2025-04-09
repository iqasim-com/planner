/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'

type Props = {
  className: string
  color: string
  svgIcon: string
  iconColor: string
  title: string | number
  titleColor?: string
  description: string
  descriptionColor?: string,
  bgImg?: string
}

const StatisticsWidget: React.FC<Props> = ({
  className,
  color,
  svgIcon,
  iconColor,
  title,
  titleColor,
  description,
  descriptionColor,
  bgImg
}) => {
  return (
    <div
      className={`card bgi-no-repeat ${className}`}
      style={{
        backgroundPosition: 'right top',
        backgroundSize: '30% auto',
        backgroundImage: `url(${toAbsoluteUrl('/media/svg/shapes/' + bgImg)})`,
      }}
    >
      {/* begin::Body */}
      <div className='card-body'>
        <h1 className='display-2'>
        {title}
        </h1>
        <p
          className='text-dark-75 fw-semibold fs-5 m-0'
          dangerouslySetInnerHTML={{__html: description}}
        ></p>
      </div>
      {/* end::Body */}
    </div>
  )
}

export { StatisticsWidget }
