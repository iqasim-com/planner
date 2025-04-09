import * as Yup from 'yup';
import { v1 as uuidv1 } from 'uuid'

export interface ICategory {
  projectName: string
  projectCategory: string
  projectTemplate: string
}

export interface IDetails {
  eventDate: string
  eventTime: string
  eventDuration: number
  guestCount: number
  projectBudget: number
  currency: string
}

export interface ILocations {
  locations: string
  areVenuesBooked: string
}

export interface IUserModel {
  firstName: string
  lastName: string
  role: string
}

export interface IClients {
  clients: Array<IUserModel>
  stakeholders: Array<IUserModel>
}

export interface ITeamMember {
  firstName: string
  lastName: string
  avatar?: string
  color?: string
  initials?: string
}

export interface ITeam {
  team: Array<ITeamMember>
}

export interface ICreateProjectData {
  category: ICategory
  details: IDetails
  locations: ILocations
  clients: IClients
  team: ITeam
}

export const defaultCreateProjectData: ICreateProjectData = {
  category: {
    projectName: '',
    projectCategory: '',
    projectTemplate: '',
  },
  details: {
    eventDate: '',
    eventTime: '',
    eventDuration: 0.0,
    guestCount: 0.0,
    projectBudget: 0.0,
    currency: '',
  },
  locations: {
    locations: '',
    areVenuesBooked: '',
  },
  clients: {
    clients: [],
    stakeholders: [],
  },
  team: {
    team: [],
  },
}

export type StepProps = {
  data: ICreateProjectData
  updateData: (fieldsToUpdate: Partial<ICreateProjectData>) => void
  hasError: boolean
}

export const projectCreationValidationSchema = Yup.object().shape({
  id: Yup.string(),
  isMultiDate: Yup.bool(),
  howManyDays: Yup.number(),
  daysField: Yup.array().of(
    Yup.object().shape({
      id: Yup.string(),
      eventDate: Yup.string(),
      eventTime: Yup.string(),
      eventDuration: Yup.string(),
      guestCount: Yup.string(),
      projectBudget: Yup.string(),
      currency: Yup.string(),
    })
  ),
  checkVenueBooking: Yup.array(),
  venueName: Yup.string(),
  venueAddress: Yup.string(),
  projectName: Yup.string(),
  projectCategory: Yup.string(),
  projectTemplate: Yup.string(),
  clients: Yup.array().of(
    Yup.object().shape({
      id: Yup.string(),
      firstName: Yup.string(),
      lastName: Yup.string(),
      email: Yup.string().email(),
      contact: Yup.string(),
      role: Yup.string(),
    })
  ),
  planningPartner: Yup.array().of(
    Yup.object().shape({
      id: Yup.string(),
      firstName: Yup.string(),
      lastName: Yup.string(),
      email: Yup.string().email(),
      contact: Yup.string(),
      role: Yup.string(),
    })
  ),
});

// Node: Initialy default dummy values. Once get request will get he real ID from backend server.
interface Role {
  name: string;
  value: number;
}

interface Client {
  clientId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  cellPhone: string;
  role: Role;
  createdAt?: string;
  updatedAt?: string | null;
  applicationUserId?: string | null;
}

interface CurrencyCode {
  name: string;
  value: number;
}

interface EventLocation {
  hasBookedVenue: boolean;
  venueName: string;
  street: string;
  line2: string;
  city: string;
  state: string;
  zipCode?: string | null;
  country: string;
  createdAt?: string;
  updatedAt?: string | null;
}

interface EventDateCategory {
  name: string;
  value: number;
}

interface EventDate {
  eventDateId: string;
  date: string;
  startTime: string;
  endTimne: string;
  duration: number | string;
  adultGuestCount: number | string;
  childGuestCount: number | string;
  vendorGuestCount: number | string;
  targetTotalBudget: number | string;
  currencyCode: CurrencyCode;
  eventLocation: EventLocation;
  eventDateCategory: EventDateCategory;
  createdAt?: string;
  updateAt?: string | null;
  authorUid?: string;
  guests: Client[];
  teamMembers?: Client[];
  vendors?: Client[];
  phases?: any[];
  guestCount?: number | string
}

interface Category {
  name: string;
  value: number;
}

export interface ProjectCreationInitialstateProps {
  projectId: string;
  name: string;
  category: Category;
  createdAt?: string;
  updatedAt?: string | null;
  templateId?: string | null;
  templateName?: string | null;
  authorUid?: string;
  clients: Client[];
  eventDates: EventDate[];
}

export const initialProjectCreationState: ProjectCreationInitialstateProps = {
  projectId: '',
  name: '',
  category: {
    name: '',
    value: 0,
  },
  clients: [
    {
      clientId: uuidv1(),
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
      cellPhone: '',
      role: {
        name: '',
        value: 0
      }
    }
  ],
  eventDates: [
    {
      eventDateId: uuidv1(),
      date: '',
      startTime: '',
      endTimne: '',
      duration: '',
      adultGuestCount: 0,
      childGuestCount: 0,
      vendorGuestCount: 0,
      targetTotalBudget: '',
      currencyCode: {
        name: '',
        value: 0,
      },
      eventLocation: {
        hasBookedVenue: false,
        venueName: '',
        street: '',
        line2: '',
        city: '',
        state: '',
        country: '',
      },
      eventDateCategory: {
        name: '',
        value: 0,
      },
      guests: [],
      teamMembers: [],
      vendors: [],
      guestCount: '',
    },
  ],
}
