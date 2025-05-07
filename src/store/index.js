import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "../slice/auth";
import TeachersSlice from "../slice/allTeachers";
import StudentSlice from "../slice/allStudent"

export default configureStore({
    reducer: {
        auth: AuthReducer,
        teachers : TeachersSlice,
        student : StudentSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
})