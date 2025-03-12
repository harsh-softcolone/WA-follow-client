import React, { useState } from "react";
import { MdOutlineQuickreply } from "react-icons/md";
import { PackageSearch } from "lucide-react";
import { BiBarChartAlt2 } from "react-icons/bi";
import PopoverMenu, { PopoverMenuItem } from "./components/PopoverMenu";
import QuickActionsBar from "./components/QuickActionsBar";

// Define specific types for each data category
interface MessageItem extends PopoverMenuItem {
  image: string;
}

interface PackageItem extends PopoverMenuItem {
  image: string;
}

const Footer = () => {
  // State to track which popover is currently active
  const [activePopover, setActivePopover] = useState<string | null>(null);

  // Define popover IDs for better readability
  const POPOVER_IDS = {
    QUICK_REPLIES: "quick-replies",
    PRODUCTS: "products",
    POLLS: "polls",
  };

  // Sample data for quick replies
  const messagesData: MessageItem[] = [
    {
      id: 1,
      text: "Hello! How can I help you today?",
      image: "/images/reply1.jpg",
    },
    {
      id: 2,
      text: "Thank you for your message. I'll get back to you shortly.",
      image: "/images/reply2.jpg",
    },
    {
      id: 3,
      text: "We appreciate your business!",
      image: "/images/reply3.jpg",
    },
  ];

  // Sample data for packages
  const packagesData: PackageItem[] = [
    {
      id: 1,
      text: "Basic Package - $29 (10 messages)",
      image: "/images/package1.jpg",
    },
    {
      id: 2,
      text: "Standard Package - $49 (50 messages)",
      image: "/images/package2.jpg",
    },
    {
      id: 3,
      text: "Premium Package - $99 (Unlimited messages)",
      image: "/images/package3.jpg",
    },
  ];

  // Sample data for polls/analytics
  const pollsData: PopoverMenuItem[] = [
    { id: 1, text: "Customer Satisfaction Survey" },
    { id: 2, text: "Product Feedback Poll" },
    { id: 3, text: "Service Quality Rating" },
  ];

  const commonDescription =
    'Select contact from WhatsApp & click on a message to send. To edit the message before sending, hold "Shift" & click.';

  // Render functions for different item types
  const renderMessageItem = (message: MessageItem) => (
    <div
      key={message.id}
      className="p-2 hover:bg-sidebar-top-bottom border-b-[1px] border-border border-solid cursor-pointer flex justify-between items-center"
    >
      <p className="text-sm truncate max-w-[180px]">{message.text}</p>
      <img
        src={message.image}
        alt={String(message.id)}
        className="w-[25px] h-[25px] object-cover rounded-[3px]"
      />
    </div>
  );

  const renderPackageItem = (product: PackageItem) => (
    <div
      key={product.id}
      className="p-2 hover:bg-sidebar-top-bottom border-b-[1px] border-border border-solid cursor-pointer flex justify-between items-center"
    >
      <p className="text-sm truncate max-w-[180px]">{product.text}</p>
      <img
        src={product.image}
        alt={String(product.id)}
        className="w-[25px] h-[25px] object-cover rounded-[3px]"
      />
    </div>
  );

  const renderPollItem = (poll: PopoverMenuItem) => (
    <div
      key={poll.id}
      className="p-2 hover:bg-sidebar-top-bottom border-b-[1px] border-border cursor-pointer flex justify-between items-center"
    >
      <p className="text-sm truncate max-w-[250px]">{poll.text}</p>
    </div>
  );

  return (
    <>
      <div className="whatsapp-footer flex items-center justify-start gap-[12px] fixed bottom-0 overflow-x-auto overflow-y-hidden left-0 h-[47px] w-[calc(100%-377px)] border-t-[1px] border-solid border-border bg-sidebar-top-bottom pr-[28px] text-foreground">
        <div className="flex items-center justify-center h-full">
          {/* Quick Replies Popover */}
          <PopoverMenu<MessageItem>
            id={POPOVER_IDS.QUICK_REPLIES}
            icon={MdOutlineQuickreply}
            title="Quick Replies"
            description={commonDescription}
            searchPlaceholder="search"
            data={messagesData}
            renderItem={renderMessageItem}
            isActive={activePopover === POPOVER_IDS.QUICK_REPLIES}
            setActivePopover={setActivePopover}
          />

          {/* Products Popover */}
          <PopoverMenu<PackageItem>
            id={POPOVER_IDS.PRODUCTS}
            icon={PackageSearch}
            title="Products"
            description={commonDescription}
            searchPlaceholder="search packages"
            data={packagesData}
            renderItem={renderPackageItem}
            isActive={activePopover === POPOVER_IDS.PRODUCTS}
            setActivePopover={setActivePopover}
          />

          {/* Polls Popover */}
          <PopoverMenu<PopoverMenuItem>
            id={POPOVER_IDS.POLLS}
            icon={BiBarChartAlt2}
            title="Polls"
            description={commonDescription}
            searchPlaceholder="search packages"
            data={pollsData}
            renderItem={renderPollItem}
            isActive={activePopover === POPOVER_IDS.POLLS}
            setActivePopover={setActivePopover}
          />
        </div>
        <div className="py-[7px]">
          <QuickActionsBar />
        </div>
      </div>
    </>
  );
};

export default Footer;
