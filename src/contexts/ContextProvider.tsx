"use client";
import React, { PropsWithChildren } from "react";
import store from "@/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import AuthContextProvider from "./AuthContext";
function ContextProvider({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </Provider>
    </SessionProvider>
  );
}

export default ContextProvider;
