import {configureStore} from "@reduxjs/toolkit";
import jobsSliceReducer from "../redux/jobsSlice";

export const store = configureStore({
    reducer: {
        jobs:  jobsSliceReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
