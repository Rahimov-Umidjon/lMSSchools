import {createSlice} from "@reduxjs/toolkit";
import {SetItem, SetUserItem} from "../helpers/persistance-storage";


const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
    error: null,
}


export  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUserStart: (state) => {
            state.isLoading = true;
        },
        signUserSuccess: (state, action) => {
            state.isLoading = false;
            state.loggedIn = true;
            state.user = action.payload;

            SetUserItem("token", action.payload.token);
            SetItem("navbarIndex", 0);
        },
        signUserFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logoutUser: (state) => {
            state.loggedIn = false;
            state.user = null;
        },
        getUserToken: (state, action) => {
            state.isLoading = false;
            state.loggedIn = true;
            state.user = action.payload;
            // console.log(action.payload);
            // SetItem("token", action.payload.data.token);
        }
    }
})



export const {signUserStart, signUserSuccess, signUserFail , getUserToken , logoutUser} = authSlice.actions;
export default authSlice.reducer;