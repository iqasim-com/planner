// Third party imports
import axios from 'axios'
// Component imports
import { AuthModel, UserModel } from './_models'
import { IMemberInformation } from '../components/registration/components/create-registration-stepper/IMemberModel'
import api from '../../../../setup/axios/axios'

const API_URL =
  // TODO: Before building and deployment, change value to "production"
  // Value may be change to "development" when frontend developer is doing frontend and backend integration.
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_PROD_API_URL

// User
export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/api/v1/auth/account`
// export const REGISTER_URL = `${API_URL}/api/v1/vendors/register`

// Vendor TODO: should be in constants file
export const GET_VENDOR_BY_ACCESSTOKEN_URL = `${API_URL}/api/v1/vendors/account`
export const GET_USER_PROFILE = `/api/v1/users/current/profile`
export const LOGIN_URL = `/api/v1/accounts/auth/login`
export const REGISTER_VENDOR_URL = `${API_URL}/api/v1/auth/register`
export const REGISTER_EMPLOYEE_URL = `${API_URL}/api/v1/vendors/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/api/auth/account/forgot-password`
export const REFRESH_TOKEN = `/api/v1/accounts/auth/refresh-token`
export const PROJECTS = `/api/v1/users/current/projects`
export const CREATE_TEMPLATE = `/api/v1/users/current/projects/templates`
export const CHECK_PROJECT_AVAILABILITY = `/api/v1/users/current/projects/availability?name=`
// Get current user's projects
export const GET_PROJECTS = `/api/v1/users/current/projects/`
// Clients
export const REGISTER_CLIENT_URL = `${API_URL}api/v1/clients/register`

export const getTaskGroupByWorkspaceId = ({ projectId, eventDateId, phaseId, workspaceId, pageNumber, pageSize }: any) => {
  return api.get(`${PROJECTS}/${projectId}/event-dates/${eventDateId}/phases/${phaseId}/workspaces/${workspaceId}/task-groups?pageNumber=${pageNumber}&pageSize=${pageSize}`)
}

export const createNewTaskGroup = (projectId: string, eventDateId: string, phaseId: string, workspaceId: string, payload: any) => {
  return api.post(`${PROJECTS}/${projectId}/event-dates/${eventDateId}/phases/${phaseId}/workspaces/${workspaceId}/task-groups`, { taskGroup: payload })
}

export const updateTaskGroupStatus = (projectId: string, eventDateId: string, phaseId: string, workspaceId: string, taskGroupId: string, payload: any) => {
  return api
    .put(`${PROJECTS}/${projectId}/event-dates/${eventDateId}/phases/${phaseId}/workspaces/${workspaceId}/task-groups/${taskGroupId}/update/status`, payload)
}

export const getTasksByTaskGroupId = ({ projectId, eventDateId, phaseId, workspaceId, taskGroupId, pageNumber, pageSize }: any) => {
  return api.get(`${PROJECTS}/${projectId}/event-dates/${eventDateId}/phases/${phaseId}/workspaces/${workspaceId}/task-groups/${taskGroupId}/tasks?pageNumber=${pageNumber}&pageSize=${pageSize}`)
}

export const createNewTaskInTaskGroup = ({ projectId, eventDateId, phaseId, workspaceId, taskGroupId, payload }: any) => {
  return api.post(`${PROJECTS}/${projectId}/event-dates/${eventDateId}/phases/${phaseId}/workspaces/${workspaceId}/task-groups/${taskGroupId}/tasks`, {task: payload})
}

export const getTaskById = ({ projectId, eventDateId, phaseId, workspaceId, taskGroupId, taskId }: any) => {
  return api.get(`${PROJECTS}/${projectId}/event-dates/${eventDateId}/phases/${phaseId}/workspaces/${workspaceId}/task-groups/${taskGroupId}/tasks/${taskId}`)
}

export const addNewAssigneeToTask = ({ projectId, eventDateId, phaseId, workspaceId, taskGroupId, taskId, payload }: any) => {
  return api.post(`${PROJECTS}/${projectId}/event-dates/${eventDateId}/phases/${phaseId}/workspaces/${workspaceId}/task-groups/${taskGroupId}/tasks/${taskId}/assignees`, {assignee: payload})
}

export const getClientByProjectId = (projectId: string, pageNumber: number, pageSize: number) => {
  return api.get(`${PROJECTS}/${projectId}/clients?pageNumber=${pageNumber}&pageSize=${pageSize}`)
}

export const createClientForProject = ({ projectId, payload }: any) => {
  return api.post(`${PROJECTS}/${projectId}/clients`, {client: payload})
}

// Server should return AuthModel
export const userLogin = (email: string, password: string) => {
  return api
    .post<AuthModel>(LOGIN_URL, { email, password })
    .then((response) => {
      // Assuming the API response contains a token field
      const token: { accessToken: string } = response.data
      return token
    })
    .catch((error) => {
      throw new Error('Authentication failed')
    })
}

export const checkProjectAvailability = (query: string) => {
  return api
    .get(`${CHECK_PROJECT_AVAILABILITY}${query}`)
}

export const getCurentUserProjects = (pageNumber?: number) => {
  return api
    .get(`${GET_PROJECTS}?pageNumber=${pageNumber}&pageSize=6`)
    .then((res) => {
      return res
    })
    .catch((error) => {
      throw new Error('Something went wrong')
    })
}

export const getEventDatePhases = (projectId: string, eventDateId: string) => {
  return api
    .get(`${PROJECTS}/${projectId}/event-dates/${eventDateId}`)
    .then((res) => {
      return res
    })
    .catch((error) => {
      throw new Error('Unable to fetch phases for Event date')
    })
}

export const getAllUserProjects = () => {
  return api
    .get(`${GET_PROJECTS}`)
    .then((res) => {
      return res.data.projects
    })
    .catch((error) => {
      throw new Error('Something went wrong')
    })
}

export const getWorkspacesById = (projectId: string, eventDateId: string, phaseId: string) => {
  return api
    .get(`${PROJECTS}/${projectId}/event-dates/${eventDateId}/phases/${phaseId}`)
    .then((res) => {
      return res
    })
    .catch((error) => {
      throw new Error('Unable to fetch phase by ID')
    })
}

export const getUserProfileByToken = (accessToken: string) => {
  return api
    .get(GET_USER_PROFILE)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error)
    })
}

// Server should return AuthModel -> Register Vendor (registerVendor).
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_VENDOR_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

/**
 * This function sends a post request to the appropriate URL based
 * on the userType argument, and returns the response data.
 * @param userData
 * @param userType
 * @returns response
 */
export async function registerUser(userData: IMemberInformation, userType: string) {
  try {
    const clientData = {
      accountType: userData.AccountType,
      firstName: userData.FirstName,
      lastName: userData.LastName,
      email: userData.Email,
      businessAddressCountry: userData.BusinessAddressCountry,
      lineNumber: userData.LineNumber,
      password: userData.Password,
      passwordConfirmation: userData.PasswordConfirmation,
      acceptTerms: userData.AcceptTerms,
    }

    const vendorData = {
      ...clientData,
      businessName: userData.BusinessName,
      businessAddressLine1: userData.BusinessAddressLine1,
      businessAddressLine2: userData.BusinessAddressLine2,
      businessAddressCity: userData.BusinessAddressCity,
      businessAddressState: userData.BusinessAddressState,
      businessAddressZipCode: userData.BusinessAddressZipCode,
      businessVerticals: userData.BusinessVerticals,
      instagramHandle: userData.InstagramHandle,
      titokHandle: userData.TitokHandle,
      websiteUrl: userData.WebsiteUrl,
    }

    let response
    // Send the post request
    if (userType === 'Vendor')
      response = await axios.post<IMemberInformation>(REGISTER_VENDOR_URL, vendorData)
    else response = await axios.post<IMemberInformation>(REGISTER_CLIENT_URL, clientData)
    // Return the response data
    return response?.data
  } catch (error) {
    // Handle the error
    console.error(error)
    throw error
  }
}

/**
 * function for employee registration expecting following params to perform the request
 * @param emailAddress string
 * @param firstName string
 * @param lastName string
 * @param password string
 * @param passwordConfirmation string
 * @returns promise
 */
export function registerEmployee(
  emailAddress: string,
  firstName: string,
  lastName: string,
  password: string,
  passwordConfirmation: string
) {
  return axios.post(REGISTER_EMPLOYEE_URL, {
    emailAddress,
    firstName: firstName,
    lastName: lastName,
    password,
    passwordConfirmation,
  })
}

/**
 * function for requesting password
 * @param email string
 * @returns promise
 */
export function requestPassword(email: string) {
  return api.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  })
}

/**
 * function for getting user details by token
 * @param accessToken string
 * @returns promise
 */
export const getUserByToken = (accessToken: string) => {
  return api
    .post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
      accessToken: accessToken,
    })
    .then((res) => res.data)
}

/**
 * function for getting vendor details through token
 * @param accessToken string
 * @returns promise
 */
export function getVendorByToken(accessToken: string) {
  return axios.post<UserModel>(GET_VENDOR_BY_ACCESSTOKEN_URL, {
    accessToken: accessToken,
  })
}

export const userLogins = (email: string, password: string) => {
  return api
    .post<AuthModel>(LOGIN_URL, { email, password })
    .then((response) => {
      // Assuming the API response contains a token field
      const token: { accessToken: string } = response.data
      return token
    })
    .catch((error) => {
      throw new Error('Authentication failed')
    })
}

/*
 * Function for performing refresh token request to server
 * @param accessToken string
 * @returns promise
 */
export function requestRefreshToken(accessToken: any) {
  console.log('TOK', accessToken.accessToken)
  debugger
  return api.post(REFRESH_TOKEN, { "accessToken": accessToken.accessToken })
}
