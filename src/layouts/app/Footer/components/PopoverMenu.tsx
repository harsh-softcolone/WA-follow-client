import React from "react";
import { Settings } from "lucide-react";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

// Generic type for data items
export type PopoverMenuItem = {
  id: number | string;
  text: string;
  image?: string;
  icon?: LucideIcon | IconType;
  value?: string;
  title?: string;
};

export interface PopoverMenuProps<T extends PopoverMenuItem> {
  // Accept either Lucide icons or React Icons
  icon: LucideIcon | IconType;
  iconSize?: number;
  title: string;
  description: string;
  searchPlaceholder?: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  isActive?: boolean;
  setActivePopover?: (id: string | null) => void;
  id: string;
}

const PopoverMenu = <T extends PopoverMenuItem>({
  icon: Icon,
  iconSize = 20,
  title,
  description,
  searchPlaceholder = "search",
  data = [],
  renderItem,
  isActive = false,
  setActivePopover,
  id,
}: PopoverMenuProps<T>) => {
  return (
    <Popover
      onOpenChange={(open) => {
        if (setActivePopover) {
          setActivePopover(open ? id : null);
        }
      }}
    >
      <PopoverTrigger asChild>
        <button
          className={`py-[7px] px-[12px] h-full border-r-[1px] border-border cursor-pointer flex items-center justify-center transition-colors duration-200 ${
            isActive ? "bg-active-menu text-accent" : "hover:bg-tag text-icon"
          }`}
        >
          <Icon
            size={iconSize}
            className={isActive ? "text-accent" : "text-icon"}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[288px] h-[384px] overflow-y-auto p-4 bg-background shadow-md border border-border">
        <div>
          <div className="flex justify-between mb-1 items-center">
            <h3 className="text-sm text-heading font-bold">{title}</h3>
            <Link to="#" className="p-2 bg-transparentBG rounded-full">
              <Settings
                className="text-icon cursor-pointer hover:rotate-45 transition-[0.3s]"
                size={15}
              />
            </Link>
          </div>
          <p className="text-xs text-sub-heading max-w-[90%] leading-4">
            {description}
          </p>
          <Input
            placeholder={searchPlaceholder}
            className="bg-sidebar-top-bottom mt-4 rounded-md"
          />
          <div className="pt-1">{data.map((item) => renderItem(item))}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverMenu;
