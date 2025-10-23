import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import SkillDetailsPage from "../pages/SkillDetailsPage";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Profile from "../pages/Profile";
import PrivetRoute from "./PrivetRoute";

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
                loader: () => fetch("/sunflower_data.json")
            },
            {
                path: "/login",
                element: <Login />
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
    }
])