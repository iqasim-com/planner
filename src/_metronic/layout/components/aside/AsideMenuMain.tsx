/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      />

      {/* begin::Users */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Users</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/members/accounts'
        title='My Account'
        icon='/media/icons/duotune/finance/fin008.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/members/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/members/account/settings' title='Settings' hasBullet={true} />
        <AsideMenuItem to='/members/account/billings' title='Billings' hasBullet={true} />
        <AsideMenuItem to='/members/account/subscription' title='Subscription' hasBullet={true} />
        <AsideMenuItem
          to='/members/account/authentication'
          title='Authentication'
          hasBullet={true}
        />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/members/account/clients'
        title='Clients'
        icon='/media/icons/duotune/communication/com014.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/members/account/clients/current' title='Current' hasBullet={true} />
        <AsideMenuItem to='/members/account/clients/booking' title='Booking' hasBullet={true} />
        <AsideMenuItem
          to='/members/account/clients/rfp'
          title='Request For Proposals'
          hasBullet={true}
        />
        <AsideMenuItem to='/members/account/clients/archives' title='Archives' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/members/account/associates'
        title='Associates'
        icon='/media/icons/duotune/communication/com014.svg'
        fontIcon='bi-person'
      >
        {/* <AsideMenuItem
          to='/members/account/associates/overview'
          title='Associates'
          hasBullet={true}
        /> */}
        <AsideMenuItem
          to='/members/account/associates/overview'
          title='Overview'
          hasBullet={true}
        />
        <AsideMenuItem
          to='/members/account/associates/team-schedule'
          title='Team Schedule'
          hasBullet={true}
        />
        <AsideMenuItem
          to='/members/account/associates/time-clock'
          title='Time Clock'
          hasBullet={true}
        />
        <AsideMenuItem
          to='/members/account/associates/timesheets'
          title='Timesheets'
          hasBullet={true}
        />
        <AsideMenuItem
          to='/members/account/associates/permissions'
          title='Permissions'
          hasBullet={true}
        />
        <AsideMenuItem
          to='/members/account/associates/appraisals'
          title='Appraisals'
          hasBullet={true}
        />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/members/account/vendors'
        title='Vendors'
        icon='/media/icons/duotune/communication/com014.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/members/account/vendors/overview' title='Vendors' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* end::Users */}

      {/* begin::Projects */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>
            Project Information Model
          </span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/projects'
        title='My Projects'
        icon='/media/icons/duotune/general/gen020.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/projects/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/projects/timesheet' title='Timesheet' hasBullet={true} />
        <AsideMenuItem to='/projects/calendar' title='Calendar' hasBullet={true} />
      </AsideMenuItemWithSub>

      {/* <AsideMenuItemWithSub
        to='/projects/PIM'
        title='Guest Projects'
        icon='/media/icons/duotune/files/fil012.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/projects/PIM/overview' title='Overview' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      {/* end::Projects */}

      {/* begin::Products */}
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Products</span>
        </div>
      </div> */}
      {/* end::Products */}

      {/* begin::Crafted */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/finance/fin008.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title='User management'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div> */}
      {/* <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  )
}
