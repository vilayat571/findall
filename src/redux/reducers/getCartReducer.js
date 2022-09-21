import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUsercart = createAsyncThunk('/fetchUsercart/', async () => {


    const data = localStorage.getItem('userDetails');

    const userDetails = JSON.parse(data);

    const id = userDetails !== null && userDetails !== undefined && userDetails.id;
    if (id) {

      const url='https://dummyjson.com/carts/1';

      const res=await fetch(url);

      const data=await res.json();

      return data;


    }

    return { message: "user was not sign in" }

});

export const getCartReducer = createSlice({
    name: "getCartReducer",
    initialState: {
        userCarts: [],
        situation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [fetchUsercart.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [fetchUsercart.fulfilled]: (state, action) => {
            state.situation.isLoading = false;
            state.userCarts = action.payload;
        },
        [fetchUsercart.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});

export default getCartReducer.reducer;