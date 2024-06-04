import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import LoadingSpinner from "../components/LoadingSpinner";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import PrivateRoute from "./private/PrivateRoute";
import AddProduct from "../pages/AddProduct/AddProduct";
import AllProduct from "../pages/AllProduct/AllProduct";
import Orders from "../pages/Orders/Orders";
import Customers from "../pages/Customers/Customers";
import EditProduct from "../pages/EditProduct/EditProduct";
import UserProfile from "../pages/UserProfile/UserProfile";
import FlashSalePage from "../pages/FlashSalePage/FlashSalePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loadingElement: <LoadingSpinner />,
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
      {path: "/flash-sale", element: <FlashSalePage />},
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    loadingElement: <LoadingSpinner />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <DashboardHome />,
          </PrivateRoute>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            <AddProduct />,
          </PrivateRoute>
        ),
      },
      {
        path: "products",
        element: (
          <PrivateRoute>
            <AllProduct />,
          </PrivateRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <Orders />,
          </PrivateRoute>
        ),
      },
      {
        path: "customers",
        element: (
          <PrivateRoute>
            <Customers />,
          </PrivateRoute>
        ),
      },
      {path: "profile", element: <PrivateRoute><UserProfile /></PrivateRoute>

      },

      {
        path: "edit-products/:id",
        element: (
          <PrivateRoute>
            <EditProduct />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);
