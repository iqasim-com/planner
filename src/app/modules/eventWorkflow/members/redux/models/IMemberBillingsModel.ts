import {IBillingAddressesModel} from './billings/IBillingAddressesModel'
import {IBillingHistoryModel} from './billings/IBillingHistoryModel'
import {IPaymentMethodsModel} from './billings/IPaymentMethodsModel'

export interface IMemberBillingsModel {
  paymentMethods: IPaymentMethodsModel
  billingAddress: IBillingAddressesModel
  billingHistory: IBillingHistoryModel
}
