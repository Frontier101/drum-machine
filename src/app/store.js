import { configureStore } from "@reduxjs/toolkit";
import soundSlice from "../features/soundSlice";



export const store = configureStore({
    reducer:{
        sound: soundSlice,
    }
});