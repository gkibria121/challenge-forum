import { useChallengeCreationContext } from "@/contexts/ChallengeCreationContext.js";
import React, { useEffect, useState } from "react";

const HintEditor = ({ isActive }) => {
  const { hints, setHints } = useChallengeCreationContext();

  const handleTextChange = (e) => {
    setHints((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleDescriptionChange = (e) => {
    setHints((prev) => ({ ...prev, description: e.target.value }));
  };

  return (
    <div className={`tab ${isActive ? "tab--active p-4 rounded" : ""}`}>
      <textarea
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Hint Title"
        value={hints.title}
        onChange={handleTextChange}
      ></textarea>
      <textarea
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Hint Description"
        value={hints.description}
        rows={15}
        onChange={handleDescriptionChange}
      ></textarea>
    </div>
  );
};

export default HintEditor;
