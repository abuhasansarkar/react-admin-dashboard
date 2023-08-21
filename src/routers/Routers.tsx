import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Profile from "../pages/profile/Profile";
import Users from "../pages/users/Users";
import Products from "../pages/products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
