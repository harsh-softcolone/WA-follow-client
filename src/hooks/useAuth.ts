import { useAuthContext } from "./AuthContext";

const useAuth = () => {
  const {
    handleSetUser,
    user: UserDetails,
    setUser: SetUserDetails,
  } = useAuthContext();

  const handleResetAuth = () => {
    localStorage.removeItem("userMobileNumber");
    localStorage.removeItem("accessToken");
  };

  return {
    UserDetails,
    SetUserDetails,
    handleResetAuth,
    handleSetUser,
  };
};

export default useAuth;
