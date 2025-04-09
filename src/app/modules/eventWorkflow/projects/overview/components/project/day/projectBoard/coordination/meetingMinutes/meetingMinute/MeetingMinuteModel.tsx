export interface IHeader {
  subject: string
  projectName: string
  projectNumber: string
  date: string
  scheduledStartTime: string
  scheduledEndTime: string
  actualStartTime: string
  actualEndTime: string
  location: string
  company: string
  companyLogo?: string
  physicalAddress?: string
  virtualAddress?: string
  requiredParticipants: Array<IconUserModel>
  optionalParticipants?: Array<IconUserModel>
}

export interface IconUserModel {
  firstName: string
  lastName: string
  jobTitle: string
  email: string
  company: string
  cellphone: string
  deskPhone: string
  rsvp: string // enum = {accepted, decline, tentative}
  attendance: boolean
}

export const initialMeetingMinuesValues = {
  companyName: '',
  companyAddress: '',
  companyContact: '',
  companyEmail: '',
  subject: '',
  projectName: '',
  projectNumber: '',
  date: '',
  scheduledStartTime: '',
  scheduledEndTime: '',
  actualStartTime: '',
  actualEndTime: '',
  modeOfCommunication: 'call',
  meetingUrl: '',
  location: '',
  room: '',
  organizer: '',
  jobTitle: '',
  company: '',
  requiredParticipants: [],
  optionalParticipants: [],
  importantDoc: [],
  agenda: [],
  prevActionPoints: [],
  discussions: [],
  privateNotes: ''
}

export interface IMeetingMinuteDetails {}
