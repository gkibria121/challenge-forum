"use client";
import { addChallenge, updateChallenge } from "@/features/challenges";
import React, { createContext, PropsWithChildren, useContext, useState } from "react";
import { useDispatch } from "react-redux";

type Hints = {
  title: string;
  description: string;
};

type ChallengeCreationValueType = {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setTags: (tags: string) => void;
  title: string;
  description: string;
  tags: string;
  handleSave: (mode: "edit" | "create", challengeId?: string) => void; // challengeId is optional
  hints: Hints;
  setHints: React.Dispatch<React.SetStateAction<Hints>>;
};

// Create the context with proper initial values
  const ChallengeCreationContext = createContext<ChallengeCreationValueType>({
  setTitle: () => {},
  setDescription: () => {},
  setTags: () => {},
  title: "",
  description: "",
  tags: "",
  handleSave: () => {},
  hints: { title: "", description: "" },
  setHints: () => {},
});

const ChallengeCreationContextProvider = ChallengeCreationContext.Provider as React.Provider<ChallengeCreationValueType>;
// Context provider component
export const ChallengeCreationProvider   = ({ children  } : {children : React.ReactNode} ) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [hints, setHints] = useState<Hints>({ title: "", description: "" });
  const [tags, setTags] = useState<string>("");

  const dispatch = useDispatch();

  const handleSave = (mode: "edit" | "create", challengeId?: string) => {
    if (!title || !description || !tags) {
      alert("All fields are required.");
      return;
    }

    if (mode === "edit" && challengeId) {
      dispatch(updateChallenge(challengeId, title, description, tags, hints));
    } else if (mode === "create") {
      dispatch(addChallenge(title, description, tags, hints));
    } else {
      console.error("Invalid mode or missing challengeId for edit mode.");
      return;
    }

    setTitle("");
    setDescription("");
    setTags("");
    setHints({ title: "", description: "" });
  };

  return (
    <ChallengeCreationContextProvider
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
    </ChallengeCreationContextProvider>
   
  );
};

// Hook to use the context
export const useChallengeCreationContext = () => useContext(ChallengeCreationContext);