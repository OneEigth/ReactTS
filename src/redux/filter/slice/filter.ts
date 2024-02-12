import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FilterSliceState, Sort, SortPropertyEnum } from '../types';

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 1,
    currentPage: 1,
    sort: {
        name: 'популярности',
        sortProperty: SortPropertyEnum.RATING_DESC,
    },
};

export const filterSlice = createSlice({
    name: 'filter',

    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            if (Object.keys(action.payload).length) {
                state.currentPage = Number(action.payload.currentPage);
                state.categoryId = Number(action.payload.categoryId);
                state.sort = action.payload.sort;
            } else {
                state.currentPage = 1;
                state.categoryId = 1;
                state.sort = {
                    name: 'популярности',
                    sortProperty: SortPropertyEnum.RATING_DESC,
                };
            }
        },

    }

})

export const { setSearchValue,setCategoryId,setSort, setCurrentPage,setFilters } = filterSlice.actions

export default filterSlice.reducer

