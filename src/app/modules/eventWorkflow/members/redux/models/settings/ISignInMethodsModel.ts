export interface IUpdateEmailModel {
  newEmail?: string
  confirmPassword: string
}

export interface IUpdatePasswordModel {
  currentPassword: string
  newPassword: string
  passwordConfirmation: string
}

export const updateEmail: IUpdateEmailModel = {
  newEmail: '',
  confirmPassword: '',
}

export const updatePassword: IUpdatePasswordModel = {
  currentPassword: '',
  newPassword: '',
  passwordConfirmation: '',
}
