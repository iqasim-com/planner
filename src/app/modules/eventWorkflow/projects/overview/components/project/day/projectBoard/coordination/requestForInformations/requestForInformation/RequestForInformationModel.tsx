export const requestForInformationInitialValues = {
  companyName: '',
  companyAddress: '',
  companyContact: '',
  companyEmail: '',
  companyLogo: '',
  projectName: '',
  projectID: '',
  dateOfRequest: '',
  projectLocation: '',
  requestBy: '',
  RFINO: '',
  responseDueDate: '',
  importantDoc: [],
  rfiOverview: [],
  referenceDoc: [], // initial value for referenceDoc field is an empty array
  changeInCost: false,
  changeInTime: false,
  increaseInCost: false,
  selectCurrencyForIncreaseCost: 'none',
  increaseCurrency: '',
  increaseInTime: false,
  increaseInTimeOfDays: '',
  decreaseInCost: false,
  selectCurrencyForDecreaseCost: 'none',
  decreaseCurrency: '',
  decreaseInTime: false,
  decreaseInTimeOfDays: '',
  rfiSignature: '',
  userStamp: null,
  userStampUrl: '',
  rfiAssignTo: '',
  rfiViewers: '',
  requestReference: [
    {
      rfiOverview: '',
      requestReferenceDoc: []
    }
  ],
  addRfiResponse: [
    {
      response: '',
      responseDoc: []
    }
  ]
};