import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "../features/teamSlice";
import themeReducer from "../features/themeSlice"

export const store = configureStore({
    reducer: {
        team: teamReducer,
        darkMode: themeReducer
    }
})