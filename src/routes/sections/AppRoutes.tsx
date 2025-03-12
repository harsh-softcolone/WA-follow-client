import AppLayout from "@/layouts/app/AppLayout";
import HomePage from "@/pages/app/home";
import NotificationPage from "@/pages/app/notification";
import { Outlet } from "react-router";

export const AppRoutes = [
  {
    path: "/",
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
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
