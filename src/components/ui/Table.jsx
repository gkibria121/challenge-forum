import React from "react";

const Table = ({ headers, data, renderRow ,onClick}) => {
  return (
    <table className="table">
      <thead className="table__thead">
        <tr>
          {headers.map((header) => (
            <th key={header.key} colSpan={header.colSpan || 1} className={`table__th ${header.class}`}>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__tbody" onClick={onClick}>
        {data.map((item) => (
          <tr key={item.id} data-challenge-id={`${item.id}`} className="table__row">
            {renderRow(item)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
