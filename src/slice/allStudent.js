import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    isLoading: false,
    isLoggedIn: false,
    user: null,
    error: null,

}


export const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        getStudentsStart: (state, action) => {
            state.isLoading = true;
        },
        getStudentsSuccess: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;

        },
        getStudentsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isLoggedIn = false;
        }
    }
})



export const {getStudents, getStudentsSuccess, getStudentsFailure} = studentSlice.actions;

export default studentSlice.reducer;