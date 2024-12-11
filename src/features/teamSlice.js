import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: 'team', 
    initialState: {
        value: [],
    },
    reducers: {
        add: (state, action) => {
            if (!state.value.includes(action.payload)) {
                state.value.push(action.payload)
            }
        },
        remove: (state, action) => {
            if (state.value.includes(action.payload)) {
                state.value = state.value.filter(item => item !== action.payload)       
            }
        },
    }
});

export const { add, remove } = teamSlice.actions;
export default teamSlice.reducer;