import { createBrowserRouter } from "react-router-dom";
import About from "../Component/About";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Logout from "../Component/Logout";
import Navbar from "../Component/Navbar";
import Order from "../Component/Order";
import Main from "../Main/Main";


const SecondRouter = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: "/home",
            element: <Home></Home>
        }, {
            path: '/order',
            element: <Order></Order>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: "/signin",
            element: <Logout></Logout>
        }
    ]
}])

export default SecondRouter;