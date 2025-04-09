import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {put, takeLatest, select} from 'redux-saga/effects'
import {IAddressModel} from './models/billings/IAddressModel'
import {ICardModel} from './models/billings/ICardModel'
import {IInvoiceSummaryModel} from './models/billings/IInvoiceSummaryModel'
import {IProfileDetailsModel} from './models/settings/IProfileDetailsModel'
import {IMemberCommunicationModel} from './models/settings/IMemberCommunicationModel'
import {IConnectedAccountsModel} from './models/settings/IConnectedAccountsModel'
import {IEmailPreferencesModel} from './models/settings/IEmailPreferencesModel'
import {INotificationsModel} from './models/settings/INotificationsModel'
import {IDeactivateAccountModel} from './models/settings/IDeactivateAccountModel'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  AddAddress: '[AddAddress] Action',
  AddCard: '[AddCard] Action',
  AddInvoiceSummary: '[AddInvoiceSummary] Action',
}

const initialMemberAccountState: IMemberAccountState = {
  profileDetails: undefined,
  communication: undefined,
  connectedAccount: undefined,
  emailPreferences: undefined,
  notifications: undefined,
  accountDeactivation: undefined,
  paymentCards: undefined,
  billingAddresses: undefined,
  billingHistory: undefined,
}

export interface IMemberAccountState {
  profileDetails?: IProfileDetailsModel
  communication?: IMemberCommunicationModel
  connectedAccount?: IConnectedAccountsModel
  emailPreferences?: IEmailPreferencesModel
  notifications?: INotificationsModel
  accountDeactivation?: IDeactivateAccountModel
  paymentCards?: Array<ICardModel>
  billingAddresses?: Array<IAddressModel>
  billingHistory?: Array<IInvoiceSummaryModel>
}

export const reducer = persistReducer(
  {
    storage,
    key: 'v100-eventWorkflow-memberAccount',
    whitelist: ['settings', 'billings', 'subscription', 'authentication'],
  },
  (
    state: IMemberAccountState = initialMemberAccountState,
    action: ActionWithPayload<IMemberAccountState>
  ) => {
    switch (action.type) {
      case actionTypes.AddAddress: {
        const newAddress = action.payload?.billingAddresses
        return {...state, newAddress}
      }

      case actionTypes.AddCard: {
        const newPaymentCard = action.payload?.paymentCards
        return {...state, newPaymentCard}
      }

      case actionTypes.AddInvoiceSummary: {
        const newInvoiceSummary = action.payload?.billingHistory
        return {...state, newInvoiceSummary}
      }

      default:
        return state
    }
  }
)
