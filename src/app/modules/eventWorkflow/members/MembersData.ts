import {PageLink} from '../../../../_metronic/layout/core'

export const profileSubmenu: Array<PageLink> = [
  {
    title: 'Overview',
    path: '/members/account/overview',
    isActive: true,
  },
  {
    title: 'Separator',
    path: '/members/account/overview',
    isActive: true,
    isSeparator: true,
  },
  {
    title: 'Clients',
    path: '/members/account/clients',
    isActive: false,
  },
  {
    title: 'Clients',
    path: '/members/account/clients',
    isActive: false,
    isSeparator: true,
  },
  {
    title: 'Associates',
    path: '/members/account/associates',
    isActive: false,
  },
  {
    title: 'Associates',
    path: '/members/account/associates',
    isActive: false,
    isSeparator: true,
  },
  {
    title: 'Vendors',
    path: '/members/account/vendors',
    isActive: false,
  },
  {
    title: 'Vendors',
    path: '/members/account/vendors',
    isActive: false,
    isSeparator: true,
  },
]
