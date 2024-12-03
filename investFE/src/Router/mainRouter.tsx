import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import LandingScreen from "../Pages/Screen/LandingScreen";
import HomeScreen from "../Pages/Screen/HomeScreen";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import Invest from "../Pages/Auth/invest";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "invest",
        element: <Invest />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
