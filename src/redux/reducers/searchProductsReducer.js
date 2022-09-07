import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getResult = createAsyncThunk('/fetchProducts/', async (query) => {

    const url = `https://dummyjson.com/products/search?q=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;

});

const searchProductsReducer = createSlice({
    name: 'searchProductsReducer',
    initialState: {
        data: [],
        situation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getResult.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getResult.fulfilled]: (state, action) => {
            state.situation.isLoading = false;
            state.data = action.payload.products;
        },
        [getResult.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});
export default searchProductsReducer.reducer;