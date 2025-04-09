import * as Yup from 'yup'

export interface IMemberType {
  accountType: 'Vendor' | 'Client'
}

export interface IMemberInformation {
  AccountType: string
  Email: string
  FirstName: string
  LastName: string
  LineNumber: string
  BusinessName: string
  BusinessAddressLine1: string
  BusinessAddressLine2: string
  BusinessAddressCity: string
  BusinessAddressState: string
  BusinessAddressZipCode: string
  BusinessAddressCountry: string
  BusinessVerticals: string[]
  InstagramHandle: string
  TitokHandle: string
  WebsiteUrl: string
  Password: string
  PasswordConfirmation: string
  AcceptTerms: boolean
}

export interface ICreateMemberData {
  accountType: IMemberType
  memberInformation: IMemberInformation
}

export const defaultCreateMemberData: IMemberInformation = {
  AccountType: 'Vendor',
  Email: '',
  FirstName: '',
  LastName: '',
  LineNumber: '',
  BusinessName: '',
  BusinessAddressLine1: '',
  BusinessAddressLine2: '',
  BusinessAddressCity: '',
  BusinessAddressState: '',
  BusinessAddressZipCode: '',
  BusinessAddressCountry: '',
  BusinessVerticals: [],
  InstagramHandle: '',
  TitokHandle: '',
  WebsiteUrl: '',
  Password: '',
  PasswordConfirmation: '',
  AcceptTerms: false,
}

export type StepProps = {
  data: ICreateMemberData
  hasError: any
}
