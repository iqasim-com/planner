import React, {FC} from 'react'

type Props = {
  day: string
}

const SingleDayForecastCard: FC<Props> = ({day}) => {
  return (
    <div className='card' style={{color: '#4B515D', borderRadius: '35px'}}>
      <div className='card-body p-4'>
        <div className='d-flex'>
          <h6 className='flex-grow-1'>Warsaw</h6>
          <h6>{day}</h6>
        </div>

        <div className='d-flex flex-column text-center mt-5 mb-4'>
          <h6 className='display-4 mb-0 font-weight-bold'> 13°C </h6>
          <span className='small' style={{color: '#868B94'}}>
            Stormy
          </span>
        </div>

        <div className='d-flex align-items-center'>
          <div className='flex-grow-1' style={{fontSize: '1rem'}}>
            <div>
              <i className='fas fa-wind fa-fw' style={{color: '#868B94'}}></i>{' '}
              <span className='ms-1'> 40 km/h </span>
            </div>
            <div>
              <i className='fas fa-tint fa-fw' style={{color: '#868B94'}}></i>{' '}
              <span className='ms-1'> 84% </span>
            </div>
            <div>
              <i className='fas fa-sun fa-fw' style={{color: '#868B94'}}></i>{' '}
              <span className='ms-1'> 0.2h </span>
            </div>
          </div>
          <div>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.png'
              width='100px'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export {SingleDayForecastCard}
