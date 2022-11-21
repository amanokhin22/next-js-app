import {configureStore} from "@reduxjs/toolkit";
import paginateSliceReducer from "../redux/paginateSlice";


export const store = configureStore({
    reducer: {
        paginate:  paginateSliceReducer,

    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

