import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { ImportantDocuments, ResponseCardProps, StackHolderInformation, SubmittalProps, submittalInitialState } from './submittalModels'

const submittal = createSlice({
  name: 'submittal',
  initialState: submittalInitialState,
  reducers: {
    addFieldData: (state, action: PayloadAction<SubmittalProps>) => {
      Object.assign(state, action.payload)
    },
    addStackholderCard: (state, action: PayloadAction<StackHolderInformation>) => {
      state.stackHolderInformation.push(action.payload)
    },
    addOptionalStackholderCard: (state, action: PayloadAction<StackHolderInformation>) => {
      state.optionalStackHolderInformation.push(action.payload)
    },
    addResponseCard: (state, action: PayloadAction<ResponseCardProps>) => {
      state.responses.push(action.payload)
    },
    removeResponseCard: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.responses.findIndex((refId) => refId.id === id)
      if (index !== -1) {
        state.responses.splice(index, 1)
      }
    },
    addNewStackholder: (
      state,
      action: PayloadAction<{id: number, value: any, key: string}>
    ) => {
      const { id, key, value } = action.payload;
      const collection = state.stackHolderInformation;
      const item = collection.find((item) => item.id === id);
      if (item) {
        (item as any)[key] = value;
      } else {
        const optStackholder = state.optionalStackHolderInformation.find((item) => item.id === id);
        if (optStackholder) {
          (optStackholder as any)[key] = value;
        }
      }
    },
    removeStackholder: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.stackHolderInformation.findIndex((refId) => refId.id === id)
      if (index !== -1) {
        state.stackHolderInformation.splice(index, 1)
      } else {
        const optionalSh = state.stackHolderInformation.findIndex((refId) => refId.id === id)
        if(optionalSh !== -1) {
          state.optionalStackHolderInformation.splice(index, 1)
        }
      }
    },
    addNewSubmittalDocument: (state, action: PayloadAction<ImportantDocuments>) => {
      state.importantDocuments.push(action.payload)
    },
    removeSubmittalDocument: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.importantDocuments.findIndex((document) => document.id === id)
      if (index !== -1) {
        state.importantDocuments.splice(index, 1)
      }
    },
    addNewResponse: (
      state,
      action: PayloadAction<{id: number, value: any, key: string, isReference?: boolean}>
    ) => {
      const { id, key, value } = action.payload;
      const collection = state.responses;
      const item = collection.find((item) => item.id === id);
      if (item) {
        (item as any)[key] = value;
      }
    }
  }
})

export const {
  addFieldData,
  addStackholderCard,
  addNewStackholder,
  removeStackholder,
  addOptionalStackholderCard,
  addNewSubmittalDocument,
  removeSubmittalDocument,
  addResponseCard,
  addNewResponse,
  removeResponseCard
} = submittal.actions
export default submittal.reducer
