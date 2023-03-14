import axios from "axios";
import {LOGIN_ERROR , LOGIN_LOADING, LOGIN_SUCCESS , SIGNUP_ERROR , SIGNUP_LOADING , SIGNUP_SUCCESS} from "../types/Authenticated.types"

export const signup = (creds) => async (dispatch) => {
    dispatch({ type: SIGNUP_LOADING })
    try {
        const {data} = await axios.post("http://localhost:8080/signup", creds)
        dispatch({ type: SIGNUP_SUCCESS})
    } catch (error) {
        console.log(error)
        dispatch({ type: SIGNUP_ERROR })
    }
}

export const login = (creds) => async (dispatch) => {
    dispatch({ type: LOGIN_LOADING })
    try {
        const {data : {token}} = await axios.post("http://localhost:8080/login", creds)
        if(token) {
            dispatch({ type: LOGIN_SUCCESS, payload: token })

        }

    } catch (error) {
        dispatch({ type: LOGIN_ERROR })
    }
}