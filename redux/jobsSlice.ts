import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {JobItem, JobsSliceState} from "../types/types";
import {fetchJobs} from "./asyncThunkJobs";


const initialState: JobsSliceState = {
    jobs: [],
    loading: false,
};

const jobsSlice = createSlice({
    name: 'jobsBoard',
    initialState,
    reducers: {
        setJobsList(state, action: PayloadAction<JobItem[]>) {
            state.jobs = action.payload
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
        builder.addCase(fetchJobs.rejected, (state) => {
            state.jobs = [];
            state.loading = false;
        });
    },
})

export const {} = jobsSlice.actions;

export default jobsSlice.reducer;
