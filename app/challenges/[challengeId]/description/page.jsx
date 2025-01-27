import React from "react";
import Description from "@/components/challenge/Description.jsx";
import { getChallenge } from "@/services/challenge";
async function Page({ params }) {
  const { challengeId } = await params;
  const challenge = await getChallenge(challengeId);
  return <Description challenge={challenge} />;
}

export default Page;
