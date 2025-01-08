import React from "react";

const HintEditor = ({ isActive }) => {
  return (
    <div className={`tab ${isActive ? "tab--active" : ""}`}>
      <textarea className="hints" placeholder="Hints"></textarea>
    </div>
  );
};

export default HintEditor;
