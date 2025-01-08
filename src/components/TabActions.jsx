import Link from "next/link";
import React from "react";

const TabActions = () => {
  return (
    <div className="tab__actions">
      <Link className="btn btn--add" href={"/dashboard"}>
        Save
      </Link>
      <Link className="btn btn--back" href={"/dashboard"}>
        Cancel
      </Link>
    </div>
  );
};

export default TabActions;
