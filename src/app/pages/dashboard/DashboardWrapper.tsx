/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  MixedWidget2,
  TablesWidget10,
  StatisticsWidget3,
  ListsWidget1,
  ChartsWidget1,
} from '../../../_metronic/partials/widgets'
import { StatisticsWidget } from '../../../_metronic/partials/widgets/ewfStatistics/StatisticWidget'
import { useAppSelector } from '../../../setup/store'

const DashboardPage: FC = () => {
  const totalProjects = useAppSelector(state => state.createProject.projects)
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-8'>
        <div className="col-xxl-3">
          <div>
            <StatisticsWidget3
              className='card-xl-stretch mb-xl-8 bg-primary'
              color='success'
              title='Active Projects'
              description='Currently active projects overview'
              change={totalProjects.length} />
          </div>
          <div>
            <StatisticsWidget
              className='card-xl-stretch mb-xl-8'
              svgIcon='/media/icons/duotune/general/gen013.svg'
              color=''
              iconColor='success'
              title='+20'
              description='Vendors'
              bgImg='abstract-1-dark.svg'
            />
          </div>
          <div>
            <StatisticsWidget
              className='card-xl-stretch mb-xl-8'
              svgIcon='/media/icons/duotune/general/gen014.svg'
              color=''
              iconColor='success'
              title='+30'
              description='Clients'
              bgImg='abstract-2-dark.svg'
            />
          </div>
          {/* <div>
            <StatisticsWidget
              className='card-xl-stretch mb-xl-8'
              svgIcon='/media/icons/duotune/general/gen015.svg'
              color=''
              iconColor='success'
              title='+20'
              description='Associates'
              bgImg='abstract-3-dark.svg'
            />
          </div> */}
        </div>
        <div className="col-xxl-9">
          <ChartsWidget1 className='card-xl-stretch mb-xl-8' />
        </div>

      </div>

      <div className='row gy-5 g-xl-8'>
        <div className='col-xxl-4'>
          <MixedWidget2
            className='card-xl-stretch mb-xl-8'
            chartColor='danger'
            chartHeight='200px'
            strokeColor='#cb1e46'
          />
        </div>
        <div className='col-xxl-8'>
          <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      {/* <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xxl-4'>
        <ListsWidget5 className='card-xxl-stretch' />
      </div>
      <div className='col-xxl-4'>
        <MixedWidget10
          className='card-xxl-stretch-50 mb-5'
          chartColor='primary'
          chartHeight='150px'
        />
        <MixedWidget11
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='175px'
        />
      </div>
    </div> */}
      {/* end::Row */}

      {/* begin::Row */}
      {/* <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
      </div>
    </div> */}
      {/* end::Row */}

      {/* <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='150px'
        />
      </div>
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div> */}
    </>
  )
}

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
