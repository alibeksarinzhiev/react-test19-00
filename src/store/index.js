import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice";
import clothesSlice from "./clothesSlice";

export const store = configureStore({
    reducer:{
        user:userSlice,
        clothesSlice

    }
})