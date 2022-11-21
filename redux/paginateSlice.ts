import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PaginateSliceState {
    currentPage: number,
}

const initialState: PaginateSliceState = {
    currentPage: 1,

};

const paginateSlice = createSlice({
    name: 'paginator',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
    },
})

export const {setCurrentPage} = paginateSlice.actions;

export default paginateSlice.reducer;
