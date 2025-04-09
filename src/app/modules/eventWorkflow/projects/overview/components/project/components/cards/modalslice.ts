import { createSlice } from "@reduxjs/toolkit";

// Redux slice
const initialState: any = {
    openModals: {}, // Keyed by modal ID
};

export const createClientSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        openClientModal: (state, action) => {
            const { modalId } = action.payload;
            state.openModals[modalId] = true;
        },
        closeClientModal: (state, action) => {
            const { modalId } = action.payload;
            state.openModals[modalId] = false;
        },
    },
});

export const { openClientModal, closeClientModal } = createClientSlice.actions;
export default createClientSlice.reducer;