import DashBoardLayout from "../../Layout/DashBoardLayout";
import AddCar from "../../Pages/DashBoard/AddCar/AddCar";
import AllBookings from "../../Pages/DashBoard/AllBookings/AllBookings";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyBooking from "../../Pages/DashBoard/MyBooking/MyBooking";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import Users from "../../Pages/DashBoard/Users/Users";
import Blogs from "../../Pages/General/Blogs/Blogs";
import Cars from "../../Pages/General/Cars/Cars";
import CategorywiseItems from "../../Pages/General/CategorywiseItems/CategorywiseItems";
import ErrorPage from "../../Pages/General/ErroPage/ErrorPage";
import Home from "../../Pages/General/Home/Home";
import SingleCar from "../../Pages/General/SingleCar/SingleCar";
import Login from "../../Pages/Login/Login/Login";
import Registration from "../../Pages/Login/Registration/Registration";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cars',
                element: <Cars></Cars>
            },
            {
                path: '/car/:id',
                element: <SingleCar></SingleCar>,
                loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <CategorywiseItems></CategorywiseItems>,
                loader: async ({ params }) => {
                    // console.log(params.id)
                    return fetch(`http://localhost:5000/category/${params.id}`)
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('http://localhost:5000/blogs')
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/my-booking',
                element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/add-car',
                element: <AddCar></AddCar>
            },
            {
                path: '/dashboard/bookings',
                element: <AllBookings></AllBookings>
            },
            {
                path: '/dashboard/myCars',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/users',
                element: <Users></Users>
            },
            {
                path: 'dashboard/users/:role',
                element: <AllBuyers></AllBuyers>,
                loader: async ({ params }) => {
                    // console.log(params.role)
                    return fetch(`http://localhost:5000/user/${params.role}`)
                },
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])