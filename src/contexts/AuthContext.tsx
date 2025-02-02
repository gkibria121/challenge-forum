"use client";
import { useSession } from "next-auth/react";
import React, { PropsWithChildren, useContext } from "react";
import { createContext } from "react";

type AuthoContextValueType = Record<string, any>;
const authContextValue: AuthoContextValueType = {};

const AuthContext = createContext<AuthoContextValueType>(authContextValue);

function AuthContextProvider({ children }: PropsWithChildren) {
  const session = useSession();

  const isAuthenticated = session.status === "authenticated";
  const isAdmin = session.data?.user.role === "admin";

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
