
export interface ImportantDocuments {
  id: number,
  name: string,
  path: string
}

export interface RequiredVisitorsProps {
  id: number
  firstName: string
  lastName: string
  jobTitle: string
  email: string
  company: string
  attendance: string
}

export interface SiteVisitsProps {
  id: number
  companyName: string
  companyAddress: string
  companyContact: string
  companyEmail: string
  companyLogo: string
  projectName: string
  projectNumber: string
  objective: string
  siteVisitOrganizer: string
  siteVisitJobTitle: string
  siteVisitCompany: string
  siteVisitAddress: string
  siteVisitPhone: string
  siteVisitsGuideName: string
  siteVisitsGuideContact: string
  siteVisitsGuideEmail: string
  reporterFullName: string
  previousActionPoint: string
  currentCondition: string
  siteVisitsVideoLink: string
  siteVisitsNextStep: string
  siteVisitsAssignee: string
  siteVisitsDueDate: string
  selectStatus: string
  disclaimer: string,
  importantDocuments: ImportantDocuments[]
  requiredVisitors: RequiredVisitorsProps[]
  optionalVisitors: RequiredVisitorsProps[]
}

export const initialState: SiteVisitsProps = {
  id: 0,
  companyName: '',
  companyAddress: '',
  companyContact: '',
  companyEmail: '',
  companyLogo: '',
  projectName: '',
  projectNumber: '',
  objective: '',
  siteVisitOrganizer: '',
  siteVisitJobTitle: '',
  siteVisitCompany: '',
  siteVisitAddress: '',
  siteVisitPhone: '',
  siteVisitsGuideName: '',
  siteVisitsGuideContact: '',
  siteVisitsGuideEmail: '',
  reporterFullName: '',
  previousActionPoint: '',
  currentCondition: '',
  siteVisitsVideoLink: '',
  siteVisitsNextStep: '',
  siteVisitsAssignee: '',
  siteVisitsDueDate: '',
  selectStatus: '',
  disclaimer: '',
  importantDocuments: [],
  requiredVisitors: [],
  optionalVisitors: []
}