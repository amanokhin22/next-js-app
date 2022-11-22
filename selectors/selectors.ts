import {RootState} from "../app/store";
import {createSelector} from "reselect";

export const selectJobs = (state: RootState) => state.jobs;

export const selectJobList = createSelector(selectJobs, (job) => job.jobs);

export const selectCurrentPage = createSelector(selectJobs, (job) => job.page);

export const selectPageSize = createSelector(selectJobs, (job) => job.pageSize);

export const selectLoading = createSelector(selectJobs, (job) => job.loading);

export const selectPageCount = createSelector(selectJobList, selectPageSize, (jobs, pageSize) => Math.ceil(jobs.length / pageSize));

export const selectPageJobs = createSelector(selectJobList, selectPageSize, selectCurrentPage, selectPageCount, (jobs, pageSize, currentPage) => {
    const start = (currentPage - 1) * pageSize;
    return jobs.slice(start, start + pageSize);
});

export const selectActiveJobId = createSelector(selectJobs, (job) => job.activeJobId);

export const selectActiveJob = createSelector(selectJobList, selectActiveJobId, (jobs, id) => jobs.find(job => job.id === id) || null);

