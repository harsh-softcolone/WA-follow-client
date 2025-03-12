import { useNavigation } from "@/hooks/useNavigation";
import SidebarIcon from "./components/SidebarIcon";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router";

const IconSidebar = () => {
  const { routes, navigate, isActive } = useNavigation();
  const navigateRouter = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userMobileNumber");
    navigateRouter("/login");
  };

  return (
    <nav className="fixed right-0 top-0 flex h-screen w-[47px] max-w-[47px] flex-col items-center justify-between bg-sidebar-top-bottom pt-[12px]">
      <div className="flex flex-col items-center gap-[30px]">
        {routes.map((route) => (
          <SidebarIcon
            key={route.path}
            {...route}
            isActive={isActive(route.path)}
            onClick={() => navigate(route.path)}
          />
        ))}
      </div>
      <div
        className="mb-4 cursor-pointer text-icon hover:text-accent"
        onClick={handleLogout}
      >
        <LogOut size={20} />
      </div>
    </nav>
  );
};

export default IconSidebar;
