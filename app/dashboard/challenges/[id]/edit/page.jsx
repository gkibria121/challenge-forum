"use client";
import React, { useState } from "react";
import CreateEditChallenge from "../../CreateEditChallenge";
import { useParams } from "next/navigation";
import { useChallenges } from "@/contexts/ChallengesContext";
import { useSelector } from "react-redux";
function page() {
  const { id } = useParams();

  const currentChallenge = useSelector((store) =>
    store.challenges.data.find((challenge) => challenge.id === +id)
  );

  if (currentChallenge) return <CreateEditChallenge mode="edit" challenge={currentChallenge} />;
  return "Challenge not found";
}

export default page;
