"use client";
import React from "react";
import { ChallengeCreationProvider } from "@/contexts/ChallengeCreationContext.js";
function layout({ children }) {
  return <ChallengeCreationProvider>{children}</ChallengeCreationProvider>;
}

export default layout;
