import React from "react";

function Container({ children }) {
  return (
    <div className="bg-primary relative mx-auto mt-8 min-h-[80vh] w-[90vw] max-w-[120rem] rounded-2xl border px-12 pb-12 pt-4">
      {children}
    </div>
  );
}

export default Container;
