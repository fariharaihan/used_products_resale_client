import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import DashBoard from "../../pages/DashBoard/DashBoard";

import AllBikes from "../../pages/Home/BikesCategory/AllBikes";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allbikes/:id',
                element: <PrivateRoute><AllBikes></AllBikes></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allbikes/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
    },
    {
        path: '*',
        element: <div className='text-white font-semibold text-5xl'>This page is not found</div>
    }
])
export default router;