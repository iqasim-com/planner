/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'; // To be added before the fullCalendar plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // A fullCalendar plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // A fullCalendar plugin
import interactionPlugin from '@fullcalendar/interaction'; // A fullCalendar plugin needed for dayClick

import { CreateEvent } from '../modals/createEvent/CreateEvent';
import { useAppSelector } from '../../../../../../../setup/store';
import { useSelector } from 'react-redux';
import { getProjectEventDates } from '../../../redux/Selectors/GlobalSelectors';
import useApiHook from '../../../../../hooks/useApiHook';
import { GET_PROJECTS } from '../../../../../auth/core/_requests';
import ProjectInnerModal from '../../../overview/components/project/components/modals/create-project-stepper/steps/components/modal';
import { KTSVG } from '../../../../../../../_metronic/helpers';

type Props = {};

const EventCard: FC<Props> = ({ }) => {
  const [weekendsVisible, setWeekendsVisible] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [apiData, isLoading] = useApiHook(GET_PROJECTS)
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {
    if (apiData?.data?.projects) {
      calendarData(apiData?.data?.projects)
    }
  }, [apiData])

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible)
  }

  const calendarData = async (eventsData: any) => {
    const newEvents = []
    for (let i = 0; i < eventsData?.length; i++) {
      for (let j = 0; j < eventsData[i]?.eventDates?.length; j++) {
        newEvents.push({
          title: eventsData[i].name,
          start: eventsData[i].eventDates[j].date,
        })
      }
    }
    setEvents(newEvents)
  }

  return (
    <div className="card">
      <div className="card-header flex-nowrap wrap-reverse p-9">
        {/* __TODO__: Move button to the right corner of the card header. */}
        <Link to={'/projects/overview'}>
          <button className="btn btn-outline btn-outline-success">
            Create Project
          </button>
        </Link>
      </div>
      <div className="card-body">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev, next today',
            center: 'title',
            right: 'dayGridMonth, timeGridWeek, timeGridDay',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          weekends={weekendsVisible}
          eventClick={(e) => {
            setShowModal(true)
          }}
          events={events}
          eventContent={(event) => {
            return (
              <>
                <div className='p-2'>
                  {isLoading ? 'Loading events...' : <p className='m-0'>{event.event.title}</p>}
                </div>
              </>
            )
          }}
        />

        <ProjectInnerModal show={showModal}>
          <div className='shadow border border-1'>
            <div className='modal-header'>
              <h2>Event Details</h2>
              {/* begin::Close */}
              <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={() => setShowModal(false)}>
                <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
              </div>
              {/* end::Close */}
            </div>
            <div className="modal-body">
              Event details
            </div>
          </div>
        </ProjectInnerModal>
        {/* <CreateEvent isShown={showModal} hide={handleModalToggle} /> */}
      </div>
    </div>
  );
};

export { EventCard };
