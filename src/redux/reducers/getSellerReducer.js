import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getBestSeller = createAsyncThunk('/getBestSeller/', async () => {
    const url =
    `https://dummyjson.com/products?limit=10&skip=60&select=title,price,thumbnail,images,discountPercentage,rating,brand,category`;


    const res = await fetch(url);

    const data = await res.json();

    return data;

});

const getSellerReducer = createSlice({
    name: 'getSellerReducer',
    initialState: {
        data: [],
        situation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getBestSeller.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.isLoading = null;
        },
        [getBestSeller.fulfilled]: (state, action) => {
            state.situation.isLoading = false;
            state.data = action.payload.products;
            state.situation.isLoading = null;
        },
        [getBestSeller.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.isLoading = action.error.message;
        }
    }

})

export default getSellerReducer.reducer;