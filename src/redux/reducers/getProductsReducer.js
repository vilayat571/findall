import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('/fetchProducts/', async (limit) => {
    const url =
        `https://dummyjson.com/products?limit=${limit}&skip=1&select=title,price,thumbnail,images,discountPercentage,rating,brand`;
    const res = await fetch(url);
    const data = await res.json();
    return data;

});

const getProductsReducer = createSlice({
    name: "getProductsReducer",
    initialState: {
        situation: {
            isLoading: false,
            error: null
        },
        products: []
    },
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.situation.isLoading = false;
            state.products = action.payload.products
        },
        [fetchProducts.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});

export default getProductsReducer.reducer;