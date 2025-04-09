import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
  phaseCreationModal?: boolean
}

const initialState: ModalState = {
  phaseCreationModal: false
}

const genericModalSlice = createSlice({
  name: 'genericModal',
  initialState,
  reducers: {
    openModalAction: (state, action: PayloadAction<string>) => {
      console.log('Action payload', action.payload, '---', state.phaseCreationModal)
      state.phaseCreationModal = true
    },
    closeModalAction: (state, action: PayloadAction<string>) => {
      state.phaseCreationModal = false
    },
    // toggleModal: (state, action: PayloadAction<string>) => {
    //   state[action.payload] = !state[action.payload]
    // }
  }
})

export const { openModalAction, closeModalAction } = genericModalSlice.actions
export default genericModalSlice.reducer
