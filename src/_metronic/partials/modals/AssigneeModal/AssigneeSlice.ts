import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AssigneeState {
  assignees: any[]
  loading: boolean
  error: string | null
  isOpen?: boolean
}

const initialState: AssigneeState = {
  assignees: [],
  loading: false,
  error: null,
  isOpen: false
}

const assigneeSlice = createSlice({
  name: 'assignee',
  initialState,
  reducers: {
    addAssigneeRequest: (state, action) => {
      state.loading = true
    },
    addAssigneeSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false
      state.assignees.push(action.payload)
      state.error = null
    },
    addAssigneeFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    }
  }
})

export const { addAssigneeRequest, addAssigneeSuccess, addAssigneeFailure, openModal, closeModal } = assigneeSlice.actions
export default assigneeSlice.reducer
