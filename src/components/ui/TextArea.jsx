import React from "react";

function TextArea({ rows = 6, ...props }) {
  return (
    <textarea
      className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
      rows={rows}
    ></textarea>
  );
}

export default TextArea;
