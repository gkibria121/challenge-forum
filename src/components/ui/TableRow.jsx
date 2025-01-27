"use client";

import React from "react";

// TableRow Component
const TableRow = ({ number, title, tag, challengeId, onClick }) => {
  return (
    <tr
      className="table__row"
      data-challenge-id={challengeId}
      onClick={onClick}
    >
      <td className="table__column">{number}</td>
      <td className="table__column" colSpan="3">
        {title}
      </td>
      <td className="table__column tags">
        <span className="tag">{tag}</span>
      </td>
    </tr>
  );
};


export default TableRow;