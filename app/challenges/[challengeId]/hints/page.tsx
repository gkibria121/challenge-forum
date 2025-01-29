import Hints from "@/components/challenge/Hints";
import { ParamsWithChallengeId } from "@/types/params";
import { getChallenge } from "@/services/challenge";
import React from "react";
import { GenerateMetaData } from "@/types/metadata";
export const generateMetadata = async (): Promise<GenerateMetaData> => {
  return {
    title: "Hints",
  };
};
async function Page({ params }: ParamsWithChallengeId) {
  const { challengeId } = await params;
  const challenge = await getChallenge(challengeId);
  return <Hints hints={challenge.hints} />;
}

export default Page;
