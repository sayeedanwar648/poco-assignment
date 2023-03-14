import {legacy_createStore , combineReducers , compose , applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./reducer/authenticated.reducer"


const RootReducer = combineReducers({
    authReducer : authReducer
})

const composeReducer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(RootReducer , composeReducer(applyMiddleware(thunk)))