import React from "react";
import Button from "./Button";

const ActionButtons = ({
  onEdit,
  onDelete,
}: {
  onEdit: React.MouseEventHandler<HTMLButtonElement>;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <Button variant="success" onClick={onEdit}>
        edit
      </Button>
      <Button variant="danger" onClick={onDelete}>
        delete
      </Button>
    </>
  );
};

export default ActionButtons;
