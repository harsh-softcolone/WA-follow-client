import CallStatusCard from "@/components/cards/CallStatusCard";
import { MetricCards } from "@/components/cards/MetricCard";
import { callStatusArray, homeCards } from "@/utils/staticData";
import { ProfileHeader } from "@/pages/app/home/components/ProfileHeader";
import { WhatsAppNumberVerification } from "@/components/verification/WhatsAppNumberVerification";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";

const HomePage = () => {
  const [isValidMobile, setIsValidMobile] = useState<boolean>(false);
  const [whatsappNumber, setWhatsappNumber] = useState<string>("");
  const storedNumber = localStorage.getItem("userMobileNumber") || "";
  const { handleResetAuth } = useAuth();

  useEffect(() => {
    const checkWhatsAppNumber = () => {
      if (window?.WPP?.isReady) {
        const currentNumber = window.WPP?.whatsapp.UserPrefs.getMe().user;
        // Remove first two digits (91) from WPP number
        const formattedWppNumber = currentNumber.slice(2);
        setWhatsappNumber(formattedWppNumber);
        console.log(formattedWppNumber, storedNumber);
        setIsValidMobile(formattedWppNumber === storedNumber);
      }
    };

    checkWhatsAppNumber();
    // Add an interval to periodically check (optional)
    const interval = setInterval(checkWhatsAppNumber, 5000);

    return () => clearInterval(interval);
  }, [storedNumber]);

  const handleSwitchNumber = () => {
    // Store the formatted number (without country code)
    handleResetAuth();
    setIsValidMobile(true);
  };

  return (
    <>
      {!isValidMobile ? (
        <WhatsAppNumberVerification
          storedNumber={storedNumber}
          currentNumber={whatsappNumber}
          onSwitchNumber={handleSwitchNumber}
        />
      ) : (
        <div className="w-full h-full border-l-[1px] border-border overflow-y-auto p-[18px]">
          <div className="mb-[20px]">
            <ProfileHeader
              name="Sohit SoftColon"
              phone="91869081904"
              gender="Man"
              location="Ahmedabad"
              email="sohit.softcolon@gmail.com"
              plan="Test pro"
            />
          </div>
          <div className="border-y-[1px] border-solid border-border py-[12px]">
            <h1 className="font-inter text-sm font-bold text-heading">
              Dashboard
            </h1>
          </div>
          <div className="mt-[16px] grid grid-cols-2 gap-[20px]">
            {homeCards.map((metric, index) => (
              <MetricCards
                key={index}
                svgName={metric.icon}
                title={metric.title}
                value={metric.value}
              />
            ))}
          </div>
          <div className="mt-[21px] flex flex-col items-start gap-[21px]">
            {callStatusArray.map((metric, index) => (
              <CallStatusCard
                key={index}
                svgName={metric.icon}
                title={metric.title}
                value={metric.value}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
