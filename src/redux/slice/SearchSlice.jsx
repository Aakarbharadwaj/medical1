import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    keyword: "", // Initial state for the search keyword
};

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchKeyword(state, action) {
            state.keyword = action.payload;
        },
    },
});

export const { setSearchKeyword } = SearchSlice.actions;
export default SearchSlice.reducer;
