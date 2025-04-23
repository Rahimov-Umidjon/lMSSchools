import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    loggedIn: false,
    teachers : [],
    leaderships: [],
    error : null
}

export const  TeachersSlice = createSlice({
    name: "teachers",
    initialState,
    reducers: {
        getTeachersStart: (state) => {
            state.isLoading = true;
        } ,
        getTeachersSuccess: (state, action) => {
            state.isLoading = false;
            state.teachers = action.payload;
            state.leaderships = action.payload;
            console.log(state.teachers);
            state.loggedIn = true;
        },
        getLeadershipSuccess: (state, action) => {
            state.isLoading = false;
            state.leaderships = action.payload;
            console.log(state.leaderships);
            state.loggedIn = true;
        },
        getTeachersFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.loggedIn = false;
        }

    }
})



export const {getTeachersFailure , getTeachersSuccess ,getTeachersStart ,getLeadershipSuccess} = TeachersSlice.actions;
export default TeachersSlice.reducer;