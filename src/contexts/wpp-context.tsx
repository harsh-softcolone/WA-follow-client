import { createContext } from "react";

interface WPPContextType {
  isLoading: boolean;
  whatsappNumber: string | null;
  isInitialized: boolean;
}

export const WPPContext = createContext<WPPContextType | undefined>(undefined);
