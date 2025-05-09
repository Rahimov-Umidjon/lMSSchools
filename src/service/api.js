import axios from "axios";
import {authSlice} from "../slice/auth";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    const authorization = token ? `Token ${token}` : ' ';
    config.headers.Authorization = authorization;
    return config;
})

export default axios