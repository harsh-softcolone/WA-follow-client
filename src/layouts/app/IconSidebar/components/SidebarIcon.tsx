import { cn } from "@/lib/utils";
import type { RouteConfig } from "@/config/navigation/types";

interface SidebarIconProps extends RouteConfig {
  isActive: boolean;
  onClick: () => void;
}

const SidebarIcon = ({
  icon: Icon,
  title,
  isActive,
  onClick,
}: SidebarIconProps) => {
  return (
    <button onClick={onClick} className="group relative" title={title}>
      <div className="relative">
        <Icon
          size={20}
          className={cn(
            "transition-colors duration-200",
            isActive
              ? "text-active-color"
              : "text-icon hover:text-active-color/70"
          )}
        />
      </div>

      {/* Tooltip */}
      <span className="absolute left-12 top-1/2 -translate-y-1/2 rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
        {title}
      </span>
    </button>
  );
};

export default SidebarIcon;
