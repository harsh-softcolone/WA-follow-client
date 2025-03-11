import { Navigate, useRoutes } from "react-router";
import { authRoutes } from "@/routes/sections/authRoutes";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    ...authRoutes,
    // ...sidebarRoutes,
  ]);
};
export default Router;
