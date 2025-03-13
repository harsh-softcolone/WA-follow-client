import React, { useEffect, useState } from "react";
import AppLayout from "./AppLayout";
import { WhatsAppNumberVerification } from "@/components/verification/WhatsAppNumberVerification";

type Props = {
  children: React.ReactNode;
};

const isProduction = () => {
  return window.location.hostname === "web.whatsapp.com"; // Check for production environment
};

const ProtectedAppLayout = ({ children }: Props) => {
  const [isValidMobile, setIsValidMobile] = useState<boolean>(false);
  const [whatsappNumber, setWhatsappNumber] = useState<string>("");
  // Using state for storedNumber to ensure updates are reflected
  const [storedNumber, setStoredNumber] = useState<string>(
    localStorage.getItem("userMobileNumber") || ""
  );

  useEffect(() => {
    if (!isProduction()) {
      // Directly set the whatsappNumber for local development
      setWhatsappNumber("8485983972"); // Hardcoded for local development
      setIsValidMobile(storedNumber === "8485983972"); // Compare with hardcoded number
      return; // Skip WPP loading logic
    }

    const checkWhatsAppNumber = () => {
      if (window?.WPP?.isReady) {
        const currentNumber = window.WPP?.whatsapp.UserPrefs.getMe().user;
        // Remove first two digits (91) from WPP number
        const formattedWppNumber = currentNumber.slice(2);
        setWhatsappNumber(formattedWppNumber);
        setIsValidMobile(formattedWppNumber === storedNumber);
      }
    };

    checkWhatsAppNumber();
    // Add an interval to periodically check until WPP is ready
    const interval = setInterval(() => {
      if (window?.WPP?.isReady) {
        checkWhatsAppNumber();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [storedNumber]);

  // If the mobile number doesn't match, show the verification card
  if (!isValidMobile) {
    return (
      <AppLayout>
        <div className="flex items-start justify-center h-full">
          <WhatsAppNumberVerification
            storedNumber={storedNumber}
            currentNumber={whatsappNumber}
            setStoredNumber={setStoredNumber}
            setIsValidMobile={setIsValidMobile}
          />
        </div>
      </AppLayout>
    );
  }

  // If valid, render the actual content
  return <AppLayout>{children}</AppLayout>;
};

export default ProtectedAppLayout;
