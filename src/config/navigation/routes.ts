import { BiHome } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { MdOutlineContacts } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { RouteConfig } from "@/config/navigation/types";
import { HiOutlineUserAdd } from "react-icons/hi";

export const ROUTES: RouteConfig[] = [
  {
    title: "Home",
    path: "home",
    icon: BiHome,
  },
  {
    title: "Notifications",
    path: "notifications",
    icon: BiBell,
  },
  {
    title: "User Details",
    path: "user-details",
    icon: FiUser,
  },
  {
    title: "Contacts",
    path: "contacts",
    icon: MdOutlineContacts,
  },
  {
    title: "Tickets",
    path: "tickets",
    icon: HiOutlineTicket,
  },
  {
    title: "Add Lead",
    path: "add-lead",
    icon: HiOutlineUserAdd,
  },
] as const;
