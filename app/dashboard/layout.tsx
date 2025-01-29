export const metadata = {
  title: "Dashboard",
};
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}

export default Layout;
