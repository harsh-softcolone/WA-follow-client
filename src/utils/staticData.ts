import {
  BellRing,
  CalendarDays,
  PhoneIncoming,
  PhoneMissed,
  ShoppingCart,
  Ticket,
} from "lucide-react";

export const homeCards = [
  {
    title: "Event",
    value: "200",
    icon: CalendarDays,
  },
  {
    title: "Reminder",
    value: "10",
    icon: BellRing,
  },
  {
    title: "Tickets",
    value: "20",
    icon: Ticket,
  },
  {
    title: "Order",
    value: "1500",
    icon: ShoppingCart,
  },
];

export const callStatusArray = [
  {
    title: "Incoming Calls",
    value: "150",
    icon: PhoneIncoming,
  },
  {
    title: "Missed Calls",
    value: "50",
    icon: PhoneMissed,
  },
];
