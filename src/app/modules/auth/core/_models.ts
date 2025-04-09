export interface AuthModel {
  accessToken: string
  refreshToken?: string
}

export interface UserLoginModel {
  email: string
  password: string
}

export interface UserAddressModel {
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  postCode: string
}

export interface UserTelephoneModel {
  countryCode: number
  centralOfficeCode: number
  lineNumber: number
}

export interface UserCommunicationModel {
  email: boolean
  sms: boolean
  phone: boolean
}

export interface UserEmailSettingsModel {
  emailNotification?: boolean
  sendCopyToPersonalEmail?: boolean
  activityRelatesEmail?: {
    youHaveNewNotifications?: boolean
    youAreSentADirectMessage?: boolean
    someoneAddsYouAsAsAConnection?: boolean
    uponNewOrder?: boolean
    newMembershipApproval?: boolean
    memberRegistration?: boolean
  }
  updatesFromKeenthemes?: {
    newsAboutKeenthemesProductsAndFeatureUpdates?: boolean
    tipsOnGettingMoreOutOfKeen?: boolean
    thingsYouMissedSindeYouLastLoggedIntoKeen?: boolean
    newsAboutStartOnPartnerProductsAndOtherServices?: boolean
    tipsOnStartBusinessProducts?: boolean
  }
}

export interface UserSocialNetworksModel {
  linkedIn: string
  facebook: string
  twitter: string
  instagram: string
}

export interface UserModel {
  id?: string
  userName: string
  password: string | undefined
  email: string
  firstName: string
  lastName: string
  fullName?: string
  occupation?: string
  companyName?: string
  phone?: string
  roles?: Array<number>
  accountPictureUrl?: string
  language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'
  timeZone?: string
  website?: ''
  emailSettings?: UserEmailSettingsModel
  auth?: AuthModel
  communication?: UserCommunicationModel
  address?: UserAddressModel
  primaryTelephone?: UserTelephoneModel
  socialNetworks?: UserSocialNetworksModel
}
