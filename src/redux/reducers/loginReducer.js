import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLogin = createAsyncThunk('/getLogin/', async ({ username, password }) => {

    const data = fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(res => res.json())
        .then(result => {
            return result
        });

    return data;

});

const loginReducer = createSlice({
    name: "loginReducer",
    initialState: {
        userDetails: [],
        situation: {
            isLoading: false,
            error: null
        },
    },
    extraReducers: {
        [getLogin.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getLogin.fulfilled]: (state, action) => {
            state.situation.isLoading = false;

            localStorage.setItem('userDetails', JSON.stringify(action.payload));

            
            state.userDetails=action.payload;
            
        },
        [getLogin.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});

export default loginReducer.reducer;