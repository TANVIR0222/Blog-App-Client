import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import SingIn from "../Pages/SingIn";
import SingUp from "../Pages/SingUp";
import Dashboard from "../Pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "",
        element:<Home></Home>
      },
      {
        path: "about",
        element:<About></About>
      },
      {
        path: "singin",
        element:<SingIn></SingIn>
      },
      {
        path: "singup",
        element:<SingUp></SingUp>
      },
      {
        path: "dashboard",
        element:<Dashboard></Dashboard>
      },
    ],
  },
]);
