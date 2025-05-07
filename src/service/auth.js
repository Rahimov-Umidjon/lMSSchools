import axios from "./api"


const AuthService = {
    async userLogin(user) {
        const data = await axios.post("users/login", user);
        console.log(data);
        return data;
    },

    async userRegister(user) {
        const data = await axios.post("users/register", user);
        return data;
    },
    async getUser() {
        const data= await axios.get("users/me");
        return data;
    }
    ,
    async getAllUsers() {
        const response = await axios.get("users");
        return response;
    },
    async getAllTeachers() {
        const response = await axios.get("users/teachers");
        return response;
    },
    async getAllLeadership() {
        const response = await axios.get("users/leadership");
        return response;
    },
    async getSchoolGallery(){
        const response = await axios.get("/school_gallery");
        return response;
    },
    async getAllStudents(){
        const response = await axios.get("/users/students");
        return response;
    }
}


export default AuthService;