"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

// Create the context
export const ChallengesContext = createContext();

// Context provider component
export const ChallengesProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hints, setHints] = useState({ title: "", description: "" });
  const [tags, setTags] = useState("");
  const router = useRouter();
  const handleSave = (mode, challengeId) => {
    if (!title || !description || !tags) {
      alert("All fields are required.");
      return;
    }

    const newChallenge = {
      id: challengeId || challenges.length + 1, // Use existing ID for edit
      title,
      description,
      tags: tags.split(",").map((tag) => tag.trim()),
      hints,
    };

    if (mode === "edit") {
      updateChallenge(newChallenge);
    } else {
      setChallenges([...challenges, newChallenge]);
    }

    setTitle("");
    setDescription("");
    setTags("");
    setHints("");
    router.push("/dashboard");
  };

  const [challenges, setChallenges] = useState([]);
  const updateChallenge = (updatedChallenge) => {
    setChallenges((prev) =>
      prev.map((challenge) => (challenge.id === updatedChallenge.id ? updatedChallenge : challenge))
    );
  };

  return (
    <ChallengesContext.Provider
      value={{
        challenges,
        setChallenges,
        setTitle,
        setDescription,
        setTags,
        title,
        description,
        tags,
        handleSave,
        hints,
        setHints,
        updateChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

// Hook to use the context
export const useChallenges = () => useContext(ChallengesContext);
