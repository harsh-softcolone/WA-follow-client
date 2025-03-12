import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import * as WPP from "@wppconnect/wa-js";

interface WPPContextType {
  isLoading: boolean;
  whatsappNumber: string | null;
  isInitialized: boolean;
}

const WPPContext = createContext<WPPContextType | undefined>(undefined);

export function WPPProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [whatsappNumber, setWhatsappNumber] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeWPP = useCallback(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      if (typeof WPP?.init !== "undefined") {
        await WPP.init();
        const number = WPP?.whatsapp.UserPrefs.getMe().user;
        setWhatsappNumber(number);
        setIsInitialized(true);
        console.log("WPP initialized successfully");
      }
    } catch (error) {
      console.error("Error initializing WPP:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    initializeWPP();
  }, [initializeWPP]);

  return (
    <WPPContext.Provider value={{ isLoading, whatsappNumber, isInitialized }}>
      {children}
    </WPPContext.Provider>
  );
}

export const useWPP = () => {
  const context = useContext(WPPContext);
  if (context === undefined) {
    throw new Error("useWPP must be used within a WPPProvider");
  }
  return context;
};
