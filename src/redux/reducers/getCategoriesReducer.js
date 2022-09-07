import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk('/fetchCategories/', async () => {
    const url = 'https://dummyjson.com/products/categories';
    const res = await fetch(url);
    const data = await res.json();
    return data;
});

const getCategoriesReducer = createSlice({
    name: "getCategoriesReducer",
    initialState: {
        situation: {
            isLoading: false,
            error: null
        },
        categories: []
    },
    extraReducers: {
        [fetchCategories.pending]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = null;
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.situation.isLoading = false;
            state.categories = action.payload;
        },
        [fetchCategories.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});

export default getCategoriesReducer.reducer;