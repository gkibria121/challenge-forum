import React from "react";

const Tag = ({ label }) => {
  return (
    <span className="ml-1 rounded-full bg-blue-500 px-[.8rem] py-[.3rem] text-xs font-semibold text-white shadow-md transition-all hover:bg-blue-600">
      {label}
    </span>
  );
};

export default Tag;
