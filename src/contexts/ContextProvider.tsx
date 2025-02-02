"use client";
import React, { PropsWithChildren } from "react";
import store from "@/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
function ContextProvider({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}

export default ContextProvider;
