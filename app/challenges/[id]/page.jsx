"use client";
import React, { useState } from "react";
import Challenge from "@/components/challenge/Challenge";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
function page() {
  const { id } = useParams();

  const currentChallenge = useSelector((store) =>
    store.challenges.data.find((challenge) => challenge.id == id)
  );
  if (currentChallenge) return <Challenge challenge={currentChallenge} />;
  return "Challenge not found";
}

export default page;
