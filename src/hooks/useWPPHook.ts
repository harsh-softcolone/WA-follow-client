import { WPPContext } from "@/contexts/wpp-context";
import { useContext } from "react";

const useWPPHook = () => {
  const context = useContext(WPPContext);
  if (!context) throw new Error("useWPP must be used within a WPPProvider");
  return context;
};

export default useWPPHook;
