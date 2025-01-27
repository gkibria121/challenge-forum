import React from "react";

const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <>
      <button
        className="font-inherit font-inherit ml-4 cursor-pointer rounded-2xl rounded-md border-none p-4 px-4 py-1.5 text-white no-underline outline-none"
        onClick={onEdit}
      >
        edit
      </button>
      <button
        className="font-inherit font-inherit ml-4 cursor-pointer rounded-2xl rounded-md border-none p-4 px-4 py-1.5 text-white no-underline outline-none"
        onClick={onDelete}
      >
        delete
      </button>
    </>
  );
};

export default ActionButtons;
