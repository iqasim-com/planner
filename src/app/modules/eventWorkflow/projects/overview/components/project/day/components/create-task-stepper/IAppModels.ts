import * as Yup from 'yup'

export interface CreateTaskProps {
  show: boolean
  handleClose: () => void
  callback: (task: any) => void
  loading: boolean
}
export interface TaskBasicInformation {
  taskId: string,
  deadline?: string
  taskTitle?: string
  taskSubTitle?: string
  taskDescription?: string
  taskStartDate?: string
  taskCompletionDate?: string
  taskPhase?: string
  taskStatus?: string
  selectTaskAssignee: any[]
  selectTaskReviewer: any[]
}

export interface ICreateAppData {
  appBasic: TaskBasicInformation
}

export const defaultCreateAppData: ICreateAppData = {
  appBasic: {
    taskId: '',
    deadline: '',
    taskTitle: '',
    taskSubTitle: '',
    taskDescription: '',
    taskStartDate: '',
    taskCompletionDate: '',
    taskPhase: '',
    taskStatus: '',
    selectTaskAssignee: [],
    selectTaskReviewer: []
  }
}

export const initialTaskValues: TaskBasicInformation = {
  taskId: "EWFT" + Date.now(),
  deadline: "",
  taskTitle: "",
  taskSubTitle: "",
  taskDescription: "",
  taskStartDate: "",
  taskCompletionDate: "",
  taskPhase: "",
  taskStatus: "pending",
  selectTaskAssignee: [],
  selectTaskReviewer: []
};

export type StepProps = {
  data: ICreateAppData
  updateData: (fieldsToUpdate: Partial<ICreateAppData>) => void
}

export const taskFormValidationSchema = Yup.object().shape({
  deadline: Yup.string().required('Deadline is required.'),
  taskTitle: Yup.string().required('Title is required.'),
  taskSubTitle: Yup.string().required('Subtitle is required.'),
  taskDescription: Yup.string().required('Description is required.'),
  taskStartDate: Yup.string().required('Start date is required.'),
  taskCompletionDate: Yup.string().required('Completion date is required.'),
  taskPhase: Yup.string().required('Phase is required.'),
})
