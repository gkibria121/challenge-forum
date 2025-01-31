import Link from "next/link";
import React from "react";

const TabActions = ({
  onSave,
  onCancel,
}: {
  onSave: React.MouseEventHandler<HTMLElement>;
  onCancel: React.MouseEventHandler<HTMLElement>;
}) => {
  return (
    <div className="tab__actions">
      <button
        className="font-inherit font-inherit ml-4 cursor-pointer rounded-2xl border-none p-4 px-4 py-1.5 text-white no-underline outline-none"
        onClick={onSave}
      >
        Save
      </button>
      <Link
        className="font-inherit font-inherit ml-4 cursor-pointer rounded-2xl border-none p-4 px-4 py-1.5 text-white no-underline outline-none"
        href={"/dashboard"}
      >
        Cancel
      </Link>
    </div>
  );
};

export default TabActions;
