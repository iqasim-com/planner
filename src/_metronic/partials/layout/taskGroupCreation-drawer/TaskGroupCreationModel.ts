import * as Yup from 'yup'

export interface TaskGroupProps {
  name: string,
  description: string,
  priority: {
    name: string,
    value: number
  },
  status: {
    name: string,
    value: number
  }
}

export interface TaskProps {
  taskGroup: TaskGroupProps[];
}

export const taskGroupCreationValidation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  deadline: Yup.string().required('Deadline is required'),
  status: Yup.object().shape({
    value: Yup.string().required('Status is required')
  }),
  priority: Yup.object().shape({
    value: Yup.string().required('Priority is required')
  })
})

export const initialTaskGroupCreationState: TaskGroupProps = {
  name: "",
  description: "",
  priority: {
    name: "",
    value: 0
  },
  status: {
    name: "",
    value: 0
  }
}
