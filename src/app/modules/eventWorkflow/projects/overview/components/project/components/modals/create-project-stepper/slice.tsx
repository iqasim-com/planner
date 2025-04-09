import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FlagSlices {
  isStatus: boolean
}

export const initialProjectCreationState: FlagSlices = {
  isStatus: false
}

const flagSlices = createSlice({
  name: 'flagSlices',
  initialState: initialProjectCreationState,
  reducers: {
    setStatus(state, action: PayloadAction<any>) {
      state.isStatus = action.payload
    }
  }
})

export const {
  setStatus
} = flagSlices.actions

export default flagSlices.reducer
