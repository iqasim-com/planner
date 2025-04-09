import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { FormFieldProps, ImportantDocuments, ReferenceDocuments, RequestRefDocuments, RfiResponses, rfiInitialState } from './requestForInformationModels'

const requestForInformationSlice = createSlice({
  name: 'requestForInformation',
  initialState: rfiInitialState,
  reducers: {
    addRequestForInformationFormFields: (state, action: PayloadAction<FormFieldProps>) => {
      Object.assign(state, action.payload)
    },
    addNewRfiDocument: (state, action: PayloadAction<ImportantDocuments>) => {
      state.importantDoc.push(action.payload)
    },
    deleteRfiDocument: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.importantDoc.findIndex((document) => document.id === id)
      if (index !== -1) {
        state.importantDoc.splice(index, 1)
      }
    },
    addNewReference: (state, action: PayloadAction<ReferenceDocuments>) => {
      state.referenceDoc.push(action.payload)
    },
    addNewRequestReference: (state, action: PayloadAction<RequestRefDocuments>) => {
      state.requestReferenceDocuments.push(action.payload)
    },
    addNewResponse: (state, action: PayloadAction<RfiResponses>) => {
      state.requestForInformationResponses.push(action.payload)
    },
    addNewDocumentElements: (
      state,
      action: PayloadAction<{id: number, value: any, key: string, isReference?: boolean}>
    ) => {
      const { id, key, value, isReference } = action.payload;
      const collection = isReference ? state.referenceDoc : state.requestReferenceDocuments;
      const item = collection.find((item) => item.id === id);
      if (item) {
        if (key === 'document') {
          item.documents.push(value);
        } else {
          (item as any)[key] = value;
        }
      } else {
        const responseItem = state.requestForInformationResponses.find((item) => item.id === id);
        if (responseItem) {
          (responseItem as any)[key] = value;
        }
      }
    },
    removeResponse: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.requestForInformationResponses.findIndex((refId) => refId.id === id)
      if (index !== -1) {
        state.requestForInformationResponses.splice(index, 1)
      }
    },
    removeRequestReferenceDocumentElements: (
      state,
      action: PayloadAction<{refElementId: number; referenceIndex: number}>
    ) => {
      const {refElementId, referenceIndex} = action.payload
      if (referenceIndex !== -1) {
        const documentIndex = state.requestReferenceDocuments[referenceIndex].documents.findIndex(
          (doc) => doc.id === refElementId
        )

        if (documentIndex !== -1) {
          state.requestReferenceDocuments[referenceIndex].documents.splice(documentIndex, 1)
        }
      }
    },
    removeReferenceDocumentElements: (
      state,
      action: PayloadAction<{refElementId: number; referenceIndex: number}>
    ) => {
      const {refElementId, referenceIndex} = action.payload
      if (referenceIndex !== -1) {
        const documentIndex = state.referenceDoc[referenceIndex].documents.findIndex(
          (doc) => doc.id === refElementId
        )
        if (documentIndex !== -1) {
          state.referenceDoc[referenceIndex].documents.splice(documentIndex, 1)
        }
      }
    },
    deleteReference: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.referenceDoc.findIndex((refId) => refId.id === id)
      if (index !== -1) {
        state.referenceDoc.splice(index, 1)
      }
    },
    removeRequestReference: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.requestReferenceDocuments.findIndex((refId) => refId.id === id)
      if (index !== -1) {
        state.requestReferenceDocuments.splice(index, 1)
      }
    }
  }
})

export const {
  addRequestForInformationFormFields,
  addNewRfiDocument,
  deleteRfiDocument,
  addNewReference,
  deleteReference,
  addNewResponse,
  removeResponse,
  removeRequestReference,
  removeReferenceDocumentElements,
  addNewRequestReference,
  addNewDocumentElements,
  removeRequestReferenceDocumentElements
} = requestForInformationSlice.actions
export default requestForInformationSlice.reducer
