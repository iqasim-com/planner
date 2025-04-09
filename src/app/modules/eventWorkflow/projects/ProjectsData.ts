import {PageLink} from '../../../../_metronic/layout/core'

export const projectSubmenu: Array<PageLink> = [
  {
    title: 'Overview',
    path: '/projects/PIM/project/overview',
    isActive: true,
  },
  {title: 'Separator', path: 'projects/PIM/project/overview', isActive: true, isSeparator: true},
  {
    title: 'Timesheet',
    path: '/projects/PIM/project/timesheet',
    isActive: false,
  },
  {
    title: 'Timesheet',
    path: '/projects/PIM/project/timesheet',
    isActive: false,
    isSeparator: true,
  },
  {
    title: 'Calendar',
    path: '/projects/PIM/project/Calendar',
    isActive: false,
  },
  {
    title: 'Calendar',
    path: '/projects/PIM/project/Calendar',
    isActive: false,
    isSeparator: true,
  },
]
