import React from "react";
import Error from "./Error";

function TextArea({
  rows = 6,
  error = "",
  name,
  placeholder,
  ...props
}: {
  rows?: number;
  name?: string;
  placeholder?: string;
  error?: string | string[];
}) {
  return (
    <>
      <textarea
        className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        name={name}
        {...props}
        rows={rows}
      ></textarea>
      {error && <Error message={error} isError={!!error} />}
    </>
  );
}

export default TextArea;
