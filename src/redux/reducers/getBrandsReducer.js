import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBrands = createAsyncThunk('/fetchBrands/', async (limit) => {
const url=
`https://dummyjson.com/products?limit=${limit}&skip=60&select=title,price,thumbnail,images,discountPercentage,rating,brand,category`;
    const res = await fetch(url);

    const data = await res.json();

    return data;

});

const getBrandsReducer = createSlice({
    name: "getBrandsReducer",
    initialState: {
        brands: [],
        data:[],
        situation: {
            isLoading: false,
            error: null
        }
    },
extraReducers:{
    [fetchBrands.pending]: (state, action) => {
        state.situation.isLoading = true;
        state.situation.error = null;
    },
    [fetchBrands.fulfilled]: (state, action) => {
        state.situation.isLoading = false;
        state.brands = action.payload.products;
        state.data=action.payload.products;
        console.log(action.payload)
    },
    [fetchBrands.rejected]: (state, action) => {
        state.situation.isLoading = false;
        state.situation.error = action.error.message;
    }
}
});
export default getBrandsReducer.reducer;