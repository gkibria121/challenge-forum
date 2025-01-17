"use client";
import { addChallenge, updateChallenge } from "@/features/challenges";
import React, { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";

// Create the context
export const ChallengeCreationContext = createContext();

// Context provider component
export const ChallengeCreationProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hints, setHints] = useState({ title: "", description: "" });
  const [tags, setTags] = useState("");

  const dispatch = useDispatch();

  const handleSave = (mode, challengeId) => {
    if (!title || !description || !tags) {
      alert("All fields are required.");
      return;
    }

    if (mode === "edit") {
      dispatch(updateChallenge(challengeId, title, description, tags, hints));
    } else {
      dispatch(addChallenge(title, description, tags, hints));
    }

    setTitle("");
    setDescription("");
    setTags("");
    setHints("");
  };

  return (
    <ChallengeCreationContext.Provider
      value={{
        setTitle,
        setDescription,
        setTags,
        title,
        description,
        tags,
        handleSave,
        hints,
        setHints,
      }}
    >
      {children}
    </ChallengeCreationContext.Provider>
  );
};

// Hook to use the context
export const useChallengeCreationContext = () => useContext(ChallengeCreationContext);
