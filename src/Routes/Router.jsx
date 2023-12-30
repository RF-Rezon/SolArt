import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../BasicLayout";
import Home from "../Components/Home/Home";
import ErrorPage from "../Utils/Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <Home /> 
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);
