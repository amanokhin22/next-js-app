import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {JobsSliceState} from "../types/types";
import {fetchJobs} from "./asyncThunkJobs";

const initialState: JobsSliceState = {
    jobs: [],
    loading: false,
    activeJobId: "",
    pageSize: 10,
    page: 1,
};

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setActiveJobId(state, action: PayloadAction<string>) {
            state.activeJobId = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            state.jobs = action.payload;
            state.loading = false;
        });
    },
})

export const {setActiveJobId, setPage} = jobsSlice.actions;

export default jobsSlice.reducer;
