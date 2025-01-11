"use client";
import React, { createContext, useContext, useState } from "react";

// Create the context
export const ChallengesContext = createContext();

// Context provider component
export const ChallengesProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hints, setHints] = useState("");
  const [tags, setTags] = useState("");
  const handleSave = () => {
    if (!title || !description || !tags) {
      alert("All fields are required.");
      return;
    }

    const newChallenge = {
      id: challenges.length + 1, // Simple ID generation; adjust as needed
      title,
      description,
      tags: tags.split(",").map((tag) => tag.trim()),
      hints
    };

    setChallenges([...challenges, newChallenge]); // Update context with new challenge
    alert("Challenge saved!");
    setTitle("");
    setDescription("");
    setTags("");
    setHints("")
  };
  const [challenges, setChallenges] = useState([
    { id: 1, title: "Palindrome Checker", tags: ["coding"] },
    { id: 2, title: "FizzBuzz", tags: ["principles"] },
    {
      id: 3,
      title: "Reverse a String",
      tags: ["coding", "principles", "Design pattern"],
    },
    { id: 4, title: "Tower of Hanoi Algorithm", tags: ["singleton"] },
    { id: 5, title: "Publisher Subscriber pattern", tags: ["experimental"] },
    {
      id: 6,
      title: "Create a virtual DOM using JavaScript",
      tags: ["data modeling"],
    },
    { id: 7, title: "Singleton Method Design Pattern", tags: ["DOM"] },
    { id: 8, title: "Design a URL Shortener", tags: ["AJAX"] },
    { id: 9, title: "Create a todo app maintaining SOLID", tags: ["IFI"] },
    { id: 10, title: "Square Root", tags: ["principles"] },
  ]);

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
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

// Hook to use the context
export const useChallenges = () => useContext(ChallengesContext);
