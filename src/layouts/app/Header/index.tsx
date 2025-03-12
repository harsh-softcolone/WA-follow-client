import { useState } from "react";
import miniLogo from "@/assets/miniLogo.webp";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import NavItem from "./components/NavItem";

interface NavItemProps {
  label: string;
  count: number;
  isActive?: boolean;
}

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>("All");

  const navItems: NavItemProps[] = [
    { label: "All", count: 10, isActive: true },
    { label: "Unread", count: 1 },
    { label: "Open", count: 9 },
    { label: "Closed", count: 0 },
    { label: "Followup", count: 10 },
    { label: "Respond", count: 5 },
    { label: "Contacts", count: 11 },
    { label: "Unknowns", count: 0 },
    { label: "Groups", count: 5 },
    { label: "Businesses", count: 11 },
    { label: "Enterprises", count: 22 },
  ];

  return (
    <header
      id="dashboard-nav"
      className="fixed overflow-x-auto overflow-y-hidden left-0 top-0 flex h-[47px] w-[calc(100%-377px)] items-center gap-[10px] border-b-[1px] border-border border-solid bg-sidebar-top-bottom pr-[26px] py-[9px]"
    >
      <div
        className="w-[65px] h-[47px] flex justify-center items-center border-r-[2px] border-border border-solid cursor-pointer"
        onClick={() => window.location.reload()}
      >
        <img src={miniLogo} alt="miniLogo" className="w-[15px] object-cover" />
      </div>
      <div className="flex items-center">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            count={item.count}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
