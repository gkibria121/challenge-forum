import React from "react";
import "/src/sass/main.scss";
import Header from "@/components/ui/Header";
import ContextProvider from "@/contexts/ContextProvider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body>
        <ContextProvider>
          <Header />
          {children}
          <Toaster />
        </ContextProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    template: `%s | Challenge Forum`,
  },
};
