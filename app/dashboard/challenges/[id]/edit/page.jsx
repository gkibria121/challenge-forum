"use client";
import React, { useEffect, useState } from "react";
import CreateEditChallenge from "../../add/CreateEditChallenge";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentChallenge } from "@/features/challenges";
import { useChallengeCreationContext } from "@/contexts/ChallengeCreationContext.js";
function page() {
  const { id } = useParams();
  const { setTitle, setDescription, setTags, setHints } = useChallengeCreationContext();

  const currentChallenge = useSelector((store) =>
    store.challenges.data.find((challenge) => challenge.id === +id)
  );

  useEffect(() => {
    if (currentChallenge) {
      setTitle(currentChallenge.title);
      setDescription(currentChallenge.description);
      setTags(currentChallenge.tags.join(","));
      setHints(currentChallenge.hints);
    }
  }, [currentChallenge]);

  if (currentChallenge) return <CreateEditChallenge mode="edit" challenge={currentChallenge} />;
  return "Challenge not found";
}

export default page;
