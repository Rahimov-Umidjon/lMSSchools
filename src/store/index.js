import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "../slice/auth";
import TeachersSlice from "../slice/allTeachers";

export default configureStore({
    reducer: {
        auth: AuthReducer,
        teachers : TeachersSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})