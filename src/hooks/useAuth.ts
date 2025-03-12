const useAuth = () => {
  const handleResetAuth = () => {
    localStorage.removeItem("userMobileNumber");
  };
  return {
    handleResetAuth,
  };
};

export default useAuth;
