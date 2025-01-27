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
    <div
      className={`hidden h-full w-full p-4 ${isActive ? "block rounded p-4" : ""}`}
    >
      <textarea
        className="mb-4 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Hint Title"
        value={hints.title}
        onChange={handleTextChange}
      ></textarea>
      <textarea
        className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Hint Description"
        value={hints.description}
        rows={15}
        onChange={handleDescriptionChange}
      ></textarea>
    </div>
  );
};

export default HintEditor;
