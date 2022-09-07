import { createSlice } from "@reduxjs/toolkit";

const changeReducer = createSlice({
    name: 'changeReducer',
    initialState: {
        open: false
    },
    reducers: {
        changeOpen: (state, action) => {
            state.open = action.payload;
        }
    }
});
export const { changeOpen } = changeReducer.actions;
export default changeReducer.reducer;