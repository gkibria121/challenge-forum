import React from "react";

function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}
export const metadata = { title: "Login" };
export default Layout;
