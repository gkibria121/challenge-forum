import React from "react";
import Challenge from "@/components/challenge/Challenge";
import { getChallenge } from "@/services/challenge";
async function page({ params }) {
  const { challengeId } = await params;

  const currentChallenge = await getChallenge(challengeId);
  return <Challenge challenge={currentChallenge} />;
}

export default page;
