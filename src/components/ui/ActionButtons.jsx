import React from "react";
import Button from "./Button";

const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <>
      <Button variant="green" onClick={onEdit}>
        edit
      </Button>
      <Button variant="danger" onClick={onDelete}>
        delete
      </Button>
    </>
  );
};

export default ActionButtons;
