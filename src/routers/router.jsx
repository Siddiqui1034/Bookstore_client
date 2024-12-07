import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Shop from "../shop/Shop";
import App from "../App";
import Home from "../home/Home";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/dashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUP from "../components/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../components/Login";
const router = createBrowserRouter([
    {
      path: "/",
      element:<App />,
      children: [
        {
          path: "/",
          element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/single-book/:id",
        element: <SingleBook />,
        loader: ({params})=> fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
    },
   {
    path: "/admin/dashboard",
    element:<DashboardLayout />,
    children: [
      // Admin routes here
      {
        path: "/admin/dashboard",
        element: <PrivateRoute> <Dashboard /></PrivateRoute>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />
      },     
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />
      },     
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({params})=> fetch(`http://localhost:5000/book/update-book/${params.id}`)
      },     
     
    ]
   },
   {
    path: "sign-up",
    element: <SignUP />,
   },
   {
    path: "login",
    element: <Login />
   }

  ]);

export default router;