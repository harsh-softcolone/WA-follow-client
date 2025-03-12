import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface RouteConfig {
  title: string;
  path: string;
  icon: IconType | LucideIcon;
}
