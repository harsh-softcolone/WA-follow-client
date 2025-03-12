import { Navigate, useRoutes } from "react-router";
import { authRoutes } from "@/routes/sections/authRoutes";
import { AppRoutes } from "@/routes/sections/AppRoutes";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    ...authRoutes,
    ...AppRoutes,
  ]);
};
export default Router;
