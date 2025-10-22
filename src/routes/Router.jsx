import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import SkillDetailsPage from "../pages/SkillDetailsPage";

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
                element: <SkillDetailsPage />,
                loader: () => fetch("/sunflower_data.json")
            }
        ]
    }
])