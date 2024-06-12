"use client";

import { me } from "@/actions/auth/me";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginContext = (user) => {
    setUser(user);
  };

  const logOutContext = () => {
    setUser(null);
  };
  useEffect(() => {
    async function checkUserLoggedIn() {
      const data = await me();
      if (data?.user) {
        setUser(data?.user);
      } else if (data?.error) {
        console.log(error);
        setUser(null);
      }
    }
    checkUserLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ user, loginContext, logOutContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
