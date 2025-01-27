import React from "react";

const Table = ({ headers, data, renderRow, onClick, children }) => {
  return (
    <table className="border-collapse-unset w-full border-separate border-spacing-y-10">
      {children}
    </table>
  );
};

function Head({ children }) {
  return (
    <thead>
      <tr className="relative cursor-pointer pb-4 text-left after:absolute after:bottom-[-10px] after:left-0 after:block after:h-[1px] after:w-full after:bg-black after:opacity-10 after:content-['']">
        {children}
      </tr>
    </thead>
  );
}

function Heading({ children, className = "" }) {
  return (
    <th className={`text-gray-500 opacity-80 ${className}`}>{children}</th>
  );
}
function Row({ children, ...props }) {
  return (
    <tr
      {...props}
      className="relative cursor-pointer pb-4 after:absolute after:bottom-[-20px] after:left-0 after:block after:h-[1px] after:w-full after:bg-black after:opacity-10 after:content-['']"
    >
      {children}
    </tr>
  );
}
function Col({ children, className = "", ...props }) {
  return <td className={className}>{children}</td>;
}
function Body({ children }) {
  return <tbody>{children}</tbody>;
}
Table.Head = Head;
Table.Heading = Heading;
Table.Row = Row;
Table.Body = Body;
Table.Col = Col;

export default Table;
