import React from "react";

const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <>
      <button className="btn btn--edit" onClick={onEdit}>
        edit
      </button>
      <button className="btn btn--delete" onClick={onDelete}>
        delete
      </button>
    </>
  );
};

export default ActionButtons;
