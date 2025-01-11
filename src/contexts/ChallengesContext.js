"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

// Create the context
export const ChallengesContext = createContext();

// Context provider component
export const ChallengesProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hints, setHints] = useState({ title: "", description: "" })
  const [tags, setTags] = useState("");
  const router = useRouter()
  const handleSave = (mode,challengeId) => {
    if (!title || !description || !tags) {
      alert("All fields are required.");
      return;
    }
  
    const newChallenge = {
      id: challengeId|| challenges.length + 1, // Use existing ID for edit
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
  
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: "Palindrome Checker",
      tags: ["coding"],
      description :"random description", 
      submissions: [
        {
          id: "1",
          username: "gkibria",
          description: "Easy solve with python.",
          code: "print('hello world!')",
          language: "python",
          comments: [],
        },
        {
          id: "2",
          username: "mehedi",
          description: "Implemented with java",
          code: "System.console.printLine('hello, worl'!)",
          language: "python",
          comments: [],
        },
        {
          id: "3",
          username: "talha",
          description: "Implemented with javascript",
          code: "console.log('hello world!')",
          language: "python",
          comments: [],
        },
      ],
      hints: { title: "What is palindrome", description: "A palindrome reads the same backward as forward." },
    },
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
  const updateChallenge = (updatedChallenge) => {
    setChallenges((prev) =>
      prev.map((challenge) =>
        challenge.id === updatedChallenge.id ? updatedChallenge : challenge
      )
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
        updateChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

// Hook to use the context
export const useChallenges = () => useContext(ChallengesContext);
