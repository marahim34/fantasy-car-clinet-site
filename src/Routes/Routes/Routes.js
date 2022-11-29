import DashBoardLayout from "../../Layout/DashBoardLayout";
import AddCar from "../../Pages/DashBoard/AddCar/AddCar";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import Cars from "../../Pages/General/Cars/Cars";
import CategorywiseItems from "../../Pages/General/CategorywiseItems/CategorywiseItems";
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
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/add-car',
                element: <AddCar></AddCar>
            }
        ]
    }
])