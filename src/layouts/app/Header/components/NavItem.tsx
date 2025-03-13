import { cn } from "@/lib/utils";

export interface NavItemProps {
  label: string;
  count: number;
  isActive?: boolean;
  onClick: () => void;
}

const NavItem = ({ label, count, isActive = false, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-2 flex items-center rounded-[3px] text-[14px] gap-1.5 border-r border-border border-solid",
        isActive ? "bg-[#b5d3373d]" : "hover:bg-tag"
      )}
    >
      <NavLabel>{label}</NavLabel>
      <NavCount>{count}</NavCount>
    </button>
  );
};

const NavLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-heading">{children}</span>
);

const NavCount = ({ children }: { children: React.ReactNode }) => (
  <span className={cn("text-xs px-1.5 rounded-sm text-active-color")}>
    {children}
  </span>
);

export default NavItem;
