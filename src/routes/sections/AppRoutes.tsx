import ProtectedAppLayout from "@/layouts/app/ProtectedAppLayout";
import HomePage from "@/pages/app/home";
import NotificationPage from "@/pages/app/notification";
import { Outlet } from "react-router";

export const AppRoutes = [
  {
    path: "/",
    element: (
      <ProtectedAppLayout>
        <Outlet />
      </ProtectedAppLayout>
    ),
    children: [
      { index: true, path: "home", element: <HomePage /> },
      {
        path: "notifications",
        element: <NotificationPage />,
      },
      //   {
      //     path: "user-details",
      //     element: <UserPage />,
      //   },
      //   {
      //     path: "notifications",
      //     element: <div className="h-screen w-full bg-red-400"></div>,
      //   },
    ],
  },
];
