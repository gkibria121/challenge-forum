"use client"
import React, { createContext, useContext, useState } from "react";

// Create the context
export const ChallengesContext = createContext();

// Context provider component
export const ChallengesProvider = ({ children }) => {
  const [challenges] = useState([
    { id: 1, title: "Palindrome Checker", tags: ["coding"] },
    { id: 2, title: "FizzBuzz", tags: ["principles"] },
    { id: 3, title: "Reverse a String", tags: ["coding", "principles", "Design pattern"] },
    { id: 4, title: "Tower of Hanoi Algorithm", tags: ["singleton"] },
    { id: 5, title: "Publisher Subscriber pattern", tags: ["experimental"] },
    { id: 6, title: "Create a virtual DOM using JavaScript", tags: ["data modeling"] },
    { id: 7, title: "Singleton Method Design Pattern", tags: ["DOM"] },
    { id: 8, title: "Design a URL Shortener", tags: ["AJAX"] },
    { id: 9, title: "Create a todo app maintaining SOLID", tags: ["IFI"] },
    { id: 10, title: "Square Root", tags: ["principles"] },
  ]);

  return (
    <ChallengesContext.Provider value={{ challenges }}>
      {children}
    </ChallengesContext.Provider>
  );
};

// Hook to use the context
export const useChallenges = () => useContext(ChallengesContext);
