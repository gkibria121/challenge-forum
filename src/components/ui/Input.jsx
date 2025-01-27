import React from "react";

export default function Input({ ...props }) {
  return (
    <input
      {...props}
      className="mb-4 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
