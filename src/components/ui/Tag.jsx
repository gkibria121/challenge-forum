import React from "react";

const Tag = ({ label }) => {
  return (
    <span className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-600">
      {label}
    </span>
  );
};

export default Tag;
