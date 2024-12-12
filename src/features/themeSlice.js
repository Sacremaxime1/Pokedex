import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "darkMode",
    initialState: {
        value: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === false ? state.value = true : state.value = false
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;