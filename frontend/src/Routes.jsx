import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import { Home, Login, Signup, VendorDashboard } from "./pages"
import UserDashboard from "./pages/UserDashboard"


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
         <Route path="/" element={<Home/>}/>
         <Route path = "/Signup" element={<Signup/>}/>
         <Route path = "/Login" element = {<Login/>}/>
         <Route path = "/Dashboard/vendor" element = {<VendorDashboard/>}/>
         <Route path = "/Dashboard/user" element = {<UserDashboard/>}/>
        </>
    )
) 

const Router = ()=>{
    return(
        <>
            <RouterProvider router={router}/>
            <ToastContainer/>
        </>
    )
}

export default Router