import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  // Apply custom styles to adjust WhatsApp's layout dimensions
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.id = "whatsapp-override-styles";
    styleElement.textContent = `
                .app-wrapper-web ._aigs:not(._as6h) {
                  top: 0px;
                  width: calc(100% - 377px) !important;
                  max-width: 100% !important;
                  height: 100% !important;
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
      {/* <Header /> */}
      <div className="w-[330px] max-w-[330px] h-full bg-background">
        {children}
      </div>
      <div className="flex h-full w-[47px] max-w-[47px] flex-col items-center justify-between bg-sidebar-top-bottom py-[12px]"></div>
    </div>
  );
};

export default AuthLayout;
