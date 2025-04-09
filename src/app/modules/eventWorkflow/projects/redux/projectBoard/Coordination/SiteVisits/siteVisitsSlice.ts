import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ImportantDocuments, RequiredVisitorsProps, SiteVisitsProps, initialState } from "./siteVisitsModel"

const siteVisitsSlice = createSlice({
  name: 'siteVisitSlice',
  initialState,
  reducers: {
    addRequiredVisitors: (state, action: PayloadAction<RequiredVisitorsProps>) => {
      state.requiredVisitors.push(action.payload)
    },
    addOptionalVisitors: (state, action: PayloadAction<RequiredVisitorsProps>) => {
      state.optionalVisitors.push(action.payload)
    },
    addNewRequiredVisitor: (
      state,
      action: PayloadAction<{id: number, value: any, key: string}>
    ) => {
      const { id, key, value } = action.payload;
      const collection = state.requiredVisitors;
      const item = collection.find((item) => item.id === id);
      if (item) {
        (item as any)[key] = value;
      } else {
        const optVisitors = state.optionalVisitors.find((item) => item.id === id);
        if (optVisitors) {
          (optVisitors as any)[key] = value;
        }
      }
    },
    removeVisitor: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.requiredVisitors.findIndex((refId) => refId.id === id)
      if (index !== -1) {
        state.requiredVisitors.splice(index, 1)
      } else {
        const optionalSh = state.optionalVisitors.findIndex((refId) => refId.id === id)
        if(optionalSh !== -1) {
          state.optionalVisitors.splice(index, 1)
        }
      }
    },
    addSiteVisitsFieldData: (state, action: PayloadAction<SiteVisitsProps>) => {
      Object.assign(state, action.payload)
    },
    addNewSiteVisitDocument: (state, action: PayloadAction<ImportantDocuments>) => {
      state.importantDocuments.push(action.payload)
    },
    removeSiteVisitDocument: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const index = state.importantDocuments.findIndex((document) => document.id === id)
      if (index !== -1) {
        state.importantDocuments.splice(index, 1)
      }
    },
  }
})

export const { addSiteVisitsFieldData, addOptionalVisitors, addNewSiteVisitDocument, removeSiteVisitDocument, addRequiredVisitors, addNewRequiredVisitor, removeVisitor } = siteVisitsSlice.actions
export default siteVisitsSlice.reducer