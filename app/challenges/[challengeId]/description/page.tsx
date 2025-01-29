import React from "react";
import Description from "@/components/challenge/Description.jsx";
import { getChallenge } from "@/services/challenge";
import { ParamsWithChallengeId } from "@/types/params";
export const generateMetadata = async () => {
  return {
    title: "Discription",
  };
};
async function Page({ params }: ParamsWithChallengeId) {
  const { challengeId } = await params;
  const challenge = await getChallenge(challengeId);
  return <Description challenge={challenge} />;
}

export default Page;
