import React, { PropsWithChildren } from "react";

function Main({ children }: PropsWithChildren) {
  return <main className="flex items-start justify-center">{children}</main>;
}

export default Main;
