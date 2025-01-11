import React from "react";
import { useChallenges } from "../../../../src/contexts/ChallengesContext";

const HintEditor = ({ isActive }) => {
  const {hints,setHints } = useChallenges();
  return (
    <div className={`tab ${isActive ? "tab--active" : ""}`}>
      <textarea className="hints border border-black" placeholder="Hints" value={hints} onChange={(e)=> setHints(e.target.value)}></textarea>
    </div>
  );
};

export default HintEditor;
