// to create a slice -> redux;

import { createSlice } from "@reduxjs/toolkit";
const userslice = createSlice({
    name: "userslice",
    // intinal state value
    initialState: {
        user: null,
        error: false,
        loading: true,
    },
    // functions to update your state 
    reducers: {
        userLoading: (state,action) => {
            state.error = false;
            state.loading = action.payload;
        },
        userError: (state) => {
            state.error = true;
            state.loading = false
        },
        userData: (state, action) => {
            state.loading = false;
            state.error = false;
            state.user = action.payload;
        }
    }

});

export default userslice;