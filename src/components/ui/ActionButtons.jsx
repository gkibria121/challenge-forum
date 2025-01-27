import React from "react";
import Button from "./Button";

const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <>
      <Button type="green" onClick={onEdit}>
        edit
      </Button>
      <Button type="danger" onClick={onDelete}>
        delete
      </Button>
    </>
  );
};

export default ActionButtons;
