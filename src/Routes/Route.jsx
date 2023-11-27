import { createBrowserRouter } from "react-router-dom";
import MainLay from "../Layout/MainLay";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import Dashboard from "../Layout/DashBoard/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUser from "../Pages/DashBoard/AllUser/AllUSer";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import AdminRoute from "../PrivateRoute/AdminRoute";
import ManageItem from "../Pages/DashBoard/ManageItem/ManageItem";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLay></MainLay>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/menu",
            element: <Menu></Menu>,
        },
        {
            path: "/order/:category",
            element: <Order></Order>,
        },
        {
            path: "/order",
            element: <Order></Order>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <SignUp></SignUp>,
        }
      ]
    },
    {
        path:"dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'userHome',
                element:<UserHome></UserHome>
            },
            {
                path:'cart',
                element:<Cart></Cart>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:'users',
                element:<AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path:'adminHome',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path:'addItems',
                element:<AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path:'manageitems',
                element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5007/menu/${params.id}`)
              },
        ]
    }
  ]);
