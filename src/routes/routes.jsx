import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import LoadingSpinner from "../components/LoadingSpinner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loadingElement: <LoadingSpinner/>
    ,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/register", element: <Registration /> },
    ],
  },
]);
