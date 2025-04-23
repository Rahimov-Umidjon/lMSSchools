import {data} from "react-router-dom";

export const SetUserItem = (key, data) => {
    try {
        localStorage.setItem(key, data);
    } catch (err) {
        console.log('Error saving data');
    }
}

export const GetUserItem = async (key) => {
    try {
        return localStorage.getItem(key);
    }
    catch (error) {
        console.log('Error getting data')
    }
}

export const DeleteItem = async (key) => {
    try {
        localStorage.removeItem(key);
    }catch (err) {
        console.log('Error removing data')
    }
}

export const SetItem = (key , value) => {
    return localStorage.setItem(key, value)

}

export const GetItem = (key) => {
    return  localStorage.getItem(key)
}