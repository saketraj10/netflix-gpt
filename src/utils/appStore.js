import { configureStore } from "@reduxjs/toolkit";
import userRecucer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
    reducer: {
        user: userRecucer, 
        movies: moviesReducer,
    },
});

export default appStore;