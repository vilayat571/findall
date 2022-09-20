import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDiscountProducts = createAsyncThunk('/getDisountProducts/', async (limit) => {

    const url = `https://dummyjson.com/products?limit=${limit}&skip=30&select=title,price,thumbnail,images,discountPercentage,rating,brand,category`;

    const res = await fetch(url);
    const data = await res.json();
    return data;

});

const getDiscountReducer = createSlice({
    name: 'getDiscountReducer',
    initialState: {
        situation: {
            isLoading: false,
            error: null
        },
        data: []
    },
    extraReducers: {
        [getDiscountProducts.pending]: (state, artion) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getDiscountProducts.fulfilled]: (state, action) => {
            state.situation.isLoading = true;
            state.data = action.payload.products;
        },
        [getDiscountProducts.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});
export default getDiscountReducer.reducer;