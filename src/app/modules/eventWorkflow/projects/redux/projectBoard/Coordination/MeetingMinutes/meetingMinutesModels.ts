export interface IndexSignature {
  [key: string]: string | string[] | number
}

export interface RequiredParticipantsProps extends IndexSignature {
  id: number
  firstName: string
  lastName: string
  jobTitle: string
  email: string
  company: string
  attendance: string
}

export interface ImportantDocuments {
  id: number,
  name: string,
  path: string
}

export interface Agenda {
  id: number,
  description: string
}

export interface PrevActionPoint {
  id: number,
  assigneeCompany: string,
  fullName: string,
  company: string,
  dueDate: string,
  status: string,
  actionPoints: string,
  [key: string]: string | number;
}

export interface Assignee {
  id: number,
  name: string
}

export interface Discussions {
  id: number,
  company: string,
  dueDate: string,
  status: string,
  agendaItem: string,
  notes: string,
  nextStep: string,
  assigneeCompany: string,
  assignees: Assignee[],
  deadline: string,
  description: string,
  [key: string]: string | number | Assignee[]
}

export interface MeetingMinutesProps {
  companyLogo: string,
  companyName: string
  companyAddress: string
  companyContact: string
  companyEmail: string
  subject: string
  projectName: string
  projectNumber: string
  date: string
  scheduledStartTime: string
  scheduledEndTime: string
  actualStartTime: string
  actualEndTime: string
  modeOfCommunication: string
  meetingUrl: string
  location: string
  room: string
  organizer: string
  jobTitle: string
  company: string
  requiredParticipants: RequiredParticipantsProps[]
  optionalParticipants: RequiredParticipantsProps[]
  importantDoc: ImportantDocuments[]
  agenda: Agenda[]
  prevActionPoints: PrevActionPoint[]
  discussions: Discussions[]
  privateNotes: string
}

export interface FormFieldProps {
  field: keyof MeetingMinutesProps
  value: string | string[]
}

export const initialMeetingMinutesState: MeetingMinutesProps = {
  companyLogo: '/media/placeholder/placeholder-image.png',
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
  modeOfCommunication: '',
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
  privateNotes: '',
}