import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: 'team', 
    initialState: {
        value: [],
    },
    reducers: {
        add: (state, action) => {
            if (!state.value.some(item => item.name === action.payload.name)) {
                state.value.push(action.payload)
            }
        },
        remove: (state, action) => {
            state.value = state.value.filter(item => item.name !== action.payload.name)       
        },
    }
});

export const { add, remove } = teamSlice.actions;
export default teamSlice.reducer;