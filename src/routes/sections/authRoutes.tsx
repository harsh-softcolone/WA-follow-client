import AuthLayout from "@/layouts/auth/AuthLayout";
import { Outlet } from "react-router";
import LoginPage from "@/pages/auth/login";

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
        index: true,
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];
