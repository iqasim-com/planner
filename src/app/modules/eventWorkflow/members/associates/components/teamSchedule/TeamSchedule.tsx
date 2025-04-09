import React, {Component} from 'react'
import moment from 'moment'
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT, DemoData} from 'react-big-scheduler'
import withDragDropContext from './withDbDContext'
import 'react-big-scheduler/lib/css/style.css'

class TeamSchedular extends Component<any, any> {
  constructor(props: any) {
    super(props)
    let resources = [
      {
        id: 'r1',
        name: 'Paul',
      },
      {
        id: 'r2',
        name: 'Ashley',
      },
      {
        id: 'r3',
        name: 'Janat',
      },
      {
        id: 'r4',
        name: 'Member A',
      },
      {
        id: 'r5',
        name: 'Member A',
      },
    ]
    //let schedulerData = new SchedulerData(, ViewTypes.Week);
    let schedulerData = new SchedulerData(
      moment('2017-12-18').format(DATE_FORMAT),
      ViewTypes.Week,
      false,
      false,
      {
        displayWeekend: false,
        eventItemPopoverEnabled: false,
        views: [
          {
            viewName: 'Weekly Scheduling',
            viewType: ViewTypes.Week,
            showAgenda: false,
            isEventPerspective: false,
          },
        ], // minuteStep: 15
      }
    )
    // schedulerData.localeMoment.locale('en');

    schedulerData.setResources(resources)
    //schedulerData.setEvents(DemoData.events);
    let events = [
      {
        id: 1,
        start: '2017-12-18 09:30:00',
        end: '2017-12-19 23:30:00',
        resourceId: 'r1',
        title: 'A1',
        bgColor: '#488FAB',
      },
      {
        id: 2,
        start: '2017-12-18 12:30:00',
        end: '2017-12-26 23:30:00',
        resourceId: 'r2',
        title: 'A2',
        resizable: true,
      },
    ]
    schedulerData.setEvents(events)

    this.state = {
      viewModel: schedulerData,
    }
  }

  prevClick = (schedulerData: any) => {
    schedulerData.prev()
    schedulerData.setEvents(DemoData.events)
    this.setState({
      viewModel: schedulerData,
    })
  }

  nextClick = (schedulerData: any) => {
    schedulerData.next()
    schedulerData.setEvents(DemoData.events)
    this.setState({
      viewModel: schedulerData,
    })
  }

  onViewChange = (schedulerData: any, view: any) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective)
    //schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData,
    })
  }

  onSelectDate = (schedulerData: any, date: any) => {
    schedulerData.setDate(date)
    //schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData,
    })
  }

  eventClicked = (schedulerData: any, event: any) => {
    alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`)
  }

  ops1 = (schedulerData: any, event: any) => {
    alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`)
  }

  ops2 = (schedulerData: any, event: any) => {
    alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`)
  }

  /**
   * Function for creating new schedule on calendar, required following params
   * @param schedulerData
   * @param slotId
   * @param slotName
   * @param start
   * @param end
   * @param type
   * @param item
   */
  newEvent = (
    schedulerData: any,
    slotId: any,
    slotName: any,
    start: any,
    end: any,
    type: any,
    item: any
  ) => {
    let newFreshId = 0
    schedulerData.events.forEach((item: any) => {
      if (item.id >= newFreshId) newFreshId = item.id + 1
    })

    let newEvent = {
      id: newFreshId,
      title: 'New Event ABC',
      start: start,
      end: end,
      resourceId: slotId,
      bgColor: '#488FAB',
    }
    schedulerData.addEvent(newEvent)
    this.setState({
      viewModel: schedulerData,
    })
  }

  /**
   * Function for updating schedular event start
   * @param schedulerData
   * @param event
   * @param newStart
   */
  updateEventStart = (schedulerData: any, event: any, newStart: any) => {
    schedulerData.updateEventStart(event, newStart)
    this.setState({
      viewModel: schedulerData,
    })
  }

  /**
   * Function for updating schedular event end
   * @param schedulerData
   * @param event
   * @param newEnd
   */
  updateEventEnd = (schedulerData: any, event: any, newEnd: any) => {
    schedulerData.updateEventEnd(event, newEnd)
    this.setState({
      viewModel: schedulerData,
    })
  }

  /**
   * Function for moving current schedule to another day, required following params
   * @param schedulerData
   * @param event
   * @param slotId
   * @param slotName
   * @param start
   * @param end
   */
  moveEvent = (
    schedulerData: any,
    event: any,
    slotId: any,
    slotName: any,
    start: any,
    end: any
  ) => {
    schedulerData.moveEvent(event, slotId, slotName, start, end)
    this.setState({
      viewModel: schedulerData,
    })
  }

  render() {
    const {viewModel} = this.state
    return (
      <div className='card'>
        <div className='card-header d-flex align-items-center'>
          <h3 className='mb-0'>Team schedular</h3>
          <button className='btn btn-primary'>Create schedule</button>
        </div>
        <div className='card-body py-0 overflow-scroll'>
          <Scheduler
            schedulerData={viewModel}
            prevClick={this.prevClick}
            nextClick={this.nextClick}
            onSelectDate={this.onSelectDate}
            onViewChange={this.onViewChange}
            eventItemClick={this.eventClicked}
            //    viewEventClick={this.ops1}
            //    viewEventText="Ops 1"
            //    viewEvent2Text="Ops 2"
            //    viewEvent2Click={this.ops2}
            updateEventStart={this.updateEventStart}
            updateEventEnd={this.updateEventEnd}
            moveEvent={this.moveEvent}
            newEvent={this.newEvent}
          />
        </div>
      </div>
    )
  }
}

export default withDragDropContext(TeamSchedular)
