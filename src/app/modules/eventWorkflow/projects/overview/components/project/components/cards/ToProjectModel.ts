import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required'),
  middleName: Yup.string(),
  lastName: Yup.string()
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  cellPhone: Yup.string()
    .required('Contact Number is required')
    .matches(/^[0-9]+$/, 'Only digits are allowed')
    .min(10, 'Contact Number should be at least 10 digits'),
  role: Yup.object()
    .required('Client Role is required'),
})

export const initialCreateNewClientState = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    cellPhone: '',
    role: '', // Assuming role is a string representing the client type
  }