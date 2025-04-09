export interface ImportantDocuments {
  id: number
  name: string
  path: string
}

export interface RequestRefDocuments {
  id: number
  rfiOverview: string
  documents: ImportantDocuments[]
}

export interface ReferenceDocuments {
  id: number
  rfiOverview: string
  documents: ImportantDocuments[]
  changeInCost: boolean
  changeInTime: boolean
  increaseInCost: string
  selectCurrencyForIncreaseCost: string
  increaseCurrency: string
  increaseInTime: string
  increaseInTimeOfDays: string
  decreaseInCost: string
  selectCurrencyForDecreaseCost: string
  decreaseCurrency: string
  decreaseInTime: string
  decreaseInTimeOfDays: string
}

export interface RfiResponses {
  id: number,
  rfiResponse: string,
  requestBy: string,
  responderJobTitle: string,
  responseDueDate: string,
  rfiSignature: string,
  responderCompanyName: string,
  responderStamp: string
}

export interface RequestForInformationProps {
  id: number
  companyName: string
  companyAddress: string
  companyContact: string
  companyEmail: string
  companyLogo: string
  projectName: string
  projectID: string
  dateOfRequest: string
  projectLocation: string
  requestBy: string
  RFINO: string
  responseDueDate: string
  importantDoc: ImportantDocuments[]
  referenceDoc: ReferenceDocuments[]
  requestReferenceDocuments: RequestRefDocuments[]
  requestForInformationResponses: RfiResponses[]
  rfiAssignTo: string
  rfiViewers: string
  rfiDisclaimer: string
}

export interface FormFieldProps {
  field: keyof RequestForInformationProps
  value: string | string[]
}

export const rfiInitialState: RequestForInformationProps = {
  id: Date.now(),
  companyName: '',
  companyAddress: '',
  companyContact: '',
  companyEmail: '',
  companyLogo: '/media/placeholder/placeholder-image.png',
  projectName: '',
  projectID: '',
  dateOfRequest: '',
  projectLocation: '',
  requestBy: '',
  RFINO: '',
  responseDueDate: '',
  importantDoc: [],
  referenceDoc: [],
  requestReferenceDocuments: [],
  requestForInformationResponses: [],
  rfiAssignTo: '',
  rfiViewers: '',
  rfiDisclaimer: '',
}