import AuthLayout from "@/layouts/auth/AuthLayout";
import LoginPage from "@/pages/auth/login";
import { Outlet } from "react-router";

export const authRoutes = [
  {
    path: "/",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];
