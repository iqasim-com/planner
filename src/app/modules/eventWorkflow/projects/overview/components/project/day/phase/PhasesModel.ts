import * as Yup from 'yup'

export interface PhaseCreationFormProps {
  values: any,
  touched: any,
  errors: any,
  setFieldValue: any
}

export const statusOptions = [
  { name: 'Pending', value: 1 },
  { name: 'ReOpened', value: 2 },
  { name: 'Completed', value: 3 }
]

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Phase Name is required'),
  status: Yup.object(),
  startDate: Yup.date()
    .required('Start Date is required')
    .nullable(),
  dueDate: Yup.date()
    .required('Due Date is required')
    .max(Yup.ref('startDate'), 'Due Date cannot be after Start Date')
    .nullable(),
});

// Initial Values
export const initialValues = {
  name: '',
  status: {
    name: '',
    value: 1,
  },
  startDate: '',
  dueDate: '',
}