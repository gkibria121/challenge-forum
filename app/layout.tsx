"use client";
import React from "react";
import "/src/sass/main.scss";
import Header from "@/components/Header";
import store from "@/store";
import { Provider } from "react-redux";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        <title>Login</title>
      </head>
      <body>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
