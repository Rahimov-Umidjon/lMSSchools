import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import {
    Dashboard,
    Home,
    Login,
    Register,
    NavbarX,
    MyCourses,
    MyClass,
    Daily,
    HomeWork,
    Chats,
    AboutUser, SchoolGallery, LessonPlan
} from "./Components";
import {useDispatch, useSelector} from "react-redux";
import AuthService from "./service/auth";
import {getUserToken, signUserStart, signUserSuccess} from "./slice/auth";
import {SetItem, GetUserItem} from "./helpers/persistance-storage";

function App(props) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const token = GetUserItem('token')

    const GetUser = async () => {
        try {
            const response = await AuthService.getUser();
            dispatch(getUserToken(response.data));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        token.then(data => {
            if (data) {
                GetUser()
            }
        })
        // SetItem('navbarIndex' , 0)
    }, []);

    return (
        <div className="d-flex">

            {
                user ? <NavbarX/> : null
            }

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/my-courses" element={<MyCourses/>}/>
                <Route path="/school-gallery" element={<SchoolGallery/>}/>
                <Route path="/my-teacher/:id" element={<AboutUser/>}/>
                <Route path="/my-class" element={<MyClass/>}/>
                <Route path="/my-daily" element={<Daily/>}/>
                <Route path="/my-home-work" element={<HomeWork/>}/>
                <Route path="/my-chat" element={<Chats/>}/>
                <Route path="/lesson-plan" element={<LessonPlan/>}/>
            </Routes>
        </div>
    );
}

export default App;