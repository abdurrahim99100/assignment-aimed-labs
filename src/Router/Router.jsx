import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
]);