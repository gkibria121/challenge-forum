import Link from "next/link";
import React from "react";

const TabActions = ({onSave,onCancel}) => {
  return (
    <div className="tab__actions">
      <button className="btn btn--add" onClick={onSave}>
        Save
      </button>
      <Link className="btn btn--back" href={"/dashboard"}>
        Cancel
      </Link>
    </div>
  );
};

export default TabActions;
