import React, { useEffect } from "react";
import Header from "./Header";
import IconSidebar from "./IconSidebar";
import Footer from "./Footer";
import ChatSaveStatus from "@/layouts/app/Footer/components/ChatSavedStatus";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  // Apply custom styles to adjust WhatsApp's layout dimensions
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.id = "whatsapp-override-styles";
    styleElement.textContent = `
                .app-wrapper-web ._aigs:not(._as6h) {
                  top: 47px;
                  width: calc(100% - 377px) !important;
                  max-width: 100% !important;
                  height: calc(100% - 94px) !important;
                  margin: 0 !important;
                }
                #app {
                  margin-top: 0px !important;
                }
              `;
    document.head.appendChild(styleElement);

    // Clean up custom styles when the component is unmounted
    return () => {
      const existingStyle = document.getElementById("whatsapp-override-styles");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <div className="fixed flex right-[0] top-0 h-screen w-[377px] max-w-[377px] border-l border-border">
      <Header />
      <div className="w-[330px] max-w-[330px] h-[calc(100vh-47px)] bg-background border-l border-border border-solid">
        {children}
      </div>
      <IconSidebar />
      <Footer />
      <ChatSaveStatus />
    </div>
  );
};

export default AppLayout;
