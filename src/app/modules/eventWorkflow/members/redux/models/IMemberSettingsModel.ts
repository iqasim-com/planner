import {IConnectedAccountsModel} from './settings/IConnectedAccountsModel'
import {IDeactivateAccountModel} from './settings/IDeactivateAccountModel'
import {IEmailPreferencesModel} from './settings/IEmailPreferencesModel'
import {IMemberCommunicationModel} from './settings/IMemberCommunicationModel'
import {INotificationsModel} from './settings/INotificationsModel'
import {IProfileDetailsModel} from './settings/IProfileDetailsModel'

export interface IMemberSettingsModel {
  profileDetails?: IProfileDetailsModel
  communication?: IMemberCommunicationModel
  connectedAccount?: IConnectedAccountsModel
  emailPreferences?: IEmailPreferencesModel
  notifications?: INotificationsModel
  deactivateAccount: IDeactivateAccountModel
}

export const profileDetailsInitValues: IProfileDetailsModel = {
  email: '',
  profilePictureUrl: '',
  firstName: '',
  lastName: '',
  fullName: '',
  companyName: '',
  contactPhone: '',
  companyWebsite: '',
  country: '',
  language: '',
  timeZone: '',
  currency: '',
}

export const connectedAccountsInitValues: IConnectedAccountsModel = {
  google: true,
  github: true,
  stack: false,
}

export const deactivateAccountInitValues: IDeactivateAccountModel = {
  confirm: false,
}

export const emailPreferencesInitValues: IEmailPreferencesModel = {
  successfulPayments: false,
  payouts: true,
  freeCollections: false,
  customerPaymentDispute: true,
  refundAlert: false,
  invoicePayments: true,
  webhookAPIEndpoints: false,
}

export const communicationsInitValues: IMemberCommunicationModel = {
  email: true,
  sms: false,
  phone: false,
  mail: false,
}

export const notificationsInitValues: INotificationsModel = {
  notifications: {
    email: true,
    phone: true,
  },
  billingUpdates: {
    email: true,
    phone: true,
  },
  newTeamMembers: {
    email: true,
    phone: false,
  },
  completeProjects: {
    email: false,
    phone: true,
  },
  newsletters: {
    email: false,
    phone: false,
  },
}

export const memberSettingsInitValues: IMemberSettingsModel = {
  profileDetails: profileDetailsInitValues,
  communication: communicationsInitValues,
  connectedAccount: connectedAccountsInitValues,
  emailPreferences: emailPreferencesInitValues,
  notifications: notificationsInitValues,
  deactivateAccount: deactivateAccountInitValues,
}
