import React, {useState} from 'react'
import {ClientInfoCard} from '../../../../../../../../../../_metronic/partials/content/cards/ClientInfoCard'

const People: React.FC = () => {
  const [tabTitle, setTabTitle] = useState<string>('New Client')
  // TODO: Will update this with API integration
  const currentClients = [
    {
      img: '/media/avatars/300-4.jpg',
      firstName: 'Emma',
      lastName: 'smith',
      type: 'Bride',
      email: 'emma@g.com',
      contact: '+1202-555-0795',
    },
    {
      img: '/media/avatars/300-9.jpg',
      firstName: 'Melody',
      lastName: 'Macy',
      type: 'Groom',
      email: 'melody@g.com',
      contact: '+1202-555-0795',
    },
  ]

  // TODO: Will update this with API integration
  const associatesAndVendors = [
    {
      img: '/media/avatars/300-4.jpg',
      firstName: 'Emma',
      lastName: 'smith',
      type: 'Bride',
      role: 'Associate',
      email: 'emma@g.com',
      contact: '+1202-555-0795',
    },
    {
      img: '/media/avatars/300-6.jpg',
      firstName: 'Emma',
      lastName: 'smith',
      type: 'Bride',
      role: 'Associate',
      email: 'emma@g.com',
      contact: '+1202-555-0795',
    },
    {
      img: '/media/avatars/300-8.jpg',
      firstName: 'Emma',
      lastName: 'smith',
      type: 'Bride',
      role: 'Associate',
      email: 'emma@g.com',
      contact: '+1202-555-0795',
    },
    {
      img: '/media/avatars/300-9.jpg',
      firstName: 'Emma',
      lastName: 'smith',
      company: 'company',
      departmentScope: 'department',
      role: 'Vendor',
      email: 'emma@g.com',
      contact: '+1202-555-0795',
    },
    {
      img: '/media/avatars/300-10.jpg',
      firstName: 'Emma',
      lastName: 'smith',
      company: 'company',
      departmentScope: 'department',
      role: 'Vendor',
      email: 'emma@g.com',
      contact: '+1202-555-0795',
    },
  ]

  // TODO: Will update this with API integration
  const vendors = [
    {
      img: '/media/avatars/300-9.jpg',
      firstName: 'Emma',
      lastName: 'smith',
      company: 'company',
      departmentScope: 'department',
      role: 'Vendor',
      email: 'emma@g.com',
      contact: '+1202-555-0795',
    },
    {
      img: '/media/avatars/300-10.jpg',
      firstName: 'Emma',
      lastName: 'smith',
      company: 'company',
      departmentScope: 'department',
      role: 'Vendor',
      email: 'emma@g.com',
      contact: '+1202-555-0795',
    },
  ]

  // TODO: Will update this with API integration
  const TabHeader = [
    {
      id: '#ew-tab-clients',
      title: 'Clients',
      buttonTitle: 'New Client',
    },
    {
      id: '#ew-tab-team',
      title: 'Team',
      buttonTitle: 'New Member',
    },
    {
      id: '#ew-tab-vendor',
      title: 'Vendors',
      buttonTitle: 'New Vendor',
    },
  ]

  /**
   * Function for setting button text on tab header, this function expect
   * @param title {string}
   */
  const setButtonText = (title: string) => {
    let buttonText = ''
    switch (title) {
      case 'Team':
        buttonText = 'New Member'
        break
      case 'Vendors':
        buttonText = 'New Vendor'
        break
      default:
        buttonText = 'New Client'
        break
    }
    setTabTitle(buttonText)
  }

  return (
    <>
      <div className='card card-custom shadow'>
        <div className='card-header card-header-stretch'>
          {/* <h3 className='card-title'>Title</h3> */}
          <div className='card-toolbar d-flex w-100 justify-content-between align-items-center'>
            <ul className='nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0'>
              {TabHeader.map((res) => {
                // setTabTitle(res.title)
                return (
                  <li className='nav-item' key={res.id}>
                    <a
                      onClick={() => setButtonText(res.title)}
                      className={`nav-link ${res.title === 'Clients' ? 'active' : null}`}
                      data-bs-toggle='tab'
                      href={res.id}
                    >
                      {res.title}
                    </a>
                  </li>
                )
              })}
            </ul>
            <button className='btn btn-primary'>{tabTitle}</button>
          </div>
        </div>
        <div className='card-body'>
          <div className='tab-content' id='myTabContent'>
            <div className='tab-pane fade show active' id='ew-tab-clients' role='tabpanel'>
              <div className='row g-6 g-xl-9'>
                {currentClients.map((res, index) => {
                  return (
                    <div className='col-md-6 col-xxl-4'>
                      <ClientInfoCard
                        avatar={res.img}
                        stylesClasses='bg-gray-100'
                        key={index}
                        firstName={res.firstName}
                        lastName={res.lastName}
                        type={res.type}
                        email={res.email}
                        contact={res.contact}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='tab-pane fade' id='ew-tab-team' role='tabpanel'>
              <div className='row g-6 g-xl-9'>
                {associatesAndVendors.map((res, index) => {
                  return (
                    <div className='col-md-6 col-xxl-4'>
                      <ClientInfoCard
                        avatar={res.img}
                        stylesClasses='bg-gray-100'
                        key={index}
                        company={res.company}
                        departmentScope={res.departmentScope}
                        firstName={res.firstName}
                        lastName={res.lastName}
                        role={res.role}
                        email={res.email}
                        contact={res.contact}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='tab-pane fade' id='ew-tab-vendors' role='tabpanel'>
              <div className='row g-6 g-xl-9'>
                {vendors.map((res, index) => {
                  return (
                    <div className='col-md-6 col-xxl-4'>
                      <ClientInfoCard
                        avatar={res.img}
                        stylesClasses='bg-gray-100'
                        key={index}
                        company={res.company}
                        departmentScope={res.departmentScope}
                        firstName={res.firstName}
                        lastName={res.lastName}
                        role={res.role}
                        email={res.email}
                        contact={res.contact}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default People
