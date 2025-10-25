import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import SkillDetailsPage from "../pages/SkillDetailsPage";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Profile from "../pages/Profile";
import PrivetRoute from "./PrivetRoute";
import ForgetPassword from "../components/ForgetPassword";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../pages/Loading";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/skill_details/:id",
                element: <PrivetRoute>
                    <SkillDetailsPage />
                </PrivetRoute>,
                loader: () => fetch("/sunflower_data.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: '/forget_password',
                element: <ForgetPassword />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/profile",
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            }
        ]
    },
    {
        path: "/*",
        element: <ErrorPage />
    }
])