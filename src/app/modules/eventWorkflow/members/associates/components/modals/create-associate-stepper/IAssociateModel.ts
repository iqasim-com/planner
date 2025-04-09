import {PhoneNumber} from 'libphonenumber-js/types'

export interface IAssociateInformation {
  firstName: string
  lastName: string
  email: string
  primaryPhone: string
  primaryPhoneType: 'Mobile' | 'Office Desk Number' | 'Home' | void
}

export interface IJobInformation {
  jobTitle: string
  manager: string
  department: string
  startDate: string // TODO: Convert to "Date"
  //   endDate: Date | void
  hourlyPayRate: number
}

export interface ICreateAssociateData {
  associateInformation: IAssociateInformation
  jobInformation: IJobInformation
}

export const defaultCreateAssociateData: ICreateAssociateData = {
  associateInformation: {
    firstName: '',
    lastName: '',
    email: '',
    primaryPhone: '',
    primaryPhoneType: 'Mobile',
  },
  jobInformation: {
    jobTitle: '',
    manager: '',
    department: '',
    startDate: '',
    // endDate: undefined,
    hourlyPayRate: 0.0,
  },
}

export type StepProps = {
  data: ICreateAssociateData
  updateData: (fieldsToUpdate: Partial<ICreateAssociateData>) => void
  hasError: boolean
}
