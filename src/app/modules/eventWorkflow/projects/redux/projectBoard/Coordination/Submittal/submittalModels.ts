
export interface StackHolderInformation {
  id: number,
  SubmittalAssignee: string,
  SubmittalCompanyName: string,
  SubmittalJobTitle: string,
  SubmittalEmail: string,
  SubmittalPhone: string,
}

export interface ResponseCardProps {
  id: number,
  responseStatus: string,
  submittalResponse: string,
  st_assignee: string,
  st_jobTitle: string,
  st_email: string,
  st_phone: string,
  st_date: string,
  st_signature: string,
  comments: string
}

export interface ImportantDocuments {
  id: number,
  name: string,
  path: string
}

export interface SubmittalProps {
  id: number;
  companyName: string;
  companyAddress: string;
  companyContact: string;
  companyEmail: string;
  companyLogo: string;
  projectName: string;
  projectID: string;
  issuer: string;
  jobTitle: string;
  dateOfSubmission: string;
  dueDate: string;
  submittalID: string;
  submittalCategory: string,
  submittalTitle: string,
  submittalSpecNo: string,
  submittalDescription: string,
  disclaimer: string,
  stackHolderInformation: StackHolderInformation[]
  optionalStackHolderInformation: StackHolderInformation[]
  importantDocuments: ImportantDocuments[],
  responses: ResponseCardProps[]
}

export const submittalInitialState: SubmittalProps = {
  id: Date.now(),
  companyName: '',
  companyAddress: '',
  companyContact: '',
  companyEmail: '',
  companyLogo: '/media/placeholder/placeholder-image.png',
  projectName: '',
  projectID: '',
  issuer: '',
  jobTitle: '',
  dateOfSubmission: '',
  dueDate: '',
  submittalID: '',
  submittalCategory: '',
  submittalTitle: '',
  submittalSpecNo: '',
  submittalDescription: '',
  disclaimer: '',
  stackHolderInformation: [],
  optionalStackHolderInformation: [],
  importantDocuments: [],
  responses: []
}