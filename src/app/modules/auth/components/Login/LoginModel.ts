import * as Yup from 'yup'
import { UserLoginModel } from '../../core/_models'

export const memberLoginInitialValues: UserLoginModel = {
  email: '',
  password: ''
}

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
})