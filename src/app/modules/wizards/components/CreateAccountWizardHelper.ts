import * as Yup from 'yup'

export interface ICreateAccount {
  accountType: string
  accountTeamSize: string
  firstName: string
  lastName: string
  password: string
  accountPlan: string
  businessName: string
  jobTitle: string
  businessDescriptor: string
  acceptTerms: boolean
  businessType: string
  businessDescription: string
  emailAddress: string
  nameOnCard: string
  cardNumber: string
  cardExpiryMonth: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
}

/**
 * Yup objects validation currently using for signup wizard
 * TODO: Need to remove this later
 */
const createAccountSchemas = [
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),
  Yup.object({
    firstName: Yup.string().required().label('First Name'),
    contactNumber: Yup.string().required().label('Contact Number'),
    emailAddress: Yup.string().required().label('Email address'),
    businessAddress: Yup.string().required().label('Business address'),
    lastName: Yup.string().required().label('Last Name'),
    jobTitle: Yup.string().required().label('Job Title is required'),
    password: Yup.string()
    .max(50, 'Maximum 50 symbols')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    passwordConfirmation: Yup.string()
    .required('Password confirmation is required')
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
    }),
    acceptTerms: Yup
    .bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
  }),
  Yup.object({
    businessName: Yup.string().required().label('Business Name'),
    businessDescriptor: Yup.string().required().label('Shortened Descriptor'),
    businessType: Yup.string().required().label('Corporation Type'),
  }),
  Yup.object({
    nameOnCard: Yup.string().required().label('Name On Card'),
    cardNumber: Yup.string().required().label('Card Number'),
    cardExpiryMonth: Yup.string().required().label('Expiration Month'),
    cardExpiryYear: Yup.string().required().label('Expiration Year'),
    cardCvv: Yup.string().required().label('CVV'),
  }),
]

/**
 * This code is a Yup schema for a user registration form. 
 * It defines the shape of the data that will be submitted and validates it. 
 * It requires certain fields to be filled out, such as 
 * first name, contact number, email address, business address, last name, job title, password and password confirmation. 
 * It also validates the email address format and requires the password 
 * to contain 8 characters with one uppercase letter, one lowercase letter, one number and one special character. 
 * Lastly it requires the user to accept terms and conditions before submitting the form.
 */
const userRegistrationSchema = Yup.object().shape({
  FirstName: Yup.string().required().label('First Name'),
  LastName: Yup.string().required().label('Last Name'),
  // businessName: Yup.string().required().label('First Name'),
  Email: Yup.string()
    .required()
    .label('Email address')
    .email(),
  Password: Yup.string()
    .max(50, 'Maximum 50 symbols')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  PasswordConfirmation: Yup.string()
    .required('Please confirm your password')
    .when('Password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('Password')],
        "Password didn't match"
      ),
    }),
  AcceptTerms: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
})

const inits: ICreateAccount = {
  accountType: 'vendor',
  accountTeamSize: '50+',
  firstName: '',
  lastName: '',
  password: '',
  accountPlan: '1',
  businessName: 'Keenthemes Inc.',
  jobTitle: '',
  businessDescriptor: 'KEENTHEMES',
  acceptTerms: false,
  businessType: '1',
  businessDescription: '',
  emailAddress: '',
  nameOnCard: 'Max Doe',
  cardNumber: '4111 1111 1111 1111',
  cardExpiryMonth: '1',
  cardExpiryYear: '2025',
  cardCvv: '123',
  saveCard: '1',
}

export {createAccountSchemas, inits, userRegistrationSchema}
