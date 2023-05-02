import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blogs from "../Links/Blogs";
import AboutUs from "../Links/AboutUs";
import Contact from "../Links/Contact";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/Login&Register/Login/Login";
import Register from "../Layouts/Login&Register/Register/Register";
import ChefRecipe from "../Layouts/Chef/ChefRecipe";
import PrivetaRoute from "./PrivetaRoute";
import ErrorElement from "../ErrorElement/ErrorElement";
import Error from "../ErrorElement/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element:  <PrivetaRoute><Blogs></Blogs></PrivetaRoute>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/recipe/:id',
        element: <PrivetaRoute><ChefRecipe></ChefRecipe></PrivetaRoute>,
        loader:({params})=>fetch(`http://localhost:5496/chef/${params.id}`)
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ],
  },
]);
export default router;
