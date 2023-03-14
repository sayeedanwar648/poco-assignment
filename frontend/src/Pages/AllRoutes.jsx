import { Routes, Route } from "react-router-dom"
import { Login, Signup } from "../Components/Authenticated"
import QuoteApp, { Dashboard } from "../Components/Dashboard"
import NavBar from "../Components/Navbar"
import { PrivateRoutes } from "../Components/PrivateRoutes"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar/>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<PrivateRoutes><Dashboard/></PrivateRoutes>}></Route>
        </Routes>
    )
}