import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getBestSeller = createAsyncThunk('/getBestSeller/', async (limit) => {

    const url = `https://dummyjson.com/products?limit=${limit}&skip=30&select=title,price,thumbnail,images,discountPercentage,rating,brand,category`;

    const res = await fetch(url);

    const data = await res.json();

    return data;

});

const getSellerReducer = createSlice({
    name: 'getSellerReducer',
    initialState: {
        bestSeller: [],
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
            state.bestSeller = action.payload.products;
        },
        [getBestSeller.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.isLoading = action.error.message;
        }
    }

})

export default getSellerReducer.reducer;