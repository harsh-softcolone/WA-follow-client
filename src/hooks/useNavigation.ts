import { useLocation, useNavigate } from "react-router";
import { ROUTES } from "@/config/navigation/routes";

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split("/")[1];

  return {
    routes: ROUTES,
    currentPath,
    navigate: (path: string) => navigate(`/${path}`),
    isActive: (path: string) => currentPath === path,
  };
};
