import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../types/Authenticated.types"

const token = localStorage.getItem('token')

const initState = {
    token: token,
    isAuth: !!token,
    loading: false,
    error: false,
}

export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {

        case SIGNUP_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case SIGNUP_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case SIGNUP_SUCCESS: {
            alert("User Account Create Successfully")
            window.location.href = '/login'
            return {
                ...state,
                loading: false,
                error: false
            }
        }

        case LOGIN_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case LOGIN_ERROR: {
            alert('Invalid Credentials')
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        case LOGIN_SUCCESS: {
            alert('Login Successful')
            localStorage.setItem('token' , payload)
            return {
                ...state,
                token : payload,
                isAuth : true,
                loading: false,
                error: false
            }
        }

        default: {
            return state
        }
    }
}