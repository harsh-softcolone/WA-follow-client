import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  userId: string;
  accessToken: string;
  phoneNumber: string;
  refreshToken: string;
  organizationId: string;
  organizationName: string;
  organizationSubdomain: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  handleSetUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  //   useEffect(() => {
  //     const storedUser = localStorage.getItem("user");
  //     if (storedUser) {
  //       setUser(JSON.parse(storedUser));
  //     }
  //   }, []);

  const handleSetUser = (user: User) => {
    console.log(user);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken"); // Only remove the accessToken
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
