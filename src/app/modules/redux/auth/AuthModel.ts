interface Profile {
  firstName: string
  middleName: string | null
  lastName: string
  profilePictureUrl: string | null
  acceptTerms: boolean
  communication: Communication
  allowMarketing: boolean
  created: string
  personalAddresses: PersonalAddress[]
  personalTelephones: PersonalTelephone[]
}

interface Communication {
  emailEnabled: boolean
  callEnabled: boolean
  textEnabled: boolean
  mailEnabled: boolean
}

interface PersonalAddress {
  personalAddress: string
}

interface PersonalTelephone {
  numbers: string
}

interface DriversLicenseVerificationReport {
  enabled: boolean
  verificationProviderName: string | null
  verifiedAt: string | null
  hasStarted: boolean
  startedDate: string | null
}

interface EmailPreference {
  successfulPayment: boolean
  payout: boolean
  feeCollection: boolean
  customerPaymentDispute: boolean
  refundAlert: boolean
  invoicePayment: boolean
  webhookApiEndpoint: boolean
}

interface Notification {
  general: Communication
  billing: Communication
  newTeamMember: Communication
  completedProject: Communication
  completedTask: Communication
  timesheetSubmission: Communication
  newsLetters: Communication
}

interface PauseAccount {
  pauseEnabled: boolean
  pauseAt: string | null
  reasonForPausing: string | null
  additionalReason: string | null
  resumeAt: string | null
}

interface SignInMethod {
  passwordBasedAuthenticationEnabled: boolean
  tokenBasedAuthenticationEnabled: boolean
  multiFactorAuthenticationEnabled: boolean
  certificateBasedAuthenticationEnabled: boolean
  biometricBasedAuthenticationEnabled: boolean
}

export interface CurrentUser {
  profile: Profile
  driversLicenseVerificationReport: DriversLicenseVerificationReport
  emailPreference: EmailPreference
  notification: Notification
  pauseAccount: PauseAccount
  signInMethod: SignInMethod
}

export interface AuthState {
  isLoggedIn: boolean
  token: string | null
  error: string | null
  isLoading: boolean
  currentUser: CurrentUser
}

export interface LoginRequest {
  username: string
  password: string
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  token: null,
  isLoading: false,
  error: null,
  currentUser: {
    profile: {
      firstName: '',
      middleName: null,
      lastName: '',
      profilePictureUrl: null,
      acceptTerms: false,
      communication: {
        emailEnabled: false,
        callEnabled: false,
        textEnabled: false,
        mailEnabled: false,
      },
      allowMarketing: false,
      created: '',
      personalAddresses: [],
      personalTelephones: [],
    },
    driversLicenseVerificationReport: {
      enabled: false,
      verificationProviderName: null,
      verifiedAt: null,
      hasStarted: false,
      startedDate: null,
    },
    emailPreference: {
      successfulPayment: false,
      payout: false,
      feeCollection: false,
      customerPaymentDispute: false,
      refundAlert: false,
      invoicePayment: false,
      webhookApiEndpoint: false,
    },
    notification: {
      general: {
        emailEnabled: false,
        callEnabled: false,
        textEnabled: false,
        mailEnabled: false,
      },
      billing: {
        emailEnabled: false,
        callEnabled: false,
        textEnabled: false,
        mailEnabled: false,
      },
      newTeamMember: {
        emailEnabled: false,
        callEnabled: false,
        textEnabled: false,
        mailEnabled: false,
      },
      completedProject: {
        emailEnabled: false,
        callEnabled: false,
        textEnabled: false,
        mailEnabled: false,
      },
      completedTask: {
        emailEnabled: false,
        callEnabled: false,
        textEnabled: false,
        mailEnabled: false,
      },
      timesheetSubmission: {
        emailEnabled: false,
        callEnabled: false,
        textEnabled: false,
        mailEnabled: false,
      },
      newsLetters: {
        emailEnabled: false,
        callEnabled: false,
        textEnabled: false,
        mailEnabled: false,
      },
    },
    pauseAccount: {
      pauseEnabled: false,
      pauseAt: null,
      reasonForPausing: null,
      additionalReason: null,
      resumeAt: null,
    },
    signInMethod: {
      passwordBasedAuthenticationEnabled: false,
      tokenBasedAuthenticationEnabled: false,
      multiFactorAuthenticationEnabled: false,
      certificateBasedAuthenticationEnabled: false,
      biometricBasedAuthenticationEnabled: false,
    },
  },
}
