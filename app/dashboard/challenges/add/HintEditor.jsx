import React from "react";
import { useChallenges } from "../../../../src/contexts/ChallengesContext";

const HintEditor = ({ isActive }) => {
  const { hints, setHints } = useChallenges();

  const handleTextChange = (e) => {
    setHints((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleDescriptionChange = (e) => {
    setHints((prev) => ({ ...prev, description: e.target.value }));
  };

  return (
    <div className={`tab ${isActive ? "tab--active bg-gray-100 p-4 rounded" : ""}`}>
      <textarea
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Hint Text"
        value={hints.title}
        onChange={handleTextChange}
      ></textarea>
      <textarea
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Hint Description"
        value={hints.description}
        onChange={handleDescriptionChange}
      ></textarea>
    </div>
  );
};

export default HintEditor;
