import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blogs from "../Links/Blogs";
import AboutUs from "../Links/AboutUs";
import Contact from "../Links/Contact";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/Login&Register/Login/Login";
import Register from "../Layouts/Login&Register/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path : '/blogs',
            element : <Blogs></Blogs> 
        },
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
    ]
  },
]);
export default router