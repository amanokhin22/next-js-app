import {createAsyncThunk} from "@reduxjs/toolkit";
import {jobsApi} from "../api/jobsApi";

export const fetchJobs = createAsyncThunk(
    'jobs/fetchJobs',
    async () => {
         return await jobsApi.getAll()
    }
);
