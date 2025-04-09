import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Workspace name is required'),
  description: Yup.string().required('Description is required'),
  priority: Yup.object(),
  status: Yup.object(),
  startedAt: Yup.string(),
  deadline: Yup.date()
})

export interface FormValues {
  name: string
  description: string
  priority: {
    name: string,
    value: number,
  }
  status: {
    name: string,
    value: number,
  }
  startedAt: string
  deadline: string
}

export const initialValues: FormValues = {
  name: '',
  description: '',
  priority: {
    name: '',
    value: 0,
  },
  status: {
    name: '',
    value: 0,
  },
  startedAt: '',
  deadline: ''
};