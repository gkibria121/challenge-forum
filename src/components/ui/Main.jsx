import React from "react";

function Main({ children }) {
  return (
    <main className="flex h-[calc(100vh-10rem)] items-start justify-center from-blue-50 to-indigo-100">
      {children}
    </main>
  );
}

export default Main;
