import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../layout/DashBoardLayout";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import DashBoard from "../../pages/DashBoard/DashBoard/DashBoard";
import MyOrder from "../../pages/DashBoard/MyOrder/MyOrder";


import AllBikes from "../../pages/Home/BikesCategory/AllBikes";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
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
                path: '/blog',
                element: <Blog></Blog>
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
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])
export default router;